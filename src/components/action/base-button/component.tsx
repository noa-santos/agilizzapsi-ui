'use client';

import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import Typography from '@/components/utilities/typography/component';

export interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
      'flex flex-row align-center justify-center w-fit gap-x-2 px-5 py-3 hover:opacity-75 transition-opacity duration-200 ease-in-out', // Base class
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
