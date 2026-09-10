import React, { useMemo, useState } from "react";

// Public Website Build 3.6 — Alignment Refine + Centered Contact Fallback

const collections = [
  { title: "Curtains", subtitle: "Tailored drapery for living, dining and bedroom spaces", tag: "Made to measure", image: "/images/curtains-clean-v34.webp" },
  { title: "Sheers", subtitle: "Soft daylight, layered privacy and an elegant finish", tag: "Light & airy", image: "/images/sheers-clean-v34.webp" },
  { title: "Blinds", subtitle: "Clean, functional window solutions for modern interiors", tag: "Modern control", image: "/images/blinds-clean-v34.webp" },
  { title: "Upholstery", subtitle: "Coordinated fabrics for sofas, chairs and interior accents", tag: "Complete the room", image: "/images/upholstery-clean-v34.webp" },
];

const projects = [
  { name: "Warm Minimal Living", type: "Curtains + Sheers", tone: "Sand / Ivory", image: "/images/project-living-clean-v34.webp" },
  { name: "Contemporary Bedroom", type: "Blackout Curtains", tone: "Taupe / Linen", image: "/images/project-bedroom-clean-v34.webp" },
  { name: "Soft Daylight Dining", type: "Sheer Drapes", tone: "Pearl / White", image: "/images/project-dining-clean-v34.webp" },
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
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
  ], []);

  return (
    <div className="siteShell">
      <style>{`
        :root{
          --ink:#1f2321; --muted:#6d726e; --line:#e8e4dd; --paper:#fbfaf7;
          --warm:#eee7dc; --accent:#7e5c43; --accent2:#b18a6b; --white:#fff;
          --shadow:0 18px 50px rgba(38,33,28,.08);
        }
        *{box-sizing:border-box}
        html{scroll-behavior:smooth}
        body{margin:0;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;background:var(--paper);color:var(--ink)}
        a{text-decoration:none;color:inherit}
        button,input,textarea{font:inherit}
        .siteShell{min-height:100vh;background:linear-gradient(180deg,#fbfaf7 0%,#fff 36%,#fbfaf7 100%)}
        .container{width:min(1180px,calc(100% - 40px));margin:0 auto}

        .topNote{background:#222723;color:#f8f4ee;font-size:12px;letter-spacing:.08em;text-transform:uppercase}
        .topNoteInner{min-height:32px;display:flex;align-items:center;justify-content:center;text-align:center}

        .navWrap{position:sticky;top:0;z-index:50;background:rgba(251,250,247,.92);backdrop-filter:blur(16px);border-bottom:1px solid rgba(232,228,221,.78)}
        .nav{min-height:76px;display:flex;align-items:center;justify-content:space-between;gap:24px}
        .brand{display:flex;align-items:center;gap:12px;font-family:Georgia,"Times New Roman",serif;font-size:24px;letter-spacing:.02em}
        .brandMark{width:38px;height:38px;border:1px solid #bda996;border-radius:50%;display:grid;place-items:center;position:relative}
        .brandMark:before,.brandMark:after{content:"";position:absolute;width:13px;height:20px;border:1px solid #8d725c;border-radius:50% 50% 46% 46%;top:8px}
        .brandMark:before{left:9px;transform:rotate(-15deg)}
        .brandMark:after{right:9px;transform:rotate(15deg)}
        .navLinks{display:flex;align-items:center;gap:28px;font-size:14px;color:#4d524e}
        .navLinks a:hover{color:var(--accent)}
        .navCta{padding:12px 18px;border-radius:999px;background:var(--ink);color:#fff;font-weight:600;font-size:13px}
        .menuBtn{display:none;border:0;background:transparent;font-size:24px}

        .hero{padding:56px 0 40px}
        .heroGrid{display:grid;grid-template-columns:1.02fr .98fr;gap:52px;align-items:center}
        .eyebrow{font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:var(--accent);font-weight:700;margin-bottom:18px}
        h1{font-family:Georgia,"Times New Roman",serif;font-size:clamp(48px,6vw,82px);line-height:.98;font-weight:500;letter-spacing:-.045em;margin:0 0 26px;max-width:720px}
        .heroLead{font-size:18px;line-height:1.7;color:var(--muted);max-width:610px;margin:0 0 30px}
        .heroActions{display:flex;gap:12px;flex-wrap:wrap}
        .primaryBtn,.secondaryBtn{display:inline-flex;align-items:center;gap:10px;padding:15px 20px;border-radius:999px;font-weight:700;font-size:14px}
        .primaryBtn{background:var(--accent);color:white}
        .secondaryBtn{border:1px solid #d8d2c8;background:#fff;color:var(--ink)}
        .heroMeta{display:flex;gap:28px;margin-top:36px;padding-top:24px;border-top:1px solid var(--line);color:#5e625f;font-size:13px}
        .heroMeta strong{display:block;color:var(--ink);font-size:16px;margin-bottom:4px}

        .heroVisual{position:relative;min-height:620px;border-radius:36px;overflow:hidden;background-image:linear-gradient(180deg,rgba(20,18,16,.02),rgba(20,18,16,.16)),url("/images/hero-clean-v34.webp");background-size:cover;background-position:center;/* fallback */background-color:#ddd;background:
          radial-gradient(circle at 70% 16%,rgba(255,255,255,.9),rgba(255,255,255,0) 25%),
          linear-gradient(115deg,#cdbfae 0 20%,#f4efe8 20% 48%,#bda893 48% 61%,#ded3c6 61% 100%);box-shadow:var(--shadow)}
        .heroVisual:before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(90deg,rgba(255,255,255,.0) 0 42px,rgba(255,255,255,.16) 42px 52px,rgba(0,0,0,.025) 52px 58px);mix-blend-mode:soft-light}
        .window{position:absolute;right:11%;top:12%;width:39%;height:55%;border:12px solid #f6f0e8;background:linear-gradient(180deg,#c3d0cf,#eef0eb);box-shadow:0 22px 50px rgba(45,42,38,.16)}
        .curtainL,.curtainR{position:absolute;top:0;height:82%;width:33%;background:linear-gradient(90deg,#c9baa8,#efe8df 45%,#bfae9b 100%);filter:drop-shadow(0 14px 18px rgba(0,0,0,.12))}
        .curtainL{left:4%;border-radius:0 0 70% 12%}
        .curtainR{right:4%;border-radius:0 0 12% 70%}
        .sofa{position:absolute;left:14%;right:14%;bottom:9%;height:21%;background:#a18c7e;border-radius:42px 42px 24px 24px;box-shadow:0 28px 44px rgba(35,29,25,.14)}
        .sofa:before{content:"";position:absolute;left:4%;right:4%;top:-20%;height:45%;background:#b6a397;border-radius:30px}
        .visualCard{position:absolute;left:7%;bottom:7%;background:rgba(255,255,255,.9);backdrop-filter:blur(8px);padding:14px 16px;border-radius:16px;box-shadow:0 14px 35px rgba(50,43,37,.12);font-size:12px;max-width:210px}
        .visualCard strong{display:block;font-size:14px;margin-bottom:3px}

        .trustStrip{padding:24px 0 14px}
        .trustGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
        .trustItem{padding:18px;border:1px solid var(--line);border-radius:18px;background:rgba(255,255,255,.7)}
        .trustItem strong{display:block;font-size:14px;margin-bottom:5px}.trustItem span{font-size:12px;color:var(--muted)}

        section{padding:88px 0}
        .sectionHead{display:flex;align-items:end;justify-content:space-between;gap:30px;margin-bottom:34px}
        .sectionHead h2{font-family:Georgia,"Times New Roman",serif;font-size:clamp(36px,4vw,54px);line-height:1.05;font-weight:500;letter-spacing:-.025em;margin:0}
        .sectionHead p{max-width:520px;color:var(--muted);line-height:1.7;margin:0}

        .collectionGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}
        .collectionCard{min-height:360px;padding:28px;border-radius:28px;position:relative;overflow:hidden;border:1px solid #e6ded4;background:linear-gradient(145deg,#fff,#efe8df);display:flex;flex-direction:column;justify-content:flex-end;transition:.25s ease}
        .collectionCard:hover{transform:translateY(-3px);box-shadow:var(--shadow)}
        .collectionCard:nth-child(2){background:linear-gradient(145deg,#f8f5f0,#ddd3c8)}
        .collectionCard:nth-child(3){background:linear-gradient(145deg,#e9e5df,#faf9f6)}
        .collectionCard:nth-child(4){background:linear-gradient(145deg,#d6c5b8,#f7f1eb)}
        .fabricFold{position:absolute;inset:0 0 34% 36%;opacity:.6;background:repeating-linear-gradient(90deg,rgba(126,92,67,.14) 0 18px,rgba(255,255,255,.36) 18px 40px,rgba(86,59,41,.08) 40px 58px);transform:skewX(-7deg);border-radius:0 0 0 80px}
        .tag{display:inline-block;align-self:flex-start;margin-bottom:auto;border:1px solid rgba(44,42,39,.16);border-radius:999px;padding:8px 11px;font-size:11px;text-transform:uppercase;letter-spacing:.08em;background:rgba(255,255,255,.55)}
        .collectionCard h3{font-family:Georgia,"Times New Roman",serif;font-size:34px;font-weight:500;margin:0 0 8px}.collectionCard p{margin:0;color:#636763;max-width:360px;line-height:1.55}

        .process{background:#242925;color:#f7f4ee}
        .process .eyebrow{color:#d0aa88}.process .sectionHead p{color:#b8c0ba}
        .processGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:44px}
        .step{border-top:1px solid #4a514c;padding-top:20px}.stepNum{font-size:12px;color:#cba685;margin-bottom:40px}.step h3{font-size:20px;margin:0 0 10px}.step p{color:#aeb6b0;line-height:1.6;font-size:14px}

        .projectGrid{display:grid;grid-template-columns:1.2fr .8fr .8fr;gap:18px}
        .projectCard{min-height:410px;border-radius:26px;padding:24px;position:relative;overflow:hidden;display:flex;flex-direction:column;justify-content:flex-end;background:linear-gradient(135deg,#c9b8a8,#f5efe9)}
        .projectCard:nth-child(2){background:linear-gradient(135deg,#a69280,#dfd2c7)}.projectCard:nth-child(3){background:linear-gradient(135deg,#eee9e1,#cfc1b3)}
        .projectCard:after{content:"";position:absolute;inset:0;background:repeating-linear-gradient(90deg,transparent 0 45px,rgba(255,255,255,.19) 45px 56px,rgba(69,48,35,.035) 56px 62px)}
        .projectInfo{position:relative;z-index:2;background:rgba(255,255,255,.88);backdrop-filter:blur(8px);padding:16px;border-radius:17px}
        .projectInfo strong{display:block;font-size:16px;margin-bottom:5px}.projectInfo span{font-size:12px;color:#6c706d}

        .aboutGrid{display:grid;grid-template-columns:.9fr 1.1fr;gap:60px;align-items:center}
        .aboutVisual{min-height:470px;border-radius:32px;background:linear-gradient(145deg,#d5c5b8,#f4eee8 42%,#b89f8d);position:relative;overflow:hidden}
        .aboutVisual:before{content:"";position:absolute;left:14%;top:8%;width:34%;height:90%;background:repeating-linear-gradient(90deg,#dfd2c7 0 20px,#f1ebe5 20px 38px,#c4af9e 38px 46px);border-radius:0 0 70px 70px;box-shadow:16px 16px 45px rgba(50,36,27,.12)}
        .aboutVisual:after{content:"";position:absolute;right:8%;bottom:12%;width:46%;height:34%;background:#8e7564;border-radius:28px;box-shadow:0 24px 40px rgba(45,35,28,.14)}
        .aboutCopy h2{font-family:Georgia,"Times New Roman",serif;font-size:52px;font-weight:500;line-height:1.04;margin:0 0 22px}.aboutCopy p{color:var(--muted);line-height:1.8;margin:0 0 18px}
        .aboutPoints{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:24px}.aboutPoint{background:#fff;border:1px solid var(--line);border-radius:16px;padding:16px;font-size:13px}

        .faqWrap{display:grid;grid-template-columns:.8fr 1.2fr;gap:60px}.faqTitle h2{font-family:Georgia,"Times New Roman",serif;font-size:48px;font-weight:500;line-height:1.05;margin:0 0 16px}.faqTitle p{color:var(--muted);line-height:1.7}
        .faqItem{border-top:1px solid var(--line);padding:20px 0}.faqButton{width:100%;display:flex;justify-content:space-between;gap:18px;align-items:center;border:0;background:transparent;padding:0;text-align:left;font-weight:700;font-size:16px;cursor:pointer}.faqAnswer{color:var(--muted);line-height:1.7;font-size:14px;max-height:0;overflow:hidden;transition:.25s ease}.faqItem.open .faqAnswer{max-height:160px;padding-top:13px}

        .contact{padding-top:40px}.contactCard{background:var(--warm);border-radius:34px;padding:48px;display:grid;grid-template-columns:1fr .9fr;gap:48px;align-items:center}.contactCard h2{font-family:Georgia,"Times New Roman",serif;font-size:52px;line-height:1.02;font-weight:500;margin:0 0 18px}.contactCard p{color:#666a66;line-height:1.7;max-width:560px}.contactForm{background:#fff;border-radius:24px;padding:22px;box-shadow:var(--shadow)}
        .formGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}.field{display:flex;flex-direction:column;gap:6px}.field.full{grid-column:1/-1}.field label{font-size:12px;color:#666}.field input,.field textarea{border:1px solid #e0dbd3;border-radius:12px;padding:12px 13px;background:#fcfbf9;outline:none}.field textarea{min-height:90px;resize:vertical}.submitBtn{grid-column:1/-1;border:0;border-radius:999px;background:var(--ink);color:#fff;padding:14px 18px;font-weight:700;cursor:pointer}

        footer{padding:52px 0 34px}.footerTop{display:grid;grid-template-columns:1.5fr repeat(3,1fr);gap:30px;padding-bottom:34px;border-bottom:1px solid var(--line)}.footerBrand p{color:var(--muted);line-height:1.7;max-width:360px}.footerCol h4{font-size:12px;text-transform:uppercase;letter-spacing:.09em;margin:0 0 14px}.footerCol a{display:block;color:#666b67;font-size:13px;margin:9px 0}.footerBottom{display:flex;justify-content:space-between;gap:20px;align-items:center;padding-top:20px;color:#868984;font-size:12px}

        /* BUILD 2 — production polish */
        .navWrap{box-shadow:0 1px 0 rgba(31,35,33,.03)}
        .brand{font-weight:500}.brandMark{background:#fff}
        .hero{padding:72px 0 46px}.heroLead{max-width:570px}
        .heroVisual{background-image:linear-gradient(180deg,rgba(20,18,16,.01),rgba(20,18,16,.12)),url("/images/hero-clean-v34.webp");background-size:cover;background-position:center}
        .heroVisual:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 62%,rgba(54,43,34,.08));pointer-events:none}
        .collectionCard,.projectCard{isolation:isolate}
        .collectionCard:after,.projectCard:before{content:"";position:absolute;inset:0;z-index:-1;background:radial-gradient(circle at 78% 20%,rgba(255,255,255,.62),transparent 26%)}
        .collectionCard h3,.collectionCard p,.collectionCard .tag{position:relative;z-index:2}.collectionCard{background-size:cover!important;background-position:center!important}.collectionCard:before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(20,18,16,.03) 25%,rgba(20,18,16,.72) 100%);z-index:1}.collectionCard h3,.collectionCard p{color:#fff}.collectionCard .tag{background:rgba(255,255,255,.9)}.fabricFold{display:none}.projectCard{background-size:cover!important;background-position:center!important}.aboutVisual{background-image:url("/images/about-clean-v34.webp")!important;background-size:cover!important;background-position:center!important}
        .projectInfo{border:1px solid rgba(255,255,255,.62)}
        .primaryBtn,.navCta,.submitBtn{transition:transform .18s ease,box-shadow .18s ease,background .18s ease}
        .primaryBtn:hover,.navCta:hover,.submitBtn:hover{transform:translateY(-1px);box-shadow:0 10px 24px rgba(31,35,33,.14)}
        .secondaryBtn:hover{border-color:#bcae9f;background:#faf7f2}
        .contactForm:focus-within{box-shadow:0 22px 60px rgba(38,33,28,.12)}
        .field input:focus,.field textarea:focus{border-color:#9f8169;box-shadow:0 0 0 3px rgba(126,92,67,.08)}
        .formStatus{grid-column:1/-1;margin:0;padding:11px 13px;border-radius:12px;background:#f2eee8;color:#4d524e;font-size:13px;line-height:1.5}
        .footerBottom a{color:inherit}
        /* BUILD 3.3 — clean photography production finish */
        .heroVisual,.collectionCard,.projectCard,.aboutVisual{image-rendering:auto}
        /* BUILD 3.1 — final production finish */
        .navWrap{position:relative;top:auto;z-index:30}
        .brand{min-width:178px;line-height:1}
        .brandLogo{display:block;width:168px;height:58px;object-fit:contain;object-position:left center}
        .footerLogo{display:block;width:190px;height:86px;object-fit:contain;object-position:left center;margin-bottom:10px}
        .brandMark{display:none}
        .aboutVisual:before,.aboutVisual:after{display:none!important}
        .aboutVisual{min-height:500px;background-position:center 48%!important;box-shadow:0 18px 48px rgba(38,33,28,.08)}
        #about{padding-top:96px;padding-bottom:88px}
        .aboutCopy{padding:8px 0}
        .contact{padding-top:56px;scroll-margin-top:24px}
        .contactCard{position:relative;isolation:isolate;overflow:hidden}
        .contactCard:before{content:"";position:absolute;inset:0;z-index:-1;background:radial-gradient(circle at 15% 10%,rgba(255,255,255,.52),transparent 34%)}
        .navCta{white-space:nowrap}
        @media(max-width:900px){.brandLogo{width:146px;height:52px}.navCta{display:none}.nav{min-height:68px}.menuBtn{margin-left:auto}.footerLogo{width:170px;height:78px}.aboutVisual{min-height:430px}}
        @media(max-width:620px){.brandLogo{width:126px;height:46px}.nav{min-height:62px}.aboutVisual{min-height:360px}.contact{padding-top:34px}.contactCard{padding:26px}.footerLogo{width:150px;height:70px}}
        /* BUILD 3.4 — verified asset wiring + alignment */
        .container{width:min(1240px,calc(100% - 48px))}
        .nav{min-height:82px;display:grid;grid-template-columns:220px 1fr auto;align-items:center}
        .brand{min-width:0}.brandLogo{width:198px;height:66px}
        .navLinks{justify-content:center}
        .hero{padding:64px 0 34px}.heroGrid{grid-template-columns:minmax(0,.94fr) minmax(0,1.06fr);gap:64px;align-items:center}
        .heroVisual{min-height:600px;background-position:center center!important}
        .heroVisual:before{display:none}.heroVisual:after{background:linear-gradient(180deg,transparent 70%,rgba(31,35,33,.08))}
        .heroMeta{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}
        .trustStrip{padding-top:20px}.trustGrid{align-items:stretch}.trustItem{height:100%;padding:20px}
        section{padding:82px 0}
        .sectionHead{display:grid;grid-template-columns:minmax(0,1fr) minmax(320px,480px);align-items:end;gap:64px;margin-bottom:38px}
        .sectionHead p{max-width:none;margin:0}
        .collectionGrid{gap:20px}.collectionCard{min-height:390px;padding:28px;background-position:center!important}
        .collectionCard:after{display:none}
        .process .sectionHead{align-items:end}.processGrid{margin-top:36px;gap:28px;align-items:start}.step{min-height:210px}.stepNum{margin-bottom:32px}
        .projectGrid{grid-template-columns:1.15fr 1fr 1fr;gap:20px;align-items:stretch}.projectCard{min-height:390px;padding:18px;background-position:center!important}.projectCard:after,.projectCard:before{display:none}.projectInfo{width:min(92%,300px)}
        .aboutGrid{grid-template-columns:minmax(0,.92fr) minmax(0,1.08fr);gap:72px;align-items:center}.aboutVisual{min-height:520px;background-position:center!important}.aboutCopy{padding:0}.aboutPoints{gap:14px}.aboutPoint{min-height:54px;display:flex;align-items:center}
        .faqWrap{grid-template-columns:minmax(0,.72fr) minmax(0,1.28fr);gap:84px;align-items:start}.faqTitle{padding-top:4px}.faqItem:first-child{margin-top:0}
        .contactCard{grid-template-columns:minmax(0,.9fr) minmax(420px,1fr);gap:72px;padding:54px 58px;align-items:center}.contactForm{padding:24px}
        .footerTop{grid-template-columns:1.8fr .7fr .8fr 1.05fr;gap:52px;align-items:start}.footerBrand p{max-width:310px}
        @media(max-width:900px){.container{width:min(100% - 32px,1240px)}.nav{display:flex}.brandLogo{width:156px;height:54px}.heroGrid,.aboutGrid,.faqWrap,.contactCard{grid-template-columns:1fr;gap:36px}.sectionHead{grid-template-columns:1fr;gap:18px}.heroVisual{min-height:520px}.heroMeta{grid-template-columns:repeat(3,1fr)}.projectGrid{grid-template-columns:1fr 1fr}.projectCard:first-child{grid-column:1/-1}.footerTop{grid-template-columns:1fr 1fr;gap:34px}}
        @media(max-width:620px){.container{width:min(100% - 24px,1240px)}.hero{padding-top:34px}.heroVisual{min-height:420px}.heroMeta{grid-template-columns:1fr;gap:12px}.collectionGrid,.processGrid,.projectGrid,.aboutPoints,.formGrid{grid-template-columns:1fr}.projectCard:first-child{grid-column:auto}.contactCard{padding:28px;gap:30px}.footerTop{grid-template-columns:1fr}}
        @media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*{transition:none!important}}
        @media(max-width:900px){
          .navLinks{display:none}.menuBtn{display:block}.navLinks.open{display:flex;position:absolute;left:20px;right:20px;top:72px;flex-direction:column;align-items:stretch;background:#fff;border:1px solid var(--line);border-radius:20px;padding:18px;box-shadow:var(--shadow)}
          .heroGrid,.aboutGrid,.faqWrap,.contactCard{grid-template-columns:1fr}.heroVisual{min-height:520px}.trustGrid,.processGrid{grid-template-columns:1fr 1fr}.projectGrid{grid-template-columns:1fr 1fr}.projectCard:first-child{grid-column:1/-1}.footerTop{grid-template-columns:1fr 1fr}
        }
        @media(max-width:620px){
          .container{width:min(100% - 24px,1180px)}.hero{padding-top:34px}.heroGrid{gap:30px}.heroVisual{min-height:430px;border-radius:26px}.heroMeta{gap:16px;flex-wrap:wrap}.trustGrid,.collectionGrid,.processGrid,.projectGrid,.aboutPoints,.formGrid{grid-template-columns:1fr}.projectCard:first-child{grid-column:auto}.sectionHead{align-items:flex-start;flex-direction:column}.contactCard{padding:28px}.contactCard h2,.aboutCopy h2{font-size:40px}.field.full,.submitBtn{grid-column:auto}.footerTop{grid-template-columns:1fr}.footerBottom{align-items:flex-start;flex-direction:column}
        }

        /* BUILD 3.5 — desktop scale + header finish */
        @media(min-width:1100px){
          .container{width:min(1360px,calc(100% - 64px))}
          .nav{min-height:94px;grid-template-columns:250px 1fr auto;gap:34px}
          .brandLogo{width:232px;height:78px}
          .navLinks{gap:34px;font-size:15px}
          .navCta{padding:13px 20px;font-size:13px}

          .hero{padding:72px 0 42px}
          .heroGrid{grid-template-columns:minmax(0,.92fr) minmax(0,1.08fr);gap:72px}
          h1{font-size:clamp(58px,5.6vw,90px);max-width:760px}
          .heroLead{font-size:19px;max-width:640px}
          .heroVisual{min-height:640px;border-radius:38px}

          .trustGrid{gap:16px}
          .trustItem{padding:22px}
          section{padding:90px 0}
          .sectionHead{grid-template-columns:minmax(0,1fr) minmax(360px,520px);gap:76px;margin-bottom:42px}
          .sectionHead h2{font-size:clamp(40px,3.8vw,58px)}

          .collectionGrid{gap:22px}
          .collectionCard{min-height:420px;padding:30px}
          .collectionCard h3{font-size:36px}

          .processGrid{gap:32px}
          .step{min-height:220px}
          .step h3{font-size:21px}

          .projectGrid{gap:22px}
          .projectCard{min-height:420px}
          .projectInfo{width:min(92%,320px)}

          .aboutGrid{gap:84px}
          .aboutVisual{min-height:560px}
          .aboutCopy h2{font-size:58px}

          .faqWrap{gap:96px}
          .contactCard{grid-template-columns:minmax(0,.92fr) minmax(460px,1fr);gap:82px;padding:62px 66px}
          .contactCard h2{font-size:56px}

          footer{padding-top:64px}
          .footerLogo{width:220px;height:98px}
          .footerTop{grid-template-columns:1.9fr .72fr .82fr 1.06fr;gap:62px}
        }

        @media(min-width:901px) and (max-width:1099px){
          .brandLogo{width:184px;height:62px}
          .nav{grid-template-columns:205px 1fr auto}
        }

        @media(max-width:900px){
          .brandLogo{width:164px;height:56px}
        }
        @media(max-width:620px){
          .brandLogo{width:142px;height:50px}
        }


        /* BUILD 3.6 — alignment refinement */
        .emailFallback{
          grid-column:1/-1;
          margin:0;
          min-height:46px;
          padding:10px 14px;
          border-radius:12px;
          background:#f2eee8;
          color:#686d68;
          display:flex;
          align-items:center;
          justify-content:center;
          gap:9px;
          text-align:center;
          font-size:13px;
          line-height:1.35;
        }
        .emailFallback a{color:#4b514d;text-decoration:none}
        .emailFallback a:hover{text-decoration:underline}

        /* keep every major section on the same left/right guide */
        .heroGrid,.sectionHead,.aboutGrid,.faqWrap,.contactCard,.footerTop{position:relative}
        .heroCopy,.aboutCopy,.faqTitle{min-width:0}
        .sectionHead > *,.aboutGrid > *,.faqWrap > *,.contactCard > *{min-width:0}

        @media(min-width:1100px){
          .container{width:min(1320px,calc(100% - 72px))}

          /* Header */
          .nav{min-height:104px;grid-template-columns:170px 1fr auto;gap:40px}
          .brand{display:flex;align-items:center;justify-content:flex-start}
          .brandLogo{width:132px;height:auto;max-height:88px;object-fit:contain;object-position:left center}
          .navLinks{justify-self:center;gap:38px}
          .navCta{justify-self:end}

          /* Hero */
          .hero{padding:70px 0 46px}
          .heroGrid{grid-template-columns:minmax(0,.94fr) minmax(0,1.06fr);gap:68px;align-items:center}
          .heroCopy{padding-right:18px}
          h1{font-size:clamp(58px,5.2vw,82px);max-width:700px}
          .heroLead{max-width:590px}
          .heroVisual{min-height:610px}

          .heroMeta{gap:24px;margin-top:32px}
          .heroMeta > div{padding-right:16px}
          .trustStrip{padding-top:24px}
          .trustGrid{gap:18px}
          .trustItem{padding:22px 24px;display:flex;flex-direction:column;justify-content:center}

          /* shared section title geometry */
          section{padding:86px 0}
          .sectionHead{
            grid-template-columns:minmax(0,.9fr) minmax(360px,.72fr);
            gap:92px;
            align-items:end;
            margin-bottom:40px
          }
          .sectionHead p{max-width:500px;justify-self:end}

          /* collections */
          .collectionGrid{gap:20px}
          .collectionCard{min-height:400px}
          .collectionCard h3{font-size:34px}

          /* process */
          .process .sectionHead{grid-template-columns:minmax(0,.9fr) minmax(360px,.72fr)}
          .processGrid{grid-template-columns:repeat(4,minmax(0,1fr));gap:26px}
          .step{min-height:195px}
          .stepNum{margin-bottom:28px}

          /* projects */
          .projectGrid{grid-template-columns:repeat(3,minmax(0,1fr));gap:20px}
          .projectCard{min-height:405px}
          .projectInfo{width:calc(100% - 36px);max-width:none}

          /* about */
          #about{padding-top:88px;padding-bottom:82px}
          .aboutGrid{grid-template-columns:minmax(0,.92fr) minmax(0,1.08fr);gap:76px}
          .aboutVisual{min-height:540px}
          .aboutCopy h2{font-size:56px;max-width:650px}
          .aboutCopy p{max-width:690px}
          .aboutPoints{grid-template-columns:repeat(2,minmax(0,1fr));gap:12px 16px}
          .aboutPoint{min-height:52px;padding:14px 16px}

          /* FAQ */
          .faqWrap{grid-template-columns:minmax(0,.74fr) minmax(0,1.26fr);gap:88px}
          .faqTitle{padding-top:0}
          .faqTitle p{max-width:430px}
          .faqItem{padding:18px 0}

          /* enquiry */
          .contact{padding-top:44px}
          .contactCard{
            grid-template-columns:minmax(0,.9fr) minmax(500px,1fr);
            gap:78px;
            padding:58px 62px;
            align-items:center
          }
          .contactCard > div:first-child{max-width:560px}
          .contactCard h2{font-size:54px}
          .contactForm{width:100%;max-width:610px;justify-self:end;padding:24px}
          .formGrid{gap:12px}
          .submitBtn{min-height:48px}
          .emailFallback{min-height:48px}

          /* footer */
          footer{padding-top:60px}
          .footerTop{grid-template-columns:1.65fr .72fr .82fr 1.08fr;gap:56px}
          .footerBrand{max-width:360px}
          .footerLogo{width:132px;height:auto;max-height:96px}
          .footerCol{padding-top:8px}
        }

        @media(min-width:901px) and (max-width:1099px){
          .container{width:min(100% - 48px,1180px)}
          .nav{grid-template-columns:150px 1fr auto;min-height:94px}
          .brandLogo{width:116px;height:auto;max-height:78px}
          .heroGrid{gap:48px}
          .sectionHead{gap:54px}
          .aboutGrid{gap:56px}
          .faqWrap{gap:58px}
          .contactCard{gap:52px}
        }

        @media(max-width:900px){
          .brandLogo{width:110px;height:auto;max-height:72px}
          .sectionHead p{justify-self:start}
          .contactForm{width:100%;max-width:none}
          .emailFallback{font-size:12.5px}
        }

        @media(max-width:620px){
          .brandLogo{width:96px;height:auto;max-height:64px}
          .emailFallback{min-height:44px;padding:9px 10px;gap:7px;flex-wrap:wrap}
          .contactCard > div:first-child{text-align:left}
        }

      `}</style>

      <div className="topNote"><div className="container topNoteInner">Custom curtains • Sheers • Blinds • Upholstery</div></div>

      <header className="navWrap">
        <div className="container nav">
          <a href="#home" className="brand" aria-label="The Drape Factory home">
            <img className="brandLogo" src="/images/logo-cropped-v36.png" alt="The Drape Factory" />
          </a>
          <nav className={`navLinks ${menuOpen ? "open" : ""}`}>
            <a href="#collections" onClick={() => setMenuOpen(false)}>Collections</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
          <a className="navCta" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp +91 91087 76325</a>
          <button className="menuBtn" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">☰</button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container heroGrid">
            <div>
              <div className="eyebrow">Made for your space</div>
              <h1>Windows dressed beautifully.</h1>
              <p className="heroLead">Custom curtains, sheers and window furnishings designed to bring softness, privacy and a finished sense of proportion to your interiors.</p>
              <div className="heroActions">
                <a className="primaryBtn" href="#contact">Book a consultation <ArrowIcon /></a>
                <a className="secondaryBtn" href="#collections">Explore collections</a>
              </div>
              <div className="heroMeta">
                <div><strong>Custom fit</strong>Made to your measurements</div>
                <div><strong>Curated fabrics</strong>Selected for your space</div>
                <div><strong>Complete finish</strong>From selection to installation</div>
              </div>
            </div>
            <div className="heroVisual" aria-label="Custom layered curtains and sheers in a finished living room">
              <div className="visualCard"><strong>Tailored to the room</strong><span>Layer sheers, curtains and blackout options for the right balance of light and privacy.</span></div>
            </div>
          </div>
        </section>

        <div className="container trustStrip">
          <div className="trustGrid">
            <div className="trustItem"><strong>Consultation led</strong><span>Choose fabrics and finishes with confidence</span></div>
            <div className="trustItem"><strong>Measured precisely</strong><span>Designed around your exact window dimensions</span></div>
            <div className="trustItem"><strong>Made to order</strong><span>Customised for your interior and functional needs</span></div>
            <div className="trustItem"><strong>Installation ready</strong><span>A complete, polished window treatment experience</span></div>
          </div>
        </div>

        <section id="collections">
          <div className="container">
            <div className="sectionHead">
              <div><div className="eyebrow">Our collections</div><h2>Layer texture, light and privacy.</h2></div>
              <p>Explore a curated range of window and interior textiles designed to work together across a complete room.</p>
            </div>
            <div className="collectionGrid">
              {collections.map((item) => (
                <article className="collectionCard" key={item.title} style={{backgroundImage:`url(${item.image})`}}>
                  <div className="fabricFold" />
                  <span className="tag">{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="process">
          <div className="container">
            <div className="sectionHead">
              <div><div className="eyebrow">How it works</div><h2>From window to finished room.</h2></div>
              <p>A simple consultation-led journey that keeps fabric choice, measurement, fabrication and installation connected.</p>
            </div>
            <div className="processGrid">
              {[['01','Consult','Tell us about your windows, interiors, light and privacy needs.'],['02','Select','Choose fabric, lining, heading style and coordinated finishes.'],['03','Measure & make','Confirm dimensions and tailor each treatment to the space.'],['04','Install','Complete the room with a clean, considered final installation.']].map(([n,t,p]) => <div className="step" key={n}><div className="stepNum">{n}</div><h3>{t}</h3><p>{p}</p></div>)}
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="container">
            <div className="sectionHead">
              <div><div className="eyebrow">Project inspiration</div><h2>Designed to belong in the room.</h2></div>
              <p>A considered edit of window treatments for calm, contemporary interiors, showing how layered fabrics can shape light, privacy and atmosphere.</p>
            </div>
            <div className="projectGrid">
              {projects.map((p) => <article className="projectCard" key={p.name} style={{backgroundImage:`url(${p.image})`}}><div className="projectInfo"><strong>{p.name}</strong><span>{p.type} • {p.tone}</span></div></article>)}
            </div>
          </div>
        </section>

        <section id="about">
          <div className="container aboutGrid">
            <div className="aboutVisual" />
            <div className="aboutCopy">
              <div className="eyebrow">The Drape Factory</div>
              <h2>A softer, more considered way to finish interiors.</h2>
              <p>We believe window furnishings should do more than cover a window. The right drape changes light, proportion, privacy and the overall feeling of a room.</p>
              <p>Our approach is built around a premium but approachable consultation experience—helping customers move from inspiration to a finished solution with thoughtful guidance at every stage.</p>
              <div className="aboutPoints"><div className="aboutPoint">Made-to-measure approach</div><div className="aboutPoint">Layered curtain solutions</div><div className="aboutPoint">Fabric-led recommendations</div><div className="aboutPoint">Residential & interior projects</div></div>
            </div>
          </div>
        </section>

        <section>
          <div className="container faqWrap">
            <div className="faqTitle"><div className="eyebrow">Common questions</div><h2>Before you book.</h2><p>A few helpful details about our made-to-measure consultation, measurement and installation journey.</p></div>
            <div>
              {faq.map(([q,a], i) => <div className={`faqItem ${activeFaq === i ? 'open' : ''}`} key={q}><button className="faqButton" onClick={() => setActiveFaq(activeFaq === i ? -1 : i)}><span>{q}</span><span>{activeFaq === i ? '−' : '+'}</span></button><div className="faqAnswer">{a}</div></div>)}
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container contactCard">
            <div><div className="eyebrow">Start your project</div><h2>Tell us about your windows.</h2><p>Share the room, approximate requirement and preferred style, and we’ll use it to prepare your consultation request.</p></div>
            <form className="contactForm" onSubmit={(e) => { e.preventDefault(); const data = new FormData(e.currentTarget); const message = `Hello The Drape Factory,%0A%0AI would like to request a consultation.%0A%0AName: ${encodeURIComponent(data.get("name"))}%0APhone: ${encodeURIComponent(data.get("phone"))}%0AProject: ${encodeURIComponent(data.get("project"))}%0AMessage: ${encodeURIComponent(data.get("message"))}`; setFormStatus("Opening WhatsApp with your enquiry…"); window.open(`${whatsappUrl}?text=${message}`, "_blank", "noopener,noreferrer"); }}>
              <div className="formGrid">
                <div className="field"><label>Name</label><input name="name" autoComplete="name" required placeholder="Your name" /></div>
                <div className="field"><label>Phone</label><input name="phone" autoComplete="tel" inputMode="tel" required placeholder="Mobile number" /></div>
                <div className="field full"><label>Project type</label><input name="project" required placeholder="Curtains, sheers, blinds, full home..." /></div>
                <div className="field full"><label>Message</label><textarea name="message" required placeholder="Tell us a little about your requirement" /></div>
                <button className="submitBtn" type="submit">Send enquiry on WhatsApp</button><p className="emailFallback"><span aria-hidden="true">✉</span><span>Prefer email? <a href={`mailto:${email}`}><strong>{email}</strong></a></span></p>{formStatus && <p className="formStatus" role="status">{formStatus}</p>}
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footerTop">
            <div className="footerBrand"><div className="brand"><img className="footerLogo" src="/images/logo-cropped-v36.png" alt="The Drape Factory" /></div><p>Custom window furnishings and interior textiles designed to bring the room together.</p></div>
            <div className="footerCol"><h4>Explore</h4><a href="#collections">Collections</a><a href="#projects">Projects</a><a href="#about">About</a></div>
            <div className="footerCol"><h4>Services</h4><a href="#contact">Consultation</a><a href="#contact">Measurement</a><a href="#contact">Installation</a></div>
            <div className="footerCol"><h4>Contact</h4><a href={whatsappUrl} target="_blank" rel="noreferrer">+91 91087 76325</a><a href={`mailto:${email}`}>{email}</a></div>
          </div>
          <div className="footerBottom"><span>© {new Date().getFullYear()} The Drape Factory. All rights reserved.</span><span>thedrapefactory.in</span></div>
        </div>
      </footer>
    </div>
  );
}
