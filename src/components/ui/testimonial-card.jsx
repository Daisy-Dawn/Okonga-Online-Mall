/* eslint-disable react/prop-types */
import { TwitterLogo } from "@phosphor-icons/react";

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="grid col-span-12 sm:col-span-6 lg:col-span-4 xl:even:mt-2.5">
      <div className="w-fit h-fit p-1.5 bg-[#F5F8FA] rounded-xl">
        <div className="bg-background drop-shadow-md backdrop-blur-md p-6 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-4">
              <div className="">
                <div className="w-9 h-9 bg-primary rounded-full"></div>
              </div>
              <div className="flex flex-col">
                <h4 className="text-sm">{testimonial?.name}</h4>
                <p className="text-xs">{testimonial?.handle}</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <p className="">
                <TwitterLogo className="text-primary" size={16} weight="fill" />
              </p>
              <span className="text-xs">{testimonial?.date}</span>
            </div>
          </div>
          <div className="">
            <p className="text-sm text-secondary/60">{testimonial?.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
