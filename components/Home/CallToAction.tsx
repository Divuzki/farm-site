import React from "react";

const CallToAction: React.FC = () => {
  return (
    <section className="flex overflow-hidden relative flex-col justify-center items-center px-20 py-44 w-full min-h-[629px] max-md:px-5 max-md:py-24 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://s3-alpha-sig.figma.com/img/04b4/0536/f8cb0d07b321efc300f847d7f371ea71?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DMeiLzTN7BviRxhMmc4KMQK0tafDWoG1RpFF8IuggqaDNUhTKxI~aE1GvCOKJqS~hLZ6ABkHSLA25uePFrKgYxBHrdWv6VulIR9O5-qV0BT4VVXXyBLcFG1jngUTMK6HOntdkRtytBB5FLWfnYZr5VRRlAokcftd-O24jPdapQ3MEnEJVa-Y47Puch-E8CV~s1JzwkKM~EbhLcoEXV0BspJrSiBVujCJfYnXhtSFycmQxI9CIxShbBAv9RAaks7Pj-5J6lLWnwsKHPPsnr40pM7xsmeNV0~E9ZINFnb-IlrMN~SILPAIRowVfyIFaAJ3KlPW7PQEpZuOdnk3PgeRnQ__"
        alt=""
        className="object-cover absolute inset-0 size-full opacity-20 bg-black"
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
              className="overflow-hidden gap-2.5 self-stretch px-6 py-5 my-auto rounded-3xl bg-[#547C50] min-h-[45px] shadow-[0,0,0.20_inset] w-[120px] max-md:px-5"
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
