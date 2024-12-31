export type AccordionItemProps = {
   id: string;
   title: string;
   content: React.ReactNode;
   isOpen: boolean;
   onToggle: (id: string) => void;
};

export type AccordionItemData = {
   id: string;
   title: string;
   content: React.ReactNode;
};

export type AccordionProps = {
   items: AccordionItemData[];
};
