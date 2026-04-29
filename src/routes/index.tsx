import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { LoadingScreen } from "@/components/loading-screen";
import { SceneBackground } from "@/components/scene-background";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Vansh Jaiswal — Backend Engineer · Node.js" },
      {
        name: "description",
        content:
          "Backend Engineer specializing in Node.js, NestJS, REST APIs, JWT/OAuth authentication, microservices, and Docker deployments.",
      },
      { property: "og:title", content: "Vansh Jaiswal — Backend Engineer" },
      {
        property: "og:description",
        content:
          "Building scalable backend systems, APIs, and secure authentication solutions.",
      },
    ],
  }),
});

function Index() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}

      <SceneBackground />

      <div
        className={`relative z-10 transition-all duration-700 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
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
    </div>
  );
}
