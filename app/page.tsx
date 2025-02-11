import ClientStores from "@/components/home/client-stories";
import Features from "@/components/home/features";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <div className="container mx-auto px-6 py-2">
        <div className="py-24 grid gap-16">
          <Features />
          <ClientStores />
        </div>
      </div>
    </main>
  );
}
