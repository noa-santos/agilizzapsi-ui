export interface ContainerProps {
   children: React.ReactNode;
   className?: string; // Classes adicionais, se necessário
   bgColor?: 'default' | 'paper' | 'brand'; // Opções de cores de fundo
   bgCustomColor?: string;
}
