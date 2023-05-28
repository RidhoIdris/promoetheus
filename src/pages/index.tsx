import { NextPage } from 'next';
import React from 'react';

import Layout from '@/components/layout/Layout';
const HomePage: NextPage = () => {
  return (
    <Layout>
      <div className='text-3xl font-semibold'>HomePage</div>
    </Layout>
  );
};
export default HomePage;
