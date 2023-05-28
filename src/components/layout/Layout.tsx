import React from 'react';

import clsxm from '@/lib/clsxm';

import Sidebar from '@/components/layout/Sidebar';

type LayoutProps = React.ComponentPropsWithoutRef<'div'>;

const Layout: React.FC<LayoutProps> = ({ className, children, ...rest }) => {
  return (
    <div
      className={clsxm(['flex h-screen overflow-hidden', className])}
      {...rest}
    >
      <Sidebar />
      <div className='min-h-screen flex-1 overflow-y-auto p-12'>{children}</div>
    </div>
  );
};
export default Layout;
