"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { CONTACT_INFO, CONTACT_OPTIONS } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", company: "", email: "", notes: "" });
  const [picked, setPicked] = useState<Set<string>>(new Set(["Business Website"]));
  const [sent, setSent] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);

  const togglePick = (k: string) =>
    setPicked((prev) => { const n = new Set(prev); if (n.has(k)) { n.delete(k); } else { n.add(k); }; return n; });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true });
    if (!form.name || !emailValid) return;
    setSent(true);
  };

  return (
    <section id="contact" style={{ background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.015))", borderTop: "1px solid var(--line)", paddingBlock: "clamp(80px,10vw,140px)" }}>
      <div className="container">
        <div ref={ref} style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 80, alignItems: "start" }} className="contact-layout">

          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease }}
          >
            <span className="eyebrow">{CONTACT_INFO.eyebrow}</span>
            <h2 style={{ fontSize: "clamp(40px,5vw,72px)", letterSpacing: "-0.03em", lineHeight: 1, fontWeight: 500, margin: "16px 0 0" }}>
              Plan een<br />kennismaking.
            </h2>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              style={{
                marginTop: 28,
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                fontFamily: "var(--mono)",
                fontSize: 14,
                color: "var(--text)",
                padding: "14px 18px",
                border: "1px solid var(--line)",
                borderRadius: 999,
                transition: "border-color .3s var(--ease)",
              }}
              className="contact-email"
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#6affb0", boxShadow: "0 0 10px #6affb0", display: "inline-block" }} />
              {CONTACT_INFO.email}
              <ArrowUpRight size={14} />
            </a>

            <div style={{ marginTop: 36, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
              {[
                ["Studio", CONTACT_INFO.studio],
                ["Reactie", CONTACT_INFO.response],
                ["Beschikbaarheid", CONTACT_INFO.availability],
                ["Talen", CONTACT_INFO.languages],
              ].map(([k, v]) => (
                <div key={k}>
                  <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-mute)", marginBottom: 6 }}>{k}</div>
                  <div style={{ fontSize: 14, color: "var(--text)", whiteSpace: "pre-line" }}>{v}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease, delay: 0.12 }}
          >
            {sent ? (
              <div style={{
                padding: 32,
                border: "1px solid color-mix(in oklch, var(--accent) 40%, transparent)",
                borderRadius: 20,
                background: "radial-gradient(400px 200px at 100% 0%, var(--accent-glow), transparent 70%), linear-gradient(180deg, rgba(255,255,255,0.025), transparent)",
                textAlign: "center",
              }}>
                <Check size={28} style={{ margin: "0 auto", color: "var(--accent)" }} />
                <h4 style={{ margin: "14px 0 8px", fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em" }}>
                  Bedankt — we hebben je bericht ontvangen.
                </h4>
                <p style={{ margin: 0, color: "var(--text-dim)", fontSize: 14 }}>
                  We reageren binnen één werkdag, meestal sneller. Tot snel.
                </p>
                <button
                  style={{ marginTop: 18, display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 18px", border: "1px solid var(--line-2)", borderRadius: 999, fontSize: 13, color: "var(--text)", transition: "background .3s var(--ease)" }}
                  onClick={() => { setSent(false); setForm({ name: "", company: "", email: "", notes: "" }); setTouched({}); }}
                >
                  Stuur een nieuw bericht
                </button>
              </div>
            ) : (
              <form
                onSubmit={submit}
                noValidate
                style={{
                  padding: 32,
                  border: "1px solid var(--line)",
                  borderRadius: 20,
                  background: "linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))",
                  boxShadow: "0 1px 0 rgba(255,255,255,0.12) inset, 0 40px 80px -30px rgba(0,0,0,0.5), 0 16px 30px -16px rgba(0,0,0,0.3)",
                }}
              >
                {/* Row: Naam + Bedrijf */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="form-row">
                  {[
                    { id: "name",    label: "Naam",   type: "text",  placeholder: "Voornaam Achternaam", key: "name"    },
                    { id: "company", label: "Bedrijf",type: "text",  placeholder: "Optioneel",           key: "company" },
                  ].map(({ id, label, type, placeholder, key }) => (
                    <div key={id} style={{ marginBottom: 16 }}>
                      <label htmlFor={id} style={{ display: "block", fontFamily: "var(--mono)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--text-mute)", marginBottom: 8 }}>{label}</label>
                      <input
                        id={id}
                        type={type}
                        value={form[key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        onBlur={() => setTouched((t) => ({ ...t, [key]: true }))}
                        placeholder={placeholder}
                        style={{
                          width: "100%",
                          background: "rgba(255,255,255,0.02)",
                          border: `1px solid ${touched[key] && !form[key as keyof typeof form] && key === "name" ? "rgba(255,100,100,0.4)" : "var(--line)"}`,
                          color: "var(--text)",
                          padding: "14px 16px",
                          borderRadius: 10,
                          font: "400 15px/1.4 var(--sans)",
                          letterSpacing: "-0.005em",
                          transition: "border-color .3s var(--ease), background .3s var(--ease)",
                          outline: "none",
                        }}
                        className="form-input"
                      />
                    </div>
                  ))}
                </div>

                {/* Email */}
                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="email" style={{ display: "block", fontFamily: "var(--mono)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--text-mute)", marginBottom: 8 }}>E-mail</label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                    placeholder="jij@bedrijf.nl"
                    style={{
                      width: "100%",
                      background: "rgba(255,255,255,0.02)",
                      border: `1px solid ${touched.email && (!form.email || !emailValid) ? "rgba(255,100,100,0.4)" : "var(--line)"}`,
                      color: "var(--text)",
                      padding: "14px 16px",
                      borderRadius: 10,
                      font: "400 15px/1.4 var(--sans)",
                      letterSpacing: "-0.005em",
                      outline: "none",
                    }}
                    className="form-input"
                  />
                </div>

                {/* Needs chips */}
                <div style={{ marginBottom: 16 }}>
                  <p style={{ fontFamily: "var(--mono)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--text-mute)", marginBottom: 8 }}>Wat heb je nodig?</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {CONTACT_OPTIONS.map((o) => (
                      <button
                        type="button"
                        key={o}
                        onClick={() => togglePick(o)}
                        style={{
                          fontSize: 12,
                          padding: "8px 12px",
                          border: "1px solid var(--line)",
                          borderRadius: 999,
                          color: picked.has(o) ? "#0a0a0b" : "var(--text-dim)",
                          background: picked.has(o) ? "#fff" : "transparent",
                          borderColor: picked.has(o) ? "#fff" : undefined,
                          transition: "all .3s var(--ease)",
                          cursor: "pointer",
                        }}
                      >
                        {o}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label htmlFor="notes" style={{ display: "block", fontFamily: "var(--mono)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--text-mute)", marginBottom: 8 }}>Vertel ons iets meer</label>
                  <textarea
                    id="notes"
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    placeholder="Bedrijf, doel, deadline, eventuele referenties — alles helpt."
                    style={{
                      width: "100%",
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid var(--line)",
                      color: "var(--text)",
                      padding: "14px 16px",
                      borderRadius: 10,
                      font: "400 15px/1.4 var(--sans)",
                      letterSpacing: "-0.005em",
                      resize: "vertical",
                      minHeight: 120,
                      outline: "none",
                    }}
                    className="form-input"
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    marginTop: 20,
                    width: "100%",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 12,
                    padding: 18,
                    background: "#fff",
                    color: "#0a0a0b",
                    borderRadius: 12,
                    fontWeight: 500,
                    fontSize: 15,
                    transition: "transform .3s var(--ease)",
                    cursor: "pointer",
                  }}
                  className="form-submit"
                >
                  Start project
                  <ArrowUpRight size={16} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        .contact-email:hover { border-color: var(--line-2) !important; }
        .form-input:focus { border-color: color-mix(in oklch, var(--accent) 60%, transparent) !important; background: rgba(255,255,255,0.04) !important; }
        .form-submit:hover { transform: translateY(-1px); }
        @media (max-width: 980px) { .contact-layout { grid-template-columns: 1fr !important; gap: 40px !important; } }
        @media (max-width: 640px) { .form-row { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
