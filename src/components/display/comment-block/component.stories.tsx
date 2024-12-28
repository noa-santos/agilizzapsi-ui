import { Meta, StoryObj } from '@storybook/react';
import CommentBlock from './component';

const meta: Meta<typeof CommentBlock> = {
   title: 'Components/Display/CommentBlock',
   component: CommentBlock,
   parameters: {
      layout: 'fullscreen',
   },
   argTypes: {
      text: {
         control: 'text',
         description: 'Texto do comentário',
         defaultValue: 'Este é um texto de comentário de exemplo.',
      },
      color: {
         control: 'select',
         options: ['contrast', 'main', 'light', 'dark'],
         description: 'Cor do ícone e do texto',
         defaultValue: 'main',
      },
   },
};

export default meta;

type Story = StoryObj<typeof CommentBlock>;

export const Playground: Story = {
   args: {
      text: 'Este é um texto de comentário de exemplo.',
      color: 'main',
   },
};
