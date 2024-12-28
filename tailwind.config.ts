/** @type {import('tailwindcss').Config} */

export default {
   content: ['./src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         fontFamily: {
            sans: ['Inter', 'sans-serif'],
         },
         colors: {
            primary: {
               main: '#3B82F6',
               light: '#BFDBFE',
               dark: '#1E40AF',
               contrast: '#fff',
            },
            secondary: {
               main: '#2563EB',
               light: '#93C5FD',
               dark: '#1E3A8A',
               constrast: '#fff',
            },
            error: {
               main: '#FCA5A5',
               light: '#DC2626',
               dark: '#991B1B',
               contrast: '#fff',
            },
            warning: {
               main: '#FDBA74',
               light: '#EA580C',
               dark: '#7C2D12',
               contrast: '#fff',
            },
            success: {
               main: '#16A34A',
               light: '#86EFAC',
               dark: '#14532D',
               contrast: '#fff',
            },
            neutral: {
               main: '#6B7280',
               light: '#E5E7EB',
               dark: '#1F2937',
            },
            background: {
               default: '#F2F2F2',
               paper: '#FFFFFF',
               brand: '#1E3A8A',
            },
            text: {
               primary: '#000000',
               secondary: 'rgba(0, 0, 0, 0.8)',
               disabled: 'rgba(0, 0, 0, 0.38)',
               success: '#22C55E',
               error: '#EF4444',
               warning: '#F97316',
               contrast: '#FFFFFF',
            },
         },
      },
   },
   plugins: [],
};
