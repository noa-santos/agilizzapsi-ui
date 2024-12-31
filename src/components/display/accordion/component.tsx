import React, { useState } from 'react';
import AccordionItem from './accordionItem';
import { AccordionProps } from './types';

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
   const [openItemId, setOpenItemId] = useState<string | null>(null);

   const toggleItem = (id: string) => {
      setOpenItemId((prevId) => (prevId === id ? null : id));
   };

   return (
      <div className="flex w-full flex-col gap-y-2 md:max-w-[436px] xl:max-w-[564px]">
         {items.map(({ id, title, content }) => (
            <AccordionItem
               key={id}
               id={id}
               title={title}
               content={content}
               isOpen={openItemId === id}
               onToggle={toggleItem}
            />
         ))}
      </div>
   );
};
