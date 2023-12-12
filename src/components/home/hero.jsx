import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import { Button, buttonVariants } from "../ui/button";
import { Star } from "@phosphor-icons/react";
import heroImage from "../../assets/images/hero-img-desktop.png";
import Ticker from "../ui/ticker";

export default function Hero() {
  return (
    <main className="relative w-full min-h-[85vh] bg-[#F5F8FA] pt-5 sm:pt-10 pb-10">
      <section className="w-full h-full grid grid-cols-12 items-center justify-center lg:justify-between gap-8 md:px-12">
        <div className="w-full grid col-span-12 lg:col-span-6 px-6">
          <div className="flex flex-col items-start">
            <span className="w-fit h-fit bg-muted px-4 py-1 rounded-tl-full rounded-r-full">
              <p className="text-primary">👋 &nbsp; Hello, we are Okanga</p>
            </span>
            <h1 className="w-full text-4xl lg:text-[52px] font-bold leading-tight pt-6 pb-3">
              Empower your lifestyle, seamlessly & effortlessly dealing with <span className="text-accent">Okanga.</span>
            </h1>
            <p className="w-full md:w-4/5 text-base text-secondary/60 pt-3 pb-8">
              &ldquo;Split your payments into manageable installments at the standard market price. Enjoy 0% interest.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <Link
                to="/"
                target="_blank"
                className={cn(
                  buttonVariants(),
                  "bg-[#F5F8FA] text-secondary px-8 py-6 border-[1.5px] border-secondary hover:text-secondary-foreground"
                )}
              >
                Get the app
              </Link>
              <Button className="px-8 py-6 border-[1.5px] border-secondary">Contact us</Button>
            </div>
            <div className="flex items-center gap-4 py-6">
              <p className="flex items-center gap-1">
                4.2
                <span className="flex items-center gap-0.5">
                  <Star size={16} color="#000000" weight="fill" />
                  <Star size={16} color="#000000" weight="fill" />
                  <Star size={16} color="#000000" weight="fill" />
                  <Star size={16} color="#000000" weight="fill" />
                  <Star size={16} color="#000000" weight="duotone" />
                </span>
              </p>
              <p>401K+ Ratings</p>
            </div>
          </div>
        </div>
        <div className="relative grid col-span-12 lg:col-span-6">
          <figure>
            <img
              src={heroImage}
              // className="md:absolute md:-top-32 md:right-0 md:w-3/5 lg:relative lg:top-0 lg:right-0 lg:w-full max-w-full mx-auto select-none pointer-events-none"
              className="relative max-w-full mx-auto select-none pointer-events-none"
              loading="eager"
              alt="illustration of cutomer rate in Okanga"
            />
          </figure>
        </div>
      </section>
      <div className="w-full pt-10 md:pt-6 pb-6 overflow-x-hidden">
        <div className="flex items-center justify-center">
          <p className="text-secondary/70">Trusted by hundreds of progressive brands</p>
        </div>
        <Ticker />
      </div>
    </main>
  );
}
