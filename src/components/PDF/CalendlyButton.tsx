import { CalendarIcon } from '@heroicons/react/24/solid';
import React from 'react';
import ButtonLink from '../Button/ButtonLink';

interface CalendlyButtonProps {
  secret?: string;
}

const CalendlyButton: React.FC<CalendlyButtonProps> = ({ secret }) => {
  return (
    <ButtonLink
      href='https://calendly.com/ronan-jaffre/call-intro'
      size="lg"
      target="_blank"
      rel="noopener noreferrer"
    >
      <CalendarIcon className="h-6" />
      Calendly
    </ButtonLink>
  );
};

export default CalendlyButton;
