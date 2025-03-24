import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';
import React from 'react';
import ButtonLink from '../Button/ButtonLink';

interface PDFDownloadButtonProps {
  secret?: string;
}

const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({ secret }) => {
  return (
    <ButtonLink
      href='/CV-Mohamed-Bouteraa.pdf'
      // href={secret ? `/api/pdf?secret=${secret}` : '/api/pdf'}
      size="lg"
      target="_blank"
      rel="noopener noreferrer"
    >
      <ArrowDownTrayIcon className="h-6" />
      Download
    </ButtonLink>
  );
};

export default PDFDownloadButton;
