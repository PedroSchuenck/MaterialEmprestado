const links = [
  { label: "Políticas", href: "#" },
  { label: "Central de ajuda", href: "#" },
  { label: "Segurança", href: "#" },
  { label: "Contato", href: "#" }
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__content">
        <div>
          <p className="logo__title">Material Emprestado</p>
          <p className="footer__description">
            Governança, agilidade e transparência para qualquer instituição.
          </p>
        </div>
        <div className="footer__links">
          {links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="footer__cta">
          <p>Receba atualizações quinzenais.</p>
          <div className="footer__form">
            <input type="email" placeholder="Seu e-mail" />
            <button className="button button--primary">Assinar</button>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© 2024 Material Emprestado. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
