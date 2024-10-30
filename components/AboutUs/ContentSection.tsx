import React from 'react';
import ContentBlock from './ContentBlock';

const ContentSection: React.FC = () => {
  const contentBlocks = [
    {
      title: "Leaders in Eco-Friendly Farming",
      content: "At JJT Integrated Farms, our mission is to advance sustainable agricultural practices by producing high-quality, eco-friendly food products while promoting innovation in fishery, poultry, animal husbandry, and crop cultivation. We aim to empower communities, contribute to food security, and enhance the agricultural value chain through ethical farming and responsible resource management.",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9961993274f9d75980a03328f7a0cff64a9e8405f2a88212c08ef6d01e47f58a?placeholderIfAbsent=true&apiKey=1f7f595eced5468b9fc0d8d091e46289",
      imageAlt: "Eco-friendly farming practices",
      imageFirst: true
    },
    {
      title: "Cultivating a Greener Future",
      content: "Our vision is to become a leading agricultural enterprise recognized for its commitment to sustainability, innovation, and excellence in the production of farm goods. We strive to create a greener future where agriculture thrives in harmony with nature, providing healthy, nutritious products for local and global markets.",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d235ea38ef29c299bd9b78ffb50ccfb77e2ac06e826e0b4601d7310ca04f210f?placeholderIfAbsent=true&apiKey=1f7f595eced5468b9fc0d8d091e46289",
      imageAlt: "Sustainable agriculture vision",
      imageFirst: false
    }
  ];

  return (
    <section data-layername="desktop18" className="flex overflow-hidden flex-col items-center px-20 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col justify-center py-12 w-full max-w-[1240px] max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          {contentBlocks.map((block, index) => (
            <ContentBlock key={index} {...block} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;