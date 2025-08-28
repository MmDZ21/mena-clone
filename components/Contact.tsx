import { Cog, Globe, LucidePhoneCall } from "lucide-react";
import React from "react";

const items: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}[] = [
  {
    icon: Globe,
    title: "About us",
    desc: "Find out out more about our unrelenting desire to serve your interests. ",
  },
  {
    icon: LucidePhoneCall,
    title: "Contact us",
    desc: "Have any questions? Feel free to reach out to our team ",
  },
  {
    icon: Cog,
    title: "Global Trade Education ",
    desc: "We publish articles to help buyers and sellers learn more about global trade. ",
  },
];

export default function Contact() {
  return (
    <section className="flex flex-col gap-1 md:flex-row w-full">
      {items.map((item, i) => (
        <div key={i} className="flex flex-col gap-2 py-8 px-4 bg-[url('/images/bg.svg')] bg-cover bg-no-repeat bg-center w-full md:flex-row md:justify-center md:px-8 md:gap-4">
          <div className="w-full flex justify-center md:w-fit md:h-full">
            <item.icon className="w-14 h-14 text-brand-500" />
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
