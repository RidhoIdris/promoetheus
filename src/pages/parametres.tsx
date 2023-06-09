/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';

import Layout from '@/components/layout/Layout';
import Facturation from '@/components/parametres_tab/facturation';
import MotDePasse from '@/components/parametres_tab/mot_de_passe';
import Plan from '@/components/parametres_tab/plan';
import Profil from '@/components/parametres_tab/profil';

const menu = [
  {
    label: 'Profil',
    components: <Profil />,
  },
  {
    label: 'Mot de Passe',
    components: <MotDePasse />,
  },
  {
    label: 'Plan',
    components: <Plan />,
  },
  {
    label: 'Facturation',
    components: <Facturation />,
  },
];
const ParametresPage: NextPage = () => {
  const [currentTab, setCurrentTab] = useState('Profil');
  const [currentHighlightWidth, setCurrentHighlightWidth] = useState(39);
  const [currentOffsetLeft, setCurrentOffsetLeft] = useState(0);

  const handleClick = (e: any) => {
    setCurrentHighlightWidth(e.target.offsetWidth);
    setCurrentOffsetLeft(e.target.offsetLeft);
  };

  useEffect(() => {
    const tab = document.querySelectorAll('#parametres_tab');
    tab.forEach((x) => x.addEventListener('click', handleClick));

    // Remove Listener
    () => tab.forEach((x) => x.removeEventListener('click', handleClick));
  }, [currentTab]);
  return (
    <Layout>
      <div className='text-[1.5rem] font-medium md:text-[2rem]'>Paramètres</div>
      <div className='relative mt-5 flex items-center overflow-x-auto border-b'>
        <span
          style={{ width: currentHighlightWidth, left: currentOffsetLeft }}
          className='bg-primary absolute bottom-0 left-0 h-[2px] w-[100px] rounded-md transition-all'
        ></span>
        {menu.map((x, i) => {
          return (
            <div
              key={i}
              id='parametres_tab'
              onClick={() => setCurrentTab(x.label)}
              className={`whitespace-nowrap pb-3 ${
                currentTab === x.label ? 'text-primary' : ''
              } hover:text-primary mr-8 cursor-pointer font-medium`}
            >
              {x.label}
            </div>
          );
        })}
      </div>
      {menu.map((x, i) => {
        return (
          <div
            key={i}
            className={`${
              currentTab === x.label
                ? 'opacity-1 visible'
                : 'invisible h-0 overflow-hidden opacity-0'
            } transition-all`}
          >
            {x.components}
          </div>
        );
      })}
    </Layout>
  );
};
export default ParametresPage;
