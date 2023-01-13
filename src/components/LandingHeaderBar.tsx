import Link from "next/link";
import React from "react";
import { Button } from "semantic-ui-react";
import Logo from "./Logo";

export default function LandingHeaderBar() {
  return (
    <header className="w-full h-24 flex justify-between items-center">
      <section className="container mx-auto flex justify-between items-center">
        <h4 className="w-[10%] uppercase font-bold text-4xl text-gray-50">
          Task
        </h4>
        <nav className="flex justify-between w-[90%]">
          <div className="w-[40%] justify-start">
            <Link
              href="/jobs"
              className="px-6 py-2 text-gray-50 font-bold capitalize text-lg  hover:text-sky-500"
            >
              browse Jobs
            </Link>
          </div>
          <div className="w-[45%] flex items-center justify-end gap-2">
            <Button size="mini" color="twitter" className="!uppercase">
              login
            </Button>
            <Button size="mini" primary className="!uppercase">
              create account
            </Button>
            <Button size="mini" basic color="teal" className="!uppercase">
              employer
            </Button>
          </div>
        </nav>
      </section>
    </header>
  );
}
