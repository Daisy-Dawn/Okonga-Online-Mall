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
            Experience quicker, simpler, less intrusive processes with <span className="text-accent">Okonga.</span>
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-12 items-center justify-between gap-8 py-16">
        <div className="grid col-span-12 md:col-span-6 lg:col-span-4">
          <div className="flex flex-col items-center justify-center">
            <Atom size={40} className="mb-5" />
            <h3 className="text-lg font-bold mb-2.5">Fast and Authentic Deliveries</h3>
            <div className="w-[90%] mx-auto mb-5">
              <p className="text-secondary/60 text-center">
                Enjoy swift, reliable delivery of genuine products. Okonga Online Mall ensures timely service with no hidden costs or added interest.
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
            <h3 className="text-lg font-bold mb-2.5">Zero Interest, Zero Additional Charges</h3>
            <div className="w-[90%] mx-auto mb-5">
              <p className="text-secondary/60 text-center">
                Okonga Online Mall offers transparency and financial peace of mind with no interest and zero additional charges.
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
            <h3 className="text-lg font-bold mb-2.5">Quality Assurance</h3>
            <div className="w-[90%] mx-auto mb-5">
              <p className="text-secondary/60 text-center">
                Trust Okonga Online Mall for the finest, authentic products. Our stringent quality control ensures high standards and peace of mind.
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
