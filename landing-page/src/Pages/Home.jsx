import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <MainStyle>
      <HomeWrapStyle>
        <h1>여기는 메인페이지여</h1>
      </HomeWrapStyle>
    </MainStyle>
  );
};

const MainStyle = styled.main`
  text-align: center;
`;

const HomeWrapStyle = styled.div`
  margin: 200px auto;
  h1 {
    font-size: 60px;
  }
`;

export default Home;
