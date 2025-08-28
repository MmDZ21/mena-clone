import Image from "next/image";
import React from "react";
import { commitment } from "@/content/home";

export default function Company() {
  return (
    <section className="section flex flex-col gap-4 md:flex-row container">
      <div className="relative md:flex-1 rounded-xl">
        <Image
          src="/images/company.jpg"
          alt="about"
          fill
          className="rounded-xl object-cover"
        />
      </div>
      <div className="md:flex-1">
        <div className="flex pb-2 items-center gap-2">
          <div className="w-4 h-0.5 bg-brand-500" />
          <h6 className="eyebrow">The Company</h6>
        </div>
        <div className="flex flex-col gap-8 md:gap-12">
          <div className="flex flex-col gap-4 px-4">
            <h2 className="section-title">{commitment.title}</h2>
            <p className="section-subtitle">{commitment.description}</p>
            <div className="flex justify-start mt-8">
              <button className="btn btn-outline">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
