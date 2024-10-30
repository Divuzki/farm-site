import React from 'react';
import TeamMember from './TeamMember';

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: "Oladiran Babatunde",
      role: "FOUNDER & CEO",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2552710018f237e3cc84512c8707a36a30f663a2dd0b94b1c64fbfd434661d50?placeholderIfAbsent=true&apiKey=1f7f595eced5468b9fc0d8d091e46289",
      socialIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0a44c232bec6800dc5c66de55d97f306921e55fa022c53be79ef4c70a3ec248b?placeholderIfAbsent=true&apiKey=1f7f595eced5468b9fc0d8d091e46289"
    },
    {
      name: "Janet Godswill",
      role: "OPERATIONS MANAGER",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8899bec259ef4b0414bab9d10e7751ef3d8b1411d2fe4dced8a94ff467e533d0?placeholderIfAbsent=true&apiKey=1f7f595eced5468b9fc0d8d091e46289",
      socialIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7f9af0b069c7a0651763d4e8b534c88acce0361e2b34bcac8525e59765784599?placeholderIfAbsent=true&apiKey=1f7f595eced5468b9fc0d8d091e46289"
    },
    {
      name: "Chidi Eze",
      role: "MARKETING AND SALES MANAGER",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/876c9154d817ee3b174ba5d358054788654dbd4fbb4c5cfc5f96f35a83791926?placeholderIfAbsent=true&apiKey=1f7f595eced5468b9fc0d8d091e46289",
      socialIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef128c43e8318bdd679f53bc5e14a8c697da28b897ca94f85ed52d0e54bfb2b3?placeholderIfAbsent=true&apiKey=1f7f595eced5468b9fc0d8d091e46289"
    },
    {
      name: "Michael Olalekan",
      role: "HEAD OF SUSTAINABILITY",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/70cc18be79a80754aa27b20564168d4fabfdcd51d9e008660038192522a0f3e5?placeholderIfAbsent=true&apiKey=1f7f595eced5468b9fc0d8d091e46289",
      socialIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7ec4f76387311d5d9e9fb9de07296c282fad39d9b21b2430992ae8d9cecc7494?placeholderIfAbsent=true&apiKey=1f7f595eced5468b9fc0d8d091e46289"
    }
  ];

  return (
    <section data-layername="desktop20" className="flex overflow-hidden flex-col items-center px-20 pb-14 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col py-12 w-full max-w-[1240px] max-md:max-w-full">
        <div className="flex flex-wrap justify-between items-center w-full max-md:max-w-full">
          <h2 data-layername="ourTeam" className="self-stretch my-auto text-5xl font-bold leading-none text-zinc-800 w-[559px] max-md:max-w-full max-md:text-4xl">
            Our Team
          </h2>
          <p data-layername="message" className="flex-1 shrink self-stretch my-auto text-lg leading-7 min-w-[240px] text-zinc-800 max-md:max-w-full">
            Our success is built on the dedication, expertise, and passion of our team. Comprising skilled professionals with vast experience in agriculture, sustainability, and business management,.
          </p>
        </div>
        <div className="flex flex-wrap gap-8 md:justify-between justify-center items-center mt-20 w-full max-md:mt-10">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;