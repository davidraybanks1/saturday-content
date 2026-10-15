"use client";

import Link from "next/link";
import { useState } from "react";

type Seg = string | { box: string } | { hl: string };

const HEADLINES: Record<string, Seg[]> = {
  Anyone: ["The content systems you ", { box: "need" }, " but never have ", { hl: "time to build" }, "."],
  "Content leads": ["Give your team the ", { hl: "systems" }, " so their creative calories go to ", { box: "what matters" }, "."],
  "Solo marketers": ["You’re a team of ", { box: "1" }, ". Your templates should work like a team of ", { hl: "ten" }, "."],
  Founders: ["Thought leadership that’s more than ", { hl: "an expert’s name" }, " on a ", { box: "blog" }, "."],
};
const AUDIENCES = Object.keys(HEADLINES);

export default function Hero() {
  const [audience, setAudience] = useState("Anyone");
  return (
    <section className="col hero">
      <div className="hero-inner">
        <div className="tabs" role="group" aria-label="Who is this for">
          <span className="for">For</span>
          {AUDIENCES.map((a) => (
            <button key={a} type="button" className="tab" aria-pressed={a === audience} onClick={() => setAudience(a)}>
              {a}
            </button>
          ))}
        </div>
        <h1>
          {HEADLINES[audience].map((s, i) =>
            typeof s === "string" ? (
              <span key={i}>{s}</span>
            ) : "box" in s ? (
              <span key={i} className="h-box">
                {s.box}
              </span>
            ) : (
              <span key={i} className="h-hl">
                {s.hl}
              </span>
            ),
          )}
        </h1>
        <div className="cta-row">
          <Link href="/templates" className="pill">
            Get a free template →
          </Link>
          <span className="note">Duplicate it into your workspace. Use it today.</span>
        </div>
      </div>
    </section>
  );
}
