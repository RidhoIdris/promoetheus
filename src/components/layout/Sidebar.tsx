/* eslint-disable @next/next/no-img-element */
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
  FiX,
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
  {
    icon: <FiSettings size={20} />,
    name: 'Paramètres',
    url: '/parametres',
  },
];

type SidebarProps = {
  menu: boolean;
  setMenu: (e: boolean) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ menu, setMenu }) => {
  const router = useRouter();
  // const [menu, setMenu] = useState(false);

  return (
    <div
      className={clsxm(
        'fixed left-0 top-0 z-[99] max-h-screen w-full overflow-y-auto border-r bg-white transition-all lg:static lg:w-[450px]',
        menu ? 'translate-x-[0]' : 'translate-x-[-100%] lg:translate-x-0'
      )}
    >
      <div className='flex h-screen flex-col justify-between space-y-5 p-5'>
        <div>
          <div className='flex items-center justify-between space-x-5'>
            <img className='h-[2.5rem]' src='/logo.png' alt='' />
            <FiX
              onClick={() => setMenu(false)}
              className='cursor-pointer text-[1.5rem] lg:hidden'
            />
          </div>
          <div className='mt-5 flex flex-col space-y-1'>
            {links.map((x, i) => {
              return (
                <Link
                  key={i}
                  href={x.url}
                  onClick={() => {
                    setMenu(false);
                  }}
                  className={`${
                    router.asPath === x.url ? 'bg-gray-100 text-black' : ''
                  } flex cursor-pointer items-center space-x-3 rounded-md p-2 text-gray-600 transition-all hover:bg-gray-100 hover:text-black`}
                >
                  <div className='text-[1.5rem]'>{x.icon}</div>
                  <div>{x.name}</div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className='mt-auto border-t border-gray-200 pt-6'>
          {/* Profile  */}
          <div className='flex cursor-pointer items-center justify-between'>
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
            <FiLogOut className='hover:text-red-500' size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
