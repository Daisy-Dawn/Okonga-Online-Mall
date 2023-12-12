/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import { Button, buttonVariants } from "./button";
import { X } from "@phosphor-icons/react";
import { cn } from "../../lib/utils";
import { useEffect } from "react";
import logo from "../../assets/images/okanga-mall-logo.png";

export default function Sidebar({ open, setOpen }) {
  const { pathname } = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [pathname, setOpen]);
  return (
    <div
      className={`fixed w-full h-full left-0 right-0 bg-secondary text-background p-6 z-50 ${
        open ? "translate-x-0" : "translate-x-full"
      } transition-transform`}
    >
      <div className="">
        <div className="flex items-center justify-between">
          <div className="">
            <img src={logo} alt="okanga logo" className="w-36" />
          </div>
          <Button onClick={() => setOpen(!open)}>
            <X size={28} className="text-background rounded-full" />
          </Button>
        </div>
        <ul className="py-8">
          <li className="py-8 border-b-background/50 border-b">
            <Link to="services">Our services</Link>
          </li>
          <li className="py-8 border-b-background/50 border-b">
            <Link to="works">How it works</Link>
          </li>
          <li className="py-8 border-b-background/50 border-b">
            <Link to="testimonial">Testimonials</Link>
          </li>
          <li className="py-8 border-b-background/50 border-b">
            <Link to="about">About us</Link>
          </li>
          <div className="flex items-center gap-3 py-12">
            <Link
              to="/"
              target="_blank"
              className={cn(
                buttonVariants(),
                "flex bg-[#F5F8FA] text-secondary px-8 py-6 border-[1.5px] border-secondary hover:bg-[#F5F8FA]/90 hover:text-secondary"
              )}
            >
              Get the app
            </Link>
            <Button className="bg-primary flex px-8 py-6 border-[1.5px] border-secondary hover:bg-primary/80">Contact us</Button>
          </div>
        </ul>
      </div>
    </div>
  );
}
