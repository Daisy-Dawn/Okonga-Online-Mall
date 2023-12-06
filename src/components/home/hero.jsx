import { Link } from "react-router-dom";
import heroImage from "../../assets/images/hero-img-desktop.png";
import { cn } from "../../lib/utils";
import { Button, buttonVariants } from "../ui/button";
import { Star } from "@phosphor-icons/react";

export default function Hero() {
  return (
    <main className="w-full min-h-[85vh] bg-[#F5F8FA] px-12 py-10">
      <section className="w-full h-full grid grid-cols-12 items-center justify-between gap-8">
        <div className="w-full grid col-span-12 lg:col-span-6">
          <div className="flex flex-col items-start">
            <span className="w-fit h-fit bg-muted px-3 py-1 rounded-full">
              <p>👋 &nbsp; Hello, we are Okanga</p>
            </span>
            <h1 className="text-[52px] font-bold leading-tight pt-6 pb-3">
              Empower your lifestyle, seamlessly & effortlessly dealing with <span className="text-accent">Okanga.</span>
            </h1>
            <p className="w-4/5 text-secondary/70 pt-3 pb-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ratione quas, molestiae dolores suscipit veritatis maiores. Quis
              fugit, corporis nostrum officiis blanditiis repudiandae ipsam doloremque.
            </p>
            <div className="flex items-center gap-3">
              <Link
                to="/"
                target="_blank"
                className={cn(
                  buttonVariants(),
                  "bg-background text-secondary px-8 py-6 border-[1.5px] border-secondary hover:text-secondary-foreground"
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
              className="md:absolute md:-top-32 md:right-0 md:w-3/5 lg:relative lg:top-0 lg:right-0 lg:w-full max-w-full mx-auto select-none pointer-events-none"
              loading="eager"
              alt="illustration of cutomer rate in Okanga"
            />
          </figure>
        </div>
      </section>
    </main>
  );
}
