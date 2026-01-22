import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT ?? 4000;

app.use(cors());
app.use(express.json());

const materials = [
  {
    id: "mat-001",
    name: "Kit audiovisual",
    category: "Eventos",
    status: "Disponível",
    nextAvailable: "Hoje",
    location: "Campus Central"
  },
  {
    id: "mat-002",
    name: "Projetor 4K",
    category: "Salas multimídia",
    status: "Manutenção",
    nextAvailable: "Seg, 22 Abr",
    location: "Bloco B"
  },
  {
    id: "mat-003",
    name: "Impressora 3D",
    category: "Laboratório",
    status: "Reservado",
    nextAvailable: "Sex, 18 Abr",
    location: "FabLab"
  },
  {
    id: "mat-004",
    name: "Veículo institucional",
    category: "Transporte",
    status: "Disponível",
    nextAvailable: "Amanhã",
    location: "Garagem 02"
  }
];

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.get("/api/materials", (req, res) => {
  res.json(materials);
});

app.listen(port, () => {
  console.log(`API pronta em http://localhost:${port}`);
});
