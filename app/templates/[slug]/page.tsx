import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTemplate, setupSteps, templates } from "@/lib/templates";

export function generateStaticParams() {
  return templates.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const t = getTemplate((await params).slug);
  if (!t) return {};
  return {
    title: `${t.name} (in ${t.tool})`,
    description: `${t.hook} ${t.summary}`,
    openGraph: { images: t.image.startsWith("http") ? [t.image] : undefined },
  };
}

export default async function TemplatePage({ params }: { params: Promise<{ slug: string }> }) {
  const t = getTemplate((await params).slug);
  if (!t) notFound();
  const steps = setupSteps[t.tool];
  const verb = t.tool === "Airtable" ? "Open the base" : "Open the template";

  return (
    <>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap detail-top">
          <div className="card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={t.image} alt={`${t.name} template in ${t.tool}`} />
          </div>
          <div>
            <span className="eyebrow">Free template · {t.tool}</span>
            <h1>{t.name}</h1>
            <p className="hook">{t.hook}</p>
            <p className="summary">{t.summary}</p>
            <div className="detail-actions">
              <a href={t.templateUrl} className="btn" target="_blank" rel="noopener">
                {verb} in {t.tool} ↗
              </a>
              <a href={t.packet} className="btn secondary" download>
                Download setup guide (PDF)
              </a>
            </div>
            {t.guideUrl && (
              <p className="note">
                Prefer to read the instructions online?{" "}
                <a href={t.guideUrl} target="_blank" rel="noopener">
                  Open the setup guide ↗
                </a>
              </p>
            )}
            {t.credit && <p className="credit">{t.credit}</p>}
            <Link href="/templates" className="back">
              ← All templates
            </Link>
          </div>
        </div>
      </section>

      {t.features && (
        <section className="section">
          <div className="wrap">
            <span className="label">What’s inside</span>
            <div className="features">
              {t.features.map((f) => (
                <div key={f.title} className="card">
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="wrap">
          <span className="label">Getting started</span>
          <div className="steps">
            <div className="card">
              <h3>If you have a {t.tool} account</h3>
              <ol>
                {steps.have.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
            </div>
            <div className="card">
              <h3>If you don’t have a {t.tool} account</h3>
              <ol>
                {steps.dont.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
