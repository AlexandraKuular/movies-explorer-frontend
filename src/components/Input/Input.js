//import { placeholder } from "@babel/types";

function Input({ title, onChange, name, type, error, disabled, placeholder }) {
  const requiredProps =
    type === 'text'
      ? { minLength: 2, maxLength: 30 }
      : type === 'password'
      ? { minLength: 3 }
      : null;

  return (
    <label className='input-label text color_text'>
      {title}
      <input
        placeholder={placeholder}
        name={name}
        type={type}
        className={`input ${error && 'color_error'}`}
        onChange={onChange}
        disabled={disabled}
        required
        {...requiredProps}
      ></input>
      <span className={`input-error ${error && 'input-error_visible'} text`}>{error}</span>
    </label>
  );
}

export default Input;
