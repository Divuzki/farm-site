import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center self-stretch p-6 my-auto text-sm tracking-tight rounded-3xl bg-stone-50 min-w-[240px] w-[508px] max-md:px-5 max-md:max-w-full">
      <h2 className="text-2xl font-bold tracking-tighter text-center text-zinc-800">
        Send a Message ✨
      </h2>
      <form method='POST' action='https://farmsend-production.up.railway.app' className="flex flex-col justify-center items-center mt-8 w-full max-w-[460px] max-md:max-w-full">
        <div className="flex gap-5 justify-between items-center w-full">
          <InputField label="First Name" fullWidth placeholder="Dominic" />
          <InputField label="Last Name" fullWidth placeholder="Praise" />
        </div>
        <InputField label="Email Address" placeholder="e.g dominic@gmail.com" fullWidth />
        <TextAreaField label="Your Message" placeholder="Write your message" />
        <button type="submit" className="overflow-hidden gap-2.5 self-stretch px-20 py-6 mt-8 w-full font-medium text-center text-white bg-green-800 rounded-3xl min-h-[54px] shadow-[0,0,0.20_inset] max-md:px-5 max-md:max-w-full">
          Send Message
        </button>
      </form>
    </section>
  );
};

interface InputFieldProps {
  label: string;
  placeholder: string;
  fullWidth?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label, placeholder, fullWidth = false }) => {
  return (
    <div className={`flex flex-col justify-center ${fullWidth ? 'mt-5 w-full' : 'w-[220px]'} max-md:max-w-full`}>
      <label className="leading-7 text-zinc-800">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className={`overflow-hidden gap-2.5 self-stretch px-4 py-5 mt-2 ${fullWidth ? 'w-full' : 'max-w-full'} bg-white rounded-xl border border-gray-100 border-solid min-h-[52px] shadow-[0px_1px_2px_rgba(88,98,131,0.2)] text-zinc-800 text-opacity-50`}
      />
    </div>
  );
};

const TextAreaField: React.FC<InputFieldProps> = ({ label, placeholder }) => {
  return (
    <div className="flex flex-col justify-center mt-5 w-full max-md:max-w-full">
      <label className="leading-7 text-zinc-800">{label}</label>
      <textarea
        placeholder={placeholder}
        className="overflow-hidden gap-2.5 px-4 pt-4 pb-24 mt-2 w-full bg-white rounded-xl border border-gray-100 border-solid min-h-[120px] shadow-[0px_1px_2px_rgba(47,43,67,0.1)] text-zinc-800 text-opacity-50"
      ></textarea>
    </div>
  );
};

export default ContactForm;