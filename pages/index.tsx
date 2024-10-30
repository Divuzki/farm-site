import Layout from "@/components/Layout";
import Services from "@/components/Home/Services";
import Commitment from "@/components/Home/Commitment";
import Testimonial from "@/components/Home/Testimonial";
import CallToAction from "@/components/Home/CallToAction";
import CoreServices from "@/components/Home/CoreServices";

export default function Home() {
  return (
    <Layout>
      <section className="flex relative flex-col justify-center w-full py-40 items-center">
        <img
          loading="lazy"
          src="https://s3-alpha-sig.figma.com/img/b1d4/801f/569c0ea7fadf56032795b64bb8dfc910?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PZjopebG9Gp~N66v7rH53ihStPth~DSeA7h3QvLaic42nq3Lc7TcS82NVeqitVwTk6c2lZzL-wT2Zp0f6HExLEy1bJ041qq3O9legRHnKqZ5T62Lr21pCbDsCoNxIrnqQhPneuTry7F80-qUdPdaU--z2nmmWlbTZrbCgsY4YE8N13dLxys186Jfd-zH9VRXsuWsHk0ddBo~vFjJ6fAbkjx7aqORtiN-HmxWLc-caTHq4AmjBP8hSQtnEQyALSZhM1NF4EzSbpKMOx0FGgiQA2IU2bd2jpqBHnqGQ3xwyznHSMk6-ssRp-SHtTBfmTi6Ad8HBzkhSgfejLS1PIgVjQ__"
          alt=""
          className="object-cover self-stretch z-[-1] w-full opacity-20 bg-black h-full absolute top-0 left-0"
        />
        <h1 className="text-6xl font-bold text-center text-white leading-[84px] max-md:max-w-full max-md:text-4xl max-md:leading-[66px]">
          Empowering sustainable agriculture through innovative practices and
          eco-friendly solutions
        </h1>
        <SocialMediaList />
      </section>
      <Services />
      <CoreServices />
      <Commitment />
      <Testimonial />
      <CallToAction />
    </Layout>
  );
}

interface SocialMediaItem {
  src: string;
  alt: string;
}

const socialMediaItems: SocialMediaItem[] = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/35cf0e442a4ef2bcbf0395d9ca5fdac54eb66f1c7f303677b3460bf1bf02fb32?apiKey=1f7f595eced5468b9fc0d8d091e46289&",
    alt: "Social media icon 1",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/130f35b2a64524a88d81783eaeb3bfcf9f40102c8350af0bf36f3b8e6860a91a?apiKey=1f7f595eced5468b9fc0d8d091e46289&",
    alt: "Social media icon 2",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a6ad0cf4881192daa6a27b764bd63c5a796d4517f62e626fb0d54896799ebc4f?apiKey=1f7f595eced5468b9fc0d8d091e46289&",
    alt: "Social media icon 3",
  },
];

const SocialMediaList: React.FC = () => {
  return (
    <nav className="flex gap-4 items-center self-center mt-10">
      {socialMediaItems.map((item, index) => (
        <img
          key={index}
          loading="lazy"
          src={item.src}
          alt={item.alt}
          className="object-contain shrink-0 self-stretch my-auto w-14 aspect-square"
        />
      ))}
    </nav>
  );
};
