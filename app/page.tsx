import Link from "next/link";
import { Suspense } from "react";
import { templates } from "@/lib/templates";
import Hero from "./Hero";
import TemplateGrid from "./TemplateGrid";
import Arrow from "./Arrow";

export default function Home() {
  // Pinned templates lead; the rest keep their list order.
  const featured = templates.filter((t) => t.featured).sort((a, b) => (a.pinned ?? Infinity) - (b.pinned ?? Infinity));
  return (
    <>
      <Hero />

      <section id="how" className="rule">
        <div className="col how">
          <span className="mono-label">How it works</span>
          <div className="how-item">
            <span className="chip">01 Blocks</span>
            <p>
              The foundation of your content ops. Fully designed templates and frameworks with instructions to use them
              like an expert.
            </p>
          </div>
          <div className="how-item">
            <span className="chip">02 Tools</span>
            <p>
              Each block is prebuilt into <span className="hl">the tools you already use</span>, launched in a few
              clicks.
            </p>
          </div>
        </div>
      </section>

      <section id="templates" className="rule">
        <Suspense>
          <TemplateGrid templates={featured} title="Featured templates" />
        </Suspense>
        <div className="col see-all">
          <Link href="/templates" className="mono-label underline" style={{ color: "var(--ink)" }}>
            See all templates<Arrow />
          </Link>
        </div>
      </section>

      <section id="about" className="rule">
        <div className="col about">
          <div className="headshot">
            <div className="window">
              <div className="window-bar">
                <i />
                <i />
                <span>Who am I?</span>
              </div>
              <div className="headshot-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/creator.webp" alt="David, the creator of saturday content" />
              </div>
            </div>
          </div>
          <div className="about-text">
            <p className="about-lead">
              Hi, I’m David. I’ve built and led content programs for <span className="box">15 yrs</span> across
              nonprofit, SaaS, startups, and PE-backed tech.
            </p>
            <p className="about-body">
              I believe content teams can achieve greatness when they have the systems and processes to build momentum
              and focus their creative calories on what matters. All the tools I create are designed to equip more
              content teams to do that.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
