import { type ComponentProps } from 'react';
import './styles/form-icon.css';

type IconProps = ComponentProps<'img'> & {
  link: string;
  alt: string;
};

function Icon({ link, alt }: IconProps) {
  return (
    <div className="icon-container">
      <img src={link} alt={alt} />
    </div>
  );
}

export default Icon;
