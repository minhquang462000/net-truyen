import PageBookSearch from "@/components/Pages/PageBookSearch";
import { PropParams } from "@/interfaces";
import { MainLayout } from "@/layouts";

export interface IpageProps {}

export default async function page({ params, searchParams }: PropParams) {
  const status = Number((await searchParams)?.status) || 0;
  const query = String((await searchParams)?.q) || "";
  const page = Number((await searchParams)?.page) || 1;
  const idCategory = String((await params).id).split(".")[0];
  return (
    <MainLayout>
      <PageBookSearch
        page={page}
        q={query}
        IdCategory={idCategory}
        status={status}
      />
    </MainLayout>
  );
}
