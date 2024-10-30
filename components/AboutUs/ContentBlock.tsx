import React from 'react';

interface ContentBlockProps {
  title: string;
  content: string;
  imageSrc: string;
  imageAlt: string;
  imageFirst: boolean;
}

const ContentBlock: React.FC<ContentBlockProps> = ({ title, content, imageSrc, imageAlt, imageFirst }) => {
  const textContent = (
    <div data-layername="message" className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
      <h2 className="w-full text-4xl font-bold leading-[60px] text-black text-opacity-20 max-md:max-w-full">
        {title}
      </h2>
      <p className="mt-5 w-full text-xl leading-10 text-neutral-900 max-md:max-w-full">
        {content}
      </p>
    </div>
  );

  const image = (
    <img 
      loading="lazy" 
      src={imageSrc} 
      alt={imageAlt}
      className="object-contain my-auto rounded-3xl aspect-[1.49] min-h-[361px] min-w-[240px] w-[538px] max-md:max-w-full"
    />
  );

  return (
    <div className="flex flex-wrap gap-10 w-full max-md:max-w-full">
      {imageFirst ? (
        <>
          {image}
          {textContent}
        </>
      ) : (
        <>
          {textContent}
          {image}
        </>
      )}
    </div>
  );
};

export default ContentBlock;