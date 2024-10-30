import React from "react";

interface ServiceBoxProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  isFirst?: boolean;
}

const ServiceBox: React.FC<ServiceBoxProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  isFirst,
}) => {
  return (
    <article
      className={`flex overflow-hidden ${
        isFirst ? "flex-row-reverse max-md:flex-col pl-16 py-16" : "flex-col p-16"
      }  self-stretch my-auto bg-[#547C50] rounded-[40px] w-full max-md:px-5 max-md:max-w-full`}
    >
      <img
        loading="lazy"
        src={imageSrc}
        alt={imageAlt}
        className={`object-cover ${
          isFirst ? "w-[450px] rounded-tl-2xl" : "flex-col rounded-3xl w-full aspect-[2.18]"
        }`}
      />
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
