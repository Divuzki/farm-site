import React from "react";

const Testimonial: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col items-center px-20 pt-px pb-8 w-full text-center bg-orange-100 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col px-8 py-12 w-full rounded-2xl max-w-[1240px] max-md:px-5 max-md:max-w-full">
        <h2 className="w-full text-5xl font-bold leading-none text-zinc-800 max-md:max-w-full max-md:text-4xl">
          Trusted by Farmers and Communities
        </h2>
        <div className="flex flex-col justify-center items-center mt-10 w-full font-medium max-md:max-w-full">
          <blockquote className="text-3xl tracking-tighter leading-[50px] text-neutral-800 max-md:max-w-full">
            We&apos;ve been sourcing poultry and livestock products from JJT
            Integrated Farms for over a year, and the quality is consistently
            exceptional. Their commitment to organic farming and ethical animal
            husbandry is evident in every product we receive. We appreciate
            their attention to detail and timely delivery.
          </blockquote>
          <cite className="mt-5 text-xl tracking-tighter leading-9 opacity-90 text-slate-500">
            <span className="text-neutral-800">Uche M</span>
            <br />
            <span className="">Distributor</span>
          </cite>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
