import type { Meta, StoryObj } from '@storybook/react';

import Typography from './component';

const meta = {
   title: 'Components/Utilities/Typography',
   component: Typography,
   tags: ['autodocs'],
   parameters: {
      layout: 'fullscreen',
   },
   argTypes: {
      align: {
         control: {
            type: 'select',
            options: ['left', 'center', 'right'],
         },
         description: 'Alinhamento do texto',
         defaultValue: 'left',
      },
      color: {
         control: {
            type: 'select',
            options: ['primary', 'secondary', 'disabled', 'success', 'error', 'warning'],
         },
         description: 'Cor do texto',
         defaultValue: 'primary',
      },
      variant: {
         control: {
            type: 'select',
            options: ['body1', 'body2', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'label'],
         },
         description: 'Estilo de texto (variante)',
         defaultValue: 'body1',
      },
      weight: {
         control: {
            type: 'select',
            options: ['medium', 'semiBold', 'bold'],
         },
         description: 'Peso da fonte',
         defaultValue: 'medium',
      },
      className: {
         control: 'text',
         description: 'Classes CSS adicionais',
      },
      children: {
         control: 'text',
         description: 'Texto exibido pelo componente',
         defaultValue: 'Texto de exemplo para o Typography',
      },
   },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
   args: {
      align: 'left',
      color: 'primary',
      variant: 'body1',
      weight: 'medium',
      children: (
         <>
            Texto de exemplo para o<span className="text-blue-500">Typography</span>
         </>
      ),
   },
};
