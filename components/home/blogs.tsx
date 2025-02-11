"use client";
import React from "react";
import b1 from "@/public/home/blogs/b1.png";
import b2 from "@/public/home/blogs/b2.png";
import b3 from "@/public/home/blogs/b3.png";
import b4 from "@/public/home/blogs/b4.png";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import Image from "next/image";
import { motion } from "motion/react";

export default function Blogs() {
  const blogsData = [
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate.",
      src: b1,
      url: "#",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate.",
      src: b2,
      url: "#",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate.",
      src: b3,
      url: "#",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate.",
      src: b4,
      url: "#",
    },
  ];
  return (
    <div className="min-h-screen w-full">
      {/* Header Section */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mb-20 space-y-4 px-4"
      >
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg text-blue-600 font-semibold"
        >
          Lorem ipsum dolor sit.
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-3xl md:text-5xl font-extrabold"
        >
          Lorem ipsum dolor sit.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-4 max-w-lg"
        >
          Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis
          donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in
          nam.
        </motion.p>
      </motion.article>

      {/* Blog List Section */}
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8 px-4"
      >
        {blogsData.map((blog, idx) => (
          <motion.li
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="overflow-hidden"
          >
            <Card className="flex flex-col h-full shadow-lg rounded-lg">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  width={450}
                  height={300}
                  priority
                  placeholder="blur"
                  src={blog.src}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </motion.div>
              <CardContent className="flex flex-col flex-grow p-4">
                <CardTitle className="text-lg font-semibold mb-2">
                  {blog.title}
                </CardTitle>
                <CardDescription className="flex-grow text-base mb-4">
                  {blog.description}
                </CardDescription>
                <motion.a
                  href={blog.url}
                  whileHover={{ scale: 1.1 }}
                  className="text-blue-800 font-bold underline underline-offset-4 cursor-pointer"
                >
                  Learn more
                </motion.a>
              </CardContent>
            </Card>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}