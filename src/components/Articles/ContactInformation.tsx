import { PrivateField, personal } from '@content';
import { IdentificationIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { SectionHeading } from '../SectionHeading/SectionHeading';

interface ContactInformationProps {
  privateInformation?: PrivateField[];
}

export const ContactInformation: React.FC<ContactInformationProps> = ({
  privateInformation,
}) => {
  return (
    <article>
      <SectionHeading
        Icon={IdentificationIcon}
        level={3}
        text="Informations"
      />

      <ul className="mt-2">
        <li>
          <strong>Location:</strong> {personal.location}
        </li>
        <li>
          <strong>Phone:</strong> {personal.phone}
        </li>
        <li>
          <strong>Email:</strong> {personal.email}
        </li>
        <li>
          <strong>Birthdate:</strong> {personal.birthdate}
        </li>

        {/* private access required */}
        {privateInformation?.map((privateField) => (
          <li className="mt-3" key={privateField.label}>
            <strong>{privateField.label}</strong>{' '}
            <div dangerouslySetInnerHTML={{ __html: privateField.body.html }} />
          </li>
        ))}
      </ul>
    </article>
  );
};
