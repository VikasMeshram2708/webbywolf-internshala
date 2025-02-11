"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Hero from "../home/hero";
import { useWindowScroll } from "@uidotdev/usehooks";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export default function Navbar() {
  const [{ y }] = useWindowScroll();
  const [isOpen, setIsOpen] = useState(false);

  const navData = [
    { title: "Lorem Ipsum", url: "#" },
    { title: "Lorem Ipsum", url: "#" },
    { title: "Lorem Ipsum", url: "#" },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className={twMerge(
          "w-full fixed top-0 z-40 transition-colors duration-300",
          clsx({
            "bg-white shadow-md": y && y > 50,
            "bg-transparent": y && y <= 50,
          })
        )}
      >
        <div className="container mx-auto flex items-center justify-between p-4 lg:px-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold tracking-wide bg-gray-500/40 px-4 py-2 rounded-md text-black"
          >
            LOGO
          </motion.div>

          {/* Desktop Navigation */}
          <nav>
            <ul className="hidden md:flex gap-6">
              {navData.map((data, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <li key={idx}>
                    <select className="bg-transparent" name="" id="">
                      <option
                        value={data.title.toLowerCase()}
                        className="capitalize"
                      >
                        {data.title}
                      </option>
                    </select>
                  </li>
                </motion.div>
              ))}
            </ul>
          </nav>

          {/* Sign In Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-md bg-white text-black shadow-md hidden md:inline-block"
          >
            Sign In
          </motion.button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <motion.div whileTap={{ scale: 0.9 }}>
                    <Menu className="w-6 h-6" />
                  </motion.div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40">
                {navData.map((data, index) => (
                  <motion.a
                    key={index}
                    href={data.url}
                    className="block px-4 py-2 hover:bg-gray-200"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {data.title}
                  </motion.a>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <div className="relative -top-20  w-full">
        <Hero />
      </div>
    </div>
  );
}
