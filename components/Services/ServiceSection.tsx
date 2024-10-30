import React from 'react';

interface ServiceSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  isReversed?: boolean;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ title, description, imageSrc, imageAlt, isReversed = false }) => {
  const textContent = (
    <div className="flex flex-col justify-center self-stretch my-auto min-w-[240px] w-[532px] max-md:max-w-full">
      <div className="flex flex-col justify-center max-w-full w-[532px]">
        <h2 className="text-4xl font-bold text-black text-opacity-20 max-md:max-w-full">
          {title}
        </h2>
        <p className="mt-5 text-xl leading-8 text-zinc-800 max-md:max-w-full">
          {description}
        </p>
      </div>
    </div>
  );

  const imageContent = (
    <img 
      loading="lazy" 
      src={imageSrc} 
      alt={imageAlt}
      className="object-contain flex-1 shrink self-stretch my-auto w-full rounded-3xl aspect-[1.62] basis-0 min-h-[361px] min-w-[240px] max-md:max-w-full"
    />
  );

  return (
    <div className="flex flex-wrap gap-10 items-center mt-12 w-full max-md:mt-10 max-md:max-w-full">
      {isReversed ? (
        <>
          {imageContent}
          {textContent}
        </>
      ) : (
        <>
          {textContent}
          {imageContent}
        </>
      )}
    </div>
  );
};

export default ServiceSection;
