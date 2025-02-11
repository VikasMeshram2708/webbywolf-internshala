"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import heroImg from "@/public/home/hero.png";
import { Input } from "../ui/input";
import { ArrowRight, CircleCheck } from "lucide-react";
import { useWindowSize } from "@uidotdev/usehooks";

function Hero() {
  const { width = 0 } = useWindowSize();

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8 container mx-auto">
      {/* Left Side */}
      <motion.section 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="grid gap-8 px-6"
      >
        <div className="grid gap-4">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-2xl md:text-4xl lg:text-6xl font-bold"
          >
            Lorem ipsum dolor sit amet.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-gray-600"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo maxime,
            modi aut laboriosam praesentium molestias cumque blanditiis, omnis
            quae inventore qui facere porro, earum neque!
          </motion.p>
        </div>
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="grid gap-5"
        >
            <form
            action=""
            className="max-w-lg flex flex-wrap items-center gap-3"
            >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="flex-grow"
            >
              <Input type="text" className="w-full" />
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-md text-white bg-hblue flex items-center gap-2"
            >
              <span>Get started</span>
              <ArrowRight />
            </motion.button>
            </form>
          <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-sm flex items-center gap-2"
          >
            <CircleCheck color="white" fill="#155ADA" className="w-6 h-6" />
            No credit card required!
          </motion.section>
        </motion.section>
      </motion.section>

      {/* Right Side (Image) */}
      <motion.section 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex justify-center md:justify-end px-6 py-2"
      >
        {width && width > 768 ? (
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Image
              src={heroImg}
              width={500}
              height={500}
              alt="hero image"
              priority
              className="object-cover md:ml-auto bg-cover"
              style={{ clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
            />
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Image
              src={heroImg}
              width={500}
              height={500}
              alt="hero image"
              priority
              className="object-cover md:ml-auto bg-cover"
            />
          </motion.div>
        )}
      </motion.section>
    </div>
  );
}

export default Hero;