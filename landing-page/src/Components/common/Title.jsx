import React from 'react';
import styled from 'styled-components';

const Title = (props) => {
  return <TitleStyle>{props.children}</TitleStyle>;
};

const TitleStyle = styled.h1`
  margin: 0 0 20px 0;
  font-size: 25px;
  font-weight: 900;
  text-align: center;
  color: var(--main-color);
`;

export default Title;
