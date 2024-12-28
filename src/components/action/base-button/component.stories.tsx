import type { Meta, StoryObj } from '@storybook/react';
import BaseButton from './component';
import { AlertCircle } from 'react-feather';

const meta = {
   title: 'Components/Action/Button',
   component: BaseButton,
   parameters: {
      layout: 'centered',
   },
   tags: ['autodocs'],
   argTypes: {
      variant: {
         control: 'select',
         options: ['contained', 'outlined', 'text'],
         description: 'Define a variante do botão.',
      },
      rounded: {
         control: 'select',
         options: ['full', 'slightly', 'semi'],
         description: 'Define o estilo de arredondamento do botão.',
      },
      startIcon: {
         control: false,
         description: 'Ícone exibido no lado esquerdo do botão.',
      },
      endIcon: {
         control: false,
         description: 'Ícone exibido no lado direito do botão.',
      },
      onClick: { action: 'clicked' },
      label: {
         control: 'text',
         description: 'Texto exibido dentro do botão.',
      },
   },
} satisfies Meta<typeof BaseButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// Histórias para diferentes casos de uso do botão

// Botão Contained
export const Contained: Story = {
   args: {
      variant: 'contained',
      label: 'Contained Button',
   },
};

// Botão Outlined
export const Outlined: Story = {
   args: {
      variant: 'outlined',
      label: 'Outlined Button',
   },
};

// Botão Text
export const Text: Story = {
   args: {
      variant: 'text',
      label: 'Text Button',
   },
};

// Botão com Ícone à Esquerda
export const WithStartIcon: Story = {
   args: {
      variant: 'contained',
      label: 'Alert Left',
      startIcon: <AlertCircle />,
   },
};

// Botão com Ícone à Direita
export const WithEndIcon: Story = {
   args: {
      variant: 'contained',
      label: 'Alert Right',
      endIcon: <AlertCircle />,
   },
};

// Botão com Arredondamento Completo
export const RoundedFull: Story = {
   args: {
      variant: 'contained',
      label: 'Rounded Full',
      rounded: 'full',
   },
};

// Botão com Arredondamento Leve
export const RoundedSlightly: Story = {
   args: {
      variant: 'contained',
      label: 'Rounded Slightly',
      rounded: 'slightly',
   },
};

// Botão com Arredondamento Semi
export const RoundedSemi: Story = {
   args: {
      variant: 'contained',
      label: 'Rounded Semi',
      rounded: 'semi',
   },
};
