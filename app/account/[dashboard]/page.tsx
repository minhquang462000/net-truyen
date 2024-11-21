import { getAccountByUserId } from "@/api/account";
import InfoCard from "@/components/Cards/InfoCard";
import TitlePage from "@/components/Forms/TitlePage";
import PageAccount from "@/components/Pages/PageAccount";
import { PropParams } from "@/interfaces";
import { MainLayout } from "@/layouts";
import { cookies } from "next/headers";
export default async function page({ params }: PropParams) {
  const dashboard = String((await params).dashboard);
  const account = await getAccountByUserId();  
  return (
    <MainLayout>
      <main className="w-full   lg:w-[1200px] dark:bg-[#252525] dark:text-white text-black bg-white flex flex-col gap-5 p-3 m-auto">
        <InfoCard />
        <TitlePage titlePage="Thông tin chung" />
        <PageAccount account={account} dashboard={dashboard} />
      </main>
    </MainLayout>
  );
}
