import PDFDocument from "pdfkit";
import fs from "fs";

const PRIMARY = "#000000";
const RULE = "#94a3b8";

const PAGE_MARGIN = 38;
const LEFT = PAGE_MARGIN;
const PAGE_WIDTH = 595.28;
const RIGHT = PAGE_WIDTH - PAGE_MARGIN;
const CONTENT_WIDTH = RIGHT - LEFT;

const BODY = 9.6;
const LINE_GAP = 1.2;
const BULLET_GAP = 1.0;

const doc = new PDFDocument({
  size: "A4",
  margin: PAGE_MARGIN,
  info: {
    Title: "Vansh Jaiswal - Backend Engineer Resume",
    Author: "Vansh Jaiswal",
    Subject:
      "Backend Engineer Resume - Node.js, NestJS, Spring Boot, Microservices, REST APIs, MongoDB, MySQL, Docker, JWT, OAuth, WebSockets",
    Keywords:
      "Backend Engineer, Backend Developer, Software Engineer, Node.js, NestJS, Spring Boot, Java, JavaScript, TypeScript, Python, Microservices, REST APIs, RESTful APIs, MongoDB, MySQL, SQL, Docker, JWT, OAuth, OAuth 2.0, RBAC, WebSockets, FastAPI, Express, Spring Data JPA, Spring Security, CI/CD, Git, System Design, API Design, Event-Driven Architecture, Distributed Systems, Scalability, Full Stack Developer",
  },
});
doc.pipe(fs.createWriteStream("public/Vansh_Jaiswal_Resume.pdf"));

function sectionTitle(t) {
  doc.moveDown(0.35);
  doc
    .font("Helvetica-Bold")
    .fontSize(10.5)
    .fillColor(PRIMARY)
    .text(t, LEFT, doc.y, { characterSpacing: 0.8 });
  const y = doc.y + 1.5;
  doc
    .moveTo(LEFT, y)
    .lineTo(RIGHT, y)
    .strokeColor(RULE)
    .lineWidth(0.6)
    .stroke();
  doc.moveDown(0.3);
}

function roleHeader(title, right) {
  const startY = doc.y;
  doc
    .font("Helvetica-Bold")
    .fontSize(10.2)
    .fillColor(PRIMARY)
    .text(title, LEFT, startY, { width: CONTENT_WIDTH * 0.72 });
  const leftEndY = doc.y;
  doc
    .font("Helvetica")
    .fontSize(9.7)
    .fillColor(PRIMARY)
    .text(right, LEFT + CONTENT_WIDTH * 0.72, startY, {
      width: CONTENT_WIDTH * 0.28,
      align: "right",
    });
  doc.y = Math.max(leftEndY, doc.y);
  doc.moveDown(0.15);
}

function projectHeader(title, stack) {
  doc
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor(PRIMARY)
    .text(title, LEFT, doc.y, { continued: !!stack });
  if (stack) {
    doc
      .font("Helvetica-Oblique")
      .fontSize(9.5)
      .fillColor(PRIMARY)
      .text(`  -  ${stack}`, { lineGap: LINE_GAP });
  }
  doc.moveDown(0.1);
}

function bullet(t) {
  const x = LEFT + 13;
  const startY = doc.y;
  doc
    .font("Helvetica")
    .fontSize(BODY)
    .fillColor(PRIMARY)
    .text("•", LEFT + 3, startY);
  doc.text(t, x, startY, {
    width: CONTENT_WIDTH - 15,
    lineGap: BULLET_GAP,
    align: "left",
  });
  doc.moveDown(0.05);
}

function skillLine(label, value) {
  doc
    .font("Helvetica-Bold")
    .fontSize(BODY)
    .fillColor(PRIMARY)
    .text(`${label}:  `, LEFT, doc.y, {
      continued: true,
      width: CONTENT_WIDTH,
    });
  doc
    .font("Helvetica")
    .fillColor(PRIMARY)
    .text(value, { width: CONTENT_WIDTH, lineGap: LINE_GAP });
  doc.moveDown(0.1);
}

// ===== Header =====
doc
  .font("Helvetica-Bold")
  .fontSize(20)
  .fillColor(PRIMARY)
  .text("VANSH JAISWAL", LEFT, PAGE_MARGIN, {
    width: CONTENT_WIDTH,
    align: "center",
    characterSpacing: 1.2,
  });
doc
  .font("Helvetica")
  .fontSize(10.2)
  .fillColor(PRIMARY)
  .text(
    "Backend Engineer  |  Node.js  ·  NestJS  ·  Spring Boot  ·  Microservices  ·  REST APIs",
    LEFT,
    doc.y + 3,
    { width: CONTENT_WIDTH, align: "center" }
  );
const LINK_COLOR = "#0b5fff";
const CONTACT_FONT_SIZE = 9.3;
const CONTACT_LINE_HEIGHT = 12;

function contactLine(parts, y) {
  doc.font("Helvetica").fontSize(CONTACT_FONT_SIZE);
  const sep = "  |  ";
  const sepWidth = doc.widthOfString(sep);
  const widths = parts.map((p) => doc.widthOfString(p.text));
  const totalWidth =
    widths.reduce((a, b) => a + b, 0) + sepWidth * (parts.length - 1);
  let x = LEFT + (CONTENT_WIDTH - totalWidth) / 2;
  parts.forEach((p, idx) => {
    if (p.link) {
      doc.fillColor(LINK_COLOR).text(p.text, x, y, { lineBreak: false });
      const h = doc.currentLineHeight();
      const underlineY = y + CONTACT_FONT_SIZE + 0.5;
      doc
        .moveTo(x, underlineY)
        .lineTo(x + widths[idx], underlineY)
        .strokeColor(LINK_COLOR)
        .lineWidth(0.4)
        .stroke();
      doc.link(x, y, widths[idx], h, p.link);
    } else {
      doc.fillColor(PRIMARY).text(p.text, x, y, { lineBreak: false });
    }
    x += widths[idx];
    if (idx < parts.length - 1) {
      doc.fillColor(PRIMARY).text(sep, x, y, { lineBreak: false });
      x += sepWidth;
    }
  });
  doc.fillColor(PRIMARY);
}

const line1Y = doc.y + 4;
contactLine(
  [
    { text: "jaiswalvansh96@gmail.com", link: "mailto:jaiswalvansh96@gmail.com" },
    { text: "+91 7249782852", link: "tel:+917249782852" },
    { text: "Bangalore, Karnataka, India" },
  ],
  line1Y
);

const line2Y = line1Y + CONTACT_LINE_HEIGHT;
contactLine(
  [
    { text: "linkedin.com/in/vansh-jaiswal", link: "https://linkedin.com/in/vansh-jaiswal" },
    { text: "github.com/Vanshgg33", link: "https://github.com/Vanshgg33" },
    { text: "vansh-s-backend-hub.vercel.app", link: "https://vansh-s-backend-hub.vercel.app" },
  ],
  line2Y
);
doc.y = line2Y + CONTACT_LINE_HEIGHT;

// ===== Professional Summary =====
sectionTitle("PROFESSIONAL SUMMARY");
doc
  .font("Helvetica")
  .fontSize(BODY)
  .fillColor(PRIMARY)
  .text(
    "Results-driven Backend Engineer with 1+ years of production experience designing scalable microservices, RESTful APIs, and AI-integrated SaaS platforms across 5+ client products. Proficient in Node.js, NestJS, Spring Boot, Java, TypeScript, and Python, with deep expertise in MongoDB, MySQL, Docker, JWT, OAuth 2.0, and WebSockets. Reduced operational turnaround by 60% through Gemini AI automation and eliminated unauthorized access incidents via hardened authentication.",
    LEFT,
    doc.y,
    { width: CONTENT_WIDTH, lineGap: LINE_GAP, align: "left" }
  );

// ===== Technical Skills =====
sectionTitle("TECHNICAL SKILLS");
skillLine(
  "Languages",
  "JavaScript (ES2022+), TypeScript, Java, Python, SQL"
);
skillLine(
  "Backend",
  "Node.js, NestJS, Spring Boot, Spring Data JPA, Spring Security, Express.js, FastAPI, REST APIs, Microservices, WebSockets, Event-Driven Architecture"
);
skillLine(
  "Databases",
  "MongoDB, MySQL, SQL, NoSQL, Schema Design, Query Optimization"
);
skillLine(
  "Auth & Security",
  "JWT, OAuth 2.0, RBAC (Role-Based Access Control), Spring Security, Webhook Verification"
);
skillLine(
  "DevOps & Tools",
  "Docker, Git, GitHub, CI/CD, Vercel, Postman, Linux"
);
skillLine(
  "Integrations",
  "Google APIs, Meta Graph API, Razorpay, Gemini AI, Power BI, Playwright, crawl4ai"
);
skillLine(
  "Frontend",
  "React, Next.js, Angular, Tailwind CSS, HTML5, CSS3"
);
skillLine(
  "Soft Skills",
  "Cross-functional Collaboration, Technical Communication, Problem-Solving, Ownership, Adaptability"
);

// ===== Experience =====
sectionTitle("PROFESSIONAL EXPERIENCE");
roleHeader(
  "Backend Engineer (Node.js, NestJS) - Arobuz Growth Agency",
  "Oct 2025 - Present"
);
[
  "Architected an end-to-end CRM backend in NestJS using a microservices architecture for lead management, sales pipelines, and role-based access via JWT and OAuth 2.0; integrated Gemini AI to automate proposal generation, reducing turnaround by 60% and saving the operations team approximately 3 hours per day.",
  "Engineered a production-grade multi-platform scraping engine (Twitter/X, LinkedIn, Instagram) with Playwright, Python, and crawl4ai, normalizing data into a unified MongoDB schema; sustained 500+ records per crawl with under 2% data loss.",
  "Delivered a unified Ads Management Portal integrating Meta Graph API, Google APIs, LinkedIn, and Pinterest into a single Node.js REST API service; deployed to production and used daily across 3 client accounts.",
  "Launched an in-app ad-creative editor and a Google Meet-style video collaboration platform powered by WebSockets, eliminating recurring third-party SaaS costs and reducing unauthorized access incidents to zero through hardened JWT and OAuth flows.",
  "Spearheaded development of an in-house project management tool with task tracking, team assignment, and deadline workflows, replacing paid external subscriptions and streamlining cross-team delivery.",
].forEach(bullet);

doc.moveDown(0.15);
roleHeader(
  "Full Stack Developer Intern (Spring Boot, Java) - Resonit",
  "Feb 2025 - Jul 2025"
);
[
  "Developed a production-grade e-commerce platform using Spring Boot, Java, and React on MySQL, implementing product catalog, cart, and order modules backed by RESTful APIs and Spring Data JPA.",
  "Integrated the Razorpay payment gateway end-to-end, covering checkout initiation, webhook-based order confirmation, and failure/retry handling for reliable transaction state.",
  "Implemented REST APIs secured with JWT authentication and RBAC via Spring Security across customer and admin roles, with optimized MySQL queries and indexes for low-latency response times.",
].forEach(bullet);

// ===== Projects =====
sectionTitle("PROJECTS");
projectHeader(
  "WhatsApp Commerce Backend System",
  "NestJS, MongoDB, Meta Business API, REST APIs, Webhooks, Power BI"
);
bullet(
  "Automated the full order management lifecycle (creation, billing, dispatch) via a WhatsApp bot using event-driven NestJS APIs; sustains 200+ order events per day under RBAC-secured REST endpoints, with Power BI dashboards for real-time sales and SLA reporting."
);

projectHeader(
  "Multi-Platform Social Media Crawler",
  "Python, FastAPI, Playwright, crawl4ai, Next.js"
);
bullet(
  "Engineered a GraphQL-intercepting crawler for Twitter/X, LinkedIn, and Instagram on a FastAPI backend with a Next.js operator dashboard, achieving sub-3-second profile extraction and an approximate 50% reduction in manual data review."
);

projectHeader(
  "Secure Card Operations Backend",
  "Spring Boot, Java, MySQL, REST APIs, Spring Security, JWT"
);
bullet(
  "Implemented a card operations service in Spring Boot enforcing role-based access and transactional integrity across 3 permission levels, with REST APIs secured by Spring Security and JWT, persisted via Spring Data JPA on MySQL."
);

// ===== Education =====
sectionTitle("EDUCATION");
roleHeader(
  "Bachelor of Computer Applications (BCA) - Manipal University Jaipur",
  "Expected 2026"
);

doc.end();
console.log("Generated public/Vansh_Jaiswal_Resume.pdf");
