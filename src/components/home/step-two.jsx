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
              Save as you earn why purchasing from <span className="text-accent">Okanga.</span>
            </h1>
            <p className="w-4/5 text-secondary/60 pt-3 pb-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ratione quas, molestiae dolores suscipit veritatis maiores. Quis
              fugit, corporis nostrum officiis blanditiis repudiandae ipsam doloremque.
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
