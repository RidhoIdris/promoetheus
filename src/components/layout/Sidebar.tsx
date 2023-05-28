import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import {
  FiDownloadCloud,
  FiLayers,
  FiLogOut,
  FiSettings,
  FiUsers,
} from 'react-icons/fi';
import {
  RiChat3Line,
  RiCheckboxMultipleLine,
  RiHome3Line,
} from 'react-icons/ri';

import clsxm from '@/lib/clsxm';

const links = [
  {
    icon: <RiHome3Line size={20} />,
    name: 'Home',
    url: '/',
  },
  {
    icon: <RiCheckboxMultipleLine size={20} />,
    name: 'Quiz',
    url: '/quiz',
  },
  {
    icon: <FiLayers size={20} />,
    name: 'Template',
    url: '/template',
  },
  {
    icon: <FiDownloadCloud size={20} />,
    name: 'Integrations',
    url: '/integrations',
  },
  {
    icon: <RiChat3Line size={20} />,
    name: 'FAQ',
    url: '/faq',
  },
  {
    icon: <FiUsers size={20} />,
    name: 'Feedback',
    url: '/feedback',
  },
];

const Sidebar = () => {
  const router = useRouter();

  return (
    <div className='flex h-screen w-[296px] flex-col justify-between overflow-y-auto border-r border-gray-200 px-4 py-8'>
      <div>
        {/* Logo */}
        <div className='relative h-[37px] w-full'>
          <Image
            src='/logo.png'
            fill
            className='object-contain object-left'
            alt='logo'
          />
        </div>
        {/* Menu */}
        <div className='mt-6 flex flex-col gap-1'>
          {links.map((e, i) => {
            return (
              <Link
                key={i}
                href={e.url}
                className={clsxm([
                  'flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 font-semibold text-gray-700 hover:bg-gray-50',
                  router.asPath === e.url ? 'bg-gray-50' : 'bg-transparent',
                ])}
              >
                {e.icon}
                <span>{e.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
      {/* Footer */}
      <div className='flex flex-col gap-6 divide-y divide-gray-200 text-gray-700'>
        <div className='flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 font-semibold hover:bg-gray-50'>
          <FiSettings size={20} />
          <span>Reglages</span>
        </div>
        <div className='pt-6'>
          <div className='group flex cursor-pointer items-center justify-between'>
            <div className='flex items-center gap-3'>
              <Image
                src='/avatar.png'
                width={40}
                height={40}
                className='overflow-hidden rounded-full object-cover'
                alt='avatar'
              />
              <div className='text-sm'>
                <p className='font-semibold'>Olivia Rhye</p>
                <p className='text-gray-500'>olivia@untitledui.com</p>
              </div>
            </div>
            <FiLogOut className='group-hover:text-red-500' size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
