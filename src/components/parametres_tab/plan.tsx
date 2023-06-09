/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { BsLayers } from 'react-icons/bs';
import {
  FiArrowDown,
  FiCheck,
  FiDownloadCloud,
  FiLayers,
} from 'react-icons/fi';
import { RxLightningBolt } from 'react-icons/rx';

import PlanCard from '../card/plan_card';
import { Checkbox } from '../ui/checkbox';

function Plan() {
  const [currentPlan, setCurrentPlan] = useState('');
  const [checkAllOn, setCheckAllOn] = useState(false);
  const [checkedData, setCheckedData] = useState<any>({});

  const checkHandler = (e: any) => {
    setCheckedData((prevState: any) => {
      return {
        ...prevState,
        [e.target.id]: !prevState[e.target.id],
      };
    });
  };

  const checkAll = () => {
    const array = histories.map((x) => x.id);
    let newObj;
    if (!checkAllOn) {
      newObj = array.reduce((acc: any, num: number) => {
        acc[num.toString()] = true;
        return acc;
      }, {});
      setCheckAllOn(true);
    } else {
      newObj = array.reduce((acc: any, num: number) => {
        acc[num.toString()] = false;
        return acc;
      }, {});
      setCheckAllOn(false);
    }
    setCheckedData({ ...newObj });
  };

  const plans = [
    {
      label: 'Plan a',
      icon: <BsLayers />,
      price: 10,
      description:
        'Includes up to 10 users, 20GB individual data and access to all features.',
      limited: true,
    },
    {
      label: 'Business plan',
      icon: <FiLayers />,
      price: 20,
      description:
        'Includes up to 20 users, 40GB individual data and access to all features.',
      limited: false,
    },
    {
      label: 'Enterprise plan',
      icon: <RxLightningBolt />,
      price: 40,
      description:
        'Unlimited users, unlimited individual data and access to all features.',
      limited: false,
    },
  ];

  return (
    <div className='mt-5'>
      <div className='font-medium md:text-[1.5rem]'>Plan</div>
      <div className='mt-8 flex flex-col space-y-5'>
        {plans.map((x, i) => {
          return (
            <PlanCard
              key={i}
              currentPlan={currentPlan}
              setCurrentPlan={setCurrentPlan}
              {...x}
            />
          );
        })}
      </div>
      <div className='mt-5 flex items-center justify-between'>
        <div className='font-medium md:text-[1.5rem]'>Billing History</div>
        <button className='flex items-center space-x-3 rounded-md border border-gray-300 bg-white p-2 px-5 transition-all hover:brightness-[0.95]'>
          <FiDownloadCloud />
          <div>Download All</div>
        </button>
      </div>
      <div className='mt-5'>
        {/* Table  */}
        <div className='w-full overflow-y-auto'>
          <table className='w-full overflow-hidden rounded-lg'>
            <thead>
              <tr className='bg-gray-100'>
                <th>
                  <div className='flex justify-center'>
                    <Checkbox onClick={checkAll} />
                  </div>
                </th>
                <th>
                  <div className='flex items-center space-x-1'>
                    <div>Invoice</div>
                    <FiArrowDown />
                  </div>
                </th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {histories.map((x, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <div className='flex items-center justify-center'>
                        <Checkbox
                          id={x.id.toString()}
                          onClick={checkHandler}
                          checked={checkedData[x.id.toString()]}
                        />
                      </div>
                    </td>
                    <td>
                      <div className='max-w-[350px]'>{x.invoice}</div>
                    </td>
                    <td>
                      <div className='flex'>USD ${x.amount.toFixed(2)}</div>
                    </td>
                    <td>{x.date}</td>
                    <td>
                      <div className='flex'>
                        <div className='flex items-center space-x-2 rounded-full bg-[#ECFDF3] p-1 px-3'>
                          <FiCheck className='text-green-600' />
                          <div className='text-green-800'>{x.status}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <FiDownloadCloud className='cursor-pointer text-[1.5rem]' />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const histories = [
  {
    id: 1,
    invoice: 'Basic Plan - Dec 2022',
    amount: 10.0,
    date: 'Dec 1, 2022',
    status: 'Paid',
  },
  {
    id: 2,
    invoice: 'Basic Plan - Dec 2022',
    amount: 10.0,
    date: 'Dec 1, 2022',
    status: 'Paid',
  },
  {
    id: 3,
    invoice: 'Basic Plan - Dec 2022',
    amount: 10.0,
    date: 'Dec 1, 2022',
    status: 'Paid',
  },
  {
    id: 4,
    invoice: 'Basic Plan - Dec 2022',
    amount: 10.0,
    date: 'Dec 1, 2022',
    status: 'Paid',
  },
  {
    id: 5,
    invoice: 'Basic Plan - Dec 2022',
    amount: 10.0,
    date: 'Dec 1, 2022',
    status: 'Paid',
  },
  {
    id: 6,
    invoice: 'Basic Plan - Dec 2022',
    amount: 10.0,
    date: 'Dec 1, 2022',
    status: 'Paid',
  },
  {
    id: 7,
    invoice: 'Basic Plan - Dec 2022',
    amount: 10.0,
    date: 'Dec 1, 2022',
    status: 'Paid',
  },
];

export default Plan;
