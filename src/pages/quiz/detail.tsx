/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { GetServerSideProps, NextPage } from 'next';
import { useState } from 'react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
  resetServerContext,
} from 'react-beautiful-dnd';
import { FiXCircle } from 'react-icons/fi';
import { GrDrag } from 'react-icons/gr';

import Layout from '@/components/layout/Layout';
import DeleteQuiz from '@/components/popup/delete_quiz';
import ExportQuiz from '@/components/popup/export_quiz';

const QuizDetailPage: NextPage = () => {
  const [quiz, setQuiz] = useState(quizData);
  const [answers, setAnswers] = useState<string[]>([
    'Dylan Williams',
    'Dylan Williams',
    'Dylan Williams',
  ]);

  const [showExplanation, setShowExplanation] = useState(true);
  const [exportModal, setExportModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const [isGrDragIconHovered, setIsGrDragIconHovered] = useState(false);

  const inputHandler = (index: number, e: any, order?: number) => {
    if (e.target.id === 'options' && order !== undefined) {
      setQuiz((prevState) => {
        const updatedQuiz = [...prevState];
        updatedQuiz[index].options[order] = e.target.textContent;
        return [...updatedQuiz];
      });
      setAnswers((prevState) => {
        prevState[index] = e.target.textContent;
        return [...prevState];
      });
    } else {
      setQuiz((prevState) => {
        const updatedQuiz = [...prevState];
        updatedQuiz[index] = {
          ...prevState[index],
          [e.target.id]: e.target.textContent,
        };
        return updatedQuiz;
      });
    }
  };

  function handleOnDragEnd(result: DropResult) {
    if (!result.destination) return;

    const items = Array.from(quiz);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setQuiz(items);
  }

  return (
    <>
      <ExportQuiz exportModal={exportModal} setExportModal={setExportModal} />
      <DeleteQuiz deleteModal={deleteModal} setDeleteModal={setDeleteModal} />
      <Layout>
        <div className='mx-auto xl:max-w-3xl'>
          <div className='flex flex-col justify-between md:flex-row md:items-center'>
            <div>Quiz : Histoire Geo</div>
            <div className='mt-5 flex items-center space-x-2 text-white md:mt-0'>
              <button
                onClick={() => setExportModal(true)}
                className='bg-primary rounded-md px-3 py-2'
              >
                Exporter
              </button>
              <button className='rounded-md bg-red-500 px-3 py-2'>
                Supprimer
              </button>
            </div>
          </div>
          {/* Show Explanation  */}
          <div className='mt-5 flex items-center space-x-3'>
            <div
              onClick={() => setShowExplanation(!showExplanation)}
              className='relative h-[25px] w-[50px] cursor-pointer rounded-full bg-gray-200'
            >
              <div
                className={`absolute ${
                  showExplanation ? 'bg-primary left-[50%]' : 'left-0 bg-white'
                } h-full w-[50%] rounded-full transition-all`}
              ></div>
            </div>
            <div>Show Explanation</div>
          </div>
          <div className='mt-10'>
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId='boom'>
                {(provided) => (
                  <ul
                    className='boom'
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {quiz.length > 0 &&
                      quiz.map((x, index) => {
                        return (
                          <Draggable
                            key={`draggable-${index}`}
                            draggableId={`draggable-${index}`}
                            index={index}
                            isDragDisabled={!isGrDragIconHovered}
                          >
                            {(provided2) => (
                              <li
                                ref={provided2.innerRef}
                                {...provided2.draggableProps}
                                {...provided2.dragHandleProps}
                                className='relative mb-12'
                              >
                                <GrDrag
                                  onMouseEnter={() =>
                                    setIsGrDragIconHovered(true)
                                  }
                                  onMouseLeave={() =>
                                    setIsGrDragIconHovered(false)
                                  }
                                  className='left-[-5%] top-[2.5%] z-[99] mb-5 text-[1.5rem] xl:absolute xl:mb-0'
                                />
                                <div className='rounded-md border bg-white p-5 drop-shadow-md'>
                                  <div className='flex justify-between space-x-2'>
                                    <div className='flex w-full space-x-2'>
                                      <div>{index + 1}.</div>
                                      <div
                                        contentEditable
                                        className='w-full outline-none'
                                        id='question'
                                        onChange={(e) => inputHandler(index, e)}
                                      >
                                        {x.question}
                                      </div>
                                    </div>
                                    <FiXCircle
                                      className='text-[1.25rem]'
                                      onClick={() => setDeleteModal(true)}
                                    />
                                  </div>
                                  <div className='mt-3'>
                                    {x.options.map((option, order) => {
                                      const optionKey = `${index}-${order}`;
                                      return (
                                        <div
                                          key={optionKey}
                                          className={`mt-1 rounded-xl p-2 ${
                                            answers[index] === option &&
                                            'bg-purple-100'
                                          } transition-all`}
                                        >
                                          <div className='flex cursor-pointer items-center space-x-3 rounded-full border bg-white px-4 py-1 lg:w-[300px]'>
                                            <div
                                              onClick={() =>
                                                setAnswers((prevState) => {
                                                  prevState[index] = option;
                                                  return [...prevState];
                                                })
                                              }
                                              className={`h-[15px] w-[15px] rounded-full border ${
                                                answers[index] === option
                                                  ? 'bg-primary'
                                                  : 'bg-gray-200'
                                              }`}
                                            ></div>
                                            <div
                                              contentEditable
                                              id='options'
                                              onChange={(e) =>
                                                inputHandler(index, e, order)
                                              }
                                              className='w-full font-light outline-none'
                                            >
                                              {option}
                                            </div>
                                          </div>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                                {/* Answer  */}

                                <div
                                  className={`${
                                    !showExplanation
                                      ? 'max-h-0 overflow-hidden'
                                      : 'mt-5 max-h-[20rem]'
                                  } transition-all`}
                                >
                                  <div className='rounded-md border bg-white p-5 drop-shadow-lg'>
                                    <div className='flex flex-col xl:flex-row xl:space-x-2'>
                                      <span className='font-medium'>
                                        Explanation:
                                      </span>{' '}
                                      <div
                                        contentEditable
                                        id='explanation'
                                        onChange={(e) => inputHandler(index, e)}
                                        className='w-full outline-none'
                                      >
                                        {x.explanation}
                                      </div>
                                    </div>
                                    <div className='mt-5 flex flex-col xl:mt-0 xl:flex-row xl:space-x-2'>
                                      <span className='font-medium md:whitespace-nowrap'>
                                        Quote from provided content:
                                      </span>
                                      <div
                                        id='quote'
                                        contentEditable
                                        onChange={(e) => inputHandler(index, e)}
                                        className='w-full outline-none'
                                      >
                                        {x.quote}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            )}
                          </Draggable>
                        );
                      })}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </DragDropContext>
          </div>
        </div>
      </Layout>
    </>
  );
};

const quizData = [
  {
    key: 'question1',
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
    key: 'question2',
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
    key: 'question3',
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

export const getServerSideProps: GetServerSideProps = async () => {
  resetServerContext(); // <-- CALL RESET SERVER CONTEXT, SERVER SIDE
  return { props: { data: [] } };
};

export default QuizDetailPage;
