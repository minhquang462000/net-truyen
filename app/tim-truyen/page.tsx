

import PageBookSearch from "@/components/Pages/PageBookSearch";
import { PropParams } from "@/interfaces";
import { MainLayout } from "@/layouts";

export interface IpageProps { }

export default async function page({ params, searchParams }: PropParams) {
  const status = Number((await searchParams)?.status) || 0;
  const sortKey = String((await searchParams)?.sortKey) || "";
  const query = String((await searchParams)?.q) || "";
  const page = Number((await searchParams)?.page) || 1;
  return (
    <MainLayout>
      <PageBookSearch q={query} page={page}  sortKey={sortKey} status={status} />
    </MainLayout>
  );
}
