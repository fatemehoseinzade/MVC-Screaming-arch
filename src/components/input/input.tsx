import { forwardRef } from 'react';
import clsx from 'clsx';

interface InputProps {
  title?: string;
  type?: 'text' | 'number' | 'file';
  placeholder?: string;
  value: string;
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { title, type = 'text', placeholder, className, ...rest } = props;

  return (
    <div className="flex flex-col border border-gray-300 rounded-md px-2 py-1">
      {title && <label>{title}</label>}
      <input ref={ref} type={type} placeholder={placeholder} className={clsx(className, 'outline-none')} {...rest} />
    </div>
  );
});

export default Input;
