import React, { useRef, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Typography from '@/components/utilities/typography/component';
import { Plus, Minus } from 'react-feather';
import { AccordionItemProps } from './types';

const AccordionItem: React.FC<AccordionItemProps> = ({ id, title, content, isOpen, onToggle }) => {
   const contentRef = useRef<HTMLDivElement>(null);
   const [height, setHeight] = useState<string | undefined>(isOpen ? 'auto' : '0px');

   useEffect(() => {
      if (contentRef.current) {
         if (isOpen) {
            setHeight(`${contentRef.current.scrollHeight}px`);
         } else {
            setHeight('0px');
         }
      }
   }, [isOpen]);

   return (
      <div className="flex flex-col w-full bg-secondary-light rounded-xl">
         <div id={`accordion-heading-${id}`} className="flex w-full">
            <button
               type="button"
               className={twMerge(
                  'flex items-center justify-between w-full p-4 gap-x-2',
                  'transition-colors duration-300',
               )}
               onClick={() => onToggle(id)}
               aria-expanded={isOpen}
               aria-controls={`accordion-body-${id}`}
            >
               <Typography variant="h6" color="primary" weight="medium">
                  {title}
               </Typography>
               <div className="flex-shrink-0">
                  {isOpen ? (
                     <Minus className="w-5 h-5 transition-transform duration-300" />
                  ) : (
                     <Plus className="w-5 h-5 transition-transform duration-300" />
                  )}
               </div>
            </button>
         </div>
         <div
            id={`accordion-body-${id}`}
            ref={contentRef}
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{ height }}
            aria-labelledby={`accordion-heading-${id}`}
         >
            <div className="p-4 pt-0">
               <Typography variant="body2" color="secondary">
                  {content}
               </Typography>
            </div>
         </div>
      </div>
   );
};

export default AccordionItem;
