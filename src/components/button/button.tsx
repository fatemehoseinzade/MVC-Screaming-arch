import { forwardRef } from 'react';

interface ButtonProps {
  label: string;
  loading?: boolean;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'warning' | 'error';
  mode?: 'disable' | 'inside' | 'fill';
  icon?: string;
  iconPosition?: 'right' | 'left';
}

const Button = forwardRef<HTMLDivElement, ButtonProps>((props, ref) => {
  const {
    label,
    loading = false,
    size = 'md',
    color = 'primary',
    mode = 'fill',
    icon,
    iconPosition = 'left',
    ...rest
  } = props;

  return (
    <div ref={ref} className={`btn btn-${color} btn-${size} `} {...rest}>
      {/* {loading && <ClipLoader color={color} loading={loading} size={20} />} */}
      {icon && <img src={icon} alt={label} />}
      {label}
    </div>
  );
});

export default Button;
