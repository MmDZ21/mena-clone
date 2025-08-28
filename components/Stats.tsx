export function Stats() {
  const stats = [
    { k: "Team Members", v: "10+" },
    { k: "Years of Experience", v: "7+" },
    { k: "Products", v: "12+" },
    { k: "Locations", v: "1" },
  ];
  return (
    <section className="container py-4 md:py-8">
      <div className="flex py-4 md:py-8">
        {/* <div className="w-4 h-0.5 bg-brand-500" /> */}
        <div className="w-full border-2 border-brand-500 text-center py-4 rounded-xl">
          <h6 className="eyebrow">Our Organization</h6>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.k} className="text-center card bg-brand-500">
            <div className="text-3xl font-semibold text-white">{s.v}</div>
            <div className="text-sm text-gray-100">{s.k}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
