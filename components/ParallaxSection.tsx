import { parallax } from "@/content/home"

export default function ParallaxSection() {
  return (
    <section
      className="relative h-[30vh] md:h-[50vh] bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url('${parallax.image}')` }}
    >
      {/* optional overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-800/70 to-gray-700/70" />
    </section>
  )
}
