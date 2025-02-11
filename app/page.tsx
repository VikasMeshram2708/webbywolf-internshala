import Blogs from "@/components/home/blogs";
import ClientStores from "@/components/home/client-stories";
import ClientTestimonials from "@/components/home/client-testimonials";
import CTA from "@/components/home/cta";
import Features from "@/components/home/features";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <div className="container mx-auto px-6 py-2">
        <div className="py-24 grid gap-52">
          <Features />
          <ClientStores />
          <ClientTestimonials />
          <Blogs />
          <CTA />
        </div>
      </div>
    </main>
  );
}
