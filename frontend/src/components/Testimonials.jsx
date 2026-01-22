const testimonials = [
  {
    name: "Patrícia Souza",
    role: "Coordenação Acadêmica",
    quote:
      "Reduzimos em 60% o tempo de resposta para empréstimos estratégicos. A visibilidade é total."
  },
  {
    name: "Marcos Lima",
    role: "Tecnologia Educacional",
    quote:
      "O painel de disponibilidade acabou com a troca de e-mails. Tudo fica registrado."
  },
  {
    name: "Juliana Monteiro",
    role: "Compras e Patrimônio",
    quote:
      "Conseguimos rastrear itens sensíveis sem esforço e garantir conformidade."
  }
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="testimonials">
      <div className="container">
        <div className="section__header">
          <div>
            <p className="section__eyebrow">Confiança</p>
            <h2>Quem usa aprova</h2>
            <p>
              Times de patrimônio, eventos e operações compartilham a mesma
              visão sobre o que está em uso.
            </p>
          </div>
        </div>
        <div className="testimonials__grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="testimonials__card">
              <p className="testimonials__quote">“{testimonial.quote}”</p>
              <div>
                <p className="testimonials__name">{testimonial.name}</p>
                <span>{testimonial.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
