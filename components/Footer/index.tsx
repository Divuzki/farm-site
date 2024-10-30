import React from "react";
import SocialLinks from "./SocialLinks";

const Footer: React.FC = () => {
  return (
    <footer className="flex overflow-hidden flex-col justify-center px-24 py-12 w-full bg-orange-100 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-start w-full max-md:max-w-full">
        <div className="flex gap-10 items-start min-w-[240px] text-zinc-800 w-[327px]">
          <div className="flex flex-col justify-center min-w-[240px] w-[327px]">
            <div className="flex gap-2.5 justify-center items-center self-start text-3xl font-medium">
              <img
                loading="lazy"
                src="https://s3-alpha-sig.figma.com/img/aaff/d8e8/f83a4ff1c2c1e850645fd80dc65b3a17?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WHiCJYt2TzsrRZY6LxdMxsdCOeSSc-D5Fmi8kgHskEpKItZ4naJxU7rljy0om3c9i5aRw5hR0S2iTciz0NmfZzaREsUGARFxhfRvKpTNPB2j6-CxVxxQ3Sx7gLMQdbYzAmOXUd~XxmVqzpxE5Yszj3v~5bHYQ7NzUOlIqmMUFAOODFxnFu6gzP3o9ov1Bp3dgibPLTf9N9TriDCBG0p0oam~w8Ta4aTMW9xdeSyV4Svl1OuVgZh0Pg1FXfRkcWGdTaU00CDDccWRMMZAIjvFalSeOm18-w0rvUKlmjeXxmyRE1I4vIYbPvWlTw8kkzeWUTFRSLKlJMdEmCi18KDUjw__"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto aspect-square w-[50px]"
              />
            </div>
            <p className="mt-2.5 text-sm tracking-tight leading-6">
              Enhance your skills with cutting-edge learning resources and
              expert guidance, ensuring you&apos;re always ahead of the curve.
            </p>
          </div>
        </div>
        <nav className="flex gap-10 items-start min-w-[240px] text-zinc-800">
          <div className="flex flex-col justify-center">
            <h3 className="text-base font-bold tracking-tighter leading-9">
              Services
            </h3>
            <ul className="flex flex-col justify-center mt-2.5 text-sm tracking-tight leading-7">
              <li>
                <a href="#">Crop Cultivation</a>
              </li>
              <li className="mt-4">
                <a href="#">Fishery Poultry</a>
              </li>
              <li className="mt-4">
                <a href="#">Animal Wearing</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center whitespace-nowrap">
            <h3 className="text-base font-bold tracking-tighter leading-9">
              About
            </h3>
            <ul className="flex flex-col justify-center mt-2.5 text-sm tracking-tight leading-7">
              <li>
                <a href="#">Mission</a>
              </li>
              <li className="mt-4">
                <a href="#">Vision</a>
              </li>
              <li className="mt-4">
                <a href="#">Testimonials</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="flex flex-col justify-center min-w-[240px] w-[272px]">
          <SocialLinks />
          <a
            href="mailto:Jjtfarmslimited@gmail.com"
            className="mt-6 text-lg tracking-tighter text-zinc-800"
          >
            Jjtfarmslimited@gmail.com
          </a>
        </div>
      </div>
      <p className="gap-10 self-stretch mt-16 w-full text-sm tracking-tight text-zinc-800 max-md:mt-10 max-md:max-w-full">
        © All Right Reserved - 2024 JJT INTEGRATED FARMS
      </p>
    </footer>
  );
};

export default Footer;
