/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

interface data {
  image?: string;
  name: string;
  time?: string;
}

function Select({ data, type }: { data: data[]; type?: string }) {
  const [hide, setHide] = useState(true);
  const [value, setValue] = useState<data>(data[0]);

  return (
    <div tabIndex={0} onBlur={() => setHide(true)} className='relative w-full'>
      <div
        onClick={() => setHide(!hide)}
        className='flex w-full cursor-pointer items-center justify-between rounded-md border bg-white px-3 py-2'
      >
        <div className='flex items-center space-x-2'>
          {value.image && (
            <img className='h-[1.25rem]' src={value.image} alt='' />
          )}
          <div>{value.name}</div>
          <div className='text-gray-500'>{value.time}</div>
        </div>
        <FiChevronDown
          className={`${
            hide ? 'rotate-0' : 'rotate-[180deg]'
          } text-[1.25rem] transition-all`}
        />
      </div>
      <div
        className={`${
          !hide ? 'opacity-1 visible' : 'invisible opacity-0'
        } absolute transition-all ${
          type === 'top' ? 'bottom-[120%]' : 'top-[120%]'
        } left-0 z-[99] w-full bg-white drop-shadow-lg`}
      >
        {data.map((x, i) => {
          return (
            <div
              key={i}
              onClick={() => {
                setHide(true);
                setValue(x);
              }}
              className='flex cursor-pointer items-center space-x-3 border-b p-3 hover:bg-gray-100'
            >
              {x.image && <img className='h-[1.25rem]' src={x.image} alt='' />}
              <div>{x.name}</div>
              {x.time && <div className='font-light'>{x.time}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Select;
