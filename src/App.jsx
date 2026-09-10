import React, { useMemo, useState } from "react";

// Public Website Build 4 — Approved Layout Match

const collections = [
  { title: "Curtains", subtitle: "Tailored drapery for living, dining and bedroom spaces.", tag: "Made to measure", image: "/images/curtains-clean-v34.webp" },
  { title: "Sheers", subtitle: "Soft daylight, layered privacy and an elegant finish.", tag: "Light & airy", image: "/images/sheers-clean-v34.webp" },
  { title: "Blinds", subtitle: "Clean, functional window solutions for modern interiors.", tag: "Modern control", image: "/images/blinds-clean-v34.webp" },
  { title: "Upholstery", subtitle: "Coordinated fabrics for sofas, chairs and interior accents.", tag: "Complete the room", image: "/images/upholstery-clean-v34.webp" },
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
          --white:#ffffff;
          --radius:22px;
        }
        *{box-sizing:border-box}
        html{scroll-behavior:smooth}
        body{
          margin:0;
          font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
          color:var(--ink);
          background:var(--paper);
        }
        a{color:inherit;text-decoration:none}
        button,input,textarea{font:inherit}
        button{cursor:pointer}
        .site{min-height:100vh;background:linear-gradient(180deg,#fbfaf7 0%,#fff 45%,#fbfaf7 100%)}
        .container{width:min(1240px,calc(100% - 56px));margin:0 auto}

        .topbar{
          background:var(--dark);
          color:#f8f4ed;
          font-size:11px;
          letter-spacing:.14em;
          text-transform:uppercase;
        }
        .topbar .container{
          min-height:30px;
          display:flex;
          align-items:center;
          justify-content:center;
          text-align:center;
        }

        .header{background:rgba(251,250,247,.98);border-bottom:1px solid var(--line)}
        .nav{
          min-height:82px;
          display:grid;
          grid-template-columns:180px 1fr auto;
          align-items:center;
          gap:30px;
        }
        .brand{display:flex;align-items:center}
        .brand img{width:124px;height:auto;display:block}
        .navlinks{
          display:flex;
          justify-content:center;
          gap:34px;
          font-size:14px;
          color:#454a46;
        }
        .navlinks a:hover{color:var(--accent)}
        .whatsapp{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          gap:9px;
          padding:12px 18px;
          border-radius:999px;
          background:var(--dark);
          color:white;
          font-size:13px;
          font-weight:700;
          white-space:nowrap;
        }
        .whatsapp:before{content:"◔";font-size:18px;line-height:1}
        .menuBtn{display:none;border:0;background:transparent;font-size:24px}

        .hero{padding:24px 0 0}
        .heroGrid{
          display:grid;
          grid-template-columns:.84fr 1.16fr;
          gap:48px;
          align-items:stretch;
        }
        .heroCopy{
          display:flex;
          flex-direction:column;
          justify-content:center;
          padding:36px 0 30px;
        }
        .eyebrow{
          margin:0 0 14px;
          color:#98612d;
          font-size:11px;
          font-weight:800;
          letter-spacing:.19em;
          text-transform:uppercase;
        }
        h1,h2,h3{font-family:Georgia,"Times New Roman",serif}
        h1{
          font-size:clamp(54px,5.8vw,84px);
          line-height:.95;
          letter-spacing:-.045em;
          font-weight:500;
          margin:0 0 22px;
          max-width:620px;
        }
        h1 em{font-style:normal;color:var(--accent)}
        .heroLead{
          margin:0 0 26px;
          max-width:540px;
          color:var(--muted);
          font-size:17px;
          line-height:1.65;
        }
        .actions{display:flex;gap:12px;flex-wrap:wrap}
        .btnPrimary,.btnSecondary{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          gap:10px;
          min-height:46px;
          padding:0 20px;
          border-radius:999px;
          font-size:13px;
          font-weight:800;
        }
        .btnPrimary{background:var(--accent);color:white}
        .btnSecondary{background:white;border:1px solid #bdb5aa;color:var(--ink)}

        .heroImage{
          min-height:470px;
          border-radius:24px;
          position:relative;
          overflow:hidden;
          background:url("/images/hero-clean-v34.webp") center/cover no-repeat;
        }
        .heroImage:after{
          content:"";
          position:absolute;inset:0;
          background:linear-gradient(180deg,transparent 55%,rgba(20,24,21,.16));
          pointer-events:none;
        }
        .heroBadge{
          position:absolute;
          z-index:2;
          left:18px;
          bottom:18px;
          width:min(230px,calc(100% - 36px));
          padding:14px 16px;
          border-radius:12px;
          background:rgba(255,255,255,.93);
          box-shadow:0 12px 30px rgba(25,25,25,.12);
          font-size:12px;
          line-height:1.45;
        }
        .heroBadge strong{display:block;font-size:13px;margin-bottom:3px}

        .benefits{
          margin-top:0;
          border-bottom:1px solid var(--line);
        }
        .benefitGrid{
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:0;
          min-height:92px;
        }
        .benefit{
          display:flex;
          gap:13px;
          align-items:center;
          padding:20px 22px;
          border-right:1px solid var(--line);
        }
        .benefit:last-child{border-right:0}
        .benefitIcon{
          width:34px;height:34px;
          border:1.5px solid var(--accent);
          border-radius:10px;
          display:grid;place-items:center;
          color:var(--accent);
          font-size:16px;
          flex:0 0 auto;
        }
        .benefit strong{display:block;font-size:13px;margin-bottom:4px}
        .benefit span{display:block;color:var(--muted);font-size:12px;line-height:1.35}

        section{padding:72px 0}

        .collectionsLayout{
          display:grid;
          grid-template-columns:250px 1fr;
          gap:28px;
          align-items:stretch;
        }
        .sideIntro{padding:18px 8px 0 0}
        .sideIntro h2{
          margin:0 0 18px;
          font-size:44px;
          line-height:1.02;
          font-weight:500;
          letter-spacing:-.03em;
        }
        .sideIntro p{
          margin:0;
          color:var(--muted);
          font-size:14px;
          line-height:1.65;
        }
        .accentLine{width:52px;height:2px;background:var(--accent);margin:18px 0 20px}
        .collectionGrid{
          display:grid;
          grid-template-columns:repeat(2,minmax(0,1fr));
          gap:14px;
        }
        .collectionCard{
          position:relative;
          min-height:245px;
          border-radius:16px;
          overflow:hidden;
          background-size:cover;
          background-position:center;
          display:flex;
          flex-direction:column;
          justify-content:flex-end;
          padding:18px;
          isolation:isolate;
        }
        .collectionCard:before{
          content:"";
          position:absolute;inset:0;z-index:-1;
          background:linear-gradient(180deg,rgba(0,0,0,.02) 35%,rgba(0,0,0,.68) 100%);
        }
        .collectionTag{
          position:absolute;left:14px;top:14px;
          padding:6px 9px;border-radius:999px;
          background:rgba(255,255,255,.9);
          font-size:9px;text-transform:uppercase;letter-spacing:.08em;
        }
        .collectionBottom{
          display:flex;
          align-items:flex-end;
          justify-content:space-between;
          gap:16px;
        }
        .collectionCard h3{margin:0 0 4px;color:white;font-size:27px;font-weight:500}
        .collectionCard p{margin:0;color:#f0efec;font-size:12px;line-height:1.4;max-width:260px}
        .circleArrow{
          width:36px;height:36px;border-radius:50%;
          background:white;color:var(--ink);
          display:grid;place-items:center;
          font-size:16px;
          flex:0 0 auto;
        }

        .process{background:var(--dark);color:white;padding:44px 0}
        .processGrid{
          display:grid;
          grid-template-columns:240px repeat(4,1fr);
          gap:24px;
          align-items:start;
        }
        .processTitle h2{
          font-size:38px;
          line-height:1.02;
          font-weight:500;
          margin:0;
        }
        .process .eyebrow{color:#d5a96f}
        .step{
          padding-top:2px;
          border-top:1px solid rgba(255,255,255,.24);
        }
        .stepNum{
          width:34px;height:34px;border-radius:50%;
          border:1px solid #b68a56;
          display:grid;place-items:center;
          margin-top:-18px;
          margin-bottom:20px;
          background:var(--dark);
          color:#dcb989;
          font-size:12px;
        }
        .step h3{font-size:19px;font-weight:500;margin:0 0 8px}
        .step p{font-size:12px;line-height:1.55;margin:0;color:#c9d0cb}

        .projectsLayout{
          display:grid;
          grid-template-columns:220px 1fr;
          gap:28px;
          align-items:start;
        }
        .projectsIntro h2{
          margin:0 0 12px;
          font-size:39px;
          line-height:1.04;
          font-weight:500;
        }
        .projectsIntro p{
          margin:0 0 18px;
          color:var(--muted);
          font-size:13px;
          line-height:1.55;
        }
        .outlineBtn{
          display:inline-flex;
          align-items:center;
          gap:10px;
          padding:10px 15px;
          border:1px solid #a9a198;
          border-radius:999px;
          font-size:12px;
          font-weight:700;
        }
        .projectGrid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:12px;
        }
        .projectCard{
          position:relative;
          min-height:275px;
          border-radius:14px;
          background-size:cover;
          background-position:center;
          overflow:hidden;
        }
        .projectInfo{
          position:absolute;
          left:10px;right:10px;bottom:10px;
          background:rgba(255,255,255,.94);
          border-radius:10px;
          padding:10px 12px;
        }
        .projectInfo strong{display:block;font-size:12px;margin-bottom:3px}
        .projectInfo span{display:block;font-size:10px;color:var(--muted)}

        .aboutLayout{
          display:grid;
          grid-template-columns:.82fr 1.18fr;
          gap:42px;
          align-items:center;
        }
        .aboutImage{
          min-height:360px;
          border-radius:16px;
          background:url("/images/about-clean-v34.webp") center/cover no-repeat;
        }
        .aboutCopy h2{
          font-size:46px;
          line-height:1.02;
          font-weight:500;
          letter-spacing:-.025em;
          margin:0 0 16px;
        }
        .aboutCopy p{
          color:var(--muted);
          line-height:1.65;
          font-size:13px;
          margin:0 0 14px;
        }
        .aboutPoints{
          display:grid;
          grid-template-columns:repeat(2,1fr);
          gap:10px;
          margin-top:18px;
        }
        .aboutPoint{
          min-height:44px;
          display:flex;
          align-items:center;
          padding:10px 14px;
          background:#f4f0e9;
          border-radius:9px;
          font-size:12px;
        }

        .faqLayout{
          display:grid;
          grid-template-columns:.78fr 1.22fr;
          gap:72px;
          align-items:start;
        }
        .faqIntro h2{
          margin:0 0 10px;
          font-size:40px;
          line-height:1.05;
          font-weight:500;
        }
        .faqIntro p{
          margin:0;
          color:var(--muted);
          font-size:13px;
          line-height:1.55;
          max-width:360px;
        }
        .faqItem{border-bottom:1px solid var(--line)}
        .faqButton{
          width:100%;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:20px;
          padding:15px 0;
          border:0;
          background:transparent;
          color:var(--ink);
          font-weight:700;
          font-size:13px;
          text-align:left;
        }
        .faqAnswer{
          display:none;
          padding:0 28px 14px 0;
          color:var(--muted);
          font-size:12px;
          line-height:1.55;
        }
        .faqItem.open .faqAnswer{display:block}

        .contact{padding-top:28px}
        .contactCard{
          display:grid;
          grid-template-columns:.9fr 1.1fr;
          gap:56px;
          align-items:center;
          padding:44px 50px;
          border-radius:20px;
          background:linear-gradient(120deg,#f1eadf,#f6f2eb);
        }
        .contactCopy{max-width:430px;padding-left:8px}
        .contactCopy h2{
          margin:0 0 12px;
          font-size:44px;
          line-height:1.02;
          font-weight:500;
        }
        .contactCopy p{
          margin:0;
          color:var(--muted);
          font-size:13px;
          line-height:1.6;
        }
        .contactForm{
          background:white;
          border:1px solid #eee9e2;
          border-radius:14px;
          padding:16px;
          box-shadow:0 16px 34px rgba(36,30,24,.06);
        }
        .formGrid{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:9px;
        }
        .field{display:flex;flex-direction:column;gap:5px}
        .field.full{grid-column:1/-1}
        .field label{
          font-size:9px;
          color:#777b77;
          letter-spacing:.03em;
        }
        .field input,.field textarea{
          width:100%;
          border:1px solid #e8e5df;
          background:#fbfbfa;
          border-radius:8px;
          padding:10px 11px;
          outline:none;
          font-size:12px;
          color:var(--ink);
        }
        .field textarea{min-height:70px;resize:vertical}
        .submitBtn{
          grid-column:1/-1;
          min-height:43px;
          border:0;
          border-radius:999px;
          background:var(--dark);
          color:white;
          font-weight:800;
          font-size:12px;
        }
        .emailFallback{
          grid-column:1/-1;
          margin:0;
          min-height:38px;
          display:flex;
          align-items:center;
          justify-content:center;
          gap:7px;
          text-align:center;
          border-radius:8px;
          background:#f2eee8;
          color:#6b6e6b;
          font-size:11px;
        }
        .emailFallback a{color:#4d514d}
        .formStatus{
          grid-column:1/-1;
          margin:0;
          font-size:11px;
          text-align:center;
          color:#6b6e6b;
        }

        footer{padding:48px 0 22px;border-top:1px solid var(--line);margin-top:72px}
        .footerGrid{
          display:grid;
          grid-template-columns:1.55fr .75fr .8fr 1.05fr;
          gap:48px;
          align-items:start;
        }
        .footerLogo{width:120px;height:auto;display:block;margin-bottom:12px}
        .footerBrand p{margin:0;max-width:280px;color:var(--muted);font-size:12px;line-height:1.5}
        .footerCol h4{
          margin:0 0 12px;
          font-size:10px;
          letter-spacing:.12em;
          text-transform:uppercase;
        }
        .footerCol a{
          display:block;
          color:#5d625e;
          font-size:11px;
          margin:0 0 7px;
        }
        .footerBottom{
          margin-top:34px;
          padding-top:18px;
          border-top:1px solid var(--line);
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:20px;
          color:#8b8e8b;
          font-size:10px;
        }

        @media(max-width:980px){
          .container{width:min(100% - 32px,1240px)}
          .nav{grid-template-columns:150px 1fr auto}
          .navlinks{gap:20px}
          .heroGrid{grid-template-columns:1fr;gap:24px}
          .heroCopy{padding-bottom:0}
          .heroImage{min-height:440px}
          .benefitGrid{grid-template-columns:1fr 1fr}
          .benefit:nth-child(2){border-right:0}
          .benefit:nth-child(-n+2){border-bottom:1px solid var(--line)}
          .collectionsLayout,.projectsLayout,.aboutLayout,.faqLayout,.contactCard{grid-template-columns:1fr}
          .sideIntro,.projectsIntro{max-width:620px}
          .projectGrid{grid-template-columns:repeat(3,1fr)}
          .processGrid{grid-template-columns:1fr 1fr}
          .processTitle{grid-column:1/-1}
          .contactCopy{max-width:none}
          .footerGrid{grid-template-columns:1.2fr 1fr 1fr}
          .footerBrand{grid-column:1/-1}
        }

        @media(max-width:720px){
          .topbar{font-size:9px}
          .nav{display:flex;min-height:68px;position:relative}
          .brand img{width:100px}
          .navlinks{display:none}
          .navlinks.open{
            display:flex;
            position:absolute;
            left:0;right:0;top:68px;
            flex-direction:column;
            gap:0;
            background:white;
            border:1px solid var(--line);
            border-radius:12px;
            padding:8px;
            z-index:20;
            box-shadow:0 15px 35px rgba(0,0,0,.08);
          }
          .navlinks.open a{padding:12px}
          .whatsapp{margin-left:auto;font-size:11px;padding:10px 13px}
          .menuBtn{display:block}
          .hero{padding-top:14px}
          h1{font-size:52px}
          .heroImage{min-height:360px}
          .benefitGrid{grid-template-columns:1fr}
          .benefit{border-right:0!important;border-bottom:1px solid var(--line)!important}
          .benefit:last-child{border-bottom:0!important}
          section{padding:54px 0}
          .collectionGrid,.projectGrid,.aboutPoints,.formGrid{grid-template-columns:1fr}
          .collectionCard{min-height:245px}
          .processGrid{grid-template-columns:1fr}
          .processTitle{grid-column:auto;margin-bottom:14px}
          .step{padding-top:14px}
          .stepNum{margin-top:-30px}
          .projectCard{min-height:260px}
          .aboutImage{min-height:320px}
          .faqLayout{gap:24px}
          .contactCard{padding:28px 20px;gap:28px}
          .field.full,.submitBtn,.emailFallback,.formStatus{grid-column:auto}
          .contactCopy h2,.aboutCopy h2{font-size:38px}
          .sideIntro h2{font-size:38px}
          .footerGrid{grid-template-columns:1fr 1fr;gap:28px}
          .footerBrand{grid-column:1/-1}
          .footerBottom{align-items:flex-start;flex-direction:column}
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

            <div className="heroImage" aria-label="Living room with layered curtains and sheers">
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
                <article
                  className="collectionCard"
                  key={item.title}
                  style={{backgroundImage:`url(${item.image})`}}
                >
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
