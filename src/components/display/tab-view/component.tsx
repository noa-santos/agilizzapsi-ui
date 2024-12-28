import React, { useState } from 'react';
import TabButton from './tabButton';
import { twMerge } from 'tailwind-merge';

type Tab = {
   id: string;
   label: string;
   content: React.ReactNode;
};

interface TabViewProps {
   tabs: Tab[];
   initialTab?: string;
   className?: string;
}

const TabView: React.FC<TabViewProps> = ({ tabs, initialTab, className }) => {
   const [activeTab, setActiveTab] = useState<string>(initialTab ?? tabs[0]?.id ?? '');

   const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content;

   return (
      <div className={twMerge('flex flex-col gap-16 items-center', className)}>
         <div className="flex gap-2 w-fit bg-background-default p-2 rounded-3xl">
            {tabs.map(({ id, label }) => (
               <TabButton key={id} id={id} label={label} isActive={activeTab === id} onClick={setActiveTab} />
            ))}
         </div>

         <div className="flex w-[700px] h-[400px] rounded-2xl justify-center p-4 bg-background-default">
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
