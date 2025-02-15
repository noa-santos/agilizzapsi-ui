import type { Preview } from '@storybook/react';

import React from 'react';
import '../src/index.css';

import { Inter } from 'next/font/google';

const InterFont = Inter({
   subsets: ['latin'],
   variable: '--inter-font',
});

const preview: Preview = {
   decorators: [
      (Story) => (
         <div className={`font-sans antialiased ${InterFont.variable}`}>
            <Story />
         </div>
      ),
   ],
};

export default preview;
