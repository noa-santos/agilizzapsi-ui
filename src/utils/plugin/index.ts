import plugin from 'tailwindcss/plugin';
import { colorPalette, defaultPrimary, defaultSecondary } from './colors';

const AgilizzaUI = plugin(() => {}, {
   content: ['./node_modules/agilizzapsi-ui/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            primary: defaultPrimary,
            secondary: defaultSecondary,
            ...colorPalette,
         },
      },
   },
});

export default AgilizzaUI;
