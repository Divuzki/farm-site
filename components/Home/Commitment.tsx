import React from "react";
import CommitmentItem from "./CommitmentItem";

interface CommitmentData {
  title: string;
  description: string;
  image: string;
  items?: string[];
}

const commitmentData: CommitmentData[] = [
  {
    title: "Distribution and Logistics",
    description:
      "JJT Integrated Farms provides comprehensive logistics and transportation services for agricultural products. Our logistics services include:",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/de46b5af61fa3180c7f6c6fb2ba0433be518a2b1db3d8b0f81328267f450c7f1?apiKey=1f7f595eced5468b9fc0d8d091e46289&",
    items: [
      "Transportation of Agricultural Produce: We handle the safe and timely transportation of fish, poultry, livestock, and crops to local and international markets.",
      "Cold Storage Solutions: We offer cold storage facilities to preserve the freshness of perishable agricultural goods.",
    ],
  },
  {
    title: "Agricultural Consulting and Training",
    description:
      "We provide expert consulting and training services to farmers, organizations, and businesses, aimed at improving agricultural productivity and sustainability. Our consulting services include:",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f508e91c6e6657504b6a10272c95509090268f6bc0313400d6949d8acf764487?apiKey=1f7f595eced5468b9fc0d8d091e46289&",
    items: [
      "Farm Management and Planning: We assist clients in setting up efficient farm operations, from animal husbandry to crop cultivation.",
      "Sustainable Farming Practices: We offer training on organic farming, eco-friendly animal rearing, and sustainable water usage.",
      "Agricultural Market Access: We help farmers and agribusinesses access local and international markets, offering guidance on value addition and product distribution.",
    ],
  },
];

const Commitment: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-20 py-0.5 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col py-12 w-full max-w-[1240px] max-md:max-w-full">
        <div className="flex flex-wrap justify-between items-center w-full max-md:max-w-full">
          <h2 className="self-stretch my-auto text-5xl font-bold leading-[68px] text-zinc-800 w-[559px] max-md:max-w-full max-md:text-4xl max-md:leading-[63px]">
            Our Commitment to Excellence
          </h2>
          <p className="flex-1 shrink self-stretch my-auto text-lg leading-7 min-w-[240px] text-zinc-800 max-md:max-w-full">
            Focused on innovation and sustainability, JJT Integrated Farms is
            committed to transforming the agricultural sector by offering
            eco-friendly solutions that enhance productivity and support
            community development.
          </p>
        </div>
        <div className="flex flex-col mt-20 w-full max-md:mt-10 max-md:max-w-full">
          {commitmentData.map((item, index) => (
            <CommitmentItem key={index} {...item} reverse={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commitment;
