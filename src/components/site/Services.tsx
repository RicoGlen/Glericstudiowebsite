"use client";

import { SectionHeading } from "./SectionHeading";
import { ServiceCard } from "./ServiceCard";
import { SERVICES } from "@/lib/content";

export function Services() {
  return (
    <section className="services" id="diensten">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Onze diensten"
          title="Kies jouw pakket"
          sub="Van een snelle Starter-site tot een volledig maatwerk platform — altijd met onze persoonlijke aanpak."
        />

        <div className="services__grid">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.name} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
