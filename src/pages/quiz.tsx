import { NextPage } from 'next';
import React from 'react';
import { FiPlus } from 'react-icons/fi';

import Layout from '@/components/layout/Layout';

const items = [
  {
    title: 'Mathématiques',
    desc: 'Vos tests pour le sujet: mathématiques',
    cards: [
      {
        title: 'Fonctions',
        fileName: 'test.pdf',
        total: '14 Questions',
        percent: 50,
      },
      {
        title: 'Fonctions',
        fileName: 'test.pdf',
        total: '14 Questions',
        percent: 50,
      },
      {
        title: 'Fonctions',
        fileName: 'test.pdf',
        total: '14 Questions',
        percent: 50,
      },
      {
        title: 'Fonctions',
        fileName: 'test.pdf',
        total: '14 Questions',
        percent: 50,
      },
    ],
  },
  {
    title: 'Français',
    desc: 'Vos tests pour le sujet: français',
    cards: [
      {
        title: 'Grammaire',
        fileName: 'test.pdf',
        total: '14 Questions',
        percent: 50,
      },
      {
        title: 'Grammaire',
        fileName: 'test.pdf',
        total: '14 Questions',
        percent: 50,
      },
      {
        title: 'Grammaire',
        fileName: 'test.pdf',
        total: '14 Questions',
        percent: 50,
      },
      {
        title: 'Grammaire',
        fileName: 'test.pdf',
        total: '14 Questions',
        percent: 50,
      },
    ],
  },
  {
    title: 'Grammaire',
    desc: 'Vos tests pour le sujet: Histoire-Géographie',
    cards: [
      {
        title: 'Guerre',
        fileName: 'test.pdf',
        total: '14 Questions',
        percent: 50,
      },
      {
        title: 'Guerre',
        fileName: 'test.pdf',
        total: '14 Questions',
        percent: 50,
      },
      {
        title: 'Guerre',
        fileName: 'test.pdf',
        total: '14 Questions',
        percent: 50,
      },
      {
        title: 'Guerre',
        fileName: 'test.pdf',
        total: '14 Questions',
        percent: 50,
      },
    ],
  },
];

const QuizPage: NextPage = () => {
  return (
    <Layout>
      <div>
        <div className='flex items-center justify-between'>
          <h1 className='text-3xl font-semibold'>Quiz</h1>
          <button className='flex items-center justify-center gap-2 rounded-md bg-purple-600 px-4 py-2 text-center font-semibold text-white hover:-translate-y-0.5 active:translate-y-0'>
            <FiPlus />
            <span>Créer un Quiz</span>
          </button>
        </div>
        {items.map((e, i) => {
          return (
            <div key={i} className='mt-3 '>
              <div className='mb-6 px-8'>
                <h3 className='text-2xl font-semibold leading-9 text-gray-900'>
                  {e.title}
                </h3>
                <p className='text-gray-600'>{e.desc}</p>
              </div>
              <div className='mt-6 flex items-center gap-4'>
                {e.cards.map((card, cardIdx) => {
                  return (
                    <div
                      key={cardIdx}
                      className='w-1/4 rounded-[20px] p-6 shadow-lg'
                    >
                      <p className='text-lg font-medium text-black'>
                        {card.title}
                      </p>
                      <p className='mt-2 text-sm text-gray-500'>
                        {card.fileName}
                      </p>
                      <p className='mt-6 font-medium'>{card.total}</p>
                      <div className='flex items-center gap-2'>
                        <div className='h-2 w-full rounded-full bg-gray-200'>
                          <div className='h-2 w-1/2 rounded-full bg-purple-600'></div>
                        </div>
                        <p className='text-sm text-gray-700'>50%</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};
export default QuizPage;
