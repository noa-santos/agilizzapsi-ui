import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ContainerProps {
   children: React.ReactNode;
   className?: string; // Classes adicionais, se necessário
   bgColor?: 'default' | 'paper' | 'brand'; // Opções de cores de fundo
   bgCustomColor?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className, bgColor = 'default', bgCustomColor }) => {
   // Mapear cores de fundo para classes Tailwind
   const bgColorMap: { [key: string]: string } = {
      default: 'bg-background-default',
      paper: 'bg-background-paper',
      brand: 'bg-background-brand',
   };

   return (
      <div className={twMerge('w-full', bgColorMap[bgColor], bgCustomColor)}>
         <div
            className={twMerge(
               'w-full bg-transparent mx-auto px-4 py-8 md:max-w-[960px] md:px-16 md:py-8 lg:max-w-[1152px]',
               className,
            )}
         >
            {children}
         </div>
      </div>
   );
};

export default Container;
