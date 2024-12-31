import React from 'react';
import Typography from '@/components/utilities/typography/component';
import { TabButtonProps } from './types';

const TabButton: React.FC<TabButtonProps> = ({ id, label, isActive, onClick }) => {
   return (
      <button
         className={`px-3 py-2 rounded-2xl transition-all duration-300 ${
            isActive ? 'bg-primary-main' : 'bg-transparent hover:bg-neutral-light'
         }`}
         onClick={() => onClick(id)}
      >
         <Typography variant="label" color={isActive ? 'contrast' : 'secondary'} weight="medium">
            {label}
         </Typography>
      </button>
   );
};

export default TabButton;
