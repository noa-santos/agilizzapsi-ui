import type { Meta, StoryObj } from '@storybook/react';
import { SectionTitle } from './component';

const meta = {
   title: 'Components/Display/SectionTitle', // Nome no Storybook
   component: SectionTitle,
   tags: ['autodocs'],
   parameters: {
      layout: 'centered',
   },
   argTypes: {
      title: {
         control: 'text',
         description: 'Título exibido no componente.',
         defaultValue: 'Hero Title',
      },
      text: {
         control: 'text',
         description: 'Texto de descrição exibido abaixo do título.',
         defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      align: {
         control: {
            type: 'select',
            options: ['left', 'center', 'right'],
         },
         description: 'Alinhamento do conteúdo.',
         defaultValue: 'center',
      },
      variant: {
         control: {
            type: 'select',
            options: ['hero', 'main', 'highlight', 'subHighlight'],
         },
         description: 'Variação do título principal.',
         defaultValue: 'hero',
      },
   },
} satisfies Meta<typeof SectionTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

// Playground: Controle total para testes
export const Playground: Story = {
   args: {
      title: 'Hero Title',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      align: 'center',
      variant: 'hero',
   },
};

// Exemplo de título Hero
export const HeroTitle: Story = {
   args: {
      title: 'Hero Title',
      text: 'This is a hero title with the most visual prominence.',
      align: 'center',
      variant: 'hero',
   },
};

// Exemplo de título Main
export const MainTitle: Story = {
   args: {
      title: 'Main Title',
      text: 'This is a main title used for section headings.',
      align: 'left',
      variant: 'main',
   },
};

// Exemplo de título Highlight
export const HighlightTitle: Story = {
   args: {
      title: 'Highlight Title',
      text: 'This is a highlighted title for smaller sections.',
      align: 'right',
      variant: 'highlight',
   },
};

// Exemplo de título SubHighlight
export const SubHighlightTitle: Story = {
   args: {
      title: 'SubHighlight Title',
      text: 'This is a sub-highlighted title with lower importance.',
      align: 'center',
      variant: 'subHighlight',
   },
};
