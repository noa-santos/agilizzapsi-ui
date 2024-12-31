'use client';

import { BaseButtonProps } from './types';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import Typography from '@/components/utilities/typography/component';

/** Primary UI component for user interaction */
const BaseButton = ({
   variant = 'contained', // Default value for variant
   label,
   startIcon,
   endIcon,
   rounded = 'full', // Default value for rounded
   href,
   ...props
}: BaseButtonProps) => {
   const variantClasses = {
      contained: 'bg-primary-main text-primary-contrast border-2 border-primary-main',
      outlined: 'bg-transparent text-primary-main border-2 border-primary-main',
      text: 'bg-transparent text-primary-main border-transparent hover:bg-primary-light',
   };

   const roundedClasses = {
      full: 'rounded-full',
      slightly: 'rounded-xl',
      semi: 'rounded-2xl',
   };

   const classes = twMerge(
      'flex flex-row align-center justify-center w-fit gap-x-2 px-5 py-2 hover:opacity-75 transition-opacity duration-200 ease-in-out',
      variantClasses[variant],
      roundedClasses[rounded],
   );

   const renderButtonContent = () => (
      <div className={classes}>
         {startIcon && <span className="icon-left">{startIcon}</span>}
         {label && (
            <Typography variant="label" color="inherit">
               {label}
            </Typography>
         )}
         {endIcon && <span className="icon-right">{endIcon}</span>}
      </div>
   );

   if (href) {
      return <Link href={href}>{renderButtonContent()}</Link>;
   }

   return <button {...props}>{renderButtonContent()}</button>;
};

export default BaseButton;
