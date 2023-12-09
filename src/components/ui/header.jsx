import { Link } from "react-router-dom";
import logo from "../../assets/images/okanga-mall-logo.png";
import { Button, buttonVariants } from "./button";
import { cn } from "../../lib/utils";

export default function Header() {
  return (
    <header className="w-full bg-[#F5F8FA] px-12 py-6">
      <nav role="navigation" className="flex items-center justify-between">
        <div className="">
          <img src={logo} alt="okanga logo" className="w-36" />
        </div>
        <ul className="hidden lg:flex items-center gap-10">
          <li>
            <Link to="/">Our services</Link>
          </li>
          <li>
            <Link to="">How it works</Link>
          </li>
          <li>
            <Link to="/">Testimonials</Link>
          </li>
          <li>
            <Link to="/">About us</Link>
          </li>
        </ul>
        <div className="flex items-center gap-3">
          <Link
            to="/"
            target="_blank"
            className={cn(buttonVariants(), "bg-[#F5F8FA] text-secondary px-8 py-6 border-[1.5px] border-secondary hover:text-secondary-foreground")}
          >
            Get the app
          </Link>
          <Button className="hidden md:flex px-8 py-6 border-[1.5px] border-secondary">Contact us</Button>{" "}
          <div className="flex flex-col items-center justify-center w-12 h-12 bg-secondary rounded-full lg:hidden">
            <div className="w-1/2 h-0.5 bg-background"></div>
            <div className="w-1/2 h-0.5 bg-background my-1"></div>
            <div className="w-1/2 h-0.5 bg-background"></div>
          </div>
        </div>
      </nav>
    </header>
  );
}
