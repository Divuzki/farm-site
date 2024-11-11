import React from 'react';

const ContactInfo: React.FC = () => {
  return (
    <section className="flex flex-col justify-center self-stretch my-auto min-w-[240px] text-zinc-800 w-[660px] max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[610px]">
        <h1 className="text-6xl font-medium leading-none max-md:max-w-full max-md:text-4xl">
          Contact Us
        </h1>
        <p className="mt-5 text-xl tracking-tighter leading-8 max-md:max-w-full">
          If you have inquiries or need assistance, do not hesitate to chat with us. We are available Monday to Sunday (8am to 7pm). Public Holidays between 9am and 5pm.
        </p>
      </div>
      <div className="flex flex-wrap gap-16 items-start mt-10 w-full max-w-[660px] max-md:max-w-full">
        <ContactMethod
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/44142927ec4501acdce3afb7493a869e95870528d6b764cfac985d827517f0f4?placeholderIfAbsent=true&apiKey=1f7f595eced5468b9fc0d8d091e46289"
          title="Call us"
          content="08054922926, 07066360100"
        />
        <ContactMethod
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/f4ecaa1b7d5d6d30b41ea158f3a24346f0b509418737206a22d4b912fe19d4ac?placeholderIfAbsent=true&apiKey=1f7f595eced5468b9fc0d8d091e46289"
          title="Write us"
          content="Jjtfarmslimited@gmail.com"
        />
      </div>
    </section>
  );
};

interface ContactMethodProps {
  icon: string;
  title: string;
  content: string;
}

const ContactMethod: React.FC<ContactMethodProps> = ({ icon, title, content }) => {
  return (
    <div className="flex gap-7 items-center min-w-[240px] max-md:max-w-full">
      <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square" />
      <div className="flex flex-col self-stretch my-auto min-w-[240px]">
        <h2 className="text-lg md:text-xl tracking-tighter">{title}</h2>
        <p className="mt-2 md:text-3xl text-xl font-medium tracking-tighter leading-none">
          {content}
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;