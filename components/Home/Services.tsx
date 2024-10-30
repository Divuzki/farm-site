import React from "react";
import ServiceCard from "./ServiceCard";

interface ServiceData {
  icon: string;
  title: string;
  description: string;
}

const servicesData: ServiceData[] = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/abb40036fc66ea6dcbb5e394adc564b33bd8d62aeb73da43eeb4fef0d793e1cb?apiKey=1f7f595eced5468b9fc0d8d091e46289&",
    title: "Organic Farming Techniques",
    description:
      "We use natural, chemical-free methods to grow crops, improving soil health and reducing harmful environmental impact.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b9798b8197ffa53711a45452fec2ee09a53d6ca190503344b6dd3ecf2d7c5930?apiKey=1f7f595eced5468b9fc0d8d091e46289&",
    title: "Eco-Friendly Poultry Rearing Methods",
    description:
      "We prioritizes sustainable and ethical practices in poultry farming by using organic, antibiotic-free feeds and ethical farming practices.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f19f78764538e3e3db787529c5092508c7ce761df5b715b505335615f33888bb?apiKey=1f7f595eced5468b9fc0d8d091e46289&",
    title: "Soil Health Improvement",
    description:
      "By using organic manure and natural fertilizers, JJT Integrated Farms enhances soil fertility without depleting natural resources.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6458117c1370483456046fc1cb0556d2669a7bdda29ef4aa311ec19e4e464b5b?apiKey=1f7f595eced5468b9fc0d8d091e46289&",
    title: "Water Conservation in Fish Farming",
    description:
      "The farm employs sustainable water management practices in its fishery operations, such as water recycling and controlled water usage.",
  },
];

const Services: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col items-center px-20 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col py-12 w-full max-w-[1199px] max-md:max-w-full">
        <div className="flex flex-col justify-center w-full max-md:max-w-full">
          <h2 className="text-sm text-yellow-800">
            Comprehensive Solutions for a Greener Agricultural Future
          </h2>
          <div className="flex flex-col justify-center mt-8 w-full text-zinc-800 max-md:max-w-full">
            <h3 className="text-5xl font-bold leading-none max-md:max-w-full max-md:text-4xl">
              ALL-INCLUSIVE APPROACH
            </h3>
            <p className="mt-5 text-xl leading-8 max-md:max-w-full">
              JJT Integrated Farms offers eco-friendly products and services
              across the agricultural value chain. Our sustainable practices in
              fishery, poultry, and crop cultivation empower stakeholders to
              make environmentally responsible decisions that enhance
              productivity.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-16 w-full max-md:mt-10 max-md:max-w-full">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
