import {
  SiLinkedin,
  SiGmail
} from '@icons-pack/react-simple-icons';
import { CMSLink } from 'edit-me/types/CMSLink';
import { MaltSvg } from 'src/components/Icons/Icons';

export const links: CMSLink[] = [
  {
    href: 'mailto:contact@mad-consulting.fr',
    customIcon: SiGmail,
    title: 'Email',
  },
  {
    href: 'https://www.linkedin.com/in/mohamed-bouteraa-93982b116',
    icon: SiLinkedin,
    title: 'LinkedIn',
  },
  {
    href: 'https://www.malt.fr/profile/mohamedbouteraa',
    customIcon: MaltSvg,
    title: 'Malt',
  },
];
