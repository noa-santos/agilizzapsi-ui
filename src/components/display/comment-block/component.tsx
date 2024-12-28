import React from 'react';
import { Typography } from '@/components/utilities/typography';
import { PiQuotesFill } from 'react-icons/pi';

interface CommentBlockProps {
   text: string;
   color: 'contrast' | 'main' | 'light' | 'dark';
}

const CommentBlock: React.FC<CommentBlockProps> = ({ text, color }) => {
   const isContrast = color === 'contrast';
   const iconColorClass = {
      contrast: 'text-primary-contrast',
      main: 'text-primary-main',
      light: 'text-primary-light',
      dark: 'text-primary-dark',
   }[color];

   return (
      <div className="flex flex-col w-full md:max-w-[464px] gap-y-1">
         <PiQuotesFill className={`w-8 h-8 text-4xl transform rotate-180 ${iconColorClass}`} />
         <Typography variant="body1" color={isContrast ? 'contrast' : 'primary'}>
            {text}
         </Typography>
      </div>
   );
};

export default CommentBlock;
