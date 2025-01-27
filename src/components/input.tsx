import { useId, type ComponentProps } from 'react';
import './form-input.css';

type InputProps = ComponentProps<'input'> & {
  label: string;
};

function Input({ label, type, ...restProps }: InputProps) {
  const inputId = useId();

  return (
    <div className="input-form">
      <label htmlFor={inputId} className="sr-only">
        {label}
      </label>
      <input type={type} id={inputId} {...restProps} />
    </div>
  );
}

export default Input;
