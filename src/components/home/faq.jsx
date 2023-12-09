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
          <AccordionTrigger className="text-lg">When will I collect the item that I am paying for?</AccordionTrigger>
          <AccordionContent>Your item will be shipped when you reach the middle of your installment period and have paid at least half of the item's cost in equal installments. The delivery timing varies based on the chosen installment plan, such as immediate delivery for a 2-month plan and delivery starting in the 3rd or 6th month for longer plans.
</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg">What are the requirements?
</AccordionTrigger>
          <AccordionContent>Our delivery requirements are straightforward:
   Verify your identity with your phone number, NIN or BVN (BVN is not mandatory) along with pictures of your full face.
   Confirm your address by granting CDcare location access on your device.
   Acknowledge that you have read our terms and conditions.
   Provide and use a valid email address.
   Have an ATM card linked to an account with funds not less than 5,000 Naira.
</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-lg">  Can I pay half of the gadget cost and collect my gadget immediately?

</AccordionTrigger>
          <AccordionContent>To receive your item early, you can opt for the 2-month installment plan. CDcare will conduct a review and deliver your item within 15 days. However, the remaining balance must be paid in one installment only.
</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-lg"> Can I collect my money back if I change my mind?
</AccordionTrigger>
          <AccordionContent>Yes, however, this incurs a 10% fee on the sum already paid in installments to discourage unnecessary order cancellations. 
</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-lg"> What if the product I want to buy is no longer available in the market when I have reached my half payment mark?
</AccordionTrigger>
          <AccordionContent>This is an unavoidable possibility, so we will present the following options:
   i. Provide CDcare a brief period (typically 1 to 3 days) to procure the actual product for you, if possible.
   ii. Select another product within the same price range as your ordered product, which is now unavailable.
   iii. Refund your money in full if options (i) and (ii) fail.
</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger className="text-lg"> What if the product I want to buy becomes cheaper when I reached my half payment mark?
</AccordionTrigger>
          <AccordionContent>The terms of purchase are contingent upon the item's availability when you reach the halfway payment mark, as well as the price of the item. If the price decreases, CDcare will credit the excess amount to your CDcare account, which can be used for subsequent installments.
</AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className=""></div>
    </section>
  );
}
