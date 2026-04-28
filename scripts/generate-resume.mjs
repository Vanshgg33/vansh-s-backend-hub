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
body("Backend Developer with experience designing scalable microservices using Node.js and NestJS, specializing in REST API development, authentication systems (JWT/OAuth), and high-performance backend architectures. Experienced in Dockerized deployments, data pipelines, and AI-integrated systems.");

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
  "Designed and developed an end-to-end CRM backend system managing users, leads, pipelines, and interaction history, with scalable REST APIs and RBAC; integrated AI-powered proposal generation using Gemini APIs and a rich text editor for dynamic content creation.",
  "Built a high-performance web scraping engine capable of extracting data from multiple platforms, including social media sources, using API integrations and structured data pipelines.",
  "Engineered a social media data aggregation system that collects and normalizes profiles, posts, and engagement signals into a unified schema for analytics.",
  "Developed a Twitter trend analysis engine to identify emerging topics, hashtags, and engagement patterns through optimized APIs.",
  "Architected and shipped backend services in Node.js and NestJS for SaaS products, exposing 10+ RESTful APIs across authentication, user management, and core workflows.",
  "Implemented role-based access control (RBAC) and JWT/OAuth authentication across services.",
  "Containerized services using Docker within a microservices architecture.",
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
h3("WhatsApp Commerce Backend System (NestJS)");
[
  "Designed a WhatsApp-first commerce platform enabling users to browse products, place orders, and receive confirmations entirely through WhatsApp Business workflows.",
  "Built conversational order flows (catalog browsing, cart creation, order placement, and status updates) integrated with WhatsApp Business APIs.",
  "Developed backend services for order processing, inventory management, and customer interactions with real-time stock tracking and Meta Catalog sync.",
  "Implemented RBAC for packer, biller, and delivery roles, supporting end-to-end fulfillment operations.",
  "Created event-driven APIs for order lifecycle management (creation, confirmation, billing, dispatch) with webhook integrations for real-time notifications.",
].forEach(bullet);

doc.moveDown(0.3);
h3("Restaurant Management & Ordering System");
[
  "Backend APIs for order processing, menu management, and admin operations.",
  "KOT (Kitchen Order Ticket) system for kitchen workflows.",
].forEach(bullet);

doc.moveDown(0.3);
h3("Card Management System");
bullet("Secure backend with Spring Boot, REST APIs, and MySQL integration.");

doc.moveDown(0.3);
h3("Unified Admin Dashboard (Commerce & CRM)");
[
  "Developed a unified frontend dashboard for managing orders, inventory, and customer interactions across the platform.",
  "Built real-time order monitoring and stock management interfaces for operational efficiency.",
  "Implemented a chat system to communicate with users, view conversation history, and access previous orders within a single interface.",
  "Integrated backend APIs to provide a centralized view of customer data, order history, and engagement insights.",
].forEach(bullet);

h2("Education");
h3("Bachelor of Computer Applications (BCA)", "Manipal University Jaipur  •  Expected 2026");

doc.end();
console.log("Generated public/Vansh_Jaiswal_Resume.pdf");
