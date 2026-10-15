"use client";

import { useEffect, useState } from "react";

function label(now: Date) {
  const d = now.getDay();
  if (d === 6) return "It’s Saturday. Go outside.";
  if (d === 0) return "Sunday. Still the weekend.";
  const target = new Date(now);
  target.setDate(now.getDate() + (6 - d));
  target.setHours(0, 0, 0, 0);
  const s = Math.floor((target.getTime() - now.getTime()) / 1000);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `Saturday in ${Math.floor(s / 86400)}d ${pad(Math.floor((s % 86400) / 3600))}:${pad(
    Math.floor((s % 3600) / 60),
  )}:${pad(s % 60)}`;
}

// Rendered client-only (empty on the server) so the ticking clock never causes a hydration mismatch.
export default function Countdown() {
  const [text, setText] = useState("");
  useEffect(() => {
    const tick = () => setText(label(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="countdown" aria-live="off">
      <span>{text}</span>
    </div>
  );
}
