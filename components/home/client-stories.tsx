"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import storyIcon from "@/public/home/client-stories/client-story.png";
import mainHeroImg from "@/public/home/client-stories/client-story-hero.png";

export default function ClientStores() {
  const featuresData = [
    {
      title:
        "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
      content:
        "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
      src: storyIcon,
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
      content:
        "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
      src: storyIcon,
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
      content:
        "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
      src: storyIcon,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-5 max-w-screen-2xl border-b-4 mx-auto"
      style={{
        borderBottom: "20px solid",
        borderImage:
          "linear-gradient(90deg, #043898 0%, #079902 20%, #170041 40%) 1",
      }}
    >
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xl py-5 md:text-2xl lg:text-3xl font-bold text-blue-600"
        >
          Lorem ipsum dolor sit.
        </motion.h2>
        <motion.article
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="space-y-8"
        >
          <h2 className="text-2xl md:text-3xl max-w-2xl uppercase lg:text-4xl xl:text-5xl font-bold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
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
              animate={{ x: 0, opacity: 1 }}
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
              <motion.section
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 + idx * 0.2, duration: 0.5 }}
              >
                <h2 className="text-sm md:text-base lg:text-lg font-bold">
                  {feat.title}
                </h2>
                <p className="text-xs md:text-sm lg:text-base">
                  {feat.content}
                </p>
              </motion.section>
            </motion.article>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full flex justify-center md:justify-end"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={mainHeroImg}
            alt="features"
            width={500}
            height={500}
            priority
            className="bg-cover"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}