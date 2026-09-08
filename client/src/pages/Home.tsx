import { useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Asterisk,
  Check,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Menu,
  MoveUpRight,
  X,
} from "lucide-react";

const projects = [
  {
    title: "Associação Deus é Fiel",
    category: "ONG / CRM",
    year: "Voluntário",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=85",
    url: "https://deusfiel-mwbwyehr.manus.space/#top",
    summary: "Site institucional e CRM para organizar frentes sociais, cursos, participação e comunicação da ONG.",
    size: "large",
  },
  {
    title: "Rayara Studio",
    category: "Comercial / WhatsApp",
    year: "Site comercial",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85",
    url: "https://ephemeral-quokka-f3d7f7.netlify.app",
    summary: "Site comercial com apresentação de serviços, resultados, agenda e conversão direta para WhatsApp.",
    size: "small",
  },
  {
    title: "GS Barber Pro",
    category: "GSYNTRA / SaaS",
    year: "Produto",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=85",
    url: "https://gsyntra.com.br/",
    summary: "Produto para organizar agenda, equipe, clientes e comunicação de barbearias em um só sistema.",
    size: "small",
  },
  {
    title: "Ecossistema GSYNTRA",
    category: "GSYNTRA / Ecossistema",
    year: "Startup",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
    url: "https://gsyntra.com.br/",
    summary: "Ecossistema de sites, sistemas e automações com cardápio digital, gestão e soluções sob medida.",
    size: "wide",
  },
  {
    title: "API REST de E-commerce",
    category: "Java / Spring",
    year: "Acadêmico",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=85",
    url: "https://github.com/e0guy",
    summary: "API REST em Java e Spring Boot para produtos, usuários, promoções, avaliações e regras de negócio.",
    size: "small",
  },
];

const filters = ["Todos", "ONG / CRM", "Comercial / WhatsApp", "GSYNTRA / SaaS", "GSYNTRA / Ecossistema", "Java / Spring"];

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
          <a className="monogram" href="#top" aria-label="Guilherme Silva, início">GS<span>.</span></a>
          <span className="rail-index">01—05</span>
        </div>
        <nav className="rail-nav" aria-label="Navegação principal">
          <button className="active" onClick={() => scrollTo("top")}><span>01</span> Início</button>
          <button onClick={() => scrollTo("about")}><span>02</span> Perfil</button>
          <button onClick={() => scrollTo("work")}><span>03</span> Projetos</button>
          <button onClick={() => scrollTo("process")}><span>04</span> Competências</button>
          <button onClick={() => scrollTo("contact")}><span>05</span> Contato</button>
        </nav>
        <div className="rail-bottom">
          <span className="vertical-label">SISTEMAS / QUALIDADE / DADOS</span>
          <div className="rail-socials"><a href="https://www.linkedin.com/in/devguilherme-silva" aria-label="LinkedIn"><Linkedin size={16} /></a><a href="https://www.instagram.com/e0guilherme/" aria-label="Instagram"><Instagram size={16} /></a><a href="https://wa.me/5581992174567" aria-label="WhatsApp"><MessageCircle size={16} /></a><a href="mailto:guilhermedanta01@gmail.com" aria-label="E-mail"><Mail size={16} /></a></div>
        </div>
      </aside>

      <main className="page-content" id="top">
        <header className="mobile-header">
          <a className="monogram" href="#top">GS<span>.</span></a>
          <button onClick={() => setMenuOpen(true)} aria-label="Abrir menu"><Menu size={22} /></button>
        </header>

        <section className="hero-section section-pad">
          <div className="hero-copy">
            <p className="eyebrow"><Asterisk size={14} /> Guilherme Silva / Soluções digitais</p>
            <h1>Processos que<br /><em>ganham</em> clareza.</h1>
            <p className="hero-description">Desenvolvedor de soluções digitais com foco em IA aplicada, qualidade de software, dados, automação e experiências web.</p>
            <div className="hero-actions"><button className="button button-dark" onClick={() => scrollTo("work")}>Ver projetos <ArrowDownRight size={16} /></button><a className="text-link" href="/manus-storage/CV-Guilherme-Silva-Atualizado_8f1eaa64.pdf" target="_blank" rel="noreferrer">Baixar CV <ArrowUpRight size={15} /></a></div>
          </div>
          <div className="hero-visual">
            <div className="hero-photo"><img src="/manus-storage/guilherme_e98ecc76.png" alt="Guilherme Silva em seu ambiente de desenvolvimento" /></div>
            <div className="hero-sticker"><span>SAP<br />UTILITIES<br />/ QA</span><Asterisk size={28} /></div>
            <div className="hero-caption"><span>Analista de sistemas / 01</span><span>Igarassu — PE</span></div>
          </div>
          <div className="hero-marquee" aria-hidden="true"><span>SISTEMAS — PROCESSOS — QUALIDADE — DADOS — SISTEMAS — PROCESSOS — QUALIDADE — </span></div>
        </section>

        <section className="statement-section section-pad" id="about">
          <div className="section-kicker"><span>02</span><span>Perfil profissional</span></div>
          <div className="statement-grid"><div><p className="section-title">Soluções com<br /><em>visão de futuro.</em></p></div><div className="statement-copy"><p>Sou estudante de Análise e Desenvolvimento de Sistemas, técnico em Redes de Computadores e formado em Engenharia de Qualidade de Software pela CESAR School. Desenvolvo projetos web comerciais, aplicações, testes, automações e soluções com IA generativa.</p><a className="circle-link" href="#contact" onClick={(event) => { event.preventDefault(); scrollTo("contact"); }}>Fale comigo <MoveUpRight size={18} /></a></div></div>
          <div className="stats-row"><div><strong>05<span>+</span></strong><small>anos de experiência</small></div><div><strong>02</strong><small>projetos em destaque</small></div><div><strong>2025</strong><small>formação CESAR School</small></div><div className="stats-note"><Asterisk size={17} /> Aprender, testar<br />e melhorar sempre.</div></div>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="section-heading"><div><div className="section-kicker"><span>03</span><span>Cases reais e projetos</span></div><h2>Trabalho<br /><em>em prática.</em></h2></div><p>Projetos voluntários, comerciais e de produto que mostram como transformo necessidades reais em sites, sistemas, automações e experiências digitais.</p></div>
          <div className="filter-row" role="tablist" aria-label="Filtrar projetos">{filters.map((filter) => <button key={filter} className={activeFilter === filter ? "selected" : ""} onClick={() => setActiveFilter(filter)} role="tab" aria-selected={activeFilter === filter}>{filter}</button>)}</div>
          <div className="project-grid">{filteredProjects.map((project) => <article className={`project-card ${project.size}`} key={project.title}><a href={project.url} target="_blank" rel="noreferrer" aria-label={`Abrir case ${project.title}`}><div className="project-image"><img src={project.image} alt={`Projeto ou experiência: ${project.title}`} /><span className="project-arrow"><ArrowUpRight size={19} /></span></div><div className="project-meta"><div><h3>{project.title}</h3><span>{project.category}</span><p className="project-summary">{project.summary}</p></div><span>{project.year}</span></div></a></article>)}</div>
        </section>

        <section className="process-section section-pad" id="process">
          <div className="section-kicker"><span>04</span><span>Competências</span></div>
          <div className="process-layout"><h2>Organizar.<br /><em>Validar.</em><br />Evoluir.</h2><div className="process-list">{[{ n: "01", title: "Sistemas e dados", text: "SQL, Excel, Qlik, organização de informações, relatórios e apoio à tomada de decisão." }, { n: "02", title: "Qualidade de software", text: "Testes manuais, funcionais, exploratórios, regressivos e de API, com BDD/Gherkin." }, { n: "03", title: "Desenvolvimento", text: "Java, Spring Boot, JavaScript, Python, React, HTML, CSS, APIs REST e Git." }, { n: "04", title: "Processos e suporte", text: "Scrum, Kanban, Kaizen, documentação, suporte técnico e melhoria contínua." }].map((step) => <div className="process-item" key={step.n}><span>{step.n}</span><div><h3>{step.title}</h3><p>{step.text}</p></div><Check size={18} /></div>)}</div></div>
        </section>

        <section className="contact-section section-pad" id="contact"><div className="contact-card"><div className="contact-orbit"><Asterisk size={30} /><span>ABERTO A<br />OPORTUNIDADES</span></div><div className="contact-content"><div className="section-kicker light"><span>05</span><span>Próxima oportunidade</span></div><h2>Vamos construir<br />a <em>próxima etapa?</em></h2><p>Aberto a oportunidades em desenvolvimento, QA, dados, automação, IA aplicada e criação de soluções digitais.</p><a className="button button-light" href="mailto:guilhermedanta01@gmail.com">guilhermedanta01@gmail.com <ArrowUpRight size={16} /></a></div></div></section>

        <footer className="footer"><div><a className="monogram" href="#top">GS<span>.</span></a><p>Desenvolvedor de soluções digitais<br />com foco em IA, QA e automação.</p></div><div className="footer-links"><a href="mailto:guilhermedanta01@gmail.com">E-mail</a><a href="https://www.linkedin.com/in/devguilherme-silva">LinkedIn</a><a href="https://www.instagram.com/e0guilherme/">Instagram</a><a href="https://wa.me/5581992174567">WhatsApp</a></div><span className="footer-copy">© 2025 Guilherme Silva</span></footer>
      </main>
    </div>
  );
}
