import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export default function Faq() {
  return (
    <section className="w-full px-12 pt-20 pb-12">
      <div className="flex flex-col items-center justify-center">
        <span className="w-fit h-fit bg-muted px-6 py-1 mb-4 rounded-lg">
          <p className="text-primary font-semibold tracking-widest">FAQ</p>
        </span>
        <div className="w-full md:w-3/5 mx-auto">
          <h2 className="text-[52px] text-center font-bold leading-tight">You have questions, we have the answers</h2>
        </div>
      </div>
      <Accordion type="single" collapsible className="w-1/2 mx-auto">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg">Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg">Is it styled?</AccordionTrigger>
          <AccordionContent>Yes. It comes with default styles that matches the other components&apos; aesthetic.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg">Is it animated?</AccordionTrigger>
          <AccordionContent>Yes. It&apos;s animated by default, but you can disable it if you prefer.</AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className=""></div>
    </section>
  );
}
