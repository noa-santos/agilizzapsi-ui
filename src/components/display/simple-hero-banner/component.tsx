import Typography from '@/components/utilities/typography/component';
import Container from '@/components/utilities/container/component';

interface SimpleHeroBannerProps {
   title: string;
}

const SimpleHeroBanner: React.FC<SimpleHeroBannerProps> = ({ title }) => {
   return (
      <Container bgColor="brand" className="py-16 md:py-24">
         <Typography variant="h2" align="center" color="contrast">
            {title}
         </Typography>
      </Container>
   );
};

export default SimpleHeroBanner;
