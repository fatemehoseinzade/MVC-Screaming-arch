import clsx from 'clsx';
import { forwardRef, MouseEventHandler } from 'react';

interface ButtonProps
{
  label: string;
  loading?: boolean;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'warning' | 'error';
  mode?: 'disable' | 'inside' | 'fill';
  icon?: string;
  iconPosition?: 'right' | 'left';
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) =>
{
  const {
    label,
    loading = false,
    size = 'md',
    color = 'primary',
    mode = 'fill',
    icon,
    iconPosition = 'left',
    className,
    onClick,
    ...rest
  } = props;

  return (
    <button ref={ref} className={clsx(`bg-slate-800 text-white rounded-md w-24 h-8`, className)} onClick={onClick} {...rest}>
      {/* {loading && <ClipLoader color={color} loading={loading} size={20} />} */}
      {icon && <img src={icon} alt={label} />}
      {label}
    </button>
  );
});

export default Button;
