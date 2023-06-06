import { useRouter } from 'next/navigation';

interface quiz {
  label: string;
  file: string;
  questions: number;
  progress: number;
  progressWidth?: string | number;
}

function QuizCard({ label, file, questions, progress, progressWidth }: quiz) {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(`/quiz/detail`);
      }}
      className='cursor-pointer rounded-xl bg-white p-8 drop-shadow-md'
    >
      <div className='text-[1.1rem] font-medium'>{label}</div>
      <div className='mt-1 text-gray-400'>{file}</div>
      <div className='mt-5 font-medium'>{questions} Questions</div>
      <div className='mt-4 flex items-center space-x-4'>
        <div
          style={{ width: progressWidth || '100%' }}
          className='relative h-[10px] rounded-full bg-gray-100'
        >
          <div
            style={{ width: `${progress}%` }}
            className='bg-primary absolute left-0 h-full rounded-full'
          ></div>
        </div>
        <div>50%</div>
      </div>
    </div>
  );
}

export default QuizCard;
