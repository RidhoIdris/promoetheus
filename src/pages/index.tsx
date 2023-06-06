/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';
import React from 'react';

import Layout from '@/components/layout/Layout';
import QuizSlider from '@/components/slider/quiz_slider';
const HomePage: NextPage = () => {
  return (
    <Layout className='lg:pr-0'>
      <div className='h-full w-full overflow-y-auto'>
        {/* Top  */}
        <div className='flex flex-col justify-between border-b pb-5 lg:flex-row lg:pb-16'>
          {/* Left  */}
          <div className='lg:w-[45%]'>
            <div className='text-[1.5rem] font-semibold md:text-[2rem]'>
              Découvrez Prometheus
            </div>
            <div className='mt-8 text-gray-500'>
              Prometheus is for anyone who needs to assess people regarding a
              specific knowledge. You can upload any course material and a quiz
              will be generated.
            </div>
            <button className='bg-primary mt-8 rounded-md p-2 text-white transition-all hover:brightness-[1.1]'>
              Demo en Français 🇫🇷
            </button>
            {/* Quotes  */}
            <div className='mt-8 border-l-[2px] border-gray-400 pl-4'>
              <div className='flex items-center space-x-3'>
                <div>
                  <img src='/images/lorem.png' alt='' />
                </div>
                <div>
                  <div>Lorem</div>
                  <div className='text-primary'>Prof</div>
                </div>
              </div>
              <div className='mt-1 italic'>
                “Jugez par vlroem Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do”
              </div>
            </div>
          </div>
          {/* Left End  */}

          {/* Right  */}
          <div className='flex justify-end lg:w-[45%]'>
            <div className='mt-5 h-[20rem] w-full rounded-xl bg-gray-200 lg:h-full lg:rounded-l-xl'></div>
          </div>
          {/* Right End  */}
        </div>

        {/* Quiz */}
        <div className='mt-10 text-[1.5rem] font-medium md:text-[2rem]'>
          Quiz en cours
        </div>
        <div className='mt-5'>
          <QuizSlider />
        </div>
        {/* Quiz End  */}
      </div>
    </Layout>
  );
};
export default HomePage;
