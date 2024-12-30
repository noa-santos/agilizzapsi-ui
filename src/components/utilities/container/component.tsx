import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ContainerProps {
   children: React.ReactNode;
   className?: string; // Classes adicionais, se necessário
   bgColor?: 'default' | 'paper' | 'brand'; // Opções de cores de fundo
   bgCustomColor?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className, bgColor = 'default', bgCustomColor }) => {
   const bgColorMap: { [key: string]: string } = {
      default: 'bg-background-default',
      paper: 'bg-background-paper',
      brand: 'bg-background-brand',
   };

   return (
      <div className={twMerge('w-full', bgColorMap[bgColor], bgCustomColor)}>
         <div className={twMerge('w-full bg-transparent mx-auto px-4 max-w-[1080px]', className)}>{children}</div>
      </div>
   );
};

export default Container;
