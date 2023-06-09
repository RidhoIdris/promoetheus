// your-slider.jsx
import * as SliderPrimitive from '@radix-ui/react-slider';
import React, { useState } from 'react';

export const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ ...rest }) => {
  const [value, setValue] = useState(5);

  return (
    <div className='flex items-center gap-2'>
      <SliderPrimitive.Root
        className='relative flex h-5 w-full touch-none select-none items-center'
        defaultValue={[5]}
        onValueChange={(e) => setValue(e[0])}
        max={10}
        step={1}
        {...rest}
      >
        <SliderPrimitive.Track className='relative h-2 grow rounded-full bg-gray-200'>
          <SliderPrimitive.Range className='bg-primary absolute h-full rounded-full' />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb
          className='bg-primary block h-5 w-5 rounded-full'
          aria-label='Volume'
        />
      </SliderPrimitive.Root>
      <span>{value}</span>
    </div>
  );
});
