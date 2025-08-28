import React from "react";
import { coopCards } from "@/content/home";

export default function Coop() {
  return (
    <section className="flex flex-col md:flex-row md:items-stretch w-full py-8 md:py-12 md:px-24 md:gap-8">
      {coopCards.map((card, idx) => (
        <div key={idx} className="md:flex-1 ">
          <div className={`${card.color === "brand" ? "bg-brand-500" : "bg-red-500"} w-full md:h-full p-6 md:px-6 md:py-16 md:rounded-xl md:space-y-8`}>
            <h2 className="section-title text-white">{card.title}</h2>
            <p className="mt-3 text-white">{card.description}</p>

            <div className="w-full justify-start mt-16">
              <a className="btn btn-outline text-white" href={card.cta.href}>{card.cta.label}</a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
