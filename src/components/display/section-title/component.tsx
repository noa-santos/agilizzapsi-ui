import React from 'react';
import Typography from '@/components/utilities/typography/component';
import { SectionTitleProps } from './types';

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, text, align = 'center', variant = 'hero' }) => {
   const variantTagMap: {
      [key in SectionTitleProps['variant']]: 'h1' | 'h2' | 'h3' | 'h4';
   } = {
      hero: 'h1',
      main: 'h2',
      highlight: 'h3',
      subHighlight: 'h4',
   };

   return (
      <div className="flex flex-col gap-y-1 w-full max-w-[292px] md:max-w-[438px] xl:max-w-[564px]">
         <Typography variant={variantTagMap[variant]} align={align} className="max-w-[272px] md:max-w-full">
            {title}
         </Typography>
         <Typography variant="body2" color="secondary" weight="semiBold" align={align}>
            {text}
         </Typography>
      </div>
   );
};
