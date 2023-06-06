import React, { ChangeEvent } from 'react';

interface input {
  placeholder: string;
  startIcon?: React.ReactNode;
  type?: string;
  onChange?: () => ChangeEvent<HTMLInputElement>;
}

function Input({ placeholder, startIcon, type }: input) {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    return e;
  };

  return (
    <div className='flex w-full items-center space-x-2 rounded-md border bg-white px-3 py-2'>
      {startIcon}
      <input
        onChange={onChange}
        type={type}
        className='w-full outline-none'
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
