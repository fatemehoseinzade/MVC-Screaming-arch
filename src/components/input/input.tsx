import { ChangeEvent, forwardRef } from 'react';
import clsx from 'clsx';
import { FieldStatus } from '../../types/global-types';
import { Icon } from '../../icons';

interface InputProps
{
  label?: string;
  type?: 'text' | 'number' | 'file';
  placeholder?: string;
  value: string;
  containerClassName?: string;
  readonly?: boolean;
  errorMessage?: string;
  onChange?: (value: string) => void;
  startIcon?: Icon | JSX.Element;
  endIcon?: Icon | JSX.Element;
  status?: FieldStatus;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) =>
{
  const {
    label,
    type = 'text',
    placeholder,
    containerClassName,
    readonly,
    errorMessage,
    onChange,
    startIcon: StartIcon,
    endIcon: EndIcon,
    status = 'default',
    ...rest
  } = props;

  const _onChange = (event: ChangeEvent<HTMLInputElement>): void =>
  {
    if (onChange == null)
    {
      return;
    }
    onChange(event.target.value);
  };

  return (
    <div className="flex flex-col">

      {label && <label className="ms-1 font-bold leading-8">{label}</label>}


      <div
        className={clsx(
          'flex flex-row items-center gap-2 border border-gray-300 bg-white rounded-md px-3 py-1 overflow-hidden',
          containerClassName,
          { 'border-red-600': errorMessage }
        )}
      >
        {(StartIcon != null && typeof StartIcon === 'function') && (<StartIcon dimensions={24} />)}
        {(StartIcon != null && typeof StartIcon !== 'function') && (StartIcon)}

        <input
          ref={ref}
          type={type}
          disabled={readonly}
          placeholder={placeholder}
          className={clsx('w-full leading-6 focus:outline-none bg-transparent autofill:bg-transparent text-start',
            'text-[--text-default-strong] placeholder:text-[--text-default-placeholder] disabled:text-[--text-disable-placeholder] ')}
          onChange={_onChange}
          {...rest}
        />

        {(EndIcon != null && typeof EndIcon === 'function') && (<EndIcon dimensions={24} />)}
        {(EndIcon != null && typeof EndIcon !== 'function') && (EndIcon)}

      </div>

      <p className="text-red-600 ms-1 text-sm leading-6 font-semibold">{errorMessage}</p>
    </div>
  );
});

export default Input;
