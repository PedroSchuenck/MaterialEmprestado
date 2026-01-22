const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Materiais", href: "#materiais" },
  { label: "Processo", href: "#processo" },
  { label: "Depoimentos", href: "#depoimentos" }
];

export default function Header() {
  return (
    <header className="header">
      <div className="container header__content">
        <div className="logo">
          <span className="logo__mark">ME</span>
          <div>
            <p className="logo__title">Material Emprestado</p>
            <p className="logo__subtitle">Gestão inteligente de recursos</p>
          </div>
        </div>
        <nav className="nav">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="nav__link">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header__actions">
          <button className="button button--ghost">Entrar</button>
          <button className="button button--primary">Solicitar acesso</button>
        </div>
      </div>
    </header>
  );
}
