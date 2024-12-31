import React from 'react';
import { twMerge } from 'tailwind-merge';
import { TypographyProps } from './types';

const Typography: React.FC<TypographyProps> = ({
   align = 'left',
   children,
   color = 'primary',
   variant = 'body1',
   weight,
   className,
}) => {
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

   const alignClassMap: { [key: string]: string } = {
      center: 'text-center',
      left: 'text-left',
      right: 'text-right',
   };

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

   const Component = variantTagMap[variant] || 'p';

   const classes = twMerge(
      colorClassMap[color],
      alignClassMap[align],
      variant,
      weight ? weightClassMap[weight] : '',
      'w-full',
      className,
   );

   return <Component className={classes}>{children}</Component>;
};

export default Typography;
