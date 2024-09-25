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
      <div className="bg-white rounded-lg py-4 px-10 mb-6">
        {
          isNda
            ? <div>
              <Typography h3>{header}</Typography>
              {nda.map(({duration, works}) =>
                <div key={duration} className="py-1">
                  <Typography h2 className="font-bold">{duration}</Typography>
                  <div className="list-disc space-y-1">
                    {works.map((point, index) => (
                      <Typography h2 key={index} className="text-gray-700">{point}</Typography>
                    ))}
                  </div>
                </div>)}
            </div>
            : <div>
              <Typography h3>{header}</Typography>
              <Typography h2 className="font-bold py-1">{subHeader}</Typography>
              <div className="list-disc space-y-1">
                {points.map((point, index) => (
                  <Typography h2 key={index} className="text-gray-700">{point}</Typography>
                ))}
              </div>
            </div>
        }
      </div>
    );
  }
;

export default Card;
