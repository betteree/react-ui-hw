import { type ComponentProps } from 'react';
import './styles/form-button.css';

type ButtonProps = ComponentProps<'button'>;

function buttonCom({ name, type, ...restProps }: ButtonProps) {
  return (
    <button className="button-st" type={type} {...restProps}>
      {name}
    </button>
  );
}

export default buttonCom;
