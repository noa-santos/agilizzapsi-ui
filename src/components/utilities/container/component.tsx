import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ContainerProps } from './types';

const Container: React.FC<ContainerProps> = ({ children, className, bgColor = 'default', bgCustomColor }) => {
   const bgColorMap: { [key: string]: string } = {
      default: 'bg-background-default',
      paper: 'bg-background-paper',
      brand: 'bg-background-brand',
   };

   return (
      <div className={twMerge('w-full', bgColorMap[bgColor], bgCustomColor)}>
         <div className={twMerge('mx-auto w-full max-w-[1080px] bg-transparent px-4', className)}>{children}</div>
      </div>
   );
};

export default Container;
