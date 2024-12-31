import * as react_jsx_runtime from 'react/jsx-runtime';
import React$1, { ButtonHTMLAttributes } from 'react';

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'contained' | 'outlined' | 'text';
    label?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    rounded?: 'full' | 'slightly' | 'semi';
    href?: string;
    onClick?: () => void;
}

/** Primary UI component for user interaction */
declare const BaseButton: ({ variant, label, startIcon, endIcon, rounded, href, ...props }: BaseButtonProps) => react_jsx_runtime.JSX.Element;

type AccordionItemProps = {
    id: string;
    title: string;
    content: React.ReactNode;
    isOpen: boolean;
    onToggle: (id: string) => void;
};
type AccordionItemData = {
    id: string;
    title: string;
    content: React.ReactNode;
};
type AccordionProps = {
    items: AccordionItemData[];
};

declare const Accordion: React$1.FC<AccordionProps>;

interface CommentBlockProps {
    text: string;
    color: 'contrast' | 'main' | 'light' | 'dark';
}

declare const CommentBlock: React$1.FC<CommentBlockProps>;

type SectionTitleProps = {
    title: string;
    text: string;
    align?: 'left' | 'center' | 'right';
    variant: 'hero' | 'main' | 'highlight' | 'subHighlight';
};

declare const SectionTitle: React$1.FC<SectionTitleProps>;

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

declare const TabView: React$1.FC<TabViewProps>;

type TextBlockProps = {
    title: string;
    text: string;
    align?: 'left' | 'center' | 'right';
};

declare const TextBlock: React$1.FC<TextBlockProps>;

interface TypographyProps {
    align?: 'center' | 'left' | 'right';
    children: React.ReactNode;
    color?: 'primary' | 'secondary' | 'disabled' | 'success' | 'error' | 'warning' | 'contrast' | 'inherit';
    variant?: 'body1' | 'body2' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label';
    weight?: 'thin' | 'extraLight' | 'light' | 'normal' | 'medium' | 'semiBold' | 'bold' | 'extraBold' | 'black';
    className?: string;
}

declare const Typography: React$1.FC<TypographyProps>;

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    bgColor?: 'default' | 'paper' | 'brand';
    bgCustomColor?: string;
}

declare const Container: React$1.FC<ContainerProps>;

export { Accordion, type AccordionItemProps, BaseButton, type BaseButtonProps, CommentBlock, type CommentBlockProps, Container, type ContainerProps, SectionTitle, type SectionTitleProps, TabView, type TabViewProps, TextBlock, type TextBlockProps, Typography, type TypographyProps };
