import React, { useMemo, useState } from "react";

// Public Website Build 5.5 — Source-Level Mobile Image Fix

const collections = [
  { title: "Curtains", subtitle: "Tailored drapery for living, dining and bedroom spaces.", tag: "Made to measure", image: "/images/curtains-safe-v55.jpg" },
  { title: "Sheers", subtitle: "Soft daylight, layered privacy and an elegant finish.", tag: "Light & airy", image: "/images/sheers-safe-v55.jpg" },
  { title: "Blinds", subtitle: "Clean, functional window solutions for modern interiors.", tag: "Modern control", image: "/images/blinds-safe-v55.jpg" },
  { title: "Upholstery", subtitle: "Coordinated fabrics for sofas, chairs and interior accents.", tag: "Complete the room", image: "/images/upholstery-safe-v55.jpg" },
];

const projects = [
  { name: "Warm Minimal Living", type: "Curtains • Sheers • Soft Tones", image: "/images/project-living-clean-v34.webp" },
  { name: "Contemporary Bedroom", type: "Blackout Curtains • Sheer • Linen", image: "/images/project-bedroom-clean-v34.webp" },
  { name: "Soft Daylight Dining", type: "Sheer Drapes • Pleat • White", image: "/images/project-dining-clean-v34.webp" },
];

const steps = [
  ["01", "Consult", "Tell us about your windows, interiors, light and privacy needs."],
  ["02", "Select", "Choose fabrics, linings, heading styles and coordinated finishes."],
  ["03", "Measure & make", "Custom fabrication tailored to fit your space."],
  ["04", "Install", "Complete the room with a clean, professional installation."],
];

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [formStatus, setFormStatus] = useState("");
  const whatsappUrl = "https://wa.me/919108776325";
  const email = "orders@thedrapefactory.in";

  const faq = useMemo(() => [
    ["Do you provide custom sizing?", "Yes. Every treatment is planned around the window, room proportions, fabric choice and required finish before production."],
    ["Can I request a home consultation?", "Yes. Send your project details through the consultation form and the request can be followed up using your preferred contact details."],
    ["Do you handle installation?", "Measurement, fabrication and installation are presented as one connected service journey, subject to confirmation for your project."],
    ["What types of fabrics do you offer?", "Fabric recommendations are selected around your room, light, privacy and finish requirements during consultation."],
  ], []);

  const sendWhatsApp = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const message = [
      "Hello The Drape Factory,",
      "",
      "I would like to request a consultation.",
      "",
      `Name: ${data.get("name") || ""}`,
      `Phone: ${data.get("phone") || ""}`,
      `Project: ${data.get("project") || ""}`,
      `Message: ${data.get("message") || ""}`,
    ].join("\n");

    setFormStatus("Opening WhatsApp with your enquiry…");
    window.open(`${whatsappUrl}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="site">
      <style>{`

        :root{
          --ink:#1f2420;
          --muted:#6f736f;
          --paper:#fbfaf7;
          --warm:#f1ebe1;
          --line:#e6e1d8;
          --accent:#a76e32;
          --dark:#1f2823;
          --white:#fff;
        }
        *{box-sizing:border-box}
        html{scroll-behavior:smooth}
        body{
          margin:0;
          font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
          color:var(--ink);
          background:#fff;
        }
        a{color:inherit;text-decoration:none}
        button,input,textarea{font:inherit}
        button{cursor:pointer}
        .site{min-height:100vh;background:linear-gradient(180deg,#fbfaf7 0%,#fff 44%,#fbfaf7 100%)}
        .container{width:min(1120px,calc(100% - 44px));margin:0 auto}

        .topbar{
          background:var(--dark);
          color:#f6f2ea;
          font-size:9px;
          letter-spacing:.16em;
          text-transform:uppercase;
        }
        .topbar .container{
          min-height:23px;
          display:flex;
          align-items:center;
          justify-content:center;
          text-align:center;
        }

        .header{background:#fff;border-bottom:1px solid #ece8e0}
        .nav{
          min-height:64px;
          display:grid;
          grid-template-columns:138px 1fr auto;
          align-items:center;
          gap:22px;
        }
        .brand{display:flex;align-items:center}
        .brand img{width:100px;height:auto;display:block}
        .navlinks{
          display:flex;
          justify-content:center;
          gap:30px;
          font-size:11px;
          color:#414641;
        }
        .whatsapp{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          gap:7px;
          padding:9px 15px;
          border-radius:999px;
          background:var(--dark);
          color:white;
          font-size:10px;
          font-weight:800;
          white-space:nowrap;
        }
        .whatsapp:before{content:"◔";font-size:14px}
        .menuBtn{display:none;border:0;background:transparent;font-size:22px}

        .hero{padding:18px 0 0}
        .heroGrid{
          display:grid;
          grid-template-columns:.82fr 1.18fr;
          gap:26px;
          align-items:center;
        }
        .heroCopy{padding:24px 0 18px}
        .eyebrow{
          margin:0 0 10px;
          color:#98612d;
          font-size:8px;
          font-weight:800;
          letter-spacing:.2em;
          text-transform:uppercase;
        }
        h1,h2,h3{font-family:Georgia,"Times New Roman",serif}
        h1{
          font-size:clamp(44px,5vw,66px);
          line-height:.92;
          letter-spacing:-.045em;
          font-weight:500;
          margin:0 0 15px;
          max-width:440px;
        }
        h1 em{font-style:normal;color:var(--accent)}
        .heroLead{
          margin:0 0 18px;
          max-width:420px;
          color:var(--muted);
          font-size:12px;
          line-height:1.6;
        }
        .actions{display:flex;gap:9px;flex-wrap:wrap}
        .btnPrimary,.btnSecondary{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          gap:8px;
          min-height:36px;
          padding:0 15px;
          border-radius:999px;
          font-size:10px;
          font-weight:800;
        }
        .btnPrimary{background:var(--accent);color:white}
        .btnSecondary{background:white;border:1px solid #bdb5aa}

        .heroImage{
          min-height:340px;
          border-radius:17px;
          position:relative;
          overflow:hidden;
          background:#ddd6cb;
        }
        .heroImage > img{
          position:absolute;
          inset:0;
          width:100%;
          height:100%;
          object-fit:cover;
          object-position:center;
          display:block;
          z-index:0;
        }
        .heroImage:after{
          content:"";position:absolute;inset:0;
          background:linear-gradient(180deg,transparent 58%,rgba(20,24,21,.14));
          pointer-events:none;
          z-index:1;
        }
        .heroBadge{
          position:absolute;z-index:2;
          left:14px;bottom:14px;
          width:190px;
          padding:10px 11px;
          border-radius:9px;
          background:rgba(255,255,255,.93);
          box-shadow:0 10px 22px rgba(25,25,25,.10);
          font-size:9px;
          line-height:1.38;
        }
        .heroBadge strong{display:block;font-size:10px;margin-bottom:2px}

        .benefits{border-bottom:1px solid var(--line)}
        .benefitGrid{
          display:grid;
          grid-template-columns:repeat(4,1fr);
          min-height:68px;
        }
        .benefit{
          display:flex;
          align-items:center;
          gap:9px;
          padding:13px 14px;
          border-right:1px solid var(--line);
        }
        .benefit:last-child{border-right:0}
        .benefitIcon{
          width:26px;height:26px;
          border:1.2px solid var(--accent);
          border-radius:8px;
          display:grid;place-items:center;
          color:var(--accent);
          font-size:12px;
          flex:0 0 auto;
        }
        .benefit strong{display:block;font-size:10px;margin-bottom:2px}
        .benefit span{display:block;color:var(--muted);font-size:9px;line-height:1.25}

        section{padding:50px 0}

        .collectionsLayout{
          display:grid;
          grid-template-columns:210px 1fr;
          gap:22px;
          align-items:start;
        }
        .sideIntro{padding-top:9px}
        .sideIntro h2{
          margin:0 0 12px;
          font-size:34px;
          line-height:.98;
          font-weight:500;
          letter-spacing:-.03em;
        }
        .sideIntro p{
          margin:0;
          color:var(--muted);
          font-size:10px;
          line-height:1.55;
        }
        .accentLine{width:38px;height:1px;background:var(--accent);margin:12px 0 13px}

        .collectionGrid{
          display:grid;
          grid-template-columns:repeat(2,minmax(0,1fr));
          gap:10px;
        }
        .collectionCard{
          position:relative;
          min-height:186px;
          border-radius:12px;
          overflow:hidden;
          background:#ddd6cb;
          display:flex;
          flex-direction:column;
          justify-content:flex-end;
          padding:13px;
          isolation:isolate;
        }
        .collectionCard > img{
          position:absolute;
          inset:0;
          width:100%;
          height:100%;
          object-fit:cover;
          object-position:center;
          display:block;
          z-index:-2;
        }
        .collectionCard:before{
          content:"";position:absolute;inset:0;z-index:-1;
          background:linear-gradient(180deg,rgba(0,0,0,.01) 34%,rgba(0,0,0,.66) 100%);
        }
        .collectionTag{
          position:absolute;left:10px;top:10px;
          padding:4px 6px;border-radius:999px;
          background:rgba(255,255,255,.9);
          font-size:7px;text-transform:uppercase;letter-spacing:.07em;
        }
        .collectionBottom{display:flex;align-items:flex-end;justify-content:space-between;gap:10px}
        .collectionCard h3{margin:0 0 2px;color:white;font-size:21px;font-weight:500}
        .collectionCard p{margin:0;color:#f2f0ed;font-size:9px;line-height:1.35;max-width:200px}
        .circleArrow{width:28px;height:28px;border-radius:50%;background:white;color:var(--ink);display:grid;place-items:center;font-size:12px;flex:0 0 auto}

        .process{background:var(--dark);color:white;padding:31px 0}
        .processGrid{
          display:grid;
          grid-template-columns:190px repeat(4,1fr);
          gap:18px;
          align-items:start;
        }
        .processTitle h2{
          font-size:30px;
          line-height:.98;
          font-weight:500;
          margin:0;
        }
        .process .eyebrow{color:#d8ae78}
        .step{
          padding-top:2px;
          border-top:1px solid rgba(255,255,255,.24);
        }
        .stepNum{
          width:28px;height:28px;border-radius:50%;
          border:1px solid #b68a56;
          display:grid;place-items:center;
          margin-top:-14px;
          margin-bottom:14px;
          background:var(--dark);
          color:#dcb989;
          font-size:9px;
        }
        .step h3{font-size:15px;font-weight:500;margin:0 0 5px}
        .step p{font-size:9px;line-height:1.42;margin:0;color:#cbd0cc}

        .projectsLayout{
          display:grid;
          grid-template-columns:190px 1fr;
          gap:20px;
          align-items:start;
        }
        .projectsIntro h2{
          margin:0 0 8px;
          font-size:30px;
          line-height:1;
          font-weight:500;
        }
        .projectsIntro p{
          margin:0 0 12px;
          color:var(--muted);
          font-size:9px;
          line-height:1.45;
        }
        .outlineBtn{
          display:inline-flex;
          align-items:center;
          gap:8px;
          padding:8px 12px;
          border:1px solid #aaa39a;
          border-radius:999px;
          font-size:9px;
          font-weight:700;
        }
        .projectGrid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:8px;
        }
        .projectCard{
          position:relative;
          min-height:205px;
          border-radius:10px;
          background-size:cover;
          background-position:center;
          overflow:hidden;
        }
        .projectInfo{
          position:absolute;
          left:8px;right:8px;bottom:8px;
          background:rgba(255,255,255,.94);
          border-radius:8px;
          padding:7px 9px;
        }
        .projectInfo strong{display:block;font-size:9px;margin-bottom:2px}
        .projectInfo span{display:block;font-size:7px;color:var(--muted)}

        .aboutLayout{
          display:grid;
          grid-template-columns:.78fr 1.22fr;
          gap:32px;
          align-items:center;
        }
        .aboutImage{
          min-height:286px;
          border-radius:12px;
          background:url("/images/about-clean-v34.webp") center/cover no-repeat;
        }
        .aboutCopy h2{
          font-size:36px;
          line-height:.98;
          font-weight:500;
          letter-spacing:-.025em;
          margin:0 0 10px;
        }
        .aboutCopy p{
          color:var(--muted);
          line-height:1.5;
          font-size:9px;
          margin:0 0 9px;
        }
        .aboutPoints{
          display:grid;
          grid-template-columns:repeat(2,1fr);
          gap:7px;
          margin-top:11px;
        }
        .aboutPoint{
          min-height:34px;
          display:flex;
          align-items:center;
          padding:7px 10px;
          background:#f4f0e9;
          border-radius:7px;
          font-size:9px;
        }

        .faqLayout{
          display:grid;
          grid-template-columns:.74fr 1.26fr;
          gap:54px;
          align-items:start;
        }
        .faqIntro h2{
          margin:0 0 8px;
          font-size:31px;
          line-height:1.02;
          font-weight:500;
        }
        .faqIntro p{
          margin:0;
          color:var(--muted);
          font-size:9px;
          line-height:1.45;
          max-width:300px;
        }
        .faqItem{border-bottom:1px solid var(--line)}
        .faqButton{
          width:100%;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:16px;
          padding:11px 0;
          border:0;
          background:transparent;
          color:var(--ink);
          font-weight:700;
          font-size:10px;
          text-align:left;
        }
        .faqAnswer{
          display:none;
          padding:0 24px 10px 0;
          color:var(--muted);
          font-size:9px;
          line-height:1.45;
        }
        .faqItem.open .faqAnswer{display:block}

        .contact{padding-top:22px}
        .contactCard{
          display:grid;
          grid-template-columns:.92fr 1.08fr;
          gap:36px;
          align-items:center;
          padding:32px 36px;
          border-radius:16px;
          background:linear-gradient(120deg,#f1eadf,#f6f2eb);
        }
        .contactCopy{max-width:350px}
        .contactCopy h2{
          margin:0 0 8px;
          font-size:34px;
          line-height:1;
          font-weight:500;
        }
        .contactCopy p{
          margin:0;
          color:var(--muted);
          font-size:9px;
          line-height:1.5;
        }
        .contactForm{
          background:white;
          border:1px solid #eee9e2;
          border-radius:11px;
          padding:12px;
          box-shadow:0 12px 26px rgba(36,30,24,.05);
        }
        .formGrid{display:grid;grid-template-columns:1fr 1fr;gap:7px}
        .field{display:flex;flex-direction:column;gap:4px}
        .field.full{grid-column:1/-1}
        .field label{font-size:7px;color:#7a7d79}
        .field input,.field textarea{
          width:100%;
          border:1px solid #e8e5df;
          background:#fbfbfa;
          border-radius:7px;
          padding:8px 9px;
          outline:none;
          font-size:9px;
          color:var(--ink);
        }
        .field textarea{min-height:56px;resize:vertical}
        .submitBtn{
          grid-column:1/-1;
          min-height:34px;
          border:0;
          border-radius:999px;
          background:var(--dark);
          color:white;
          font-weight:800;
          font-size:9px;
        }
        .emailFallback{
          grid-column:1/-1;
          margin:0;
          min-height:30px;
          display:flex;
          align-items:center;
          justify-content:center;
          gap:6px;
          text-align:center;
          border-radius:7px;
          background:#f2eee8;
          color:#6b6e6b;
          font-size:8px;
        }
        .emailFallback a{color:#4d514d}
        .formStatus{
          grid-column:1/-1;
          margin:0;
          font-size:8px;
          text-align:center;
          color:#6b6e6b;
        }

        footer{
          padding:34px 0 16px;
          border-top:1px solid var(--line);
          margin-top:48px;
        }
        .footerGrid{
          display:grid;
          grid-template-columns:1.45fr .72fr .78fr 1fr;
          gap:34px;
          align-items:start;
        }
        .footerLogo{width:96px;height:auto;display:block;margin-bottom:8px}
        .footerBrand p{margin:0;max-width:220px;color:var(--muted);font-size:8px;line-height:1.45}
        .footerCol h4{
          margin:0 0 8px;
          font-size:8px;
          letter-spacing:.12em;
          text-transform:uppercase;
        }
        .footerCol a{
          display:block;
          color:#5d625e;
          font-size:8px;
          margin:0 0 5px;
        }
        .footerBottom{
          margin-top:24px;
          padding-top:12px;
          border-top:1px solid var(--line);
          display:flex;
          justify-content:space-between;
          gap:18px;
          color:#8b8e8b;
          font-size:7px;
        }

        @media(max-width:980px){
          .container{width:min(100% - 30px,1120px)}
          .nav{grid-template-columns:130px 1fr auto}
          .heroGrid{grid-template-columns:1fr;gap:18px}
          .heroCopy{padding-bottom:0}
          .heroImage{min-height:360px}
          .benefitGrid{grid-template-columns:1fr 1fr}
          .benefit:nth-child(2){border-right:0}
          .benefit:nth-child(-n+2){border-bottom:1px solid var(--line)}
          .collectionsLayout,.projectsLayout,.aboutLayout,.faqLayout,.contactCard{grid-template-columns:1fr}
          .processGrid{grid-template-columns:1fr 1fr}
          .processTitle{grid-column:1/-1}
          .footerGrid{grid-template-columns:1fr 1fr 1fr}
          .footerBrand{grid-column:1/-1}
        }

        @media(max-width:720px){
          .nav{display:flex;min-height:62px;position:relative}
          .brand img{width:88px}
          .navlinks{display:none}
          .navlinks.open{
            display:flex;
            position:absolute;
            left:0;right:0;top:62px;
            flex-direction:column;
            gap:0;
            background:white;
            border:1px solid var(--line);
            border-radius:10px;
            padding:6px;
            z-index:20;
            box-shadow:0 12px 30px rgba(0,0,0,.08);
          }
          .navlinks.open a{padding:10px}
          .whatsapp{margin-left:auto;font-size:9px;padding:8px 10px}
          .menuBtn{display:block}
          h1{font-size:44px}
          .heroImage{min-height:320px}
          .benefitGrid{grid-template-columns:1fr}
          .benefit{border-right:0!important;border-bottom:1px solid var(--line)!important}
          section{padding:42px 0}
          .collectionGrid,.projectGrid,.aboutPoints,.formGrid{grid-template-columns:1fr}
          .processGrid{grid-template-columns:1fr}
          .processTitle{grid-column:auto}
          .contactCard{padding:24px 18px}
          .field.full,.submitBtn,.emailFallback,.formStatus{grid-column:auto}
          .footerGrid{grid-template-columns:1fr 1fr}
          .footerBrand{grid-column:1/-1}
          .footerBottom{flex-direction:column;align-items:flex-start}
        }

        `}</style>

      <div className="topbar">
        <div className="container">Custom curtains • Sheers • Blinds • Upholstery • For homes & businesses</div>
      </div>

      <header className="header">
        <div className="container nav">
          <a href="#home" className="brand" aria-label="The Drape Factory home">
            <img src="/images/logo-cropped-v36.png" alt="The Drape Factory" />
          </a>

          <nav className={`navlinks ${menuOpen ? "open" : ""}`}>
            <a href="#collections" onClick={() => setMenuOpen(false)}>Collections</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>

          <a className="whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
            WhatsApp +91 91087 76325
          </a>
          <button className="menuBtn" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">☰</button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container heroGrid">
            <div className="heroCopy">
              <div className="eyebrow">Made for your space</div>
              <h1>Windows dressed <em>beautifully.</em></h1>
              <p className="heroLead">
                Custom curtains, sheers and window furnishings designed to bring softness, privacy and a refined sense of proportion to your interiors.
              </p>
              <div className="actions">
                <a className="btnPrimary" href="#contact">Book a consultation <Arrow /></a>
                <a className="btnSecondary" href="#collections">Explore collections</a>
              </div>
            </div>

            <div className="heroImage">
              <img
                src="/images/hero-safe-v55.jpg"
                alt="Living room with layered curtains and sheers"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              <div className="heroBadge">
                <strong>Tailored to the room</strong>
                Layered curtains, sheers and blinds balanced for light and privacy.
              </div>
            </div>
          </div>

          <div className="container benefits">
            <div className="benefitGrid">
              <div className="benefit"><div className="benefitIcon">◉</div><div><strong>Custom fit</strong><span>Made to your measurements</span></div></div>
              <div className="benefit"><div className="benefitIcon">◇</div><div><strong>Curated fabrics</strong><span>Selected for your space</span></div></div>
              <div className="benefit"><div className="benefitIcon">✓</div><div><strong>Complete finish</strong><span>From selection to installation</span></div></div>
              <div className="benefit"><div className="benefitIcon">⌂</div><div><strong>End-to-end service</strong><span>A seamless, hassle-free experience</span></div></div>
            </div>
          </div>
        </section>

        <section id="collections">
          <div className="container collectionsLayout">
            <div className="sideIntro">
              <div className="eyebrow">Our collections</div>
              <h2>Layer texture, light and privacy.</h2>
              <div className="accentLine" />
              <p>Explore a curated range of window and interior textiles designed to work together across a complete room.</p>
            </div>

            <div className="collectionGrid">
              {collections.map((item) => (
                <article className="collectionCard" key={item.title}>
                  <img
                    src={item.image}
                    alt={`${item.title} collection`}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="collectionTag">{item.tag}</span>
                  <div className="collectionBottom">
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.subtitle}</p>
                    </div>
                    <span className="circleArrow"><Arrow /></span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="process">
          <div className="container processGrid">
            <div className="processTitle">
              <div className="eyebrow">How it works</div>
              <h2>From window to finished room.</h2>
            </div>

            {steps.map(([n,t,p]) => (
              <div className="step" key={n}>
                <div className="stepNum">{n}</div>
                <h3>{t}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects">
          <div className="container projectsLayout">
            <div className="projectsIntro">
              <div className="eyebrow">Project inspiration</div>
              <h2>Designed to belong in the room.</h2>
              <p>A selection of recent projects, showing how the right window furnishings bring harmony, texture and character to every space.</p>
              <a className="outlineBtn" href="#contact">View all projects <Arrow /></a>
            </div>

            <div className="projectGrid">
              {projects.map((p) => (
                <article className="projectCard" key={p.name} style={{backgroundImage:`url(${p.image})`}}>
                  <div className="projectInfo">
                    <strong>{p.name}</strong>
                    <span>{p.type}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about">
          <div className="container aboutLayout">
            <div className="aboutImage" />
            <div className="aboutCopy">
              <div className="eyebrow">The Drape Factory</div>
              <h2>A softer, more considered way to finish interiors.</h2>
              <p>We believe window furnishings should do more than cover a window. They should change light, proportion, privacy and the overall feeling of a room.</p>
              <p>Our approach combines made-to-measure planning, thoughtful fabric recommendations and coordinated finishes to create a complete, considered result.</p>
              <div className="aboutPoints">
                <div className="aboutPoint">Made-to-measure approach</div>
                <div className="aboutPoint">Layered curtain solutions</div>
                <div className="aboutPoint">Fabric-led recommendations</div>
                <div className="aboutPoint">Residential & commercial projects</div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container faqLayout">
            <div className="faqIntro">
              <div className="eyebrow">Common questions</div>
              <h2>Before you book.</h2>
              <p>A few helpful details about our made-to-measure consultation, measurement and installation journey.</p>
            </div>

            <div>
              {faq.map(([q,a],i) => (
                <div className={`faqItem ${activeFaq === i ? "open" : ""}`} key={q}>
                  <button className="faqButton" onClick={() => setActiveFaq(activeFaq === i ? -1 : i)}>
                    <span>{q}</span><span>{activeFaq === i ? "−" : "+"}</span>
                  </button>
                  <div className="faqAnswer">{a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container contactCard">
            <div className="contactCopy">
              <div className="eyebrow">Start your project</div>
              <h2>Tell us about your windows.</h2>
              <p>Share the room, approximate requirements and preferred style, and we’ll use it to prepare your consultation request.</p>
            </div>

            <form className="contactForm" onSubmit={sendWhatsApp}>
              <div className="formGrid">
                <div className="field"><label>Name</label><input name="name" required placeholder="Your name" /></div>
                <div className="field"><label>Phone</label><input name="phone" required inputMode="tel" placeholder="Mobile number" /></div>
                <div className="field full"><label>Project type</label><input name="project" required placeholder="Curtains, sheers, blinds, full home..." /></div>
                <div className="field full"><label>Message</label><textarea name="message" required placeholder="Tell us a little about your requirement" /></div>
                <button className="submitBtn" type="submit">Send enquiry on WhatsApp</button>
                <p className="emailFallback">
                  <span aria-hidden="true">✉</span>
                  <span>Prefer email? <a href={`mailto:${email}`}><strong>{email}</strong></a></span>
                </p>
                {formStatus && <p className="formStatus" role="status">{formStatus}</p>}
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footerGrid">
            <div className="footerBrand">
              <img className="footerLogo" src="/images/logo-cropped-v36.png" alt="The Drape Factory" />
              <p>Custom window furnishings and interior textiles designed to bring the room together.</p>
            </div>

            <div className="footerCol">
              <h4>Explore</h4>
              <a href="#collections">Collections</a>
              <a href="#projects">Projects</a>
              <a href="#about">About</a>
            </div>

            <div className="footerCol">
              <h4>Services</h4>
              <a href="#contact">Consultation</a>
              <a href="#contact">Measurement</a>
              <a href="#contact">Installation</a>
            </div>

            <div className="footerCol">
              <h4>Contact</h4>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">+91 91087 76325</a>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
          </div>

          <div className="footerBottom">
            <span>© {new Date().getFullYear()} The Drape Factory. All rights reserved.</span>
            <span>thedrapefactory.in</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
