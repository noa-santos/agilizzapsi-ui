import React from 'react';
import Typography from '@/components/utilities/typography/component';
import { TextBlockProps } from './types';

export const TextBlock: React.FC<TextBlockProps> = ({ title, text, align = 'left' }) => {
   return (
      <div className="flex w-full flex-col gap-y-1 md:max-w-[438px] xl:max-w-[468px]">
         <Typography variant="h5" align={align}>
            {title}
         </Typography>
         <Typography variant="body1" color="secondary" align={align}>
            {text}
         </Typography>
      </div>
   );
};
