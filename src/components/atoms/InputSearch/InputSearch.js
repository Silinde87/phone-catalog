import { func, string } from 'prop-types';
import { useState } from 'react';
import { InputWrapper } from './InputSearch.styled';

const InputSearch = ({
  placeholder = '',
  value = '',
  id = '',
  name = '',
  onChange = () => {},
  ...otherProps
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (event) => {
    setInputValue(event.target.value);
    onChange(event);
  };
  return (
    <InputWrapper
      placeholder={placeholder}
      value={inputValue}
      onChange={handleChange}
      type="text"
      id={id}
      name={name}
      {...otherProps}
    />
  );
};

InputSearch.propTypes = {
  placeholder: string,
  value: string,
  id: string,
  name: string,
  onChange: func.isRequired,
};

export default InputSearch;
