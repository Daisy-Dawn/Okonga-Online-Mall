import Faq from "../components/home/faq";
import Features from "../components/home/features";
import Hero from "../components/home/hero";
import StepOne from "../components/home/step-one";
import StepThree from "../components/home/step-three";
import StepTwo from "../components/home/step-two";
import Testimonials from "../components/home/testimonials";
import Footer from "../components/ui/footer";
import Header from "../components/ui/header";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <StepOne />
      <StepTwo />
      <StepThree />
      <Faq />
      <Testimonials />
      <Footer />
    </>
  );
}
