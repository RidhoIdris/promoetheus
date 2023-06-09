import { NextPage } from 'next';
import React from 'react';

import FaqCard from '@/components/card/faq_card';
import Layout from '@/components/layout/Layout';

const FaqPage: NextPage = () => {
  return (
    <Layout>
      <div className='mx-auto xl:max-w-3xl'>
        <div className='text-[1.5rem] font-medium md:text-[2rem]'>
          Questions Fréquemment Posées
        </div>
        <div className='mt-5 flex flex-col space-y-5'>
          {Array(10)
            .fill(null)
            .map((x) => {
              return (
                <FaqCard
                  key={x}
                  question='Who is Prometheus for?'
                  answer='Prometheus is for anyone who needs to assess people regarding a specific knowledge. You can upload any course material and a quiz will be generated.'
                />
              );
            })}
        </div>
      </div>
    </Layout>
  );
};
export default FaqPage;
