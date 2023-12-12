import { AppleLogo, GooglePlayLogo } from "@phosphor-icons/react";
import { Button } from "./button";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <section className="w-full bg-secondary text-background px-6 lg:px-12 pt-20 pb-12">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full mx-auto">
            <h2 className="text-4xl lg:text-[52px] text-center font-bold leading-tight">Let&apos;s get started on something great</h2>
          </div>
          <div className="w-full md:w-2/6 mx-auto py-6">
            <p className="text-center text-muted text-secondary/6">Join over 20,000+ individuals growing with Okanga</p>
          </div>
          <div className="flex items-center gap-4 mt-5 mb-8">
            <Button className="bg-background text-secondary px-8 py-6 flex items-center gap-2 hover:bg-background/90">
              <AppleLogo size={18} weight="bold" /> Download
            </Button>
            <Button className="bg-primary text-background items-center gap-2 px-8 py-6 hover:bg-primary/90">
            <GooglePlayLogo />
            Download </Button>
          </div>
        </div>
        <div className="w-full border-t-[0.5px] border-muted mt-12 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <h4>&copy;2023 Okanga. All rights reserved</h4>
            <ul className="flex items-center gap-3">
              <li>
                <Link to="/">Terms</Link>
              </li>
              <li>
                <Link to="/">Policy</Link>
              </li>
              <li>
                <Link to="/">Cookies</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
}
