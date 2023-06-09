import { Dispatch, SetStateAction, useState } from 'react';
import { FiX } from 'react-icons/fi';

interface modal {
  exportModal: boolean;
  setExportModal: Dispatch<SetStateAction<boolean>>;
}

function ExportQuiz({ exportModal, setExportModal }: modal) {
  const [includeAnswers, setIncludeAnswers] = useState(false);
  return (
    <div
      className={`${
        exportModal ? 'opacity-1 visible' : 'invisible opacity-0'
      } fixed left-0 top-0 z-[999] flex h-screen w-full items-center justify-center bg-black/[0.3] transition-all`}
    >
      <div className='flex max-h-[95%] w-[90%] flex-col overflow-y-auto rounded-md bg-white p-5 lg:w-[50%] lg:p-12'>
        <div className='flex justify-end'>
          <FiX
            onClick={() => setExportModal(false)}
            className='cursor-pointer text-[1.5rem]'
          />
        </div>
        <div className='text-center text-[2rem]'>Export to...</div>
        <div className='mt-8 flex items-center justify-center space-x-3'>
          <div
            onClick={() => setIncludeAnswers(!includeAnswers)}
            className='relative h-[25px] w-[50px] cursor-pointer rounded-full border bg-gray-200'
          >
            <div
              className={`absolute ${
                includeAnswers ? 'bg-primary left-[50%]' : 'left-0 bg-white'
              } h-full w-[50%] rounded-full transition-all`}
            ></div>
          </div>
          <div>Include Answers</div>
        </div>
        <div className='mt-12 grid grid-cols-2 gap-5 md:grid-cols-4'>
          {exports.map((x) => {
            return (
              <div
                key={x.label}
                className='flex cursor-pointer flex-col items-center space-y-5 rounded-md border bg-white p-5 drop-shadow-lg transition-all hover:translate-y-[-5%]'
              >
                <img className='h-[5rem]' src={x.image} alt='' />
                <div>{x.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const exports = [
  {
    label: 'PDF',
    image: '/images/export_icon/pdf.png',
  },
  {
    label: 'Word',
    image: '/images/export_icon/word.png',
  },
  {
    label: 'Moodle XML',
    image: '/images/export_icon/xml.png',
  },
  {
    label: 'Google Forms',
    image: '/images/export_icon/forms.png',
  },
];

export default ExportQuiz;
