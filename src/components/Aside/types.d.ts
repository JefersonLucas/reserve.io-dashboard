export interface MenusProps {
  title: string;
  href: string;
  active: boolean;
  icon: JSX.Element;
}

interface LinkProps {
  active?: boolean;
}
