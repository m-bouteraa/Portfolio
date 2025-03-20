'use client';

import { allSkills } from '@content';
import { WrenchScrewdriverIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Heading } from '../Heading/Heading';
import Prose from '../Prose/Prose';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { StarRating } from '../StarRating/StarRating';
import Masonry from "react-masonry-css";

const Skills: React.FC = () => {

  const isMobile = window.matchMedia("(max-width: 900px)").matches;
  const isTablet = window.matchMedia("(max-width: 1500px)").matches;

  return (
    <article>
      <SectionHeading
        Icon={WrenchScrewdriverIcon}
        level={3}
        text="Skills"
      />

    <Masonry
          breakpointCols={isMobile ? 1 : isTablet ? 2 : 3}
          className="mt-2 grid grid-flow-row gap-6 md:grid-flow-row md:grid-cols-3 my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
        {allSkills.map((skill, skillIndex) => (
          <div key={skill._id}>
            <Heading level={4}>
              <div className="flex items-center gap-2">
                <StarRating
                  stars={1}
                />
                {skill.title}
              </div>
            </Heading>

            <Prose className="text-neutral-11" html={skill.body.html} />
          </div>
        ))}
      </Masonry>
    </article>
  );
};

export default Skills;
