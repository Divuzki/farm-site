import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  imageSrc: string;
  socialIconSrc: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imageSrc, socialIconSrc }) => {
  return (
    <div data-layername="team" className="flex flex-col justify-center self-stretch my-auto min-w-[240px] w-[286px]">
      <img loading="lazy" src={imageSrc} alt={`${name}, ${role}`} className="object-contain max-w-full aspect-square w-[286px]" />
      <div className="flex gap-10 justify-between items-center mt-6 max-w-full w-[286px]">
        <div className="flex flex-col justify-center self-stretch my-auto">
          <h3 className="text-base font-bold text-neutral-900">{name}</h3>
          <p className="mt-3.5 text-xs uppercase text-zinc-800 text-opacity-60">{role}</p>
        </div>
        <img loading="lazy" src={socialIconSrc} alt="Social media icon" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]" />
      </div>
    </div>
  );
};

export default TeamMember;