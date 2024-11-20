
import { getListCategory } from "@/api/category";
import ButtonBackToTopPage from "@/components/ButtonBackToTopPage";
import MainFooter from "@/components/Footers/MainFooter";
import MainHeader from "@/components/Headers/MainHeader";
import { IFilter, ILayout } from "@/interfaces";
import * as React from "react";

export async function MainLayout({ children }: Readonly<ILayout>) {
  const categories = await getListCategory({} as IFilter); 
  return (
    <section className="m-auto">
      <MainHeader  categories = {categories}/>
      {children}
      <ButtonBackToTopPage />
      <MainFooter categories = {categories}/>
    </section>
  );
}