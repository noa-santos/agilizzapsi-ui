import React from 'react';
import { Typography } from '@/components/utilities/typography';
import { PiQuotesFill } from 'react-icons/pi';
import { CommentBlockProps } from './types';

const CommentBlock: React.FC<CommentBlockProps> = ({ text, color }) => {
   const isContrast = color === 'contrast';
   const iconColorClass = {
      contrast: 'text-primary-contrast',
      main: 'text-primary-main',
      light: 'text-primary-light',
      dark: 'text-primary-dark',
   }[color];

   return (
      <div className="flex w-full flex-col gap-y-1 md:max-w-[464px]">
         <PiQuotesFill className={`h-8 w-8 rotate-180 transform text-4xl ${iconColorClass}`} />
         <Typography variant="body1" color={isContrast ? 'contrast' : 'primary'}>
            {text}
         </Typography>
      </div>
   );
};

export default CommentBlock;
