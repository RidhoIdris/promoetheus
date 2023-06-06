import { NextPage } from 'next';
import React, { useState } from 'react';
import { FiXCircle } from 'react-icons/fi';

import Layout from '@/components/layout/Layout';

const quiz = [
  {
    question: 'What is the name of the company that sent the invoice?',
    options: [
      'Seed Agency',
      'Dylan Williams',
      'Mentorclass Corporation',
      "Wise's Address",
    ],
    explanation: `The name of the company that sent the invoice is "Mentroclass Corporation"`,
    quote: 'Mentorclass Corporation',
  },
  {
    question: 'What is the name of the company that sent the invoice?',
    options: [
      'Seed Agency',
      'Dylan Williams',
      'Mentorclass Corporation',
      "Wise's Address",
    ],
    explanation: `The name of the company that sent the invoice is "Mentroclass Corporation"`,
    quote: 'Mentorclass Corporation',
  },
  {
    question: 'What is the name of the company that sent the invoice?',
    options: [
      'Seed Agency',
      'Dylan Williams',
      'Mentorclass Corporation',
      "Wise's Address",
    ],
    explanation: `The name of the company that sent the invoice is "Mentroclass Corporation"`,
    quote: 'Mentorclass Corporation',
  },
];

const QuizDetailPage: NextPage = () => {
  const [answers, setAnswers] = useState<string[]>([
    'Dylan Williams',
    'Dylan Williams',
    'Dylan Williams',
  ]);

  return (
    <Layout>
      <div className='flex flex-col justify-between md:flex-row md:items-center'>
        <div>Quiz : Histoire Geo</div>
        <div className='mt-5 flex items-center space-x-2 text-white md:mt-0'>
          <button className='bg-primary rounded-md px-3 py-2'>Exporter</button>
          <button className='rounded-md bg-red-500 px-3 py-2'>Supprimer</button>
        </div>
      </div>
      <div className='mt-10'>
        {quiz.map((x, index) => {
          return (
            <>
              <div className='mt-12'>
                <div className='rounded-md border bg-white p-5 drop-shadow-md'>
                  <div className='flex items-center justify-between'>
                    <div>
                      {index + 1}. {x.question}
                    </div>
                    <div>
                      <FiXCircle />
                    </div>
                  </div>
                  <div className='mt-3'>
                    {x.options.map((option, i) => {
                      return (
                        <div
                          key={i}
                          onClick={() =>
                            setAnswers((prevState) => {
                              prevState[index] = option;
                              return [...prevState];
                            })
                          }
                          className={`mt-1 rounded-xl p-2 ${
                            answers[index] === option && 'bg-purple-100'
                          } transition-all`}
                        >
                          <div className='flex cursor-pointer items-center space-x-3 rounded-full border bg-white px-4 py-1 lg:w-[300px]'>
                            <div
                              className={`h-[15px] w-[15px] rounded-full border ${
                                answers[index] === option
                                  ? 'bg-primary'
                                  : 'bg-gray-200'
                              }`}
                            ></div>
                            <div className='font-light'>{option}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              {/* Answer  */}
              <div className='mt-5 rounded-md border bg-white p-5 drop-shadow-md'>
                <div>
                  <span className='font-medium'>Explanation:</span>{' '}
                  {x.explanation}
                </div>
                <div>
                  <span className='font-medium'>
                    Quote from provided content:
                  </span>{' '}
                  {x.quote}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </Layout>
  );
};
export default QuizDetailPage;
