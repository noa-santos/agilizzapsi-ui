import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { BaseButton } from '@/components/action/base-button';

import Container from './component';

const meta: Meta<typeof Container> = {
   title: 'Components/Utilities/Container',
   component: Container,
   parameters: {
      layout: 'fullscreen',
   },
   argTypes: {
      bgColor: {
         control: {
            type: 'select',
            options: ['default', 'paper', 'brand'],
         },
         description: 'Cor de fundo predefinida',
         defaultValue: 'default',
      },
      bgCustomColor: {
         control: 'color',
         description: 'Cor de fundo personalizada (sobrescreve bgColor)',
      },
      className: {
         control: 'text',
         description: 'Classes CSS adicionais',
      },
   },
};

export default meta;

type Story = StoryObj<typeof Container>;

export const Playground: Story = {
   args: {
      bgColor: 'default',
      bgCustomColor: '',
      className: 'flex flex-row justify-between py-4 md:py-4',
      children: (
         <>
            <div className="flex h-[50px] w-[100px] items-center justify-center rounded-xl bg-blue-300 text-white">
               Logo
            </div>

            <div>
               <BaseButton label="Login" />
            </div>
         </>
      ),
   },
};
