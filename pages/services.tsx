import Layout from "@/components/Layout";
import ServiceSection from "@/components/Services/ServiceSection";
import { ServiceData } from "@/components/Services/types";
import React from "react";

const servicesData: ServiceData[] = [
  {
    title: "Fish Farming",
    description:
      "Fish farming is at its best here at JJT integrated Farms, Nigeria . In search of fishes of different sizes ranging from fingerlings to market size or freshly smoked fish? Look no further than JJT farms. Send us us to DM to order your share of healthy fish to meet your omega-3 requirements.",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/95c9ece3eee5284fe3231659ed60d65e930d1905778e444c40646da5288f6ba1?placeholderIfAbsent=true&apiKey=1f7f595eced5468b9fc0d8d091e46289",
    imageAlt: "Fish farming at JJT integrated Farms",
  },
  {
    title: "Poultry",
    description:
      "At JJT farms, we rear our chicken without the use of chemicals or growth hormones, according to the highest farming standards. Our dedication to sustainable and natural techniques. Our poultry is fed on an entirely vegetarian diet",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/069cf940213984bd58ffc5580c8888202e4ea6ff3e870fff0b9afecc4840f709?placeholderIfAbsent=true&apiKey=1f7f595eced5468b9fc0d8d091e46289",
    imageAlt: "Poultry farming at JJT Farms",
  },
  {
    title: "Animal Wearing/Husbandry",
    description:
      "This is another key service offered by JJT, focusing on the rearing of livestock such as cattle, goats, and sheep. The farm employs modern breeding techniques, veterinary care, and nutrition management to ensure healthy and productive livestock. This results in high-quality meat and dairy products that are distributed to local and international consumers.",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/66342e2f58c79bf7161579ddd875a678cd84e20fb5004c03bd72101235de8a7a?placeholderIfAbsent=true&apiKey=1f7f595eced5468b9fc0d8d091e46289",
    imageAlt: "Animal husbandry at JJT Farms",
  },
  {
    title: "Crop Cultivation",
    description:
      "JJT Integrated Farms uses organic farming methods to produce a wide variety of crops, including vegetables and grains. The farm emphasizes soil health, crop diversity, and sustainable resource management to maximize yield while protecting the environment. The use of chemical-free practices ensures that the crops are healthy, nutritious, and safe for consumption.",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d66541c3f38636b081061f280a1a9207835a8e551955d95b7946f7a7abaff034?placeholderIfAbsent=true&apiKey=1f7f595eced5468b9fc0d8d091e46289",
    imageAlt: "Crop cultivation at JJT Farms",
  },
  {
    title: "Consultation and Training",
    description:
      "We provide expert advice and training to farmers, agribusinesses, and stakeholders in the agricultural sector. This includes guidance on sustainable farming practices, organic crop production, livestock management, and value chain enhancement. Through these services, JJT empowers its clients to make informed decisions and adopt practices that promote long-term sustainability and success.",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a17010af5ca83af6287a60ecb814f596009fb8267b5fdeb890deed3fe927ed18?placeholderIfAbsent=true&apiKey=1f7f595eced5468b9fc0d8d091e46289",
    imageAlt: "Consultation and training services at JJT Farms",
  },
];

const Services: React.FC = () => {
  return (
    <Layout>
      <main className="flex flex-col">
        <header className="flex overflow-hidden relative justify-center flex-col items-center px-20 pt-64 pb-32 w-full text-6xl font-bold leading-none text-center text-white whitespace-nowrap min-h-[473px] max-md:px-5 max-md:py-24 max-md:max-w-full max-md:text-4xl">
          <img
            loading="lazy"
            src="https://s3-alpha-sig.figma.com/img/6aed/ea52/f90a7dbe15f54e40accede5dc54bd95c?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CFZsSpq8XzdlbxwF83yYT8nxPH7qr65xkMKpQfwIf3M1d-HX5UmXUCbFeI4RaAUhxL3N46VrURCDDKFMuNXsX8ihvKnZwJ2QdW~v7SAVQNqAY5czzw98e97kboN0hi4qPG~ua6zT6r6T~ee2rhiKIuNSg1Aap3ainOc8cgl--NsPfvth0KNfF8QcUqtkj8FjOtnImcRNGkw387KnAMmfM84WXIkhJmYCqCVjQo5s8PHPYdJWktRd-338dcEkPkG6j9114FDdpRjCWLL9Jqbqr4TyNv76hSnZYot0jmOvD4TUYlH2UHT69ix~WLjEUAJwLbKTphQEoFX8BIl7bwzTtw__"
            alt="Services background"
            className="object-cover absolute inset-0 size-full opacity-40"
          />
          <h1 className="relative mb-0 w-full max-w-[1176px] max-md:mb-2.5 max-md:max-w-full max-md:text-4xl">
            Services
          </h1>
        </header>
        <section className="flex overflow-hidden flex-col items-center px-20 w-full bg-white max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col justify-center py-12 w-full max-w-[1240px] max-md:max-w-full">
            <div className="flex flex-col w-full max-md:max-w-full">
              {servicesData.map((service, index) => (
                <ServiceSection
                  key={index}
                  title={service.title}
                  description={service.description}
                  imageSrc={service.imageSrc}
                  imageAlt={service.imageAlt}
                  isReversed={index % 2 !== 0}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Services;
