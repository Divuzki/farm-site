import React from "react";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col py-8 pr-4 pl-8 bg-white rounded-3xl min-w-[240px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[282px] max-md:pl-5">
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain aspect-square w-[60px]"
      />
      <h4 className="mt-5 text-lg font-semibold leading-none text-black">
        {title}
      </h4>
      <p className="mt-5 text-base leading-6 text-zinc-800">{description}</p>
    </div>
  );
};

export default ServiceCard;
