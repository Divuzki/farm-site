import React from "react";
import Navigation from "./Navigation";

const Header: React.FC = () => {
  return (
    <header className="flex overflow-hidden relative flex-col pb-28 w-full min-h-[744px] max-md:pb-24 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/742ce44151ad87df4b1ea1daedaaeb6241d1a95c82cd68eb2c4c66d138e5e317?apiKey=1f7f595eced5468b9fc0d8d091e46289&"
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      <div className="relative gap-2.5 self-stretch p-2.5 text-base leading-8 text-center text-white bg-neutral-900">
        A custom notification goes here ✨
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
