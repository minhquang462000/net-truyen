"use client";
import CardHomePageMAin from "@/components/Cards/CardHomePageMain";
import CardTopMonth from "@/components/Cards/CardTopMonth";
import InfoCard from "@/components/Cards/InfoCard";
import SlideHome from "@/components/Slide/SlideHome";
import { MainLayout } from "@/layouts";

export default function Home() {
  return (
    <MainLayout>
      <main className="w-screen lg:w-[1200px] bg-white flex flex-col gap-5 p-4 m-auto">

        <SlideHome />
        <div className="w-full grid grid-cols-1 gap-y-6  lg:gap-6 lg:grid-cols-12 ">
          <CardHomePageMAin />
          <CardTopMonth />
        </div>
      </main>
    </MainLayout>
  );
}
