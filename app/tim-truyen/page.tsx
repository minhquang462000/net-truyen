

import PageBookSearch from "@/components/Pages/PageBookSearch";
import { MainLayout } from "@/layouts";

export interface IpageProps { }

export default function page(props: IpageProps) {
  return (
    <MainLayout>
      <PageBookSearch />
    </MainLayout>
  );
}
