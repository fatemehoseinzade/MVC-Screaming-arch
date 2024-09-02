import { forwardRef } from 'react'

interface ButtonProps {
    label:string;

}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const {label , ...rest} = props;
    return (
      <button ref={ref} {...rest}>
        {label}
      </button>
    )
})

export default Button