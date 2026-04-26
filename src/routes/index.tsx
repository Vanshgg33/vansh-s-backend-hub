import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Vansh Jaiswal — Backend Developer (Node.js)" },
      {
        name: "description",
        content:
          "Backend Developer specializing in Node.js, NestJS, REST APIs, JWT/OAuth authentication, microservices, and Docker deployments.",
      },
      { property: "og:title", content: "Vansh Jaiswal — Backend Developer" },
      {
        property: "og:description",
        content:
          "Building scalable backend systems, APIs, and secure authentication solutions.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
