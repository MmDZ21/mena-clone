import Image from "next/image";
import { commitment, lithium } from "@/content/home";

export function FeatureCards() {
  return (
    <section className="section" id="feature-cards-section">
      <div className="container">
        {/* Main content wrapper with vertical spacing */}
        <div className="flex flex-col gap-8 md:gap-12">
          {/* SECTION 1: Our Commitment - Text Content + Image Layout */}
          <div
            className="flex flex-col md:flex-row gap-8 md:gap-12 md:relative"
            id="commitment-section"
          >
            {/* Left side: Text content (h6 + title + subtitle) */}
            <div
              className="flex-1 rounded-xl md:flex-none md:w-1/2 bg-[url('/images/bg.svg')] bg-cover bg-no-repeat bg-center md:px-16 md:py-24 md:relative md:z-10"
              id="commitment-text"
            >
              {/* About label with decorative line */}
              <div className="flex pb-4 items-center gap-2">
                <div className="w-4 h-0.5 bg-brand-500" />
                <h6 className="eyebrow">{commitment.eyebrow}</h6>
              </div>

              {/* Main title */}
              <h2 className="section-title">{commitment.title}</h2>

              {/* Subtitle/description */}
              <p className="section-subtitle max-w-md">{commitment.description} </p>
            </div>

            {/* Right side: Image container - overlaps onto text on md+ */}
            <div
              className="relative md:absolute md:right-0 md:top-6 md:bottom-0 md:translate-y-0 md:w-[54%] md:z-20"
              id="commitment-image"
            >
              <div className="rounded-xl relative w-full aspect-[3/2] md:h-full md:aspect-auto">
                <Image
                  src={commitment.image}
                  alt="about"
                  fill
                  className="object-cover rounded-xl "
                />
              </div>
            </div>
          </div>

          {/* SECTION 2: Lithium Ore - Full width layout */}
          <div
            id="lithium-section"
            className="md:flex md:flex-row-reverse md:justify-between md:py-12 space-y-8 md:gap-8"
          >
            {/* Title */}
            <div className="flex-1">
              <h2 className="section-title">{lithium.title}</h2>

              {/* Subtitle/description */}
              <p className="section-subtitle max-w-md">{lithium.description}</p>

              <a href={lithium.cta.href} className="btn btn-outline mt-8">{lithium.cta.label}</a>
            </div>

            {/* World map image */}
            <div className="relative flex-1" id="world-map-container">
              <Image
                src={lithium.image}
                alt="about"
                width={1200}
                height={900}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
