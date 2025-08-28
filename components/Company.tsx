import Image from "next/image";
import React from "react";

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
            <h2 className="section-title">
              World-Class Export Consulting Service
            </h2>
            <p className="section-subtitle">
              Experience the pinnacle of excellence in international trade
              solutions through our world-class export consulting service. Based
              in Dubai U.A.E, we take immense pride in our extensive industry
              experience. From inception to the culmination of each export
              transaction, we offer comprehensive support that positions your
              enterprise for triumph. Our expertise spans diverse sectors,
              encompassing agriculture and solid minerals, ensuring bespoke
              solutions for every client. What distinguishes us is not solely
              our esteemed status as Dubai foremost export consultants, but also
              our active participation in trading and exporting. Through our own
              export endeavors, we seamlessly connect agricultural products and
              solid minerals with a global network of buyers. This hands-on
              involvement equips us with invaluable insights into the nuances of
              the export journey, enabling us to deliver unparalleled service
              and outcomes to our valued clients.
            </p>
            <div className="flex justify-start mt-8">
              <button className="btn btn-outline">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
