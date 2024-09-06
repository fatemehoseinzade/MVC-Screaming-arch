import { ChangeEvent, forwardRef } from 'react';
import clsx from 'clsx';

interface InputProps {
  title?: string;
  type?: 'text' | 'number' | 'file';
  placeholder?: string;
  value?: string;
  className?: string;
  readonly?: boolean;
  errorMessage?: string;
  onChange?: (value: string) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { title, type = 'text', placeholder, className, readonly, errorMessage, onChange, ...rest } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (onChange == null) {
      return;
    }
    onChange(event.target.value);
  };

  return (
    <div className="flex flex-col ">
      {title && <label className="ms-1 font-bold mb-[0.5px]">{title}</label>}
      <input
        ref={ref}
        type={type}
        disabled={readonly}
        placeholder={placeholder}
        className={clsx(className, 'border border-gray-300 rounded-md px-2 py-1 outline-none', {
          'border-red-600': errorMessage
        })}
        onChange={handleChange}
        {...rest}
      />
      <p className="text-red-600 ms-1 text-sm mt-1">{errorMessage}</p>
    </div>
  );
});

export default Input;
