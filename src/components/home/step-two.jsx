import stepTwoImage from "../../assets/images/section-two-img.png";
import { Button } from "../ui/button";

export default function StepTwo() {
  return (
    <section className="w-full min-h-screen grid place-items-center px-12 py-12">
      <div className="w-full h-full flex-col lg:flex lg:flex-row-reverse items-center justify-between gap-16">
        <div className="w-full flex flex-1">
          <div className="flex flex-col items-start">
            <span className="w-fit h-fit bg-muted px-4 py-1 rounded-tl-full rounded-r-full">
              <p className="text-primary">02 - WE CAN DO</p>
            </span>
            <h1 className="text-[52px] font-bold leading-tight pt-6 pb-3">
              Customize your <span className="text-accent">payment</span> schedule freely.
            </h1>
            <p className="w-4/5 text-secondary/60 pt-3 pb-8">
              Tailor your payment plan to suit your needs. Select an installment duration ranging from 4 to 40 weeks or 2 to 12 months. For cars,
              enjoy flexibility with options of up to 106 weeks or 36 months. Proceed to make your first payment.
            </p>
            <Button className="px-8 py-6 border-[1.5px] border-secondary">Let&apos;s get going</Button>
          </div>
        </div>
        <div className="relative flex flex-1">
          <figure>
            <img src={stepTwoImage} className="" loading="lazy" alt="Woman pressing phone showing a discount sale on your purchases" />
          </figure>
        </div>
      </div>
    </section>
  );
}
