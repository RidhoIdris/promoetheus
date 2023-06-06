import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

import IconButton from '@/components/icon_button';

interface faq {
  question: string;
  answer: string;
}

function FaqCard({ question, answer }: faq) {
  const [hide, setHide] = useState(true);
  return (
    <div className='w-full rounded-lg bg-white p-5 drop-shadow-md'>
      <div
        onClick={() => setHide(!hide)}
        className='flex cursor-pointer items-center justify-between'
      >
        <div className={`${hide ? '' : 'text-primary'} transition-all`}>
          {question}
        </div>
        <div onClick={() => setHide(!hide)}>
          <IconButton>
            <FiChevronDown
              className={`text-[1.5rem] ${
                hide ? 'rotate-0' : 'rotate-[180deg]'
              } transition-all`}
            />
          </IconButton>
        </div>
      </div>
      <div
        className={`${
          hide ? 'max-h-0' : 'max-h-[100rem]'
        } overflow-hidden transition-all`}
      >
        <div className='my-3 h-[1px] w-full bg-gray-100'></div>
        <div className='mt-5'>{answer}</div>
      </div>
    </div>
  );
}

export default FaqCard;
