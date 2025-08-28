import React from "react";

export default function Coop() {
  return (
    <section className="flex flex-col md:flex-row md:items-stretch w-full py-8 md:py-12 md:px-24 md:gap-8">
      <div className="md:flex-1 ">
        <div className="bg-brand-500 w-full md:h-full p-6 md:px-6 md:py-16 md:rounded-xl md:space-y-8">
          <h2 className="section-title text-white">
            Fund An Export And Earn Up To 8-15% Profit
          </h2>
          <p className="mt-3 text-white">
            Seize the opportunity to fuel international trade by funding
            strategic export initiatives. By participating in our program, you
            gain the chance to earn impressive returns of up to 8-15% profit on
            your investment. Join us in driving economic growth while securing
            your own financial success. Your partnership in global trade awaits.
          </p>

          <div className="w-full justify-start mt-16">
            <button className="btn btn-outline text-white">Learn More</button>
          </div>
        </div>
      </div>
      <div className="md:flex-1">
        <div className="bg-red-500 w-full md:h-full p-6 md:px-6 md:py-16 md:rounded-xl md:space-y-8">
          <h2 className="section-title text-white">
            Broker An Export And Earn A 2-5% Commission
          </h2>
          <p className="mt-3 text-white">
            Empower your financial future by becoming an integral part of our
            export brokerage network. With a seamless process designed to
            maximize efficiency, you can now earn an attractive 2-5% commission
            on every successful export deal you facilitate. Join us in
            connecting global markets, driving trade growth, and reaping the
            rewards of collaboration. Your success story begins here.
          </p>

          <div className="w-full justify-start mt-16">
            <button className="btn btn-outline text-white">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}
