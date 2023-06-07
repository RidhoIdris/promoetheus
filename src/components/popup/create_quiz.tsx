import Link from 'next/link';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { FiX } from 'react-icons/fi';

import { Slider } from '@/components/ui/slider';

import Select from '../ui/select';

interface popup {
  popupHide: boolean;
  setPopupHide: Dispatch<SetStateAction<boolean>>;
}

function CreateQuiz({ popupHide, setPopupHide }: popup) {
  const [currentTab, setCurrentTab] = useState(1);
  const [currentStep, setCurrentStep] = useState(0);
  const [questionType, setQuestionType] = useState('Choix Multiple');

  return (
    <div
      className={`${
        !popupHide
          ? 'opacity-1 visible'
          : 'invisible h-0 overflow-hidden opacity-0'
      } fixed left-0 top-0 z-[999] flex h-full w-full items-center justify-center bg-black/[0.3] p-5 transition-all`}
    >
      <div className='max-h-[95%] overflow-y-auto rounded-lg bg-white p-5 lg:w-[50%]'>
        <div className='flex justify-end'>
          <div
            onClick={() => setPopupHide(true)}
            className='cursor-pointer rounded-full bg-white p-2 drop-shadow-md'
          >
            <FiX />
          </div>
        </div>
        <div className='text-center text-[1.5rem] font-medium'>
          Créer un Quiz
        </div>
        <div className='mx-auto mt-5 flex items-center justify-between lg:max-w-[80%]'>
          {['Téléchargez vos documents', 'Définir vos Paramètres'].map(
            (x, index) => {
              return (
                <div
                  key={index}
                  onClick={() => setCurrentTab(index + 1)}
                  className='flex cursor-pointer flex-col items-center space-y-3'
                >
                  <div
                    className={`${
                      currentTab === index + 1 ? 'bg-primary' : 'bg-gray-200'
                    } flex h-[40px] w-[40px] items-center justify-center rounded-full p-3 text-white`}
                  >
                    {index + 1}
                  </div>
                  <div
                    className={`${
                      currentTab === index + 1 ? 'text-black' : 'text-gray-400'
                    } mt-2 text-center`}
                  >
                    {x}
                  </div>
                </div>
              );
            }
          )}
        </div>

        {currentTab === 1 && (
          <div>
            {currentStep <= 2 && (
              <div
                className={`flex flex-col ${
                  currentStep <= 1 ? 'md:flex-row' : 'flex-col'
                } mb-5 mt-8`}
              >
                <div className='flex w-full flex-col'>
                  {['Télécharger un fichier', 'Texte', 'Liens'].map(
                    (x, index) => {
                      return (
                        <div
                          key={index}
                          onClick={() => setCurrentStep(index)}
                          className={`${
                            currentStep === index
                              ? 'text-black'
                              : 'text-gray-500'
                          } mb-5 cursor-pointer`}
                        >
                          {x}
                        </div>
                      );
                    }
                  )}
                </div>

                {/* Step 1  */}
                {currentStep === 0 && (
                  <div className='flex w-full flex-col items-center space-y-2 rounded-md border-4 border-dotted bg-gray-100 p-12 text-center'>
                    <div>
                      Fichiers acceptés : pdf, txt, doc, docx, pptx, ppt, mp3
                    </div>
                    <div className='text-gray-400'>or</div>
                    <button className='bg-primary rounded-md p-2 px-3 text-white'>
                      Télécharger un Fichier
                    </button>
                  </div>
                )}
                {/* Step 1 End  */}

                {/* Step 2  */}
                {currentStep === 1 && (
                  <div className='w-full'>
                    <textarea
                      className='h-[20rem] w-full rounded-lg border-4 border-dotted bg-gray-50 p-5'
                      placeholder='Maximum 2000 characters'
                    ></textarea>
                  </div>
                )}
                {/* Step 2 End  */}

                {/* Step 3  */}
                {currentStep === 2 && (
                  <div className='w-full'>
                    <input
                      className='w-full rounded-lg bg-gray-100 p-3'
                      placeholder='Collez votre lien ici'
                    />
                  </div>
                )}
                {/* Step 3 End  */}
              </div>
            )}

            {currentStep <= 2 && (
              <button
                onClick={() => {
                  currentStep < 2
                    ? setCurrentStep(currentStep + 1)
                    : setCurrentTab(2);
                }}
                className='bg-primary rounded-md p-2 px-3 text-white'
              >
                Continuer
              </button>
            )}
          </div>
        )}
        {currentTab === 2 && (
          <div className='mt-5 flex w-1/2 flex-col space-y-5'>
            <div className='font-medium'>Audience</div>
            <Select
              data={[
                {
                  name: 'Étudiants',
                },
                {
                  name: 'Étudiants',
                },
                {
                  name: 'Étudiants',
                },
              ]}
            />
            <div className='font-medium'>Type de Questions</div>
            <div className='flex flex-col space-y-3'>
              {[
                'Choix Multiple',
                'Remplir les champs',
                'VRAI OU FAUX',
                'List of statements',
              ].map((x) => {
                return (
                  <div
                    key={x}
                    onClick={() => setQuestionType(x)}
                    className={`${
                      questionType === x
                        ? 'bg-primary text-white'
                        : 'bg-white text-black'
                    } cursor-pointer rounded-xl border p-4 uppercase transition-all`}
                  >
                    {x}
                  </div>
                );
              })}
            </div>
            <div className='font-medium'>Nombre de questions</div>
            {/* <input
              className='rounded-md border bg-white p-3'
              placeholder='Number of Questions'
            /> */}
            {/* <input
              id='disabled-range'
              type='range'
              value={5}
              min={1}
              max={10}
              className='h-2 w-full cursor-pointer appearance-none rounded-lg bg-blue-500'
            /> */}
            <Slider />

            <div className='font-medium'>Nombre de Choix</div>
            <Slider />
            <div className='font-medium'>Nombre de Quiz</div>
            <input
              className='rounded-md border bg-white p-3'
              placeholder='Number of Questions'
            />
            <Link
              href='/quiz/detail'
              className='bg-primary rounded-md p-3 text-center text-white'
            >
              Créer le Quiz
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateQuiz;
