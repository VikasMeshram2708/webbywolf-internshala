"use client"

import Image from "next/image";
import React from "react";
import heroImg from "@/public/home/hero.png";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ArrowRight, CircleCheck } from "lucide-react";
import { useWindowSize } from "@uidotdev/usehooks";

function Hero() {
  const { width = 0 } = useWindowSize();
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8 container mx-auto">
      {/* Left Side */}
      <section className="grid gap-8 px-6">
        <div className="grid gap-4">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold">
            Lorem ipsum dolor sit amet.
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo maxime,
            modi aut laboriosam praesentium molestias cumque blanditiis, omnis
            quae inventore qui facere porro, earum neque!
          </p>
        </div>

        <section className="grid gap-5">
          <form
            action=""
            className="max-w-lg flex flex-wrap items-center gap-3"
          >
            <Input />
            <Button className="bg-hblue flex items-center gap-2">
              <span>Get started</span>
              <ArrowRight />
            </Button>
          </form>
          <section className="text-sm flex items-center gap-2">
            <CircleCheck color="white" fill="#155ADA" className="w-6 h-6" />
            No credit card required!
          </section>
        </section>
      </section>

      {/* Right Side (Image) */}
      <section className="flex justify-center md:justify-end px-6 py-2">
        {width && width > 768 ? (
          <Image
            src={heroImg}
            width={500}
            height={500}
            alt="hero image"
            priority
            className="object-cover md:ml-auto bg-cover"
            style={{ clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          />
        ) : (
          <Image
            src={heroImg}
            width={500}
            height={500}
            alt="hero image"
            priority
            className="object-cover md:ml-auto bg-cover"
          />
        )}
      </section>
    </div>
  );
}

export default Hero;
