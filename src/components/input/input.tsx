import { forwardRef } from "react"


interface InputProps {
    title :string;
    type: 'text' | 'number' | 'file';
    placeholder:string;
    value:string;
}

const Input = forwardRef<HTMLInputElement , InputProps>((props, ref) => {
    const {title, type,  placeholder , ...rest} = props;

    return (
      <div className="flex flex-col">
        <label>{title}</label>
        <input 
          ref={ref} 
          type={type} 
          placeholder={placeholder}
          className="input"
          {...rest} 
        />
      </div>
    )
  })

export default Input