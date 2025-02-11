import React from "react";
import featuresImg from "@/public/home/features/features.png";
import Image from "next/image";
import img1 from "@/public/home/features/feat1.png";
import img2 from "@/public/home/features/feat2.png";
import img3 from "@/public/home/features/feat3.png";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "../ui/button";

export default function Features() {
  const featuresData = [
    {
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, sunt?",
      src: img1,
    },
    {
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, sunt?",
      src: img2,
    },
    {
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, sunt?",
      src: img3,
    },
  ];
  return (
    <div
      className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-5 max-w-screen-2xl float-end shadow-2xl border-b-4"
      style={{
      borderBottom: "20px solid",
      borderImage: "linear-gradient(90deg, #043898 0%, #079902 45.96%, #170041 91.18%) 1",
      }}
    >
      <div className="w-full">
        <h2 className="text-xl py-5 md:text-2xl lg:text-3xl font-bold text-blue-600">
          Lorem ipsum dolor sit.
        </h2>
        <article className="space-y-8">
          <h2 className="text-2xl md:text-3xl max-w-sm uppercase lg:text-4xl xl:text-5xl font-bold">
            Lorem ipsum dolor sit amet.
          </h2>
          <p className="text-sm md:text-lg leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia vero
            modi eius. Corrupti harum, nemo, voluptas explicabo vero sit
            voluptates illum sequi fugit laudantium beatae minus dicta iusto
            ratione libero pariatur dolore officia rem! Molestiae earum omnis
            quidem possimus amet.
          </p>
        </article>
        <ul className="grid grid-cols-1 gap-4 mt-8">
          {featuresData.map((feat, idx) => (
            <article key={idx} className="flex items-center gap-4 md:gap-8">
              <Image
                src={feat.src}
                width={100}
                height={100}
                alt="feature stories"
                priority
                className="bg-cover"
              />
              <p className="text-sm md:text-base lg:text-lg xl:text-xl">
                {feat.content}
              </p>
            </article>
          ))}
        </ul>
      </div>
      <div className="w-full flex justify-center md:justify-end">
        <Image
          src={featuresImg}
          alt="features"
          width={500}
          height={500}
          priority
          className="bg-cover"
        />
      </div>
      <div className="flex items-center gap-8">
        <button className="px-4 py-2 rounded-md  text-white bg-hblue flex items-center gap-2">
          <span>Get started</span>
          <ArrowRight />
        </button>
        <section className="text-blue-600 flex items-center gap-4 font-bold">
          <Phone size={24} color="blue" />
          <span>123456789</span>
        </section>
      </div>
    </div>
  );
}
