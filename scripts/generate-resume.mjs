import PDFDocument from "pdfkit";
import fs from "fs";

const doc = new PDFDocument({ size: "A4", margin: 50 });
doc.pipe(fs.createWriteStream("public/Vansh_Jaiswal_Resume.pdf"));

const PRIMARY = "#0f172a";
const ACCENT = "#10b981";
const MUTED = "#64748b";
const RULE = "#e2e8f0";

function h1(t) {
  doc.font("Helvetica-Bold").fontSize(22).fillColor(PRIMARY).text(t);
}
function h2(t) {
  doc.moveDown(0.6);
  doc.font("Helvetica-Bold").fontSize(11).fillColor(ACCENT).text(t.toUpperCase(), { characterSpacing: 1.2 });
  const y = doc.y + 2;
  doc.moveTo(50, y).lineTo(545, y).strokeColor(RULE).lineWidth(0.8).stroke();
  doc.moveDown(0.4);
}
function h3(t, right) {
  doc.font("Helvetica-Bold").fontSize(11).fillColor(PRIMARY).text(t, { continued: !!right });
  if (right) doc.font("Helvetica").fillColor(MUTED).text(`  —  ${right}`);
}
function body(t) {
  doc.font("Helvetica").fontSize(10).fillColor(PRIMARY).text(t, { lineGap: 2 });
}
function bullet(t) {
  doc.font("Helvetica").fontSize(10).fillColor(PRIMARY).text(`•  ${t}`, { indent: 8, lineGap: 2 });
}

// Header
h1("Vansh Jaiswal");
doc.font("Helvetica").fontSize(11).fillColor(ACCENT).text("Backend Developer (Node.js)");
doc.moveDown(0.3);
doc.font("Helvetica").fontSize(9).fillColor(MUTED)
  .text("jaiswalvansh96@gmail.com  •  +91 7249782852  •  Nagpur, Maharashtra  •  github.com/Vanshgg33");

h2("Professional Summary");
body("Backend Developer specializing in Node.js, RESTful APIs, and scalable backend systems. Hands-on experience building SaaS applications with a strong focus on JWT/OAuth authentication, microservices architecture, and secure API design. Skilled in Node.js, NestJS, MongoDB, MySQL, and Docker-based deployments.");

h2("Technical Skills");
body("Backend: Node.js, NestJS, REST APIs, JWT, OAuth, Microservices");
body("Databases: MySQL, MongoDB, SQL");
body("Frontend: Angular, HTML, CSS");
body("Tools: Docker, Git, IntelliJ IDEA, Eclipse");
body("Languages: JavaScript, TypeScript, Java");

h2("Experience");
h3("Backend Developer (Node.js)", "Arobuz Growth Agency  •  Current");
doc.moveDown(0.2);
[
  "Developed and maintained scalable backend services using Node.js and NestJS for SaaS applications.",
  "Built RESTful APIs for authentication, user management, and core business logic.",
  "Implemented secure JWT and OAuth authentication, improving access control and security.",
  "Contributed to microservices-based architecture for modular, independently deployable services.",
  "Integrated MongoDB and MySQL for efficient data storage and retrieval.",
  "Containerized backend services using Docker for consistent deployments.",
].forEach(bullet);

doc.moveDown(0.4);
h3("Full Stack Developer Intern", "Resonit  •  Previous");
doc.moveDown(0.2);
[
  "Developed and integrated REST APIs for authentication and user workflows.",
  "Implemented JWT-based authentication systems, enhancing application security.",
  "Contributed to backend feature development and API integration.",
].forEach(bullet);

h2("Projects");
h3("WhatsApp Commerce Backend System (NestJS)  ★");
[
  "Backend-driven WhatsApp commerce platform for orders, inventory, and customer interactions.",
  "Implemented role-based access control (RBAC) for packer, biller, and delivery roles.",
  "Built inventory management APIs with real-time stock tracking and Meta Catalog sync.",
  "Integrated WhatsApp Business workflows for order confirmation and instant billing.",
].forEach(bullet);

doc.moveDown(0.3);
h3("Restaurant Management & Ordering System");
[
  "Backend APIs for order processing, menu management, and admin operations.",
  "KOT (Kitchen Order Ticket) system for streamlined kitchen workflows.",
  "Live: rangeeladhaba.in",
].forEach(bullet);

doc.moveDown(0.3);
h3("Card Management System");
bullet("Secure backend with Spring Boot, REST APIs, and MySQL integration.");

doc.moveDown(0.3);
h3("Medical Diagnostic Center Application");
bullet("Spring Boot backend with secure API endpoints for patient data management.");

h2("Education");
h3("Bachelor of Computer Applications (BCA)", "Manipal University Jaipur  •  Expected 2026");

doc.end();
console.log("Generated public/Vansh_Jaiswal_Resume.pdf");
