import React from 'react';
import Image from 'next/image';
import Typography from '@/components/utilities/typography/component';

interface FeedbackCardProps {
   name: string;
   instagram: string;
   feedback: string;
   imageUrl: string;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({ name, instagram, feedback, imageUrl }) => {
   return (
      <div className="feedback-card">
         <div className="feedback-card-header">
            <Typography variant="h4">Feedback</Typography>
         </div>
         <div className="feedback-card-content">
            <h3>{name}</h3>
            <p>@{instagram}</p>
            <p>{feedback}</p>
            <Image
               src={imageUrl}
               alt={`${name}'s profile`}
               className="feedback-card-image"
               layout="responsive"
               width={500}
               height={500}
            />
         </div>
      </div>
   );
};

export default FeedbackCard;
