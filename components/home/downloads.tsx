import React from "react";
import handImg from "@/public/home/down/Photo.png";
import gpImg from "@/public/home/down/gpay.png";
import apImg from "@/public/home/down/a-pay.png";
import Image from "next/image";

export default function Downloads() {
  return (
    <div className="bg-[#F3F3F3] flex flex-col md:flex-row items-center justify-between p-4 md:p-8">
      {/* left side */}
      <div className="md:w-1/2 space-y-4">
      <h2 className="text-blue-500 font-bold text-lg md:text-xl">Lorem Ipsum</h2>
      <p className="capitalize font-bold text-xl md:text-4xl">
        Lorem ipsum dolor sit amet.
      </p>
      <p className="text-sm md:text-base">
        Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi
        suspendisse convallis. Urna a urna lectus donec felis risus duis
        pellentesque. Pellentesque ultricies ipsum.
      </p>
      <section className="flex space-x-4">
        <Image
        src={gpImg}
        width={100}
        height={100}
        className="bg-cover"
        alt="google play store"
        />
        <Image
        src={apImg}
        width={100}
        height={100}
        className="bg-cover"
        alt="apple store"
        />
      </section>
      </div>
      {/* right side */}
      <section className="md:w-1/2 mt-4 md:mt-0">
      <Image
        width={700}
        height={700}
        alt="downloads"
        src={handImg}
        priority
        placeholder="blur"
        className="bg-cover"
      />
      </section>
    </div>
  );
}
