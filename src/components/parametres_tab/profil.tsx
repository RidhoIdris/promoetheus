/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { BsTypeBold } from 'react-icons/bs';
import { FiLink2, FiMail, FiUploadCloud } from 'react-icons/fi';
import {
  MdFormatItalic,
  MdFormatListBulleted,
  MdFormatListNumbered,
} from 'react-icons/md';

import Divider from '../ui/divider';
import Input from '../ui/input';
import Select from '../ui/select';

function Profil() {
  const [bio, setBio] = useState('');

  // Text Editor
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [currentFormat, setCurrentFormat] = useState('bullet');

  return (
    <div className='mt-5'>
      <div className='flex flex-col justify-between lg:flex-row lg:items-center'>
        <div>
          <div className='font-medium md:text-[1.5rem]'>
            Informations Peronnelles
          </div>
          <div>Détails de votre profile</div>
        </div>
        <div className='mt-5 flex items-center space-x-5 lg:mt-0'>
          <button className='rounded-md border px-4 py-2'>Annuler</button>
          <button className='bg-primary rounded-md px-4 py-2 text-white'>
            Enregistrer
          </button>
        </div>
      </div>

      <Divider />

      <div className='flex flex-col lg:flex-row lg:items-center'>
        <div className='font-medium lg:w-[400px]'>Nom</div>
        <div className='mt-5 flex items-center space-x-5 lg:mt-0 lg:w-[512px]'>
          <Input placeholder='First Name' />
          <Input placeholder='Last Name' />
        </div>
      </div>

      <Divider />

      <div className='flex flex-col lg:flex-row lg:items-center'>
        <div className='font-medium lg:w-[400px]'>Email</div>
        <div className='mt-5 flex items-center space-x-5 lg:mt-0 lg:w-[512px]'>
          <Input
            startIcon={<FiMail className='text-[1.5rem] text-gray-500' />}
            placeholder='Email Address'
          />
        </div>
      </div>

      <Divider />

      <div className='flex flex-col lg:flex-row'>
        <div className='lg:w-[400px]'>
          <div className='font-medium'>Photo</div>
          <div className='font-light'>Visible par tous.</div>
        </div>
        <div className='flex flex-col lg:w-[512px] lg:flex-row lg:space-x-5'>
          <img
            className='hidden h-[4rem] w-[4rem] lg:block'
            src='/avatar.png'
            alt=''
          />
          <label htmlFor='photo' className='w-full cursor-pointer'>
            <div className='mt-5 flex w-full flex-col items-center space-y-3 rounded-md border bg-white p-5 text-center lg:mt-0'>
              <div className='rounded-full bg-gray-100 p-2'>
                <div className='rounded-full bg-gray-200 p-2'>
                  <FiUploadCloud className='text-[1.5rem]' />
                </div>
              </div>
              <div>
                <span className='text-primary font-semibold'>
                  Cliquer pour télécharger
                </span>
                <span className='font-light'> ou par glisser-déposer</span>
              </div>
              <div className='font-light'>
                SVG, PNG, JPG or GIF (max. 800x400px)
              </div>
            </div>
          </label>
          {/* File Input  */}
          <input id='photo' type='file' hidden />
        </div>
      </div>

      <Divider />

      <div className='flex flex-col lg:flex-row lg:items-center'>
        <div className='font-medium lg:w-[400px]'>Métier</div>
        <div className='mt-5 flex items-center space-x-5 lg:mt-0 lg:w-[512px]'>
          <Input placeholder='Métier' />
        </div>
      </div>

      <Divider />

      <div className='flex flex-col lg:flex-row lg:items-center'>
        <div className='font-medium lg:w-[400px]'>Pays</div>
        <div className='mt-5 flex items-center space-x-5 lg:mt-0 lg:w-[512px]'>
          <Select
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

      <Divider />

      <div className='flex flex-col lg:flex-row lg:items-center'>
        <div className='font-medium lg:w-[400px]'>Fuseau Horaire</div>
        <div className='mt-5 flex items-center space-x-5 lg:mt-0 lg:w-[512px]'>
          <Select
            data={[
              {
                name: 'Pacific Standard Time (PST)',
                time: 'UTC-08:00',
                image: '/images/time.png',
              },
              {
                name: 'Pacific Standard Time (PST)',
                time: 'UTC-08:00',
                image: '/images/time.png',
              },
              {
                name: 'Pacific Standard Time (PST)',
                time: 'UTC-08:00',
                image: '/images/time.png',
              },
            ]}
          />
        </div>
      </div>

      <Divider />

      <div className='flex flex-col lg:flex-row'>
        <div className='font-medium lg:w-[400px]'>
          <div>Bio</div>
          <div className='font-light'>Courte introduction</div>
        </div>
        <div className='mt-5 flex flex-col lg:mt-0 lg:w-[512px]'>
          <div className='flex w-full flex-col lg:flex-row lg:items-center lg:space-x-3'>
            <div className='lg:w-[50%]'>
              <Select
                data={[
                  {
                    name: 'Medium',
                  },
                  {
                    name: 'SemiBold',
                  },
                  {
                    name: 'Bold',
                  },
                ]}
              />
            </div>
            <div className='mt-5 flex space-x-3 text-[1.5rem] text-gray-400 lg:mt-0'>
              <BsTypeBold
                className={`${bold ? 'text-black' : ''}`}
                onClick={() => setBold(!bold)}
              />
              <MdFormatItalic
                className={`${italic ? 'text-black' : ''}`}
                onClick={() => setItalic(!italic)}
              />
              <label htmlFor='bioFile'>
                <FiLink2 />
              </label>
              <MdFormatListBulleted
                className={`${currentFormat === 'bullet' ? 'text-black' : ''}`}
                onClick={() => {
                  setCurrentFormat('bullet');
                }}
              />
              <MdFormatListNumbered
                className={`${currentFormat === 'number' ? 'text-black' : ''}`}
                onClick={() => {
                  setCurrentFormat('number');
                }}
              />
              <input type='file' hidden id='bioFile' />
            </div>
          </div>
          <textarea
            onChange={(e) => {
              if (e.target.value.length <= 275) {
                setBio(e.target.value);
              }
            }}
            value={bio}
            placeholder='Input Course Introduction'
            className='mt-5 h-[10rem] w-full rounded-md border p-3'
          ></textarea>
          <div className='mt-3 font-light'>
            {275 - bio.length} mots restants
          </div>
        </div>
      </div>

      <Divider />

      <div className='flex items-center justify-end space-x-5'>
        <button className='rounded-md border px-4 py-2'>Annuler</button>
        <button className='bg-primary rounded-md px-4 py-2 text-white'>
          Enregistrer
        </button>
      </div>
    </div>
  );
}

export default Profil;
