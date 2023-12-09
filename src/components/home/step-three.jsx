import { Button } from "../ui/button";

export default function StepThree() {
  return (
    <section className="w-full min-h-[25vh] bg-[#F5F8FA] grid place-items-center px-12 py-12">
      <div className="flex flex-col items-center justify-center">
        <span className="w-fit h-fit bg-background px-6 py-1 mb-4 rounded-lg">
          <p className="text-secondary/70 font-semibold tracking-widest">03 - WE&apos;RE ON MEDIA</p>
        </span>
        <div className="w-full md:w-3/5 mx-auto">
          <h2 className="text-[45px] text-center font-bold leading-tight">&ldquo;The ultimate team to help you grow. Simple as that.&rdquo;</h2>
        </div>
        <div className="w-full md:w-2/6 mx-auto py-6">
          <p className="text-center text-secondary/60">Yes! We are all of over social media, nothing to worry about. Just talk to us...</p>
        </div>
        <Button className="bg-primary text-background px-8 py-6">Book a free call now</Button>
      </div>
    </section>
  );
}
