import Layout from "@/components/Layout";
import Services from "@/components/Home/Services";
import Commitment from "@/components/Home/Commitment";
import Testimonial from "@/components/Home/Testimonial";
import CallToAction from "@/components/Home/CallToAction";
import CoreServices from "@/components/Home/CoreServices";

export default function Home() {
  return (
    <Layout>
      <section className="flex relative flex-col justify-center self-center mt-40 mb-0 ml-8 w-full max-w-[1176px] max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
        <h1 className="sr-only">Welcome to JJT Integrated Farms</h1>
      </section>
      <Services />
      <CoreServices />
      <Commitment />
      <Testimonial />
      <CallToAction />
    </Layout>
  );
}
