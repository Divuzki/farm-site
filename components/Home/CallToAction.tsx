import React from "react";

const CallToAction: React.FC = () => {
  return (
    <section className="flex overflow-hidden relative flex-col justify-center items-center px-20 py-44 w-full min-h-[629px] max-md:px-5 max-md:py-24 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae643cbb86bad15e59475a28319e878f8a4ad817d24ee445918bccd4e6d1e63d?apiKey=1f7f595eced5468b9fc0d8d091e46289&"
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col mb-0 w-full max-w-[1199px] max-md:mb-2.5 max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <h2 className="text-5xl font-bold tracking-tighter text-white capitalize leading-[60px] max-md:max-w-full max-md:text-4xl max-md:leading-[56px]">
            advancing agriculture through a range of sustainable and innovative
            practices:
          </h2>
          <div className="flex items-center self-start mt-12 text-sm font-medium text-center text-white max-md:mt-10">
            <a
              href="#"
              className="overflow-hidden gap-2.5 self-stretch px-6 py-5 my-auto rounded-3xl min-h-[45px] w-[120px] max-md:px-5"
            >
              Learn More
            </a>
            <a
              href="#"
              className="overflow-hidden gap-2.5 self-stretch px-6 py-5 my-auto rounded-3xl bg-stone-600 min-h-[45px] shadow-[0,0,0.20_inset] w-[120px] max-md:px-5"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
