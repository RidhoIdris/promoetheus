import {
  HiOutlineDesktopComputer,
  HiOutlineDotsVertical,
} from 'react-icons/hi';

import IconButton from '@/components/icon_button';

// import IconButton from '@/utils/icon_button';
import Divider from '../ui/divider';
import Input from '../ui/input';

function MotDePasse() {
  return (
    <div className='mt-5'>
      <div className='font-medium md:text-[1.5rem]'>Mot de Passe</div>
      <div className='font-light'>
        Veuillez entrer votre mot de passe actuelle pour le modifier.
      </div>

      <Divider />

      <div className='flex flex-col lg:flex-row lg:items-center'>
        <div className='font-medium lg:w-[400px]'>Mot de passe actuel</div>
        <div className='mt-5 lg:mt-0 lg:w-[512px]'>
          <Input type='password' placeholder='Passe' />
        </div>
      </div>

      <Divider />

      <div className='flex flex-col lg:flex-row'>
        <div className='font-medium lg:w-[400px]'>Nouveau mot de passe</div>
        <div className='mt-5 lg:mt-0 lg:w-[512px]'>
          <Input type='password' placeholder='Passe' />
          <div className='mt-2 font-light'>
            Votre mot de passe doit avoir plus de 8 caractères.
          </div>
        </div>
      </div>

      <Divider />

      <div className='flex flex-col lg:flex-row lg:items-center'>
        <div className='font-medium lg:w-[400px]'>
          Confimer votre nouveau mot de passe
        </div>
        <div className='mt-5 lg:mt-0 lg:w-[512px]'>
          <Input type='password' placeholder='Passe' />
        </div>
      </div>

      <Divider />

      <div className='flex items-center justify-end space-x-5'>
        <button className='rounded-md border px-4 py-2'>Annuler</button>
        <button className='bg-primary rounded-md px-4 py-2 text-white'>
          Enregistrer
        </button>
      </div>
      {/* Connections  */}
      <div className='mt-8'>
        <div className='flex items-center justify-between'>
          <div className='text-[1.5rem] font-medium'>Connexions Récentes</div>
          <IconButton>
            <HiOutlineDotsVertical />
          </IconButton>
        </div>
        <div className='font-light'>
          Nous vous alertons via olivia@untitledui.com en cas d'activité
          inhabituelle sur votre compte.
        </div>

        {Array(2)
          .fill(null)
          .map(() => {
            return (
              <>
                <Divider />

                <div className='flex space-x-4'>
                  <div>
                    <HiOutlineDesktopComputer className='mt-1 text-[1.5rem]' />
                  </div>
                  <div>
                    <div className='flex flex-col md:flex-row md:items-center md:space-x-2'>
                      <div>2018 Macbook Pro 15-inch</div>
                      <div className='mt-1 flex w-fit items-center space-x-2 rounded-full border border-green-500 px-2 md:mt-0'>
                        <div className='h-[10px] w-[10px] rounded-full bg-green-600'></div>
                        <div className='text-green-600'>Actif maintenant</div>
                      </div>
                    </div>
                    <div className='mt-1 font-light'>
                      Melbourne, Australia ．22 Jan at 10:40am
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
}

export default MotDePasse;
