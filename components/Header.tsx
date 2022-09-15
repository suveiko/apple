import { FC } from 'react';

import { SearchIcon, ShoppingBagIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';

export const Header: FC = () => {
  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE] p-4">
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100">
            <Image src="https://rb.gy/vsvv2o" layout="fill" objectFit="contain" />
          </div>
        </Link>
      </div>
      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <a href="/ss" className="headerLink">
          Product
        </a>
        <a href="/ss" className="headerLink">
          Explore
        </a>
        <a href="/ss" className="headerLink">
          Support
        </a>
        <a href="/ss" className="headerLink">
          Business
        </a>
      </div>
      <div className="flex items-center justify-center gap-x-4 md:w-1/5">
        <SearchIcon className="headerIcon" />
        <Link href="/">
          <div className="relative cursor-pointer">
            <span
              className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center 
          justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500"
            >
              2
            </span>
            <ShoppingBagIcon className="headerIcon" />
          </div>
        </Link>
      </div>
    </header>
  );
};
