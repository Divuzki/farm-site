import React from "react";
import ServiceBox from "./ServiceBox";

const CoreServices: React.FC = () => {
  const services = [
    {
      title: "Planting and Cultivating",
      description:
        "Our planting practices prioritize organic methods, enhancing soil health and promoting biodiversity while avoiding harmful chemicals.",
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/cad4/1e94/e4071a34d42e8f7808bdbcfc212f7a1f?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MhFo0dPdrxTkXHbgqsUnm06D4OS3wrZQESO1AHjKCtx1rP2RLHNw2ISp8a9iuf01Ef0Hxu-wEguoqDhwh8yj~~rVlqYK5m8Wl7CiHwF18YHkZCPZXtvEv7g3LbuVLK00sgbzLBbqjAm3y8hdTSM-nB3jYZIbUUMMqZEcDURARqP-HM09A6znmet-5SngSCR603Qh0of9--jLChv6V~hrPU5YxRrk56jpUUSjS-UKt-vbUO6tN4Hg6Sv84SthVEX0l4FhVBkaEUmla6dc1X1IV1kDnunj9GZeqQxYrQY901dvBm4pQNn6EWJCQPlObOzMw8J5Ax5Eonpdhu-YTSWCWA__",
      imageAlt: "Planting and Cultivating",
    },
    {
      title: "Fish Farming",
      description:
        "We prioritize eco-friendly methods in our fish farming operations, focusing on water conservation and minimizing environmental impact.",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9403606c863c4952355e7b16ade9f62c7c70467c3083080cf9d753cabd431e04?placeholderIfAbsent=true&apiKey=1f7f595eced5468b9fc0d8d091e46289",
      imageAlt: "Fish Farming",
    },
    {
      title: "Animal Husbandry",
      description:
        "Our animal husbandry practices focus on the health and well-being of livestock, utilizing veterinary care, proper nutrition, and sustainable breeding methods.",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8bd00498355067ec97c3617eb365aa1bac377364fbe314812f91b7d38bad3bbe?placeholderIfAbsent=true&apiKey=1f7f595eced5468b9fc0d8d091e46289",
      imageAlt: "Animal Husbandry",
    },
  ];

  return (
    <section
      data-layername="desktop6"
      className="flex overflow-hidden flex-col pb-5 bg-orange-100"
    >
      <div className="flex flex-col py-12 w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-10 px-4 md:px-6 justify-between items-center self-center max-w-full w-[1240px]">
          <h2
            data-layername="ourCoreServices"
            className="self-stretch my-auto ml-1.5 text-5xl font-bold leading-none text-zinc-800 max-md:text-4xl"
          >
            Our Core Services
          </h2>
          <p
            data-layername="withAStrongFoundationInFisheryPoultryAnimalHusbandryAndCropCultivationJjtIntegratedFarmsDeliversSustainableHighQualityAgriculturalSolutionsThatMeetTheGrowingDemandsOfBothLocalAndInternationalMarkets"
            className="self-stretch my-auto text-xl leading-8 text-zinc-800 text-opacity-90 w-[607px] max-md:max-w-full"
          >
            With a strong foundation in fishery, poultry, animal husbandry, and
            crop cultivation, JJT Integrated Farms delivers sustainable,
            high-quality agricultural solutions that meet the growing demands of
            both local and international markets.
          </p>
        </div>
        <div className="flex flex-wrap gap-10 justify-between items-center px-24 mt-20 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
          {services.slice(0, 1).map((service, index) => (
            <ServiceBox
              key={index}
              title={service.title}
              isFirst
              description={service.description}
              imageSrc={service.imageSrc}
              imageAlt={service.imageAlt}
            />
          ))}
          <div className="flex max-md:flex-col gap-4 w-full">
            {services.slice(1, 3).map((service, index) => (
              <ServiceBox
                key={index}
                title={service.title}
                description={service.description}
                imageSrc={service.imageSrc}
                imageAlt={service.imageAlt}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
