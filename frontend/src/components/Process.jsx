const steps = [
  {
    title: "Solicite com contexto",
    description:
      "Formulários inteligentes coletam local, datas e justificativas em um fluxo único."
  },
  {
    title: "Aprovação automatizada",
    description:
      "Regras por tipo de material, centro de custo e gestor eliminam gargalos."
  },
  {
    title: "Retirada guiada",
    description:
      "Checklists digitais e assinatura eletrônica garantem rastreabilidade."
  }
];

export default function Process() {
  return (
    <section id="processo" className="process">
      <div className="container">
        <div className="section__header">
          <div>
            <p className="section__eyebrow">Fluxo otimizado</p>
            <h2>Um processo simples do pedido à devolução</h2>
          </div>
        </div>
        <div className="process__grid">
          {steps.map((step, index) => (
            <div key={step.title} className="process__card">
              <span className="process__index">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
