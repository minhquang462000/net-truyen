import FormLogin from "@/components/Forms/FormLogin";
import TitlePage from "@/components/Forms/TitlePage";
import { MainLayout } from "@/layouts";

export interface IpageProps { }

export default function page(props: IpageProps) {
  return (
    <MainLayout>
      <main className="w-screen   lg:w-[1200px] dark:bg-[#252525] dark:text-white text-black bg-white flex flex-col gap-5 p-3 m-auto">
      <TitlePage titlePage="Đăng nhập"/>
        <FormLogin />
      </main>
    </MainLayout>
  );
}
