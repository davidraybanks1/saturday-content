import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTemplate, setupSteps, templates } from "@/lib/templates";
import { fileName } from "../../TemplateCard";
import Arrow from "../../Arrow";

export function generateStaticParams() {
  return templates.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const t = getTemplate((await params).slug);
  if (!t) return {};
  return {
    title: `${t.name} (in ${t.tool})`,
    description: `${t.hook} ${t.summary}`,
    openGraph: { images: [t.image] },
  };
}

export default async function TemplatePage({ params }: { params: Promise<{ slug: string }> }) {
  const t = getTemplate((await params).slug);
  if (!t) notFound();
  const steps = setupSteps[t.tool];
  const n = String(templates.indexOf(t) + 1).padStart(2, "0");

  return (
    <>
      <section className="col detail">
        <div className="window">
          <div className="window-bar">
            <i />
            <i />
            <span>{fileName(t)}</span>
          </div>
          {/* Full color here: this is where people actually inspect the template. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={t.image} alt={`${t.name} template in ${t.tool}`} />
        </div>
        <div className="detail-text">
          <div className="card-meta mono-label">
            <span>
              {n} / {t.tool}
            </span>
            <span className="free">Free</span>
          </div>
          <h1>{t.name}</h1>
          <p className="hook">{t.hook}</p>
          <p className="summary">{t.summary}</p>
          <div className="detail-actions">
            <a href={t.templateUrl} className="pill" target="_blank" rel="noopener">
              Open in {t.tool}<Arrow dir="out" />
            </a>
            <a href={t.packet} className="pill ghost" download>
              Setup guide (PDF)
            </a>
          </div>
          {t.guideUrl && (
            <p className="fineprint">
              Prefer to read the instructions online?{" "}
              <a href={t.guideUrl} target="_blank" rel="noopener">
                Open the setup guide<Arrow dir="out" />
              </a>
            </p>
          )}
          {t.credit && <p className="fineprint credit">{t.credit}</p>}
          <Link href="/templates" className="mono-label underline" style={{ color: "var(--ink)", justifySelf: "start" }}>
            <Arrow dir="left" />All templates
          </Link>
        </div>
      </section>

      {t.features && (
        <section className="rule">
          <div className="col blocks">
            <span className="mono-label">What’s inside</span>
            {t.features.map((f, i) => (
              <div key={f.title} className="block">
                <span className="chip">{String(i + 1).padStart(2, "0")}</span>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="rule">
        <div className="col blocks">
          <span className="mono-label">Getting started</span>
          <div className="block">
            <h3>Have a {t.tool} account</h3>
            <ol>
              {steps.have.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
          </div>
          <div className="block">
            <h3>New to {t.tool}</h3>
            <ol>
              {steps.dont.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
