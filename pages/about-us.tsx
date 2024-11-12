import ContentSection from "@/components/AboutUs/ContentSection";
// import TeamSection from "@/components/AboutUs/TeamSection";
import Layout from "@/components/Layout";
import React from "react";

const AboutUs: React.FC = () => {
  return (
    <Layout>
      <div data-layername="aboutUs" className="flex flex-col">
        <header className="flex overflow-hidden relative flex-col justify-center items-center px-20 pt-64 pb-32 w-full text-6xl font-bold leading-none text-center text-white whitespace-nowrap min-h-[473px] max-md:px-5 max-md:py-24 max-md:max-w-full max-md:text-4xl">
          <img
            loading="lazy"
            src="https://s3-alpha-sig.figma.com/img/6aed/ea52/f90a7dbe15f54e40accede5dc54bd95c?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CFZsSpq8XzdlbxwF83yYT8nxPH7qr65xkMKpQfwIf3M1d-HX5UmXUCbFeI4RaAUhxL3N46VrURCDDKFMuNXsX8ihvKnZwJ2QdW~v7SAVQNqAY5czzw98e97kboN0hi4qPG~ua6zT6r6T~ee2rhiKIuNSg1Aap3ainOc8cgl--NsPfvth0KNfF8QcUqtkj8FjOtnImcRNGkw387KnAMmfM84WXIkhJmYCqCVjQo5s8PHPYdJWktRd-338dcEkPkG6j9114FDdpRjCWLL9Jqbqr4TyNv76hSnZYot0jmOvD4TUYlH2UHT69ix~WLjEUAJwLbKTphQEoFX8BIl7bwzTtw__"
            alt="Services background"
            className="object-cover absolute inset-0 opacity-40 size-full"
          />
          <h1 className="relative mb-0 w-full max-w-[1176px] max-md:mb-2.5 max-md:max-w-full text-5xl max-md:text-4xl">
            About
          </h1>
        </header>
        <ContentSection />
        {/* <TeamSection /> */}
      </div>
    </Layout>
  );
};

export default AboutUs;
