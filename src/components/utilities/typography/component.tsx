import React from 'react';
import { twMerge } from 'tailwind-merge';

interface TypographyProps {
   align?: 'center' | 'left' | 'right';
   children: React.ReactNode;
   color?: 'primary' | 'secondary' | 'disabled' | 'success' | 'error' | 'warning' | 'contrast' | 'inherit';
   variant?: 'body1' | 'body2' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label';
   weight?: 'thin' | 'extraLight' | 'light' | 'normal' | 'medium' | 'semiBold' | 'bold' | 'extraBold' | 'black';
   className?: string;
}

const Typography: React.FC<TypographyProps> = ({
   align = 'left',
   children,
   color = 'primary',
   variant = 'body1',
   weight,
   className,
}) => {
   // Mapear variantes para tags HTML
   const variantTagMap: { [key: string]: keyof JSX.IntrinsicElements } = {
      h1: 'h1',
      h2: 'h2',
      h3: 'h3',
      h4: 'h4',
      h5: 'h5',
      h6: 'h6',
      body1: 'p',
      body2: 'p',
      label: 'span',
   };

   // Mapear cores para classes Tailwind
   const colorClassMap: { [key: string]: string } = {
      primary: 'text-text-primary',
      secondary: 'text-text-secondary',
      disabled: 'text-text-disabled',
      success: 'text-text-success',
      error: 'text-text-error',
      warning: 'text-text-warning',
      contrast: 'text-text-contrast',
      inherit: 'text-inherit',
   };

   // Mapear alinhamentos para classes Tailwind
   const alignClassMap: { [key: string]: string } = {
      center: 'text-center',
      left: 'text-left',
      right: 'text-right',
   };

   // Mapear pesos para classes Tailwind
   const weightClassMap: { [key: string]: string } = {
      thin: 'font-thin',
      extraLight: 'font-extralight',
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semiBold: 'font-semibold',
      bold: 'font-bold',
      extraBold: 'font-extrabold',
      black: 'font-black',
   };

   // Determinar a tag com base na variante
   const Component = variantTagMap[variant] || 'p';

   // Determinar as classes
   const classes = twMerge(
      colorClassMap[color], // Classe de cor
      alignClassMap[align], // Classe de alinhamento
      variant, // Classe da variante
      weight ? weightClassMap[weight] : '', // Classe de peso
      'w-full',
      className, // Classes adicionais
   );

   return <Component className={classes}>{children}</Component>;
};

export default Typography;
