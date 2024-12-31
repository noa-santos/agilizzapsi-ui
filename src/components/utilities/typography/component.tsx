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

   const variantBaseClassMap: { [key: string]: string } = {
      h1: 'text-[36px] leading-[44px] tracking-[-0.02em] font-bold md:text-[40px] md:leading-[48px] xl:text-[56px] xl:leading-[68px]',
      h2: 'text-[32px] leading-[40px] tracking-[-0.02em] font-bold md:text-[36px] md:leading-[44px] xl:text-[40px] xl:leading-[48px]',
      h3: 'text-[28px] leading-[32px] tracking-[-0.02em] font-bold md:text-[32px] md:leading-[40px] xl:text-[36px] xl:leading-[44px]',
      h4: 'text-[24px] leading-[28px] tracking-[-0.01em] font-bold md:text-[28px] md:leading-[32px] xl:text-[32px] xl:leading-[40px]',
      h5: 'text-[18px] leading-[22px] tracking-[-0.01em] font-bold xl:text-[20px] xl:leading-[24px]',
      h6: 'text-[14px] leading-[16px] tracking-[-0.01em] font-medium md:text-[16px] md:leading-[18px]',
      body1: 'text-[16px] leading-[20px] tracking-[0.01em] font-medium md:text-[18px] md:leading-[26px]',
      body2: 'text-[14px] leading-[20px] tracking-[0.01em] font-medium md:text-[16px] md:leading-[20px]',
      label: 'text-[14px] leading-[20px] tracking-[0.02em] font-semibold md:text-[16px] md:leading-[24px]',
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
      variantBaseClassMap[variant],
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
