import React from 'react';
import Typography from '@/components/utilities/typography/component';

type TextBlockProps = {
   title: string;
   text: string;
   align?: 'left' | 'center' | 'right'; // Adiciona a propriedade para alinhamento
};

export const TextBlock: React.FC<TextBlockProps> = ({ title, text, align = 'left' }) => {
   return (
      <div className="flex flex-col gap-y-1 w-full md:max-w-[438px] xl:max-w-[468px]">
         <Typography variant="h5" align={align}>
            {title}
         </Typography>
         <Typography variant="body1" color="secondary" align={align}>
            {text}
         </Typography>
      </div>
   );
};
