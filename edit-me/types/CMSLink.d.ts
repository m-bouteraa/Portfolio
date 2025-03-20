import { IconType } from '@icons-pack/react-simple-icons';

interface CMSLink {
  href: string;
  icon?: IconType;
  customIcon?: React.FC<IconProps>;
  title: string;
}
