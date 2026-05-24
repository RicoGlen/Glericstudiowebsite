"use client";

import { useState, useRef } from "react";
import { useInView, motion } from "framer-motion";
import { Send } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { CONTACT_INFO, CONTACT_OPTIONS } from "@/lib/content";

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [sent, setSent] = useState(false);

  function toggleOption(k: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(k)) {
        next.delete(k);
      } else {
        next.add(k);
      }
      return next;
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  const metaItems = [
    { label: "Studio",    value: CONTACT_INFO.studio },
    { label: "Reactie",   value: CONTACT_INFO.response },
    { label: "Werkgebied",value: CONTACT_INFO.werkgebied },
    { label: "Talen",     value: CONTACT_INFO.languages },
  ];

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="section-inner">
        <SectionHeading
          eyebrow="Contact"
          title="Start jouw project"
          sub="Vertel ons over jouw bedrijf en wensen. We reageren binnen één werkdag."
        />

        <div className="contact__layout">
          {/* meta sidebar */}
          <motion.aside
            className="contact__meta"
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            {metaItems.map(({ label, value }) => (
              <div key={label} className="contact__meta-item">
                <span className="contact__meta-label">{label}</span>
                <span className="contact__meta-value">
                  {value.split("\n").map((line, i) => (
                    <span key={i} style={{ display: "block" }}>{line}</span>
                  ))}
                </span>
              </div>
            ))}

            <a href={`mailto:${CONTACT_INFO.email}`} className="contact__email">
              {CONTACT_INFO.email}
            </a>
          </motion.aside>

          {/* form */}
          <motion.div
            className="contact__form-wrap"
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            {sent ? (
              <div className="contact__success">
                <p className="contact__success-title">Bericht ontvangen!</p>
                <p className="contact__success-sub">
                  We nemen binnen één werkdag contact met je op.
                </p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                {/* interest options */}
                <fieldset className="contact__fieldset">
                  <legend className="contact__legend">Ik ben geïnteresseerd in</legend>
                  <div className="contact__options">
                    {CONTACT_OPTIONS.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        className={`contact__option${selected.has(opt) ? " contact__option--active" : ""}`}
                        onClick={() => toggleOption(opt)}
                        aria-pressed={selected.has(opt)}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <div className="contact__row">
                  <label className="contact__field">
                    <span className="contact__field-label">Naam</span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Jouw naam"
                      required
                      className="contact__input"
                    />
                  </label>
                  <label className="contact__field">
                    <span className="contact__field-label">Bedrijf</span>
                    <input
                      type="text"
                      name="company"
                      placeholder="Bedrijfsnaam (optioneel)"
                      className="contact__input"
                    />
                  </label>
                </div>

                <label className="contact__field">
                  <span className="contact__field-label">E-mailadres</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="jouw@email.nl"
                    required
                    className="contact__input"
                  />
                </label>

                <label className="contact__field">
                  <span className="contact__field-label">Bericht</span>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Vertel ons over jouw project…"
                    className="contact__input contact__textarea"
                  />
                </label>

                <button type="submit" className="btn btn--primary contact__submit">
                  Verstuur aanvraag
                  <Send size={16} aria-hidden />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
