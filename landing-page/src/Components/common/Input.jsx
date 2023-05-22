import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
  const { type, value, setValue } = props;

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <InputStyle
      type={type ? type : 'text'}
      value={value}
      onChange={onChange}
      {...props}
    ></InputStyle>
  );
};

const InputStyle = styled.input`
  width: 250px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid var(--main-color);
  background-color: var(--bg-color);
  box-shadow: 4px 4px var(--main-color);
  font-size: 15px;
  font-weight: 600;
  color: var(--font-color);
  padding: 5px 10px;
  outline: none;
`;

export default Input;
