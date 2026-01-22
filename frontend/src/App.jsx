import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import Materials from "./components/Materials.jsx";
import Process from "./components/Process.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Footer from "./components/Footer.jsx";

const API_URL = "http://localhost:4000/api/materials";

const initialMaterials = [
  {
    id: "local-1",
    name: "Kit audiovisual",
    category: "Eventos",
    status: "Disponível",
    nextAvailable: "Hoje",
    location: "Campus Central"
  },
  {
    id: "local-2",
    name: "Impressora 3D",
    category: "Laboratório",
    status: "Reservado",
    nextAvailable: "Sex, 18 Abr",
    location: "FabLab"
  },
  {
    id: "local-3",
    name: "Veículo institucional",
    category: "Transporte",
    status: "Disponível",
    nextAvailable: "Amanhã",
    location: "Garagem 02"
  }
];

export default function App() {
  const [materials, setMaterials] = useState(initialMaterials);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadMaterials() {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Não foi possível carregar os materiais.");
        }
        const data = await response.json();
        if (isMounted) {
          setMaterials(data);
        }
      } catch (error) {
        console.warn(error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadMaterials();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Materials materials={materials} loading={loading} />
        <Process />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
