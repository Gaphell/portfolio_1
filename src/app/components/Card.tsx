import React from 'react';
import Typography from "@/app/ui/typography";

interface CardProps {
  header: string;
  subHeader: string;
  isNda: boolean;
  nda: [];
  points: string[];
}

const Card: React.FC<CardProps> = ({header, subHeader, points, isNda, nda = []}) => {
    return (
      <div className="bg-white shadow-sm rounded-lg py-6 px-14 mb-6">
        {
          isNda
            ? <div>
              <Typography h2 className="text-primary font-medium">{header}</Typography>
              {nda.map(({duration, works}) =>
                <div key={duration} className="py-2">
                  <Typography h3 className="font-medium text-black">{duration}</Typography>
                  <div className="list-disc space-y-1">
                    {works.map((point, index) => (
                      <Typography key={index}>{point}</Typography>
                    ))}
                  </div>
                </div>)}
            </div>
            : <div>
              <Typography h2 className="text-primary font-medium">{header}</Typography>
              <Typography h3 className="font-medium text-black py-1">{subHeader}</Typography>
              <div className="list-disc space-y-1">
                {points.map((point, index) => (
                  <Typography key={index}>{point}</Typography>
                ))}
              </div>
            </div>
        }
      </div>
    );
  }
;

export default Card;
