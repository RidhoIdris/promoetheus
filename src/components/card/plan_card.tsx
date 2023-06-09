import { BsCheckLg } from 'react-icons/bs';

interface plan {
  label: string;
  icon: React.ReactNode;
  price: number;
  description: string;
  limited?: boolean;
  currentPlan: string;
  setCurrentPlan: React.Dispatch<React.SetStateAction<string>>;
}

function PlanCard({
  label,
  icon,
  price,
  description,
  limited,
  currentPlan,
  setCurrentPlan,
}: plan) {
  return (
    <div
      className={`${
        currentPlan === label ? 'border-primary' : ''
      } rounded-xl border-[3px] transition-all`}
    >
      <div className='flex items-center justify-between p-5'>
        <div className='flex items-center space-x-3'>
          <div className='rounded-full bg-purple-100 p-3 text-[1.2rem] text-purple-700'>
            {icon}
          </div>
          <div className='text-[1.5rem] font-medium'>{label}</div>
        </div>
        <div
          onClick={() => setCurrentPlan(label)}
          className={`h-[25px] w-[25px] rounded-full ${
            currentPlan === label
              ? 'bg-primary text-white'
              : 'border border-gray-500'
          } flex cursor-pointer items-center justify-center p-1 text-[1.25rem] transition-all`}
        >
          {currentPlan === label && <BsCheckLg />}
        </div>
      </div>
      <div
        className={`${
          currentPlan === label ? 'bg-primary' : 'bg-gray-200'
        } h-[3px] w-full transition-all`}
      ></div>
      <div className='p-5'>
        <div className='flex items-center justify-between'>
          <div className='font-light'>
            <span className='text-[1.5rem] font-semibold md:text-[2rem]'>
              ${price}
            </span>{' '}
            per month
          </div>
          {limited && (
            <div className='rounded-full bg-green-100 p-1 px-3 text-green-500'>
              Limited time only
            </div>
          )}
        </div>
        <div className='font-light'>{description}</div>
      </div>
    </div>
  );
}

export default PlanCard;
