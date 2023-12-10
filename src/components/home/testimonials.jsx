import TestimonialCard from "../ui/testimonial-card";

export default function Testimonials() {
  return (
    <section className="relative w-full grid justify-center lg:place-items-center pb-24">
      <div className="w-full grid grid-cols-12 px-6 lg:px-12 gap-3 mt-20">
        <TestimonialCard />
      </div>
      <div className="w-full h-2/5 bg-gradient-to-t from-background from-60% to-transparent blur-xl"></div>
    </section>
  );
}
