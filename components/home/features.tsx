"use client";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import featuresImg from "@/public/home/features/features.png";
import Image from "next/image";
import img1 from "@/public/home/features/feat1.png";
import img2 from "@/public/home/features/feat2.png";
import img3 from "@/public/home/features/feat3.png";
import { ArrowRight, Phone } from "lucide-react";

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

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-5 max-w-screen-2xl float-end shadow-2xl border-b-4"
      style={{
        borderBottom: "20px solid",
        borderImage:
          "linear-gradient(90deg, #043898 0%, #079902 45.96%, #170041 91.18%) 1",
      }}
    >
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xl py-5 md:text-2xl lg:text-3xl font-bold text-blue-600"
        >
          Lorem ipsum dolor sit.
        </motion.h2>
        <motion.article
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="space-y-8"
        >
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
        </motion.article>
        <ul className="grid grid-cols-1 gap-4 mt-8">
          {featuresData.map((feat, idx) => (
            <motion.article
              key={idx}
              initial={{ x: -30, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.4 + idx * 0.2, duration: 0.5 }}
              className="flex items-center gap-4 md:gap-8"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={feat.src}
                  width={100}
                  height={100}
                  alt="feature stories"
                  priority
                  className="bg-cover"
                />
              </motion.div>
              <p className="text-sm md:text-base lg:text-lg xl:text-xl">
                {feat.content}
              </p>
            </motion.article>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="w-full flex justify-center md:justify-end"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={featuresImg}
            alt="features"
            width={500}
            height={500}
            priority
            className="bg-cover"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="flex items-center gap-8"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 rounded-md text-white bg-hblue flex items-center gap-2"
        >
          <span>Get started</span>
          <ArrowRight />
        </motion.button>
        <motion.section
          whileHover={{ scale: 1.05 }}
          className="text-blue-600 flex items-center gap-4 font-bold"
        >
          <Phone size={24} color="blue" />
          <span>123456789</span>
        </motion.section>
      </motion.div>
    </motion.div>
  );
}