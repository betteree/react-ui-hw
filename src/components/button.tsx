import { type ComponentProps } from 'react';

type ButtonProps = ComponentProps<'button'>;

function buttonCom({ name, type, ...restProps }: ButtonProps) {
  return (
    <button className="button-st" type={type} {...restProps}>
      {name}
    </button>
  );
}

export default buttonCom;
