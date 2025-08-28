import { Cog, Globe, LucidePhoneCall } from "lucide-react";
import React from "react";
import { contactTiles } from "@/content/home";

export default function Contact() {
  return (
    <section className="flex flex-col gap-1 md:flex-row w-full">
      {contactTiles.map((item, i) => (
        <div key={i} className="flex flex-col gap-2 py-8 px-4 bg-[url('/images/bg.svg')] bg-cover bg-no-repeat bg-center w-full md:flex-row md:justify-center md:px-8 md:gap-4">
          <div className="w-full flex justify-center md:w-fit md:h-full">
            {item.icon === "Globe" && <Globe className="w-14 h-14 text-brand-500" />}
            {item.icon === "LucidePhoneCall" && <LucidePhoneCall className="w-14 h-14 text-brand-500" />}
            {item.icon === "Cog" && <Cog className="w-14 h-14 text-brand-500" />}
          </div>
          <div className="w-full flex flex-col gap-2 md:flex-1 md:gap-0">
            <h3 className="text-xl font-semibold text-center md:text-start">{item.title}</h3>
            <p className="section-subtitle text-center md:text-start">{item.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
