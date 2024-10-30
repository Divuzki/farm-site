import React from 'react';

interface ServiceBoxProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const ServiceBox: React.FC<ServiceBoxProps> = ({ title, description, imageSrc, imageAlt }) => {
  return (
    <article className="flex overflow-hidden flex-col self-stretch p-16 my-auto bg-[#547C50] min-w-[240px] rounded-[40px] w-[600px] max-md:px-5 max-md:max-w-full">
      <img loading="lazy" src={imageSrc} alt={imageAlt} className="object-contain max-w-full rounded-3xl aspect-[2.18] w-[480px]" />
      <div className="flex flex-col justify-center mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <h3 className="text-5xl font-bold tracking-tighter text-white max-md:max-w-full max-md:text-4xl">
          {title}
        </h3>
        <p className="mt-8 text-xl leading-8 text-white text-opacity-90 max-md:max-w-full">
          {description}
        </p>
      </div>
    </article>
  );
};

export default ServiceBox;
