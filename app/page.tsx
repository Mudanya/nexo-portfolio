"use client";
import Image from "next/image";
import Hero from "./components/Hero";
import dynamic from "next/dynamic";
const RecentProjects  = dynamic(()=>import("./components/RecentProjects"),{ssr:false});
const FloatingNav = dynamic(() => import("./components/ui/FloatingNav"),{ssr:false});
const Grid = dynamic(() => import("./components/Grid"),{ssr:false});
import { navItems } from "@/data";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
