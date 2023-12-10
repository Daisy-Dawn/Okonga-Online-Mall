import { accordions } from "../../data/accordion-data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export default function Faq() {
  return (
    <section className="w-full px-6 md:px-12 pt-20 pb-12">
      <div className="flex flex-col items-center justify-center">
        <span className="w-fit h-fit bg-muted px-6 py-1 mb-4 rounded-lg">
          <p className="text-sm sm:text-base text-primary font-semibold tracking-widest">FAQ</p>
        </span>
        <div className="w-full md:w-3/5 mx-auto">
          <h2 className="text-4xl lg:text-[52px] text-center font-bold leading-tight">You have questions, we have the answers.</h2>
        </div>
      </div>
      {accordions.map((data) => (
        <Accordion key={data.id} type="single" collapsible className="w-full md:w-5/6 mx-auto">
          <AccordionItem value={`${"item" + data.id}`}>
            <AccordionTrigger className="text-base md:text-lg text-start">{data.title}</AccordionTrigger>
            <AccordionContent>{data.body}</AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </section>
  );
}
