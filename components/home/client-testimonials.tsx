import React from "react";
import bgImg from "@/public/home/testimonials/client-testimonials.png";
import Image from "next/image";
import i1 from "@/public/home/testimonials/1.png";
import i2 from "@/public/home/testimonials/2.png";
import i3 from "@/public/home/testimonials/3.png";
import i4 from "@/public/home/testimonials/4.png";
import i5 from "@/public/home/testimonials/5.png";
import i6 from "@/public/home/testimonials/6.png";
import i7 from "@/public/home/testimonials/7.png";
import i8 from "@/public/home/testimonials/8.png";
import i9 from "@/public/home/testimonials/9.png";
import i10 from "@/public/home/testimonials/10.png";
import i11 from "@/public/home/testimonials/11.png";
import i12 from "@/public/home/testimonials/12.png";

export default function ClientTestimonials() {
  return (
    <div>
      <TestimonialsHeader />
      <CompanyList />
    </div>
  );
}

function TestimonialsHeader() {
  return (
    <div className="min-h-screen w-full relative">
      <Image
        alt="client testimonials"
        src={bgImg}
        priority
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute top-0 z-[999] left-0 p-4">
        <div className="bg-gray-400 w-24 md:w-32 text-lg md:text-xl font-bold text-black rounded-md text-center p-2">
          LOGO
        </div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-8 p-4 bg-black bg-opacity-50 text-white">
        <h2 className="text-center mb-4 text-xl md:text-2xl lg:text-4xl font-bold max-w-4xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Quis adipiscing purus egestas
          aliquam viverra mi.
        </h2>
        <section className="max-w-3xl font-semibold mx-auto leading-relaxed text-base space-y-8">
          <p className="text-center mb-4">
            Lorem ipsum dolor sit amet consectetur. Mattis justo euismod
            volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis
            justo pellentesque id sed. Id tellus id luctus id. At quis nunc
            libero urna arcu vulputate sed ut. Nisl porta massa diam condimentum
            nulla quam.
          </p>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec
            condimentum ultrices non. Ornare semper in tincidunt pellentesque
            cras mauris in vitae. At viverra quis eu malesuada vel et porttitor.
            Nulla luctus quam lacus lacus non at. Tincidunt morbi feugiat a
            pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo.
          </p>
        </section>
      </div>
    </div>
  );
}

function CompanyList() {
  const data = [
    { src: i1 },
    { src: i2 },
    { src: i3 },
    { src: i4 },
    { src: i5 },
    { src: i6 },
    { src: i7 },
    { src: i8 },
    { src: i9 },
    { src: i10 },
    { src: i11 },
    { src: i12 },
  ];
  return (
    <div className="w-full min-h-screen py-20 space-y-8">
      <h2 className="uppercase text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl max-w-2xl mx-auto font-bold">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center gap-8 flex-wrap max-w-4xl mx-auto justify-center">
        {data.map((item, idx) => (
          <li key={idx}>
            <Image
              src={item.src}
              alt="testimonials"
              width={100}
              height={100}
              className="bg-cover"
              placeholder="blur"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
