import { useEffect, useMemo, useState } from "react";
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
  Moon,
  MoveUpRight,
  X,
  Sun,
} from "lucide-react";

type Language = "pt" | "es" | "en";

const copy = {
  pt: {
    nav: ["Início", "Perfil", "Ferramentas", "Projetos", "Competências", "Contato"],
    heroEyebrow: "Guilherme Silva / Soluções digitais",
    heroTitle: <>Soluções digitais<br /><em>para problemas</em> reais.</>,
    heroDescription: "Desenvolvedor de soluções digitais com foco em IA aplicada, qualidade de software, dados, automação e experiências web.",
    seeProjects: "Ver projetos",
    downloadCv: "Baixar CV",
    location: "Recife — PE",
    profileKicker: "Perfil profissional",
    profileTitle: <>Soluções com<br /><em>visão de futuro.</em></>,
    profileText: "Sou estudante de Análise e Desenvolvimento de Sistemas, técnico em Redes de Computadores e formado em Engenharia de Qualidade de Software pela CESAR School. Desenvolvo projetos web comerciais, aplicações, testes, automações e soluções com IA generativa.",
    talkToMe: "Fale comigo",
    stats: ["cases reais publicados", "projetos técnicos", "formação CESAR School"],
    note: <>Aprender, testar<br />e melhorar sempre.</>,
    toolsKicker: "Ferramentas e tecnologias",
    toolsTitle: <>Stack para<br /><em>tirar ideias do papel.</em></>,
    toolsText: "As tecnologias que uso para construir interfaces, APIs, dados, automações e experiências digitais. Os níveis são uma referência visual baseada no meu uso atual e podem evoluir com novos projetos.",
    legend: ["Avançado", "Sólido", "Em desenvolvimento"],
    workKicker: "Cases reais e projetos",
    workTitle: <>Trabalho<br /><em>em prática.</em></>,
    workText: "Projetos voluntários, comerciais e de produto que mostram como transformo necessidades reais em sites, sistemas, automações e experiências digitais.",
    all: "Todos",
    competenciesKicker: "Competências",
    competenciesTitle: <>Organizar.<br /><em>Validar.</em><br />Evoluir.</>,
    competencyItems: [
      ["Desenvolvimento", "Java, Spring Boot, Python, JavaScript, TypeScript, React, APIs REST e Git/GitHub."],
      ["Qualidade e QA", "Testes manuais, funcionais, exploratórios, regressivos e de API, com BDD/Gherkin, JUnit, Mockito e MockMvc."],
      ["Dados e automação", "SQL, Qlik, dashboards, Excel, IA generativa aplicada, prompts, chatbots e automações com n8n."],
      ["Processos e suporte", "Scrum, Kanban, Kaizen, levantamento de requisitos, documentação, suporte técnico e melhoria contínua."],
    ],
    contactKicker: "Próxima oportunidade",
    contactTitle: <>Vamos construir<br />a <em>próxima etapa?</em></>,
    contactText: "Aberto a oportunidades em desenvolvimento front-end, QA, dados, automação, IA aplicada e criação de soluções digitais.",
    openTo: <>ABERTO A<br />OPORTUNIDADES</>,
    footerText: <>Desenvolvedor de soluções digitais<br />com foco em IA, QA e automação.</>,
    email: "E-mail",
    linkedin: "LinkedIn",
    instagram: "Instagram",
    whatsapp: "WhatsApp",
    digitalSolutions: "Digital solutions / 01",
    themeLight: "Ativar modo escuro",
    themeDark: "Ativar modo claro",
  },
  es: {
    nav: ["Inicio", "Perfil", "Herramientas", "Proyectos", "Competencias", "Contacto"],
    heroEyebrow: "Guilherme Silva / Soluciones digitales",
    heroTitle: <>Soluciones digitales<br /><em>para problemas</em> reales.</>,
    heroDescription: "Desarrollador de soluciones digitales enfocado en IA aplicada, calidad de software, datos, automatización y experiencias web.",
    seeProjects: "Ver proyectos",
    downloadCv: "Descargar CV",
    location: "Recife — PE",
    profileKicker: "Perfil profesional",
    profileTitle: <>Soluciones con<br /><em>visión de futuro.</em></>,
    profileText: "Soy estudiante de Análisis y Desarrollo de Sistemas, técnico en Redes de Computadoras y graduado en Ingeniería de Calidad de Software por CESAR School. Desarrollo proyectos web comerciales, aplicaciones, pruebas, automatizaciones y soluciones con IA generativa.",
    talkToMe: "Hablemos",
    stats: ["casos reales publicados", "proyectos técnicos", "formación CESAR School"],
    note: <>Aprender, probar<br />y mejorar siempre.</>,
    toolsKicker: "Herramientas y tecnologías",
    toolsTitle: <>Stack para<br /><em>convertir ideas en realidad.</em></>,
    toolsText: "Las tecnologías que utilizo para construir interfaces, APIs, datos, automatizaciones y experiencias digitales. Los niveles son una referencia visual basada en mi uso actual y pueden evolucionar con nuevos proyectos.",
    legend: ["Avanzado", "Sólido", "En desarrollo"],
    workKicker: "Casos reales y proyectos",
    workTitle: <>Trabajo<br /><em>en práctica.</em></>,
    workText: "Proyectos voluntarios, comerciales y de producto que muestran cómo convierto necesidades reales en sitios, sistemas, automatizaciones y experiencias digitales.",
    all: "Todos",
    competenciesKicker: "Competencias",
    competenciesTitle: <>Organizar.<br /><em>Validar.</em><br />Evolucionar.</>,
    competencyItems: [
      ["Desarrollo", "Java, Spring Boot, Python, JavaScript, TypeScript, React, APIs REST y Git/GitHub."],
      ["Calidad y QA", "Pruebas manuales, funcionales, exploratorias, regresivas y de API, con BDD/Gherkin, JUnit, Mockito y MockMvc."],
      ["Datos y automatización", "SQL, Qlik, dashboards, Excel, IA generativa aplicada, prompts, chatbots y automatizaciones con n8n."],
      ["Procesos y soporte", "Scrum, Kanban, Kaizen, levantamiento de requisitos, documentación, soporte técnico y mejora continua."],
    ],
    contactKicker: "Próxima oportunidad",
    contactTitle: <>Construyamos<br /><em>la próxima etapa.</em></>,
    contactText: "Abierto a oportunidades en desarrollo front-end, QA, datos, automatización, IA aplicada y creación de soluciones digitales.",
    openTo: <>ABIERTO A<br />OPORTUNIDADES</>,
    footerText: <>Desarrollador de soluciones digitales<br />con foco en IA, QA y automatización.</>,
    email: "E-mail",
    linkedin: "LinkedIn",
    instagram: "Instagram",
    whatsapp: "WhatsApp",
    digitalSolutions: "Soluciones digitales / 01",
    themeLight: "Activar modo oscuro",
    themeDark: "Activar modo claro",
  },
  en: {
    nav: ["Home", "Profile", "Tools", "Projects", "Skills", "Contact"],
    heroEyebrow: "Guilherme Silva / Digital solutions",
    heroTitle: <>Digital solutions<br /><em>for real</em> problems.</>,
    heroDescription: "Digital solutions developer focused on applied AI, software quality, data, automation and web experiences.",
    seeProjects: "View projects",
    downloadCv: "Download CV",
    location: "Recife — Brazil",
    profileKicker: "Professional profile",
    profileTitle: <>Solutions with<br /><em>future vision.</em></>,
    profileText: "I am an Analysis and Systems Development student, Computer Networks technician and Software Quality Engineering graduate from CESAR School. I build commercial web projects, applications, tests, automations and generative AI solutions.",
    talkToMe: "Let’s talk",
    stats: ["published real cases", "technical projects", "CESAR School training"],
    note: <>Learn, test<br />and improve always.</>,
    toolsKicker: "Tools and technologies",
    toolsTitle: <>A stack to<br /><em>turn ideas into reality.</em></>,
    toolsText: "The technologies I use to build interfaces, APIs, data solutions, automations and digital experiences. Levels are a visual reference based on my current practice and can evolve with new projects.",
    legend: ["Advanced", "Solid", "Developing"],
    workKicker: "Real cases and projects",
    workTitle: <>Work<br /><em>in practice.</em></>,
    workText: "Volunteer, commercial and product projects that show how I turn real needs into websites, systems, automations and digital experiences.",
    all: "All",
    competenciesKicker: "Skills",
    competenciesTitle: <>Organize.<br /><em>Validate.</em><br />Evolve.</>,
    competencyItems: [
      ["Development", "Java, Spring Boot, Python, JavaScript, TypeScript, React, REST APIs and Git/GitHub."],
      ["Quality and QA", "Manual, functional, exploratory, regression and API testing with BDD/Gherkin, JUnit, Mockito and MockMvc."],
      ["Data and automation", "SQL, Qlik, dashboards, Excel, applied generative AI, prompts, chatbots and n8n automations."],
      ["Processes and support", "Scrum, Kanban, Kaizen, requirements gathering, documentation, technical support and continuous improvement."],
    ],
    contactKicker: "Next opportunity",
    contactTitle: <>Let’s build<br /><em>the next step.</em></>,
    contactText: "Open to opportunities in front-end development, QA, data, automation, applied AI and digital solutions.",
    openTo: <>OPEN TO<br />OPPORTUNITIES</>,
    footerText: <>Digital solutions developer<br />focused on AI, QA and automation.</>,
    email: "Email",
    linkedin: "LinkedIn",
    instagram: "Instagram",
    whatsapp: "WhatsApp",
    digitalSolutions: "Digital solutions / 01",
    themeLight: "Enable dark mode",
    themeDark: "Enable light mode",
  },
} as const;

const projects = [
  { title: { pt: "Associação Deus é Fiel", es: "Asociación Deus é Fiel", en: "Deus é Fiel Association" }, category: { pt: "ONG / CRM", es: "ONG / CRM", en: "NGO / CRM" }, year: { pt: "Voluntário", es: "Voluntario", en: "Volunteer" }, image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=85", url: "https://deusfiel-mwbwyehr.manus.space/#top", summary: { pt: "Site institucional e CRM para organizar frentes sociais, cursos, participação, doações e comunicação da ONG.", es: "Sitio institucional y CRM para organizar áreas sociales, cursos, participación, donaciones y comunicación de la ONG.", en: "Institutional website and CRM to organize social programs, courses, participation, donations and NGO communication." }, size: "large" },
  { title: { pt: "Rayara Studio", es: "Rayara Studio", en: "Rayara Studio" }, category: { pt: "Comercial / WhatsApp", es: "Comercial / WhatsApp", en: "Commercial / WhatsApp" }, year: { pt: "Site comercial", es: "Sitio comercial", en: "Commercial site" }, image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85", url: "https://ephemeral-quokka-f3d7f7.netlify.app", summary: { pt: "Landing page comercial responsiva com serviços, resultados, agenda e conversão direta para WhatsApp.", es: "Landing page comercial responsive con servicios, resultados, agenda y conversión directa a WhatsApp.", en: "Responsive commercial landing page with services, results, scheduling and direct WhatsApp conversion." }, size: "small" },
  { title: { pt: "GS Barber Pro", es: "GS Barber Pro", en: "GS Barber Pro" }, category: { pt: "GSYNTRA / SaaS", es: "GSYNTRA / SaaS", en: "GSYNTRA / SaaS" }, year: { pt: "Produto", es: "Producto", en: "Product" }, image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=85", url: "https://gsyntra.com.br/", summary: { pt: "Produto SaaS para organizar agenda, equipe, clientes e atendimento de barbearias via WhatsApp.", es: "Producto SaaS para organizar agenda, equipo, clientes y atención de barberías por WhatsApp.", en: "SaaS product to organize barbershop schedules, teams, clients and WhatsApp service." }, size: "small" },
  { title: { pt: "Ecossistema GSYNTRA", es: "Ecosistema GSYNTRA", en: "GSYNTRA Ecosystem" }, category: { pt: "GSYNTRA / Ecossistema", es: "GSYNTRA / Ecosistema", en: "GSYNTRA / Ecosystem" }, year: { pt: "Startup", es: "Startup", en: "Startup" }, image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85", url: "https://gsyntra.com.br/", summary: { pt: "Ecossistema de sites, sistemas e automações com cardápio digital, gestão e produtos sob medida.", es: "Ecosistema de sitios, sistemas y automatizaciones con menú digital, gestión y productos a medida.", en: "Ecosystem of websites, systems and automations with digital menus, management and custom products." }, size: "wide" },
  { title: { pt: "API REST de E-commerce", es: "API REST de E-commerce", en: "E-commerce REST API" }, category: { pt: "Java / Spring", es: "Java / Spring", en: "Java / Spring" }, year: { pt: "Acadêmico", es: "Académico", en: "Academic" }, image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=85", url: "https://github.com/e0guy", summary: { pt: "API REST em Java e Spring Boot com camadas, DTOs, JPA/Hibernate, Swagger e testes automatizados.", es: "API REST en Java y Spring Boot con capas, DTOs, JPA/Hibernate, Swagger y pruebas automatizadas.", en: "Java and Spring Boot REST API with layers, DTOs, JPA/Hibernate, Swagger and automated tests." }, size: "small" },
  { title: { pt: "Nova Notes", es: "Nova Notes", en: "Nova Notes" }, category: { pt: "Produto digital / E-commerce", es: "Producto digital / E-commerce", en: "Digital product / E-commerce" }, year: { pt: "Projeto autoral", es: "Proyecto propio", en: "Author project" }, technologies: ["React", "TypeScript"], image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1000&q=85", url: "https://novanotes-gpa2zmyq.manus.space/", summary: { pt: "E-commerce autoral de papelaria digital com cadernos, planners, stickers, kits e briefing para produtos personalizados.", es: "E-commerce propio de papelería digital con cuadernos, planners, stickers, kits y briefing para productos personalizados.", en: "Author e-commerce for digital stationery with notebooks, planners, stickers, bundles and custom product briefs." }, size: "wide" },
];

const filters = ["Todos", "ONG / CRM", "Comercial / WhatsApp", "GSYNTRA / SaaS", "GSYNTRA / Ecossistema", "Java / Spring", "Produto digital / E-commerce"] as const;
const filterLabels: Record<Language, Record<string, string>> = { pt: { "Todos": "Todos", "ONG / CRM": "ONG / CRM", "Comercial / WhatsApp": "Comercial / WhatsApp", "GSYNTRA / SaaS": "GSYNTRA / SaaS", "GSYNTRA / Ecossistema": "GSYNTRA / Ecossistema", "Java / Spring": "Java / Spring", "Produto digital / E-commerce": "Produto digital / E-commerce" }, es: { "Todos": "Todos", "ONG / CRM": "ONG / CRM", "Comercial / WhatsApp": "Comercial / WhatsApp", "GSYNTRA / SaaS": "GSYNTRA / SaaS", "GSYNTRA / Ecossistema": "GSYNTRA / Ecosistema", "Java / Spring": "Java / Spring", "Produto digital / E-commerce": "Producto digital / E-commerce" }, en: { "Todos": "All", "ONG / CRM": "NGO / CRM", "Comercial / WhatsApp": "Commercial / WhatsApp", "GSYNTRA / SaaS": "GSYNTRA / SaaS", "GSYNTRA / Ecossistema": "GSYNTRA / Ecosystem", "Java / Spring": "Java / Spring", "Produto digital / E-commerce": "Digital product / E-commerce" } };

const tools = [
  { name: "Java", group: "dev", level: 75, icon: "https://cdn.simpleicons.org/openjdk" }, { name: "C", group: "dev", level: 60, icon: "https://cdn.simpleicons.org/c" }, { name: "Python", group: "dev", level: 70, icon: "https://cdn.simpleicons.org/python" }, { name: "HTML", group: "web", level: 90, icon: "https://cdn.simpleicons.org/html5" }, { name: "CSS", group: "web", level: 85, icon: "https://img.icons8.com/color/48/000000/css3.png" }, { name: "TypeScript", group: "dev", level: 75, icon: "https://cdn.simpleicons.org/typescript" }, { name: "React", group: "dev", level: 80, icon: "https://cdn.simpleicons.org/react" }, { name: "SQL", group: "data", level: 75, icon: "https://cdn.simpleicons.org/mysql" }, { name: "Supabase", group: "backend", level: 65, icon: "https://cdn.simpleicons.org/supabase" }, { name: "PostgreSQL", group: "data", level: 65, icon: "https://cdn.simpleicons.org/postgresql" }, { name: "Spring Boot", group: "backend", level: 70, icon: "https://cdn.simpleicons.org/springboot" }, { name: "Qlik", group: "data", level: 60, icon: "https://cdn.simpleicons.org/qlik" }, { name: "Excel", group: "data", level: 80, icon: "https://img.icons8.com/color/48/000000/microsoft-excel-2019.png" }, { name: "ChatGPT", group: "ai", level: 90, icon: "https://img.icons8.com/color/48/000000/chatgpt.png" }, { name: "Gemini", group: "ai", level: 80, icon: "https://cdn.simpleicons.org/googlegemini" }, { name: "Manus AI", group: "ai", level: 85, icon: "https://img.icons8.com/color/48/000000/artificial-intelligence.png" }, { name: "Canva", group: "design", level: 75, icon: "https://img.icons8.com/color/48/000000/canva.png" }, { name: "Figma", group: "design", level: 65, icon: "https://cdn.simpleicons.org/figma" },
];

const groupLabels: Record<Language, Record<string, string>> = {
  pt: { dev: "Desenvolvimento", web: "Web", data: "Dados", backend: "Backend", ai: "IA aplicada", design: "Criação" },
  es: { dev: "Desarrollo", web: "Web", data: "Datos", backend: "Backend", ai: "IA aplicada", design: "Creación" },
  en: { dev: "Development", web: "Web", data: "Data", backend: "Backend", ai: "Applied AI", design: "Creative" },
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("pt");
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    const stored = window.localStorage.getItem("portfolio-theme");
    return stored ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[language];
  const filteredProjects = useMemo(() => activeFilter === "Todos" ? projects : projects.filter((project) => project.category.pt === activeFilter), [activeFilter]);
  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }); setMenuOpen(false); };
  const changeLanguage = (next: Language) => setLanguage(next);
  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
    window.localStorage.setItem("portfolio-theme", darkMode ? "dark" : "light");
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", darkMode ? "#081316" : "#f3eee6");
  }, [darkMode]);

  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#work">Ir para o conteúdo principal</a>
      <aside className={`side-rail ${menuOpen ? "is-open" : ""}`}>
        <button className="rail-close" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X size={19} /></button>
        <div className="rail-top"><a className="monogram" href="#top" aria-label="Guilherme Silva, início">GS<span>.</span></a><span className="rail-index">01—06</span></div>
        <nav className="rail-nav" aria-label="Main navigation">{t.nav.map((label, index) => <button key={label} className={index === 0 ? "active" : ""} onClick={() => scrollTo(["top", "about", "tools", "work", "process", "contact"][index])}><span>{String(index + 1).padStart(2, "0")}</span> {label}</button>)}</nav>
        <div className="rail-bottom"><span className="vertical-label">IA / QA / DADOS / AUTOMAÇÃO</span><div className="rail-socials"><a href="https://www.linkedin.com/in/devguilherme-silva" aria-label="LinkedIn"><Linkedin size={16} /></a><a href="https://www.instagram.com/e0guilherme/" aria-label="Instagram"><Instagram size={16} /></a><a href="https://wa.me/5581992174567" aria-label="WhatsApp"><MessageCircle size={16} /></a><a href="mailto:guilhermedanta01@gmail.com" aria-label="E-mail"><Mail size={16} /></a></div><div className="rail-controls"><div className="language-switcher" aria-label="Language selector">{(["pt", "es", "en"] as Language[]).map((lang) => <button key={lang} className={language === lang ? "active" : ""} onClick={() => changeLanguage(lang)} aria-pressed={language === lang}>{lang.toUpperCase()}</button>)}</div><button className="theme-toggle" onClick={() => setDarkMode((current) => !current)} aria-label={darkMode ? t.themeDark : t.themeLight} aria-pressed={darkMode}>{darkMode ? <Sun size={15} /> : <Moon size={15} />}</button></div></div>
      </aside>

      <main className="page-content" id="top">
        <header className="mobile-header"><a className="monogram" href="#top" aria-label="Guilherme Silva, início">GS<span>.</span></a><div className="mobile-controls"><div className="language-switcher" aria-label="Language selector">{(["pt", "es", "en"] as Language[]).map((lang) => <button key={lang} className={language === lang ? "active" : ""} onClick={() => changeLanguage(lang)} aria-pressed={language === lang}>{lang.toUpperCase()}</button>)}</div><button className="theme-toggle" onClick={() => setDarkMode((current) => !current)} aria-label={darkMode ? t.themeDark : t.themeLight} aria-pressed={darkMode}>{darkMode ? <Sun size={17} /> : <Moon size={17} />}</button><button onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu size={22} /></button></div></header>

        <section className="hero-section section-pad"><div className="hero-copy"><p className="eyebrow"><Asterisk size={14} /> {t.heroEyebrow}</p><h1>{t.heroTitle}</h1><p className="hero-description">{t.heroDescription}</p><div className="hero-actions"><button className="button button-dark" onClick={() => scrollTo("work")}>{t.seeProjects} <ArrowDownRight size={16} /></button><a className="text-link" href="/manus-storage/CV-Guilherme-Silva-Atualizado_8f1eaa64.pdf" target="_blank" rel="noreferrer">{t.downloadCv} <ArrowUpRight size={15} /></a></div></div><div className="hero-visual"><div className="hero-photo"><img src="/manus-storage/guilherme_e98ecc76.png" alt="Guilherme Silva" /></div><div className="hero-sticker"><span>IA<br />QA<br />/ DATA</span><Asterisk size={28} /></div><div className="hero-caption"><span>{t.digitalSolutions}</span><span>{t.location}</span></div></div><div className="hero-marquee" aria-hidden="true"><span>DESENVOLVIMENTO — QA — DADOS — AUTOMAÇÃO — DESENVOLVIMENTO — QA — DADOS — </span></div></section>

        <section className="statement-section section-pad" id="about"><div className="section-kicker"><span>02</span><span>{t.profileKicker}</span></div><div className="statement-grid"><div><p className="section-title">{t.profileTitle}</p></div><div className="statement-copy"><p>{t.profileText}</p><a className="circle-link" href="#contact" onClick={(event) => { event.preventDefault(); scrollTo("contact"); }}>{t.talkToMe} <MoveUpRight size={18} /></a></div></div><div className="stats-row"><div><strong>03</strong><small>{t.stats[0]}</small></div><div><strong>02</strong><small>{t.stats[1]}</small></div><div><strong>2025</strong><small>{t.stats[2]}</small></div><div className="stats-note"><Asterisk size={17} /> {t.note}</div></div></section>

        <section className="tools-section section-pad" id="tools"><div className="section-heading"><div><div className="section-kicker"><span>03</span><span>{t.toolsKicker}</span></div><h2>{t.toolsTitle}</h2></div><p>{t.toolsText}</p></div><div className="tools-grid">{tools.map((tool) => <div className="tool-card" key={tool.name}><div className="tool-icon"><span className="tool-fallback">{tool.name.slice(0, 2).toUpperCase()}</span><img src={tool.icon} alt={`${tool.name} icon`} loading="lazy" onError={(event) => { event.currentTarget.style.visibility = "hidden"; }} /></div><div><strong>{tool.name}</strong><span>{groupLabels[language][tool.group]}</span><div className="tool-level" aria-label={`${tool.name}: visual proficiency level`}><div className="tool-level-track" role="progressbar" aria-label={`${tool.name} proficiency`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={tool.level}><span style={{ width: `${tool.level}%` }} /></div></div></div></div>)}</div><div className="tools-legend"><span><i className="legend-dot advanced" /> {t.legend[0]}</span><span><i className="legend-dot solid" /> {t.legend[1]}</span><span><i className="legend-dot developing" /> {t.legend[2]}</span></div></section>

        <section className="work-section section-pad" id="work"><div className="section-heading"><div><div className="section-kicker"><span>04</span><span>{t.workKicker}</span></div><h2>{t.workTitle}</h2></div><p>{t.workText}</p></div><div className="filter-row" role="tablist" aria-label="Project filters">{filters.map((filter) => <button key={filter} className={activeFilter === filter ? "selected" : ""} onClick={() => setActiveFilter(filter)} role="tab" aria-selected={activeFilter === filter}>{filterLabels[language][filter]}</button>)}</div><div className="project-grid">{filteredProjects.map((project) => <article className={`project-card ${project.size}`} key={project.title.en}><a href={project.url} target="_blank" rel="noreferrer" aria-label={`${project.title[language]}`}><div className="project-image"><img src={project.image} alt={`${project.title[language]}`} /><span className="project-arrow"><ArrowUpRight size={19} /></span></div><div className="project-meta"><div><h3>{project.title[language]}</h3><span>{project.category[language]}</span>{project.technologies && <div className="project-tech" aria-label="Technologies used">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>}<p className="project-summary">{project.summary[language]}</p></div><span>{project.year[language]}</span></div></a></article>)}</div></section>

        <section className="process-section section-pad" id="process"><div className="section-kicker"><span>05</span><span>{t.competenciesKicker}</span></div><div className="process-layout"><h2>{t.competenciesTitle}</h2><div className="process-list">{t.competencyItems.map((step, index) => <div className="process-item" key={step[0]}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{step[0]}</h3><p>{step[1]}</p></div><Check size={18} /></div>)}</div></div></section>

        <section className="contact-section section-pad" id="contact"><div className="contact-card"><div className="contact-orbit"><Asterisk size={30} /><span>{t.openTo}</span></div><div className="contact-content"><div className="section-kicker light"><span>06</span><span>{t.contactKicker}</span></div><h2>{t.contactTitle}</h2><p>{t.contactText}</p><a className="button button-light" href="mailto:guilhermedanta01@gmail.com">guilhermedanta01@gmail.com <ArrowUpRight size={16} /></a></div></div></section>

        <footer className="footer"><div><a className="monogram" href="#top">GS<span>.</span></a><p>{t.footerText}</p></div><div className="footer-links"><a href="mailto:guilhermedanta01@gmail.com">{t.email}</a><a href="https://www.linkedin.com/in/devguilherme-silva">{t.linkedin}</a><a href="https://www.instagram.com/e0guilherme/">{t.instagram}</a><a href="https://wa.me/5581992174567">{t.whatsapp}</a></div><span className="footer-copy">© 2025 Guilherme Silva</span></footer>
      </main>
    </div>
  );
}
