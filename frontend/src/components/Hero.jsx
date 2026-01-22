const highlights = [
  "Reservas em segundos",
  "Workflow aprovado",
  "Relatórios em tempo real"
];

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__content">
        <div className="hero__text">
          <span className="pill">Novo • Portal unificado</span>
          <h1>Controle o empréstimo de materiais com visibilidade total.</h1>
          <p>
            Centralize solicitações, políticas e disponibilidade em uma única
            plataforma. Integre equipes, evite conflitos de agenda e melhore a
            experiência de quem precisa do recurso certo, no momento certo.
          </p>
          <div className="hero__actions">
            <button className="button button--primary">Agendar demonstração</button>
            <button className="button button--ghost">Ver catálogo</button>
          </div>
          <div className="hero__highlights">
            {highlights.map((item) => (
              <div key={item} className="hero__highlight">
                <span className="dot" />
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="hero__card">
          <div className="card">
            <div className="card__header">
              <p className="card__title">Resumo operacional</p>
              <span className="badge badge--success">Estável</span>
            </div>
            <div className="card__body">
              <div>
                <p className="label">Materiais ativos</p>
                <h3>248</h3>
              </div>
              <div>
                <p className="label">Solicitações hoje</p>
                <h3>32</h3>
              </div>
              <div>
                <p className="label">Tempo médio de aprovação</p>
                <h3>2h 14m</h3>
              </div>
            </div>
            <div className="card__footer">
              <p>Última atualização há 5 minutos</p>
              <button className="button button--link">Detalhes</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
