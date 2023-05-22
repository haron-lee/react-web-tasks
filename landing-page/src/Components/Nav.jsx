import React from 'react';
import { Link } from 'react-router-dom';
import Button from './common/Button';
import styled from 'styled-components';

const Nav = ({ isCertified }) => {
  return (
    <NavStyle>
      <NavInStyle>
        <h1>
          <Link to="/" rel="noopener noreferrer">
            이것은 로고
          </Link>
        </h1>
        <UlStyle>
          <li>
            <Link to="/" rel="noopener noreferrer">
              Home
            </Link>
          </li>
          <li>
            <Link to="/stuff" rel="noopener noreferrer">
              Stuff
            </Link>
          </li>
          <li>
            <Link to="/stuff" rel="noopener noreferrer">
              Stuff
            </Link>
          </li>
          <li>
            <Link to="/stuff" rel="noopener noreferrer">
              Stuff
            </Link>
          </li>
        </UlStyle>
        {isCertified ? (
          <Button type="button" rel="noopener noreferrer">
            Log Out
          </Button>
        ) : (
          <div>
            <Link to="/login">
              <Button
                type="button"
                rel="noopener noreferrer"
                style={{ marginRight: '30px' }}
              >
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button
                type="button"
                rel="noopener noreferrer"
                style={{ background: '#D0E2EA' }}
              >
                Sign Up
              </Button>
            </Link>
          </div>
        )}
      </NavInStyle>
    </NavStyle>
  );
};

const NavStyle = styled.div`
  width: 100%;
  border-bottom: 1px solid #ddd;
`;

const NavInStyle = styled.div`
  max-width: 1250px;
  margin: auto;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    padding: 10px;
    font-size: 30px;
  }
`;

const UlStyle = styled.ul`
  max-width: 500px;
  min-width: 350px;
  display: flex;
  justify-content: space-between;

  a {
    padding: 10px;
    font-size: 18px;

    &:hover {
      color: #d0e2ea;
    }
  }
`;

export default Nav;
