import plugin from 'tailwindcss/plugin';
import { colorPalette, defaultPrimary, defaultSecondary } from './colors';

const AgilizzaUI = plugin(() => {}, {
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
