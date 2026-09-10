import React, { useMemo, useState } from "react";

// Public Website Build 5.0 — Reference-First Desktop Reconstruction

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

function BenefitIcon({ type }) {
  const common = {
    width: 38,
    height: 38,
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  if (type === "measure") {
    return (
      <svg {...common}>
        <path d="M8 17c0-5 4-9 9-9h14c5 0 9 4 9 9s-4 9-9 9H17c-5 0-9-4-9-9Z"/>
        <circle cx="17" cy="17" r="4"/>
        <path d="M31 11v5M35 12v4M27 12v4M13 30h23a4 4 0 0 1 4 4v3H8v-3a4 4 0 0 1 4-4Z"/>
        <path d="M14 30v7M20 30v4M26 30v7M32 30v4"/>
      </svg>
    );
  }

  if (type === "fabric") {
    return (
      <svg {...common}>
        <path d="M10 9h28v30H10z"/>
        <path d="M16 9v30M24 9v30M32 9v30M10 17h28M10 25h28M10 33h28"/>
        <path d="M12 11l24 26M36 11 12 37"/>
      </svg>
    );
  }

  if (type === "finish") {
    return (
      <svg {...common}>
        <circle cx="24" cy="24" r="16"/>
        <path d="m16 24 5 5 11-12"/>
        <path d="M24 5v4M24 39v4M5 24h4M39 24h4"/>
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="m7 23 17-14 17 14"/>
      <path d="M11 21v19h26V21"/>
      <path d="M18 40V27h12v13"/>
      <path d="M15 18h18"/>
    </svg>
  );
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
          --ink:#20231f;
          --muted:#6d706c;
          --paper:#fbfaf7;
          --line:#e8e2d9;
          --accent:#a66a2c;
          --dark:#202823;
          --warm:#f2ece2;
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
        .site{min-height:100vh;background:#fff}
        .container{width:min(1380px,calc(100% - 72px));margin:0 auto}

        .topbar{
          background:var(--dark);
          color:#f6f3ed;
          font-size:10px;
          letter-spacing:.16em;
          text-transform:uppercase;
        }
        .topbar .container{
          min-height:28px;
          display:flex;
          align-items:center;
          justify-content:center;
          text-align:center;
        }

        .header{
          background:#fff;
          border-bottom:1px solid var(--line);
        }
        .nav{
          min-height:86px;
          display:grid;
          grid-template-columns:190px 1fr auto;
          align-items:center;
          gap:36px;
        }
        .brand{display:flex;align-items:center}
        .brand img{width:148px;height:auto;display:block}
        .navlinks{
          display:flex;
          justify-content:center;
          gap:42px;
          font-size:14px;
          color:#454944;
        }
        .navlinks a:hover{color:var(--accent)}
        .whatsapp{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          gap:9px;
          padding:12px 20px;
          border-radius:999px;
          background:var(--dark);
          color:white;
          font-size:12px;
          font-weight:800;
          white-space:nowrap;
        }
        .whatsapp:before{content:"◔";font-size:17px;line-height:1}
        .menuBtn{display:none;border:0;background:transparent;font-size:24px}

        .hero{padding:20px 0 0}
        .heroGrid{
          display:grid;
          grid-template-columns:.83fr 1.17fr;
          gap:48px;
          align-items:center;
        }
        .heroCopy{padding:26px 0}
        .eyebrow{
          margin:0 0 13px;
          color:#9b622d;
          font-size:10px;
          font-weight:800;
          letter-spacing:.19em;
          text-transform:uppercase;
        }
        h1,h2,h3{font-family:Georgia,"Times New Roman",serif}
        h1{
          font-size:clamp(62px,5.2vw,82px);
          line-height:.94;
          letter-spacing:-.04em;
          font-weight:500;
          margin:0 0 20px;
          max-width:560px;
        }
        h1 em{font-style:normal;color:var(--accent)}
        .heroLead{
          margin:0 0 24px;
          max-width:520px;
          color:var(--muted);
          font-size:15px;
          line-height:1.6;
        }
        .actions{display:flex;gap:12px;flex-wrap:wrap}
        .btnPrimary,.btnSecondary{
          min-height:44px;
          padding:0 20px;
          border-radius:999px;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          gap:10px;
          font-size:12px;
          font-weight:800;
        }
        .btnPrimary{background:var(--accent);color:#fff}
        .btnSecondary{background:#fff;border:1px solid #bcb4aa}

        .heroImage{
          min-height:430px;
          border-radius:26px;
          position:relative;
          overflow:hidden;
          background:url("/images/hero-clean-v34.webp") center/cover no-repeat;
        }
        .heroImage:after{
          content:"";
          position:absolute;inset:0;
          background:linear-gradient(180deg,transparent 55%,rgba(0,0,0,.14));
          pointer-events:none;
        }
        .heroBadge{
          position:absolute;
          z-index:2;
          left:18px;
          bottom:18px;
          width:220px;
          padding:12px 14px;
          border-radius:12px;
          background:rgba(255,255,255,.94);
          box-shadow:0 10px 26px rgba(0,0,0,.10);
          font-size:10px;
          line-height:1.45;
        }
        .heroBadge strong{display:block;font-size:11px;margin-bottom:3px}

        .benefits{
          padding:20px 0 22px;
          border-bottom:0;
        }
        .benefitGrid{
          display:grid;
          grid-template-columns:repeat(4,minmax(0,1fr));
          gap:44px;
        }
        .benefit{
          display:grid;
          grid-template-columns:46px 1fr;
          gap:13px;
          align-items:center;
          padding:0;
          border:0;
        }
        .benefitIcon{
          width:46px;
          height:46px;
          display:grid;
          place-items:center;
          color:var(--accent);
          border:0;
          border-radius:0;
          background:transparent;
        }
        .benefitIcon svg{width:40px;height:40px}
        .benefit strong{display:block;font-size:12px;margin-bottom:3px}
        .benefit span{display:block;font-size:10px;color:var(--muted);line-height:1.35}

        section{padding:58px 0}

        .collectionsLayout{
          display:grid;
          grid-template-columns:245px 1fr;
          gap:34px;
          align-items:start;
        }
        .sideIntro{padding-top:14px}
        .sideIntro h2{
          margin:0 0 16px;
          font-size:46px;
          line-height:1.02;
          font-weight:500;
          letter-spacing:-.03em;
        }
        .sideIntro p{
          margin:0;
          color:var(--muted);
          font-size:12px;
          line-height:1.55;
        }
        .accentLine{width:48px;height:2px;background:var(--accent);margin:16px 0 18px}
        .collectionGrid{
          display:grid;
          grid-template-columns:repeat(2,minmax(0,1fr));
          gap:14px;
        }
        .collectionCard{
          position:relative;
          min-height:260px;
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
          background:linear-gradient(180deg,rgba(0,0,0,.01) 35%,rgba(0,0,0,.67) 100%);
        }
        .collectionTag{
          position:absolute;left:14px;top:14px;
          padding:6px 9px;border-radius:999px;
          background:rgba(255,255,255,.92);
          font-size:8px;letter-spacing:.08em;text-transform:uppercase;
        }
        .collectionBottom{
          display:flex;justify-content:space-between;align-items:flex-end;gap:14px;
        }
        .collectionCard h3{margin:0 0 4px;color:#fff;font-size:26px;font-weight:500}
        .collectionCard p{margin:0;color:#f1f0ed;font-size:10px;line-height:1.4;max-width:250px}
        .circleArrow{
          width:34px;height:34px;border-radius:50%;background:#fff;
          display:grid;place-items:center;font-size:15px;flex:0 0 auto;
        }

        .process{
          padding:36px 0;
          background:var(--dark);
          color:#fff;
        }
        .processGrid{
          display:grid;
          grid-template-columns:235px repeat(4,minmax(0,1fr));
          gap:26px;
          align-items:start;
        }
        .processTitle h2{
          margin:0;
          font-size:36px;
          line-height:1.02;
          font-weight:500;
        }
        .process .eyebrow{color:#d5a76c}
        .step{
          border-top:1px solid rgba(255,255,255,.22);
          padding-top:2px;
          min-height:122px;
        }
        .stepNum{
          width:32px;height:32px;border-radius:50%;
          border:1px solid #b78752;
          display:grid;place-items:center;
          margin-top:-17px;margin-bottom:16px;
          background:var(--dark);
          color:#ddb77f;
          font-size:10px;
        }
        .step h3{margin:0 0 6px;font-size:17px;font-weight:500}
        .step p{margin:0;color:#cbd0cc;font-size:9.5px;line-height:1.45}

        .projectsLayout{
          display:grid;
          grid-template-columns:205px 1fr;
          gap:30px;
          align-items:start;
        }
        .projectsIntro h2{
          margin:0 0 10px;
          font-size:36px;
          line-height:1.02;
          font-weight:500;
        }
        .projectsIntro p{
          margin:0 0 14px;
          color:var(--muted);
          font-size:10px;
          line-height:1.5;
        }
        .outlineBtn{
          display:inline-flex;align-items:center;gap:9px;
          padding:9px 13px;border:1px solid #aaa39a;border-radius:999px;
          font-size:9px;font-weight:700;
        }
        .projectGrid{
          display:grid;
          grid-template-columns:repeat(3,minmax(0,1fr));
          gap:12px;
        }
        .projectCard{
          min-height:225px;
          position:relative;
          border-radius:14px;
          background-size:cover;
          background-position:center;
          overflow:hidden;
        }
        .projectInfo{
          position:absolute;left:9px;right:9px;bottom:9px;
          padding:9px 10px;border-radius:9px;background:rgba(255,255,255,.94);
        }
        .projectInfo strong{display:block;font-size:10px;margin-bottom:3px}
        .projectInfo span{display:block;color:var(--muted);font-size:8px}

        .aboutLayout{
          display:grid;
          grid-template-columns:.78fr 1.22fr;
          gap:40px;
          align-items:center;
        }
        .aboutImage{
          min-height:350px;
          border-radius:16px;
          background:url("/images/about-clean-v34.webp") center/cover no-repeat;
        }
        .aboutCopy h2{
          margin:0 0 12px;
          font-size:44px;
          line-height:1.02;
          font-weight:500;
          letter-spacing:-.025em;
        }
        .aboutCopy p{
          margin:0 0 10px;
          color:var(--muted);
          font-size:10.5px;
          line-height:1.5;
        }
        .aboutPoints{
          display:grid;
          grid-template-columns:repeat(2,minmax(0,1fr));
          gap:9px;
          margin-top:14px;
        }
        .aboutPoint{
          min-height:40px;
          display:flex;align-items:center;
          padding:9px 12px;
          border-radius:9px;
          background:#f3eee7;
          font-size:9px;
        }

        .faqLayout{
          display:grid;
          grid-template-columns:.72fr 1.28fr;
          gap:60px;
          align-items:start;
        }
        .faqIntro h2{
          margin:0 0 8px;
          font-size:35px;
          line-height:1.05;
          font-weight:500;
        }
        .faqIntro p{
          margin:0;
          max-width:300px;
          color:var(--muted);
          font-size:9.5px;
          line-height:1.45;
        }
        .faqItem{border-bottom:1px solid var(--line)}
        .faqButton{
          width:100%;
          display:flex;align-items:center;justify-content:space-between;gap:16px;
          padding:11px 0;
          border:0;background:transparent;
          color:var(--ink);
          font-size:10px;
          font-weight:700;
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

        .contact{padding-top:24px;padding-bottom:52px}
        .contactCard{
          display:grid;
          grid-template-columns:.88fr 1.12fr;
          gap:44px;
          align-items:center;
          padding:36px 40px;
          border-radius:18px;
          background:linear-gradient(120deg,#f0e9df,#f7f2ea);
        }
        .contactCopy{max-width:390px}
        .contactCopy h2{
          margin:0 0 9px;
          font-size:40px;
          line-height:1.02;
          font-weight:500;
        }
        .contactCopy p{
          margin:0;color:var(--muted);font-size:9.8px;line-height:1.48;
        }
        .contactForm{
          width:100%;
          max-width:540px;
          justify-self:end;
          padding:14px;
          border:1px solid #ece7df;
          border-radius:14px;
          background:#fff;
          box-shadow:0 14px 30px rgba(40,34,28,.05);
        }
        .formGrid{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:7px;
        }
        .field{display:flex;flex-direction:column;gap:4px}
        .field.full{grid-column:1/-1}
        .field label{font-size:7.5px;color:#7b7f7a}
        .field input,.field textarea{
          width:100%;
          border:1px solid #e6e3de;
          background:#fbfbfa;
          border-radius:7px;
          padding:8px 9px;
          font-size:9px;
          outline:none;
        }
        .field textarea{min-height:58px;resize:vertical}
        .submitBtn{
          grid-column:1/-1;
          min-height:37px;
          border:0;border-radius:999px;
          background:var(--dark);color:#fff;
          font-size:9px;font-weight:800;
        }
        .emailFallback{
          grid-column:1/-1;
          margin:0;
          min-height:32px;
          display:flex;align-items:center;justify-content:center;gap:7px;
          border-radius:8px;
          background:#f2eee8;
          color:#696d69;
          text-align:center;
          font-size:8.5px;
        }
        .emailFallback a{color:#4c504c}
        .formStatus{
          grid-column:1/-1;
          margin:0;
          text-align:center;
          font-size:8.5px;
          color:#696d69;
        }

        footer{
          margin-top:0;
          padding:34px 0 16px;
          border-top:1px solid var(--line);
        }
        .footerGrid{
          display:grid;
          grid-template-columns:1.45fr .72fr .78fr 1fr;
          gap:42px;
          align-items:start;
        }
        .footerLogo{width:112px;height:auto;display:block;margin-bottom:9px}
        .footerBrand p{
          margin:0;
          max-width:245px;
          color:var(--muted);
          font-size:8.8px;
          line-height:1.45;
        }
        .footerCol h4{
          margin:0 0 9px;
          font-size:8px;
          letter-spacing:.12em;
          text-transform:uppercase;
        }
        .footerCol a{
          display:block;
          margin:0 0 5px;
          color:#5d615d;
          font-size:8.5px;
        }
        .footerBottom{
          margin-top:22px;
          padding-top:12px;
          border-top:1px solid var(--line);
          display:flex;align-items:center;justify-content:space-between;
          color:#8c8f8b;
          font-size:8px;
        }

        @media(max-width:1100px){
          .container{width:min(100% - 40px,980px)}
          .nav{grid-template-columns:145px 1fr auto}
          .brand img{width:112px}
          .navlinks{gap:24px}
          .heroGrid{gap:28px}
          h1{font-size:54px}
          .heroImage{min-height:360px}
          .collectionsLayout{grid-template-columns:205px 1fr}
          .processGrid{grid-template-columns:205px repeat(4,minmax(0,1fr))}
          .projectsLayout{grid-template-columns:185px 1fr}
        }

        @media(max-width:900px){
          .container{width:min(100% - 32px,760px)}
          .nav{grid-template-columns:130px 1fr auto}
          .brand img{width:100px}
          .navlinks{gap:18px;font-size:11px}
          .heroGrid,.collectionsLayout,.projectsLayout,.aboutLayout,.faqLayout,.contactCard{grid-template-columns:1fr}
          .heroImage{min-height:420px}
          .benefitGrid{grid-template-columns:repeat(2,minmax(0,1fr));gap:24px}
          .processGrid{grid-template-columns:1fr 1fr}
          .processTitle{grid-column:1/-1}
          .projectGrid{grid-template-columns:repeat(3,minmax(0,1fr))}
          .contactForm{justify-self:stretch;max-width:none}
          .footerGrid{grid-template-columns:1.2fr 1fr 1fr}
          .footerBrand{grid-column:1/-1}
        }

        @media(max-width:640px){
          .topbar{font-size:8px}
          .nav{display:flex;min-height:68px;position:relative}
          .brand img{width:92px}
          .navlinks{display:none}
          .navlinks.open{
            display:flex;
            position:absolute;left:0;right:0;top:68px;z-index:20;
            flex-direction:column;gap:0;
            background:#fff;border:1px solid var(--line);border-radius:12px;
            padding:8px;box-shadow:0 14px 32px rgba(0,0,0,.08);
          }
          .navlinks.open a{padding:11px}
          .whatsapp{margin-left:auto;padding:9px 12px;font-size:9px}
          .menuBtn{display:block}
          .hero{padding-top:10px}
          .heroCopy{padding:20px 0 8px}
          h1{font-size:48px}
          .heroLead{font-size:13px}
          .heroImage{min-height:330px}
          .benefitGrid{grid-template-columns:1fr;gap:18px}
          section{padding:46px 0}
          .collectionGrid,.projectGrid,.aboutPoints,.formGrid{grid-template-columns:1fr}
          .processGrid{grid-template-columns:1fr}
          .processTitle{grid-column:auto;margin-bottom:10px}
          .step{padding-top:14px}
          .projectCard{min-height:250px}
          .aboutImage{min-height:300px}
          .faqLayout{gap:24px}
          .contactCard{padding:26px 18px;gap:24px}
          .field.full,.submitBtn,.emailFallback,.formStatus{grid-column:auto}
          .footerGrid{grid-template-columns:1fr 1fr;gap:26px}
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

            <div className="heroImage" aria-label="Living room with layered curtains and sheers">
              <div className="heroBadge">
                <strong>Tailored to the room</strong>
                Layered curtains, sheers and blinds balanced for light and privacy.
              </div>
            </div>
          </div>

          <div className="container benefits">
            <div className="benefitGrid">
              <div className="benefit"><div className="benefitIcon"><BenefitIcon type="measure" /></div><div><strong>Custom fit</strong><span>Made to your measurements</span></div></div>
              <div className="benefit"><div className="benefitIcon"><BenefitIcon type="fabric" /></div><div><strong>Curated fabrics</strong><span>Selected for your space</span></div></div>
              <div className="benefit"><div className="benefitIcon"><BenefitIcon type="finish" /></div><div><strong>Complete finish</strong><span>From selection to installation</span></div></div>
              <div className="benefit"><div className="benefitIcon"><BenefitIcon type="home" /></div><div><strong>End-to-end service</strong><span>A seamless, hassle-free experience</span></div></div>
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
