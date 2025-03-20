import { personal } from '@content';
import React from 'react';
import { fullName } from '../../helpers/utils';
import { Heading } from '../Heading/Heading';
import PDFDownloadButton from '../PDF/PDFDownloadButton';
import CalendlyButton from '../PDF/CalendlyButton';

interface HeaderProps {
  secret?: string;
}

export const Header: React.FC<HeaderProps> = ({ secret }) => {
  return (
    <div className="mb-12 border-b-2 border-neutral-4 py-12">
      <div className="container">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
          <div className="flex flex-col items-center md:flex-row md:items-start flex-1 space-y-2">
            <img src="/ronan.jpg" width="100px" className="rounded-full md:mr-5" />
            <div>
              <Heading level={1}>{fullName}</Heading>
              <Heading color="neutralSubtle" className="text-balance" level={2}>
                {personal.title}
              </Heading>
            </div>
          </div>
          <CalendlyButton />
          <PDFDownloadButton secret={secret} />
        </div>
      </div>
    </div>
  );
};
