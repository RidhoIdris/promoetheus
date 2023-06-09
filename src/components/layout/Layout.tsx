import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

import clsxm from '@/lib/clsxm';

import Sidebar from '@/components/layout/Sidebar';

type LayoutProps = React.ComponentPropsWithoutRef<'div'>;

const Layout: React.FC<LayoutProps> = ({ className, children, ...rest }) => {
  const [menu, setMenu] = useState(false);
  return (
    <div className='flex w-full' {...rest}>
      <Sidebar menu={menu} setMenu={(e) => setMenu(e)} />
      <div className='max-h-screen w-full overflow-y-auto bg-purple-50'>
        <div className='w-full p-5 lg:hidden lg:p-12'>
          <div className='w-fit cursor-pointer text-[1.5rem]'>
            <FiMenu onClick={() => setMenu(true)} />
          </div>
        </div>
        <div className={clsxm('p-5 lg:py-12', className)}>{children}</div>
      </div>
    </div>
  );
};
export default Layout;
