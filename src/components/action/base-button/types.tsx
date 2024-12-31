import { ButtonHTMLAttributes } from 'react';

export interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   variant?: 'contained' | 'outlined' | 'text';
   label?: string;
   startIcon?: React.ReactNode;
   endIcon?: React.ReactNode;
   rounded?: 'full' | 'slightly' | 'semi';
   href?: string;
   onClick?: () => void;
}
