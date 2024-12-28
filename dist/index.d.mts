import * as react_jsx_runtime from 'react/jsx-runtime';
import React$1, { ButtonHTMLAttributes } from 'react';

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** The variant of the button */
    variant?: 'contained' | 'outlined' | 'text';
    /** Button contents */
    label?: string;
    /** Icon to display on the left side */
    startIcon?: React.ReactNode;
    /** Icon to display on the right side */
    endIcon?: React.ReactNode;
    /** The rounded style of the button */
    rounded?: 'full' | 'slightly' | 'semi';
    /** The URL to navigate to */
    href?: string;
    /** Optional click handler */
    onClick?: () => void;
}
/** Primary UI component for user interaction */
declare const BaseButton: ({ variant, label, startIcon, endIcon, rounded, href, ...props }: BaseButtonProps) => react_jsx_runtime.JSX.Element;

type AccordionItemData = {
    id: string;
    title: string;
    content: React$1.ReactNode;
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

interface SimpleHeroBannerProps {
    title: string;
}
declare const SimpleHeroBanner: React.FC<SimpleHeroBannerProps>;

type Tab = {
    id: string;
    label: string;
    content: React$1.ReactNode;
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
    children: React$1.ReactNode;
    color?: 'primary' | 'secondary' | 'disabled' | 'success' | 'error' | 'warning' | 'contrast' | 'inherit';
    variant?: 'body1' | 'body2' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label';
    weight?: 'thin' | 'extraLight' | 'light' | 'normal' | 'medium' | 'semiBold' | 'bold' | 'extraBold' | 'black';
    className?: string;
}
declare const Typography: React$1.FC<TypographyProps>;

interface ContainerProps {
    children: React$1.ReactNode;
    className?: string;
    bgColor?: 'default' | 'paper' | 'brand';
    bgCustomColor?: string;
}
declare const Container: React$1.FC<ContainerProps>;

export { Accordion, BaseButton, type BaseButtonProps, CommentBlock, Container, SectionTitle, SimpleHeroBanner, TabView, TextBlock, Typography };
