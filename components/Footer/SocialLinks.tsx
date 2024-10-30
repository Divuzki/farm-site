import React from "react";

const socialLinks = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/fe33a01c261323cd7fc03032188788348e1a518f188eea3f645a6c84be618751?apiKey=1f7f595eced5468b9fc0d8d091e46289&",
    alt: "Facebook",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2134a8102be3fa036eaaf9cddd892142d60d64a2ccb3eb67711bd642196556a1?apiKey=1f7f595eced5468b9fc0d8d091e46289&",
    alt: "Twitter",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/aee4c9dc1401a35e7cb409275c88e82d9bfb914c8bd8bc32dfddf09e66644887?apiKey=1f7f595eced5468b9fc0d8d091e46289&",
    alt: "Instagram",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/afc62b98b1201b375939a9e01ceb73aee4eafb127a8b999147a7239dd927fcae?apiKey=1f7f595eced5468b9fc0d8d091e46289&",
    alt: "LinkedIn",
  },
];

const SocialLinks: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4 items-center max-w-full w-[272px]">
      {socialLinks.map((link, index) => (
        <a key={index} href="#" aria-label={`Visit our ${link.alt} page`}>
          <img
            loading="lazy"
            src={link.src}
            alt={link.alt}
            className="object-contain shrink-0 self-stretch my-auto w-14 aspect-square"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
