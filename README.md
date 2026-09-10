# The Drape Factory — Public Website Build 4.4

Clean CSS consolidation build.

This version removes the layered desktop override strategy that caused the deployed layout to diverge from the approved reference.

What changed:
- consolidated desktop CSS into one production block
- recalibrated global typography and spacing
- corrected hero scale and image ratio
- corrected benefit strip so custom SVG icons render at the intended size
- removed table-like benefit dividers in the winning CSS layer
- tightened Collections, Process, Projects, About, FAQ, Contact and Footer
- reduced excessive vertical whitespace
- preserved current photography, logo, favicon, WhatsApp, email and enquiry flow

Deploy:
- Build command: npm run build
- Output directory: dist
- Production domain: thedrapefactory.in
