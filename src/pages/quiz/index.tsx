import { NextPage } from 'next';
import React, { useState } from 'react';

import QuizCard from '@/components/card/quiz_card';
import Layout from '@/components/layout/Layout';
import CreateQuiz from '@/components/popup/create_quiz';

const QuizPage: NextPage = () => {
  const [popupHide, setPopupHide] = useState(true);
  return (
    <Layout>
      <CreateQuiz popupHide={popupHide} setPopupHide={setPopupHide} />
      <div>
        {/* Header  */}
        <div className='flex items-center justify-between'>
          <div className='text-[1.5rem] font-medium md:text-[2rem]'>Quiz</div>
          <button
            onClick={() => setPopupHide(false)}
            className='bg-primary rounded-md p-2 px-4 text-white transition-all hover:brightness-[1.1]'
          >
            + Créer un Quiz
          </button>
        </div>
        {/* Header End  */}
        <div className='mt-5 flex flex-col space-y-8'>
          {/* Math  */}
          <div>
            <div className='lg:px-5'>
              <div className='text-[1.5rem] font-medium'>Mathématiques</div>
              <div className='mt-1 font-light'>
                Vos tests pour le sujet: mathématiques
              </div>
            </div>
            <div className='mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>
              {Array(4)
                .fill(null)
                .map((x) => {
                  return (
                    <QuizCard
                      key={x}
                      label='Functions'
                      file='test.pdf'
                      questions={14}
                      progress={50}
                    />
                  );
                })}
            </div>
          </div>
          {/* Math End  */}

          {/* Français  */}
          <div>
            <div className='lg:px-5'>
              <div className='text-[1.5rem] font-medium'>Français</div>
              <div className='mt-1 font-light'>
                Vos tests pour le sujet: français
              </div>
            </div>
            <div className='mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>
              {Array(4)
                .fill(null)
                .map((x) => {
                  return (
                    <QuizCard
                      key={x}
                      label='Grammaire'
                      file='test.pdf'
                      questions={14}
                      progress={50}
                    />
                  );
                })}
            </div>
          </div>
          {/* Français End  */}

          {/* Histoire-Géographie  */}
          <div>
            <div className='lg:px-5'>
              <div className='text-[1.5rem] font-medium'>
                Histoire-Géographie
              </div>
              <div className='mt-1 font-light'>
                Vos tests pour le sujet: Histoire-Géographie
              </div>
            </div>
            <div className='mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>
              {Array(4)
                .fill(null)
                .map((x) => {
                  return (
                    <QuizCard
                      key={x}
                      label='Guerre'
                      file='test.pdf'
                      questions={14}
                      progress={50}
                    />
                  );
                })}
            </div>
          </div>
          {/* Math End  */}
        </div>
      </div>
    </Layout>
  );
};
export default QuizPage;
