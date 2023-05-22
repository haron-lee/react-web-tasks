import React from 'react';
import styled from 'styled-components';

const LoginWrap = (props) => {
  return <LoginWrapStyle {...props}>{props.children}</LoginWrapStyle>;
};

export const LoginWrapStyle = styled.div`
  margin: 200px auto;
  padding: 50px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background: var(--primary);
  gap: 20px;
  border-radius: 5px;
  border: 2px solid var(--main-color);
  box-shadow: 4px 4px var(--main-color);

  button {
    margin-top: 30px;
  }
`;

export default LoginWrap;
