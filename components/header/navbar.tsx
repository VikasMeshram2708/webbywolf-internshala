"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Hero from "../home/hero";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navData = [
    { title: "Lorem Ipsum", url: "#" },
    { title: "Lorem Ipsum", url: "#" },
    { title: "Lorem Ipsum", url: "#" },
  ];

  return (
    <div className="w-full">
      <header className="w-full lg:fixed top-0 z-40">
        <div className="container mx-auto flex items-center justify-between p-4 lg:px-12">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-wide bg-gray-500/40 px-4 py-2 rounded-md text-black">
            LOGO
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            {navData.map((data, index) => (
              <NavigationMenu key={index}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>{data.title}</NavigationMenuTrigger>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            ))}
          </nav>

          {/* Sign In Button */}
          <button className="px-4 py-2 rounded-md bg-white text-black shadow-md hidden md:inline-block">
            Sign In
          </button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40">
                {navData.map((data, index) => (
                  <a
                    key={index}
                    href={data.url}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    {data.title}
                  </a>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <div className="lg:relative top-0 w-full">
        <Hero />
      </div>
    </div>
  );
}
