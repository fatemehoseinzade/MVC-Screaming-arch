import { ChangeEvent, forwardRef, useState } from 'react';
import clsx from 'clsx';

interface InputProps {
  label?: string;
  type?: 'text' | 'number' | 'file';
  placeholder?: string;
  value: string;
  className?: string;
  readonly?: boolean;
  errorMessage?: string;
  onChange?: (value: string) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label, type = 'text', placeholder, className, readonly, errorMessage, onChange, ...rest } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (onChange == null) {
      return;
    }
    onChange(event.target.value);
  };

  return (
    <div className="flex flex-col" ref={ref}>
      {label && <label className="ms-1 font-bold mb-[0.5px]">{label}</label>}
      <input
        ref={ref}
        type={type}
        disabled={readonly}
        placeholder={placeholder}
        className={clsx(className, 'border border-gray-300 rounded-md px-3 py-1 outline-none', {
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
