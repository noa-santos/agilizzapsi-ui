import React from 'react';
import Typography from '@/components/utilities/typography/component';
import { TextBlockProps } from './types';

export const TextBlock: React.FC<TextBlockProps> = ({ title, text, align = 'left' }) => {
   return (
      <div className="flex w-full max-w-[438px] flex-col gap-y-1 xl:max-w-[468px]">
         <Typography variant="h5" align={align}>
            {title}
         </Typography>
         <Typography variant="body1" color="secondary" align={align}>
            {text}
         </Typography>
      </div>
   );
};
