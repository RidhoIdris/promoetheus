import { Dispatch, SetStateAction } from 'react';
import { FiX } from 'react-icons/fi';

interface modal {
  deleteModal: boolean;
  setDeleteModal: Dispatch<SetStateAction<boolean>>;
}

function DeleteQuiz({ deleteModal, setDeleteModal }: modal) {
  return (
    <div
      className={`${
        deleteModal ? 'opacity-1 visible' : 'invisible opacity-0'
      } fixed left-0 top-0 z-[999] flex h-screen w-full items-center justify-center bg-black/[0.3] transition-all`}
    >
      <div className='flex max-h-[95%] w-[90%] flex-col overflow-y-auto rounded-md bg-white p-5 lg:w-[40%] lg:p-12'>
        <div className='flex justify-end'>
          <FiX
            onClick={() => setDeleteModal(false)}
            className='cursor-pointer text-[1.5rem]'
          />
        </div>
        <div className='mt-5 text-center text-[1.5rem]'>
          Are you sure want to delete this question ?
        </div>
        <div className='mt-5 text-center text-[1.25rem]'>
          You won't be able to undo this action
        </div>
        <div className='mt-12 flex items-center justify-between space-x-5'>
          <button
            onClick={() => setDeleteModal(false)}
            className='bg-primary rounded-md px-5 py-3 text-white transition-all hover:brightness-[1.1]'
          >
            Yes, Delete Question
          </button>
          <button
            onClick={() => setDeleteModal(false)}
            className='w-[100px] rounded-md bg-red-500 px-5 py-3 text-white transition-all hover:brightness-[1.1]'
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
export default DeleteQuiz;
