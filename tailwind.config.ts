/** @type {import('tailwindcss').Config} */

import AgilizzaUI from './src/utils/plugin';

export default {
   content: ['./src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         fontFamily: {
            sans: ['Inter', 'sans-serif'],
         },
      },
   },
   plugins: [AgilizzaUI],
};
