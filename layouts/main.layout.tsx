
import MainFooter from "@/components/Foters/MainFooter";
import MainHeader from "@/components/Headers/MainHeader";
import { ILayout } from "@/interfaces";
import * as React from "react";

export  function MainLayout({ children }: Readonly<ILayout>) {
  return (
    <section className="m-auto">
        <MainHeader/>
      {children}
      <MainFooter/>
    </section>
  );
}