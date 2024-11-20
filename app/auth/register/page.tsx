
import FormRegister from "@/components/Forms/FormRegister";
import TitlePage from "@/components/Forms/TitlePage";
import { MainLayout } from "@/layouts";


export default function App() {
  return (
    <MainLayout>
      <main className="w-full dark:bg-[#252525] dark:text-white   lg:w-[1200px] text-black bg-white flex flex-col gap-5 p-3 m-auto">
        <TitlePage titlePage="Đăng ký" />
        <FormRegister />
      </main>
    </MainLayout>
  );
}
