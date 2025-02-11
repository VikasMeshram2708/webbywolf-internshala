import Features from "@/components/home/features";
import Hero from "@/components/home/hero";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <div className="container mx-auto px-6 py-2">
        <div className="py-10">
          <Features />
        </div>
      </div>
    </main>
  );
}
