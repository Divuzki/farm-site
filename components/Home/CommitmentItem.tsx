import React from "react";

interface CommitmentItemProps {
  title: string;
  description: string;
  image: string;
  items?: string[];
  reverse?: boolean;
}

const CommitmentItem: React.FC<CommitmentItemProps> = ({
  title,
  description,
  image,
  items,
  reverse,
}) => {
  return (
    <div
      className={`flex flex-wrap gap-10 ${
        reverse ? "flex-row-reverse" : ""
      } items-center mt-12 w-full max-md:mt-10 max-md:max-w-full`}
    >
      <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
        <h3 className="w-full text-4xl font-bold leading-[60px] text-black text-opacity-20 max-md:max-w-full">
          {title}
        </h3>
        <div className="flex flex-col mt-5 w-full max-md:max-w-full">
          <p className="text-lg leading-7 text-zinc-800 max-md:max-w-full">
            {description}
          </p>
          {items && (
            <ul className="flex flex-col mt-4 w-full text-base leading-6 text-zinc-800 text-opacity-80 max-md:max-w-full">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-wrap gap-2 items-center mt-4 w-full max-md:max-w-full"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/162c9c1367c93d7c44db4d084e02f1c61ddb858067354bf91da1020ed031c45c?apiKey=1f7f595eced5468b9fc0d8d091e46289&"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                  />
                  <span className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <img
        loading="lazy"
        src={image}
        alt={title}
        className="object-contain self-stretch my-auto rounded-3xl aspect-[1.49] min-h-[361px] min-w-[240px] w-[538px] max-md:max-w-full"
      />
    </div>
  );
};

export default CommitmentItem;
