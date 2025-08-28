"use client"

import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Navigation, Pagination, A11y } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"

type Slide = {
  image: string
  headline: string
  sub: string
  primaryHref?: string
  secondaryHref?: string
}

const SLIDES: Slide[] = [
  { image: "/hero/slide-1.jpg", headline: "Benefiting from our global trade expertise", sub: "We handle the supply of food, agricultural products and solid mineral products with safe procedures and long-term contracts.", primaryHref: "/lithium-ore-supply", secondaryHref: "/contact-us" },
  { image: "/hero/slide-2.jpg", headline: "Safe procedures, reliable delivery", sub: "Documentation, QC, and logistics designed for long-term partnerships.", primaryHref: "/lithium-ore-supply", secondaryHref: "/contact-us" },
  { image: "/hero/slide-3.jpg", headline: "From inquiry to shipment", sub: "End-to-end support across the export lifecycle.", primaryHref: "/consulting/export-investors", secondaryHref: "/consulting/brokerage-program" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination, A11y]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        speed={800}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        navigation
        pagination={{ clickable: true }}
        className="hero-swiper"  // use CSS below
      >
        {SLIDES.map((s, i) => (
          <SwiperSlide key={i} className="!h-full">  {/* ensure slide fills the swiper */}
            {/* RELATIVE WRAPPER WITH FIXED HEIGHT */}
            <div className="relative h-[70vh] w-full md:h-[78vh]">
              {/* background image */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${s.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                aria-hidden
              />
              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-800/70 to-gray-700/70" />
              {/* glow */}
              <svg
                aria-hidden
                className="absolute -bottom-24 left-1/2 -translate-x-1/2 blur-2xl opacity-30"
                width="1200"
                height="400"
              >
                <defs>
                  <radialGradient id="g" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="white" />
                    <stop offset="100%" stopColor="transparent" />
                  </radialGradient>
                </defs>
                <rect width="1200" height="400" fill="url(#g)" />
              </svg>

              {/* content */}
              <div className="relative container py-24 md:py-36 text-white">
                <span className="badge border-white/30">Global Trade &amp; Commodities</span>
                <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight">{s.headline}</h1>
                <p className="mt-4 max-w-2xl text-white/90">{s.sub}</p>
                <div className="mt-8 flex gap-3">
                  <Link href={s.primaryHref ?? "/"} className="btn btn-primary">Learn More</Link>
                  <Link href={s.secondaryHref ?? "/"} className="btn btn-outline text-white border-white/60 hover:bg-white/10">Contact Us</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Force the Swiper + slides to inherit the fixed height */}
      <style jsx global>{`
  .hero-swiper { height: 70vh; }
  .hero-swiper .swiper-wrapper { height: 100%; }
  .hero-swiper .swiper-slide { height: 100%; }
  @media (min-width: 768px) {
    .hero-swiper { height: 78vh; }
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: #fff;
    width: 42px;
    height: 42px;
    border-radius: 9999px;
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(6px);
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 18px;
    font-weight: 700;
  }
  .swiper-pagination-bullet { background: rgba(255, 255, 255, 0.6); opacity: 1; }
  .swiper-pagination-bullet-active { background: #fff; }

  /* Position the nav buttons at the bottom on mobile */
  @media (max-width: 767px) {
    .hero-swiper .swiper-button-prev,
    .hero-swiper .swiper-button-next {
      top: auto;          /* override Swiper's default top positioning */
      bottom: 1rem;       /* place buttons near the bottom */
    }
  }
`}</style>

    </section>
  )
}
