import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  const { type } = props;

  return (
    <BtnStyle type={type ? type : 'button'} {...props}>
      {props.children}
    </BtnStyle>
  );
};

const BtnStyle = styled.button`
  cursor: pointer;
  width: 120px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid var(--main-color);
  background-color: var(--bg-color);
  box-shadow: 4px 4px var(--main-color);
  font-size: 17px;
  font-weight: 600;
  color: var(--font-color);

  &:active {
    box-shadow: 1px 1px var(--main-color);
    transform: translate(4px, 4px);
  }
`;
export default Button;
