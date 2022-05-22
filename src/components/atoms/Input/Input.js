import { func, string } from 'prop-types';
import { useState } from 'react';
import { InputSearchWrapper, InputDefaultWrapper } from './Input.styled';
import { InputVariant } from './Input.types';

const Input = ({
  dataTestId = 'input-component',
  placeholder = '',
  value = '',
  id = '',
  name = '',
  onChange = () => {},
  variant = InputVariant.DEFAULT,
  ...otherProps
}) => {
  const [inputValue, setInputValue] = useState(value);
  const InputWrapper = variant === InputVariant.DEFAULT ? InputDefaultWrapper : InputSearchWrapper;

  const handleChange = (event) => {
    setInputValue(event.target.value);
    onChange(event);
  };
  return (
    <InputWrapper
      data-testid={dataTestId}
      placeholder={placeholder}
      value={inputValue}
      onChange={handleChange}
      type="text"
      id={id}
      name={name}
      variant={variant}
      {...otherProps}
    />
  );
};

Input.propTypes = {
  dataTestId: string,
  placeholder: string,
  value: string,
  id: string,
  name: string,
  onChange: func.isRequired,
  variant: string,
};

export default Input;
