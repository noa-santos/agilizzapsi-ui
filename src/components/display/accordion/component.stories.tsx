import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './component';

const meta = {
   title: 'Components/Display/Accordion',
   component: Accordion,
   parameters: {
      layout: 'centered',
   },
   tags: ['autodocs'],
   argTypes: {
      items: {
         control: 'object',
         description: 'Lista de itens do Accordion, cada um com título e conteúdo.',
         defaultValue: [
            {
               id: '1',
               title: 'A plataforma é segura para armazenar dados dos meus pacientes?',
               content:
                  'Sim, seguimos as normas de segurança e proteção de dados exigidas pela LGPD (Lei Geral de Proteção de Dados) para garantir que todas as informações estejam protegidas.',
            },
            {
               id: '2',
               title: 'Posso testar o AgilizzaPsi antes de assinar?',
               content:
                  'Sim, todos os novos assinantes têm 30 dias de acesso gratuito! Basta se cadastrar, escolher o plano e aproveitar todas as funcionalidades do AgilizzaPsi para transformar a gestão do seu consultório.',
            },
            {
               id: '3',
               title: 'Como funciona o suporte ao cliente?',
               content:
                  'Nosso suporte está disponível por e-mail e chat para auxiliar com quaisquer dúvidas ou problemas. Nosso objetivo é garantir sua experiência positiva com a plataforma.',
            },
         ],
      },
   },
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

// Playground para customizar as propriedades
export const Playground: Story = {
   args: {
      items: [
         {
            id: '1',
            title: 'A plataforma é segura para armazenar dados dos meus pacientes?',
            content:
               'Sim, seguimos as normas de segurança e proteção de dados exigidas pela LGPD (Lei Geral de Proteção de Dados) para garantir que todas as informações estejam protegidas.',
         },
         {
            id: '2',
            title: 'Posso testar o AgilizzaPsi antes de assinar?',
            content:
               'Sim, todos os novos assinantes têm 30 dias de acesso gratuito! Basta se cadastrar, escolher o plano e aproveitar todas as funcionalidades do AgilizzaPsi para transformar a gestão do seu consultório.',
         },
         {
            id: '3',
            title: 'Como funciona o suporte ao cliente?',
            content:
               'Nosso suporte está disponível por e-mail e chat para auxiliar com quaisquer dúvidas ou problemas. Nosso objetivo é garantir sua experiência positiva com a plataforma.',
         },
      ],
   },
};

// Exemplo com conteúdo mínimo
export const Minimal: Story = {
   args: {
      items: [
         {
            id: '1',
            title: 'Pergunta 1',
            content: 'Resposta curta para a pergunta 1.',
         },
         {
            id: '2',
            title: 'Pergunta 2',
            content: 'Resposta curta para a pergunta 2.',
         },
      ],
   },
};

// Exemplo com apenas um item
export const SingleItem: Story = {
   args: {
      items: [
         {
            id: '1',
            title: 'Item Único',
            content: 'Conteúdo deste item único no Accordion.',
         },
      ],
   },
};
