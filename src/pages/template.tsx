import { NextPage } from 'next';
import React from 'react';

import Layout from '@/components/layout/Layout';
const TemplatePage: NextPage = () => {
  return (
    <Layout>
      <div className='text-3xl'>Template Page</div>
    </Layout>
  );
};
export default TemplatePage;
