import PageBookSearch from "@/components/Pages/PageBookSearch";
import { PropParams } from "@/interfaces";
import { MainLayout } from "@/layouts";

export interface IpageProps {}

export default async function page({ params, searchParams }: PropParams) {
  const status = Number((await searchParams)?.status) || 0;
  const query = (await searchParams)?.q || "";
  const page = Number((await searchParams)?.page) || 1;
  const search = (await searchParams)?.search || "";
  return (
    <MainLayout>
      <PageBookSearch
        search={search as string}
        q={query as string}
        page={page}
        status={status}
      />
    </MainLayout>
  );
}
