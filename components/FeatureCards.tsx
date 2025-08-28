import Image from "next/image";

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
                <h6 className="eyebrow">About</h6>
              </div>

              {/* Main title */}
              <h2 className="section-title">Our Commitment</h2>

              {/* Subtitle/description */}
              <p className="section-subtitle max-w-md">
                Benefiting from our global trade expertise, we proficiently
                handle the supply of food, agricultural products and solid
                mineral products. Our focus is on ensuring safe transaction
                procedures and securing long-term contracts at the required
                quantity and price, guaranteeing optimal quality and value for
                our clients.{" "}
              </p>
            </div>

            {/* Right side: Image container - overlaps onto text on md+ */}
            <div
              className="relative md:absolute md:right-0 md:top-6 md:bottom-0 md:translate-y-0 md:w-[54%] md:z-20"
              id="commitment-image"
            >
              <div className="rounded-xl relative w-full aspect-[3/2] md:h-full md:aspect-auto">
                <Image
                  src="/images/about.jpg"
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
              <h2 className="section-title">
                Lithium Ore Delivered around the world
              </h2>

              {/* Subtitle/description */}
              <p className="section-subtitle max-w-md">
                Embark on a journey of excellence with our premier exports of
                high-grade lithium ore products. We take immense pride in
                delivering unparalleled quality to our esteemed global
                clientele. Just as the most valuable ores undergo meticulous
                refinement, our dedication to ensuring top-tier quality sets us
                apart.
              </p>

              <button className="btn btn-outline mt-8">Learn More</button>
            </div>

            {/* World map image */}
            <div className="relative flex-1" id="world-map-container">
              <Image
                src="/images/world-map.png"
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
