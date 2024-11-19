
import PageBookSearch from "@/components/Pages/PageBookSearch";
import { PropParams } from "@/interfaces";
import { MainLayout } from "@/layouts";

export interface IpageProps { }

export default async function page({ params, searchParams }: PropParams) {
  const status = Number((await searchParams)?.status) || 0;
  return (
    <MainLayout>
      <PageBookSearch sortKey="" status={status} />
    </MainLayout>
  );
}
