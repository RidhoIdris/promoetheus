/* eslint-disable @next/next/no-img-element */
import { FiMail, FiPlus } from 'react-icons/fi';

import Divider from '../ui/divider';
import Input from '../ui/input';
import Select from '../ui/select';

function Facturation() {
  return (
    <div className='mt-5'>
      <div className='font-medium md:text-[1.5rem]'>Méthode de Paiement</div>
      <div className='font-light'>
        Mettez à jour vos coordonnées de facturation et votre adresse.
      </div>

      <Divider />
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:w-[400px]'>
          <div className='font-medium'>Carte Bancaire</div>
        </div>
        <div className='mt-5 lg:mt-0 lg:w-[512px]'>
          <div className='flex items-center space-x-3'>
            <div className='w-full'>
              <div className='mb-2'>Nom</div>
              <Input placeholder='Name' />
            </div>
            <div>
              <div className='mb-2 whitespace-nowrap'>Date d'expiration</div>
              <div className='flex items-center justify-between rounded-md border bg-white px-4 py-2'>
                <input
                  placeholder='MM'
                  maxLength={2}
                  className='w-[30px] outline-none'
                />
                <div className='text-gray-300'>/</div>
                <input
                  placeholder='YYYY'
                  maxLength={4}
                  className='w-[45px] outline-none'
                />
              </div>
            </div>
          </div>
          <div className='mt-5 flex items-center space-x-3'>
            <div className='w-full'>
              <div className='mb-2'>Numéro de carte</div>
              <div>
                <Input
                  type='number'
                  startIcon={<img src='/images/mastercard.png' alt='' />}
                  placeholder='Number'
                />
              </div>
            </div>
            <div>
              <div className='mb-2 whitespace-nowrap'>CVV</div>
              <div className='rounded-md border bg-white px-4 py-2'>
                <input
                  placeholder='CVC'
                  type='password'
                  maxLength={3}
                  className='w-[95px] outline-none'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Divider />

      <div className='flex flex-col lg:flex-row lg:items-center'>
        <div className='lg:w-[400px]'>
          <div className='font-medium'>Email</div>
          <div className='font-light'>
            Les factures seront envoyées à cette adresse électronique.
          </div>
        </div>
        <div className='mt-5 lg:mt-0 lg:w-[512px]'>
          <Input
            startIcon={<FiMail className='text-[1.25rem]' />}
            placeholder='Email Address'
          />
          <button className='mt-5 flex items-center space-x-3'>
            <FiPlus className='text-[1.25rem]' />
            <div>Ajouter un email</div>
          </button>
        </div>
      </div>

      <Divider />

      <div className='flex flex-col lg:flex-row lg:items-center'>
        <div className='font-medium lg:w-[400px]'>Adresse</div>
        <div className='mt-5 flex items-center space-x-5 lg:mt-0 lg:w-[512px]'>
          <Input placeholder='Adresse' />
        </div>
      </div>

      <Divider />

      <div className='flex flex-col lg:flex-row lg:items-center'>
        <div className='font-medium lg:w-[400px]'>Ville</div>
        <div className='mt-5 flex items-center space-x-5 lg:mt-0 lg:w-[512px]'>
          <Input placeholder='Ville' />
        </div>
      </div>

      <Divider />

      <div className='flex flex-col lg:flex-row lg:items-center'>
        <div className='font-medium lg:w-[400px]'>Région</div>
        <div className='mt-5 flex items-center space-x-5 lg:mt-0 lg:w-[512px]'>
          <Input placeholder='Région' />
          <Input placeholder='366' />
        </div>
      </div>

      <Divider />

      <div className='flex flex-col lg:flex-row lg:items-center'>
        <div className='font-medium lg:w-[400px]'>Pays</div>
        <div className='mt-5 flex items-center space-x-5 lg:mt-0 lg:w-[512px]'>
          <Select
            type='top'
            data={[
              {
                name: 'Australia',
                image: '/images/flags/australia.png',
              },
              {
                name: 'Spain',
                image: '/images/flags/australia.png',
              },
              {
                name: 'England',
                image: '/images/flags/australia.png',
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Facturation;
