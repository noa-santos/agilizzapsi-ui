import type { Meta, StoryObj } from '@storybook/react';
import TabView from './component';

const meta = {
   title: 'Components/Display/TabView',
   component: TabView,
   tags: ['autodocs'],
   parameters: {
      layout: 'centered',
   },
   argTypes: {
      tabs: {
         control: 'object',
         description: 'Array of tab objects, each containing id, label, and content.',
         defaultValue: [
            {
               id: 'tab1',
               label: 'Agenda Pessoal',
               content: <div>Content for Tab 1</div>,
            },
            {
               id: 'tab2',
               label: 'Controle Financeiro',
               content: <div>Content for Tab 2</div>,
            },
            {
               id: 'tab3',
               label: 'Perfil',
               content: <div>Content for Tab 3</div>,
            },
         ],
      },
      initialTab: {
         control: 'text',
         description: 'The ID of the initially selected tab.',
         defaultValue: 'tab1',
      },
      className: {
         control: 'text',
         description: 'Additional classes for styling the container.',
         defaultValue: '',
      },
   },
} satisfies Meta<typeof TabView>;

export default meta;

type Story = StoryObj<typeof meta>;

// Playground: Default story for testing different configurations
export const Playground: Story = {
   args: {
      tabs: [
         {
            id: 'tab1',
            label: 'Agenda Pessoal',
            content: <div>Content for Tab 1</div>,
         },
         {
            id: 'tab2',
            label: 'Controle Financeiro',
            content: <div>Content for Tab 2</div>,
         },
         {
            id: 'tab3',
            label: 'Perfil',
            content: <div>Content for Tab 3</div>,
         },
      ],
      initialTab: 'tab1',
      className: '',
   },
};

// Example with customized tabs
export const CustomTabs: Story = {
   args: {
      tabs: [
         {
            id: 'overview',
            label: 'Overview',
            content: <div>Overview content goes here.</div>,
         },
         {
            id: 'details',
            label: 'Details',
            content: <div>Details content goes here.</div>,
         },
         {
            id: 'reviews',
            label: 'Reviews',
            content: <div>Customer reviews appear here.</div>,
         },
      ],
      initialTab: 'details',
      className: 'bg-white shadow-lg rounded-md',
   },
};

// Example with no tabs (edge case)
export const NoTabs: Story = {
   args: {
      tabs: [],
      initialTab: '',
      className: 'bg-gray-200',
   },
};

// Example with a single tab
export const SingleTab: Story = {
   args: {
      tabs: [
         {
            id: 'single',
            label: 'Single Tab',
            content: <div>This is the only tab available.</div>,
         },
      ],
      initialTab: 'single',
      className: '',
   },
};
