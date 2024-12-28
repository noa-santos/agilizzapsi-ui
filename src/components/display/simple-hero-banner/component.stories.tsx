import { Meta, StoryObj } from '@storybook/react';
import SimplesHeroBanner from './component';

const meta: Meta<typeof SimplesHeroBanner> = {
   title: 'Components/Display/SimplesHeroBanner',
   component: SimplesHeroBanner,
   parameters: {
      layout: 'fullscreen',
   },
   argTypes: {
      title: {
         control: 'text',
         description: 'Título do banner',
         defaultValue: 'Bem-vindo ao nosso site',
      },
   },
};

export default meta;

type Story = StoryObj<typeof SimplesHeroBanner>;

export const Playground: Story = {
   args: {
      title: 'Termos de uso',
   },
};
