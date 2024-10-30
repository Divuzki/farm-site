import ContactForm from '@/components/ContactUs/ContactForm';
import ContactInfo from '@/components/ContactUs/ContactInfo';
import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col items-center px-20 pt-52 pb-20 bg-white max-md:px-5 max-md:pt-24">
      <div className="flex flex-col w-full max-w-[1240px] max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </main>
  );
};

export default ContactUs;