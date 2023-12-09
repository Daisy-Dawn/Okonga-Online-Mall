import { ArrowRight, Atom, CoinVertical, HandWaving } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export default function Features() {
  return (
    <section className="w-full px-12 py-24">
      <div className="flex flex-col items-center justify-center">
        <span className="w-fit h-fit bg-muted px-6 py-1 mb-4 rounded-lg">
          <p className="text-primary font-semibold tracking-widest">FEATURES</p>
        </span>
        <div className="w-full md:w-3/5 mx-auto">
          <h2 className="text-[52px] text-center font-bold leading-tight">
            All you need to start using <span className="text-accent">Okanga</span> effectively
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-12 items-center justify-between gap-8 py-16">
        <div className="grid col-span-12 md:col-span-6 lg:col-span-4">
          <div className="flex flex-col items-center justify-center">
            <Atom size={40} className="mb-5" />
            <h3 className="text-lg font-bold mb-2.5">Wide Range</h3>
            <div className="w-[90%] mx-auto mb-5">
              <p className="text-secondary/60 text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae nobis sint beatae in officiis! Quibusdam sequi vitae mollitia
                labore.
              </p>
            </div>
            <Link to="/" className="flex items-center text-primary font-bold gap-3">
              Learn more
              <span>
                <ArrowRight size={16} weight="bold" />
              </span>
            </Link>
          </div>
        </div>
        {/* BREAK */}
        <div className="grid col-span-12 md:col-span-6 lg:col-span-4">
          <div className="flex flex-col items-center justify-center">
            <HandWaving size={40} className="mb-5" />
            <h3 className="text-lg font-bold mb-2.5">No Long Term Contracts</h3>
            <div className="w-[90%] mx-auto mb-5">
              <p className="text-secondary/60 text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae nobis sint beatae in officiis! Quibusdam sequi vitae mollitia
                labore.
              </p>
            </div>
            <Link to="/" className="flex items-center text-primary font-bold gap-3">
              Learn more
              <span>
                <ArrowRight size={16} weight="bold" />
              </span>
            </Link>
          </div>
        </div>
        {/* BREAK */}
        <div className="grid col-span-12 md:col-span-6 lg:col-span-4">
          <div className="flex flex-col items-center justify-center">
            <CoinVertical size={40} className="mb-5" />
            <h3 className="text-lg font-bold mb-2.5">No Hidden Fees</h3>
            <div className="w-[90%] mx-auto mb-5">
              <p className="text-secondary/60 text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae nobis sint beatae in officiis! Quibusdam sequi vitae mollitia
                labore.
              </p>
            </div>
            <Link to="/" className="flex items-center text-primary font-bold gap-3">
              Learn more
              <span>
                <ArrowRight size={16} weight="bold" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
