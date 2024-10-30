import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "About Us",
    path: "/about-us",
  },
];

const Navigation: React.FC = () => {
  const router = useRouter();
  return (
    <nav className="flex overflow-hidden relative flex-wrap gap-5 justify-between items-start px-20 py-3.5 w-full text-base font-medium text-black bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex gap-2.5 justify-center items-center mt-2 text-2xl tracking-tighter">
        <img
          loading="lazy"
          src="https://s3-alpha-sig.figma.com/img/aaff/d8e8/f83a4ff1c2c1e850645fd80dc65b3a17?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WHiCJYt2TzsrRZY6LxdMxsdCOeSSc-D5Fmi8kgHskEpKItZ4naJxU7rljy0om3c9i5aRw5hR0S2iTciz0NmfZzaREsUGARFxhfRvKpTNPB2j6-CxVxxQ3Sx7gLMQdbYzAmOXUd~XxmVqzpxE5Yszj3v~5bHYQ7NzUOlIqmMUFAOODFxnFu6gzP3o9ov1Bp3dgibPLTf9N9TriDCBG0p0oam~w8Ta4aTMW9xdeSyV4Svl1OuVgZh0Pg1FXfRkcWGdTaU00CDDccWRMMZAIjvFalSeOm18-w0rvUKlmjeXxmyRE1I4vIYbPvWlTw8kkzeWUTFRSLKlJMdEmCi18KDUjw__"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[50px]"
        />
        {/* <div className="self-stretch my-auto border-white">Brand Name</div> */}
      </div>
      <div className="flex gap-8 justify-center items-center leading-8 text-center">
        {navLinks.map((link, i) => (
          <Link href={link.path} key={i} legacyBehavior>
            <a
              href="#"
              className={`gap-2.5 self-stretch p-2.5 my-auto whitespace-nowrap border-b ${
                router.asPath === link.path
                  ? "border-yellow-800"
                  : "border-transparent"
              }`}
            >
              {link.title}
            </a>
          </Link>
        ))}
      </div>
      <button
        onClick={() => router.push("/contact-us")}
        className="gap-2.5 self-stretch px-8 py-5 text-white bg-green-800 min-h-[52px] rounded-[100px] max-md:px-5"
      >
        Contact Us
      </button>
    </nav>
  );
};

export default Navigation;
