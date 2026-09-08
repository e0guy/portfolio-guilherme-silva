import { useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Asterisk,
  Check,
  Dribbble,
  Instagram,
  Linkedin,
  Menu,
  MoveUpRight,
  X,
} from "lucide-react";

const projects = [
  {
    title: "Auréa House",
    category: "Branding",
    year: "2024",
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200&q=85",
    size: "large",
  },
  {
    title: "Forma / 01",
    category: "Digital",
    year: "2024",
    image: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&w=900&q=85",
    size: "small",
  },
  {
    title: "Salt Lines",
    category: "Campaign",
    year: "2023",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85",
    size: "small",
  },
  {
    title: "North / South",
    category: "Editorial",
    year: "2023",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85",
    size: "wide",
  },
  {
    title: "Mono Objects",
    category: "Art direction",
    year: "2022",
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=85",
    size: "small",
  },
];

const services = ["Brand strategy", "Visual identity", "Digital experiences", "Art direction"];
const filters = ["Todos", "Branding", "Digital", "Campaign", "Editorial"];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredProjects = useMemo(
    () => activeFilter === "Todos" ? projects : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <div className="portfolio-shell">
      <aside className={`side-rail ${menuOpen ? "is-open" : ""}`}>
        <button className="rail-close" onClick={() => setMenuOpen(false)} aria-label="Fechar menu"><X size={19} /></button>
        <div className="rail-top">
          <a className="monogram" href="#top" aria-label="Studio Nilo, início">SN<span>.</span></a>
          <span className="rail-index">01—05</span>
        </div>
        <nav className="rail-nav" aria-label="Navegação principal">
          <button className="active" onClick={() => scrollTo("top")}><span>01</span> Início</button>
          <button onClick={() => scrollTo("about")}><span>02</span> Sobre</button>
          <button onClick={() => scrollTo("work")}><span>03</span> Projetos</button>
          <button onClick={() => scrollTo("process")}><span>04</span> Processo</button>
          <button onClick={() => scrollTo("contact")}><span>05</span> Contato</button>
        </nav>
        <div className="rail-bottom">
          <span className="vertical-label">DIREÇÃO CRIATIVA / 2024</span>
          <div className="rail-socials"><a href="https://www.instagram.com" aria-label="Instagram"><Instagram size={16} /></a><a href="https://www.linkedin.com" aria-label="LinkedIn"><Linkedin size={16} /></a><a href="https://dribbble.com" aria-label="Dribbble"><Dribbble size={16} /></a></div>
        </div>
      </aside>

      <main className="page-content" id="top">
        <header className="mobile-header">
          <a className="monogram" href="#top">SN<span>.</span></a>
          <button onClick={() => setMenuOpen(true)} aria-label="Abrir menu"><Menu size={22} /></button>
        </header>

        <section className="hero-section section-pad">
          <div className="hero-copy">
            <p className="eyebrow"><Asterisk size={14} /> Studio Nilo / Creative direction</p>
            <h1>Ideias que<br /><em>ganham</em> forma.</h1>
            <p className="hero-description">Direção criativa e design para marcas que querem ocupar espaço, criar desejo e permanecer na memória.</p>
            <div className="hero-actions"><button className="button button-dark" onClick={() => scrollTo("work")}>Ver projetos <ArrowDownRight size={16} /></button><button className="text-link" onClick={() => scrollTo("about")}>Conheça o estúdio <ArrowUpRight size={15} /></button></div>
          </div>
          <div className="hero-visual">
            <div className="hero-photo"><img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=90" alt="Retrato editorial em preto e branco de um diretor criativo" /></div>
            <div className="hero-sticker"><span>BRAND<br />WITH<br />INTENT</span><Asterisk size={28} /></div>
            <div className="hero-caption"><span>Selected portrait / 01</span><span>São Paulo — BR</span></div>
          </div>
          <div className="hero-marquee" aria-hidden="true"><span>BRAND — DIGITAL — EDITORIAL — BRAND — DIGITAL — EDITORIAL — </span></div>
        </section>

        <section className="statement-section section-pad" id="about">
          <div className="section-kicker"><span>02</span><span>Sobre o estúdio</span></div>
          <div className="statement-grid"><div><p className="section-title">Estratégia com<br /><em>personalidade.</em></p></div><div className="statement-copy"><p>O Studio Nilo nasce do encontro entre pensamento estratégico, cultura visual e execução precisa. Criamos sistemas de marca que não apenas parecem interessantes — eles fazem sentido, criam conexão e movem negócios.</p><a className="circle-link" href="#contact" onClick={(event) => { event.preventDefault(); scrollTo("contact"); }}>Vamos conversar <MoveUpRight size={18} /></a></div></div>
          <div className="stats-row"><div><strong>12<span>+</span></strong><small>marcas lançadas</small></div><div><strong>08</strong><small>anos de prática</small></div><div><strong>04</strong><small>continentes alcançados</small></div><div className="stats-note"><Asterisk size={17} /> Pensar diferente<br />é parte do trabalho.</div></div>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="section-heading"><div><div className="section-kicker"><span>03</span><span>Projetos selecionados</span></div><h2>Trabalho<br /><em>em movimento.</em></h2></div><p>Uma seleção de identidades, campanhas e experiências feitas para deixar marcas mais claras, humanas e vivas.</p></div>
          <div className="filter-row" role="tablist" aria-label="Filtrar projetos">{filters.map((filter) => <button key={filter} className={activeFilter === filter ? "selected" : ""} onClick={() => setActiveFilter(filter)} role="tab" aria-selected={activeFilter === filter}>{filter}</button>)}</div>
          <div className="project-grid">{filteredProjects.map((project, index) => <article className={`project-card ${project.size}`} key={project.title}><div className="project-image"><img src={project.image} alt={`Projeto ${project.title}`} /><span className="project-arrow"><ArrowUpRight size={19} /></span></div><div className="project-meta"><div><h3>{project.title}</h3><span>{project.category}</span></div><span>{project.year}</span></div></article>)}</div>
        </section>

        <section className="process-section section-pad" id="process">
          <div className="section-kicker"><span>04</span><span>Como fazemos</span></div>
          <div className="process-layout"><h2>Menos ruído.<br /><em>Mais direção.</em></h2><div className="process-list">{[{ n: "01", title: "Descobrir", text: "Entendemos o contexto, o desejo e o espaço que a marca quer ocupar." }, { n: "02", title: "Definir", text: "Transformamos perguntas em uma direção clara, única e possível de reconhecer." }, { n: "03", title: "Desenhar", text: "Construímos o sistema visual com intenção, consistência e detalhe." }, { n: "04", title: "Lançar", text: "Colocamos a ideia no mundo e criamos as ferramentas para fazê-la crescer." }].map((step) => <div className="process-item" key={step.n}><span>{step.n}</span><div><h3>{step.title}</h3><p>{step.text}</p></div><Check size={18} /></div>)}</div></div>
        </section>

        <section className="contact-section section-pad" id="contact"><div className="contact-card"><div className="contact-orbit"><Asterisk size={30} /><span>STUDIO<br />NILO</span></div><div className="contact-content"><div className="section-kicker light"><span>05</span><span>Próximo projeto</span></div><h2>Tem uma ideia<br />na <em>cabeça?</em></h2><p>Conte um pouco sobre ela. A primeira conversa é por nossa conta.</p><a className="button button-light" href="mailto:hello@studionilo.design">hello@studionilo.design <ArrowUpRight size={16} /></a></div></div></section>

        <footer className="footer"><div><a className="monogram" href="#top">SN<span>.</span></a><p>Creative studio for ideas<br />worth remembering.</p></div><div className="footer-links"><a href="https://www.instagram.com">Instagram</a><a href="https://www.linkedin.com">LinkedIn</a><a href="mailto:hello@studionilo.design">E-mail</a></div><span className="footer-copy">© 2024 Studio Nilo</span></footer>
      </main>
    </div>
  );
}
