export type Tab = {
   id: string;
   label: string;
   content: React.ReactNode;
};

export interface TabViewProps {
   tabs: Tab[];
   initialTab?: string;
   className?: string;
}

export type TabButtonProps = {
   id: string;
   label: string;
   isActive: boolean;
   onClick: (id: string) => void;
};
