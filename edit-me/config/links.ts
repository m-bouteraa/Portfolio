import {
  SiLinkedin,
  SiGmail
} from '@icons-pack/react-simple-icons';
import { CMSLink } from 'edit-me/types/CMSLink';
import { MaltSvg } from 'src/components/Icons/Icons';

export const links: CMSLink[] = [
  {
    href: 'mailto:ronan.jaffre@rjconsulting.fr',
    customIcon: SiGmail,
    title: 'Email',
  },
  {
    href: 'https://www.linkedin.com/in/rjaffre',
    icon: SiLinkedin,
    title: 'LinkedIn',
  },
  {
    href: 'https://www.malt.fr/profile/ronanjaffre',
    customIcon: MaltSvg,
    title: 'Malt',
  },
];
