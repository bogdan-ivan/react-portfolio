import Image from 'next/image';
import React from 'react';

import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline';

import { HomeIcon } from '@heroicons/react/solid';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useRecoilState, useRecoilValue } from 'recoil';
import { modalState } from '../atoms/modalAtom';

const Header = () => {
  const { data: session } = useSession();
  console.log(session);
  const [open, setOpen] = useRecoilState(modalState);
  // If we want read only
  const readOnlyOpen = useRecoilValue(modalState);
  const router = useRouter();

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between bg-white max-w-6xl mx-5 lg:mx-auto">
        {/* Left */}
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
            onClick={() => router.push('/')}
          />
          {/* <img src="https://i.imgur.com/wEOWkhu.png" alt="" className='object-contain h-12' /> */}
        </div>
        <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* Middle - search input field*/}
        <div className="max-w-xs">
          <div className="mt-1 relative p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
              placeholder="Search"
            />
          </div>
        </div>
        {/* Right */}
        {session ? (
          <div className="flex items-center justify-end space-x-4">
            <HomeIcon className="navBtn" />
            <div className="relative navBtn">
              <PaperAirplaneIcon
                className="navBtn rotate-45"
                onClick={() => router.push('/inbox')}
              />
              <div className="absolute -top-2 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
                3
              </div>
            </div>

            <PlusCircleIcon
              onClick={() => setOpen((prev) => !prev)}
              className="navBtn"
            />
            <UserGroupIcon className="navBtn" />
            <HeartIcon className="navBtn" />

            <MenuIcon className="h-10 w-10 md:hidden cursor-pointer" />

            <img
              src={session?.user?.image}
              alt="profile pic"
              className="h-10 rounded-full cursor-pointer object-contain p-1"
            />
          </div>
        ) : (
          <button onClick={signIn}>Sign in</button>
        )}
      </div>
    </div>
  );
};

export default Header;
