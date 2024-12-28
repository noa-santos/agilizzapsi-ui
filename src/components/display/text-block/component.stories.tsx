import type { Meta, StoryObj } from '@storybook/react';
import { TextBlock } from './component';

const meta = {
   title: 'Components/Display/TextBlock',
   component: TextBlock,
   tags: ['autodocs'],
   parameters: {
      layout: 'centered',
   },
   argTypes: {
      title: {
         control: 'text',
         description: 'Título exibido no componente.',
         defaultValue: 'Lorem Ipsum',
      },
      text: {
         control: 'text',
         description: 'Texto de descrição exibido abaixo do título.',
         defaultValue:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor dictum sem, pellentesque semper mauris condimentum sit amet.',
      },
      align: {
         control: {
            type: 'select',
            options: ['left', 'center', 'right'],
         },
         description: 'Alinhamento do conteúdo.',
         defaultValue: 'left',
      },
   },
} satisfies Meta<typeof TextBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

// Playground: Controle total para testes
export const Playground: Story = {
   args: {
      title: 'Lorem Ipsum',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor dictum sem, pellentesque semper mauris condimentum sit amet.',
      align: 'left',
   },
};

// Alinhamento Centralizado
export const CenterAligned: Story = {
   args: {
      title: 'Centralized Title',
      text: 'This is a centered example. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      align: 'center',
   },
};

// Alinhamento à Direita
export const RightAligned: Story = {
   args: {
      title: 'Right Aligned Title',
      text: 'This is an example of text aligned to the right. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      align: 'right',
   },
};
