'use client';
import Link from 'next/link';
import * as React from 'react';
import FollowItemCard from '../Cards/FollowItemCard';
import Cookies from 'js-cookie';
import { IBook } from '@/interfaces';
import CardIfoAccountPage from '../Cards/CardIfoAccountPage';
import RootPagination from '../RootPagination';

export interface IFollowListNewUpdateProps {
  followListNew: IBook[]
  total: number
  page: number
}

export default function FollowListNewUpdate({ followListNew, total, page }: IFollowListNewUpdateProps) {
  const user = Cookies.get("user");
  return (
    <div className="w-full mt-4 min-h-[500px]">
      {!user ? <CardIfoAccountPage /> : <div className="font-normal  md:grid-cols-4 md:gap-3 grid gap-5 grid-cols-2 w-full ">
        {followListNew?.map((item, index) => <FollowItemCard key={index} book={item} />)}
      </div>}
      <RootPagination page={page} limit={20} total={total} />
    </div>
  );
}
