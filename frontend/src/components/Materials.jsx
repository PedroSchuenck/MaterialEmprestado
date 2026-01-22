const statusStyles = {
  Disponível: "badge badge--success",
  Reservado: "badge badge--warning",
  Manutenção: "badge badge--danger"
};

export default function Materials({ materials, loading }) {
  return (
    <section id="materiais" className="materials">
      <div className="container">
        <div className="section__header">
          <div>
            <p className="section__eyebrow">Catálogo ao vivo</p>
            <h2>Materiais prontos para reserva</h2>
            <p>
              Acompanhe em tempo real a disponibilidade dos recursos e planeje
              sua logística com antecedência.
            </p>
          </div>
          <button className="button button--primary">Ver todos</button>
        </div>
        <div className="materials__grid">
          {materials.map((material) => (
            <article key={material.id} className="materials__card">
              <div>
                <p className="materials__category">{material.category}</p>
                <h3>{material.name}</h3>
                <p className="materials__location">{material.location}</p>
              </div>
              <div className="materials__meta">
                <span className={statusStyles[material.status] ?? "badge"}>
                  {material.status}
                </span>
                <p>Próxima disponibilidade: {material.nextAvailable}</p>
                <button className="button button--ghost">Solicitar</button>
              </div>
            </article>
          ))}
        </div>
        {loading && (
          <p className="materials__loading">
            Atualizando dados diretamente da API...
          </p>
        )}
      </div>
    </section>
  );
}
