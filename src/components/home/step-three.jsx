import { Button } from "../ui/button";

export default function StepThree() {
  return (
    <section className="w-full min-h-[25vh] bg-[#F5F8FA] grid justify-center lg:place-items-center py-12">
      <div className="flex flex-col items-center justify-center px-6 md:px-12">
        <span className="w-fit h-fit bg-background px-6 py-1 mb-4 rounded-lg">
          <p className="text-sm sm:text-base text-secondary/70 font-semibold tracking-widest">03 - EASY&apos;AND FAST DELIVERY</p>
        </span>
        <div className="w-full md:w-3/5 mx-auto">
          <h2 className="text-4xl lg:text-[45px] text-center font-bold leading-tight">&ldquo;Midpoint Delivery&rdquo;</h2>
        </div>
        <div className="w-full md:w-2/6 mx-auto py-6">
          <p className="text-center text-secondary/60">
            Experience the convenience of receiving your chosen item at the halfway point of your installment period. With a 2-month plan, the
            delivery process commences immediately, while for a 6-month plan, delivery begins in the 3rd month.
          </p>
        </div>
        <Button className="bg-primary text-background px-8 py-6">Book a free call now</Button>
      </div>
    </section>
  );
}
