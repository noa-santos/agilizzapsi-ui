import React, { useState } from 'react';
import TabButton from './tabButton';
import { twMerge } from 'tailwind-merge';
import { TabViewProps } from './types';

const TabView: React.FC<TabViewProps> = ({ tabs, initialTab, className }) => {
   const [activeTab, setActiveTab] = useState<string>(initialTab ?? tabs[0]?.id ?? '');

   const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content;

   return (
      <div className={twMerge('flex flex-col items-center gap-16', className)}>
         <div className="flex w-fit gap-2 rounded-3xl bg-background-default p-2">
            {tabs.map(({ id, label }) => (
               <TabButton key={id} id={id} label={label} isActive={activeTab === id} onClick={setActiveTab} />
            ))}
         </div>

         <div className="flex h-[400px] w-[700px] justify-center rounded-2xl bg-background-default p-4">
            {activeTabContent ? (
               <div className="flex flex-col">{activeTabContent}</div>
            ) : (
               <div className="flex flex-col">Nenhum conteúdo disponível.</div>
            )}
         </div>
      </div>
   );
};

export default TabView;
