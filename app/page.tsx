import Navbar from "@/components/header/navbar";
import Hero from "@/components/home/hero";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="relative">
        <div className="">
          <Navbar />
        </div>
        <div className="lg:absolute top-0 w-full">
          <Hero />
        </div>
      </div>
    </main>
  );
}
