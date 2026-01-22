const stats = [
  {
    value: "98%",
    label: "satisfação com a experiência",
    detail: "baseado em 1.200 solicitações"
  },
  {
    value: "40%",
    label: "menos conflitos de agenda",
    detail: "após automação de aprovações"
  },
  {
    value: "24h",
    label: "tempo máximo de retorno",
    detail: "com SLAs configuráveis"
  }
];

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats__grid">
        {stats.map((stat) => (
          <div key={stat.label} className="stats__card">
            <h2>{stat.value}</h2>
            <p>{stat.label}</p>
            <span>{stat.detail}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
