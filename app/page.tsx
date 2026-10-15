import Link from "next/link";
import { templates, tools } from "@/lib/templates";
import TemplateCard from "./TemplateCard";

const CREATOR = "/images/creator.webp";

export default function Home() {
  const featured = templates.filter((t) => t.featured);
  return (
    <>
      <section className="hero dots">
        <div className="wrap">
          <div className="card">
            <h1>The content templates and frameworks you need but never have time to build.</h1>
            <p>Every template is free. Duplicate it into your workspace and start using it today.</p>
            <div className="actions">
              <Link href="/templates" className="btn">
                Browse all {templates.length} templates
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <span className="label">How it works</span>
          <div className="how">
            <div className="card">
              <h3>Blocks</h3>
              <p>
                Blocks lay the foundation of your content operations. They are fully designed templates and
                frameworks that come complete with all the instructions to use like an expert.
              </p>
            </div>
            <div className="card">
              <h3>Tools</h3>
              <p>
                Each block is prebuilt directly into popular work management tools so they can be launched
                with a few clicks and used right where you already work.
              </p>
              <div className="tool-chips">
                {tools.map((tool) => (
                  <Link key={tool} href={`/templates?tool=${tool}`} className="chip">
                    {tool}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <span className="label">Featured templates</span>
          <div className="grid">
            {featured.map((t) => (
              <TemplateCard key={t.slug} t={t} />
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <Link href="/templates" className="btn secondary">
              See all templates
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="wrap about">
          <div className="card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={CREATOR} alt="David, the creator of saturday content" />
          </div>
          <div>
            <span className="label">Who am I?</span>
            <p>
              Hi, I’m David. I’ve built and led content marketing programs for the last 15 years. I’ve worked
              in nonprofit, SaaS, early-stage startups, and private-equity-backed tech.
            </p>
            <p>
              I believe content teams can achieve greatness when they have the systems and processes to build
              momentum and focus their creative calories on what matters. All the tools I create are designed
              to equip more content teams to do that.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
