import { allExpertises } from '@content';
import { BeakerIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Heading } from '../Heading/Heading';
import Prose from '../Prose/Prose';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { StarRating } from '../StarRating/StarRating';

const Expertises: React.FC = () => {
  return (
    <article>
      <SectionHeading
        Icon={BeakerIcon}
        level={3}
        text="Expertise"
      />

      <div className="mt-2 grid grid-flow-row gap-6 lg:grid-flow-col">
        {allExpertises.map((expertise, expertiseIndex) => (
          <div key={expertise._id}>
            <Heading level={4}>
              <div className="flex items-center gap-2">
                <StarRating
                  stars={1}
                />
                {expertise.title}
              </div>
            </Heading>

            <Prose className="text-neutral-11" html={expertise.body.html} />
          </div>
        ))}
      </div>
    </article>
  );
};

export default Expertises;
