import { useId, type ComponentProps } from 'react';

type CheckboxProps = ComponentProps<'input'> & {
  label: string;
};

function Checkbox({ label, type, ...restProps }: CheckboxProps) {
  const inputId = useId();

  return (
    <div className="formControl">
      <input type={type} id={inputId} {...restProps} />{' '}
      <label htmlFor={inputId}>{label}</label>
    </div>
  );
}

export default Checkbox;
