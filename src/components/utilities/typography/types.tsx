export interface TypographyProps {
   align?: 'center' | 'left' | 'right';
   children: React.ReactNode;
   color?: 'primary' | 'secondary' | 'disabled' | 'success' | 'error' | 'warning' | 'contrast' | 'inherit';
   variant?: 'body1' | 'body2' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label';
   weight?: 'thin' | 'extraLight' | 'light' | 'normal' | 'medium' | 'semiBold' | 'bold' | 'extraBold' | 'black';
   className?: string;
}
