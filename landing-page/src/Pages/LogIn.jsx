import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Button from '../Components/common/Button';
import LoginWrap from '../Components/common/LoginWrap';
import Form from '../Components/common/Form';
import Title from '../Components/common/Title';
import Input from '../Components/common/Input';
import styled from 'styled-components';

const LogIn = ({ setIsCertified }) => {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [users, setUsers] = useState([]);

  console.log(email, userName);

  // 데이터 가져오기
  const getUserData = async () => {
    try {
      const data = await fetch(url);
      if (!data.ok) {
        throw new Error('네트워크 응답에 문제가 있습니다.');
      }
      const userData = await data.json();
      // 배열로 사용하기 위해서 useState에 저장
      setUsers(userData);
      console.log(userData);
    } catch (error) {
      console.error('에러가 발생했습니다', error);
    }
  };

  // form submit 함수
  const handleLogIn = async (e) => {
    e.preventDefault();

    let isCertified = false;
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email && users[i].username === userName) {
        isCertified = true;
        break;
      }
    }

    console.log('일치하는지?', isCertified);

    setIsCertified(isCertified);

    if (isCertified) {
      navigate('/');
    } else {
      alert('로그인 실패');
    }
  };

  // useEffect(() => {
  //   if (isCertified) {
  //     navigate('/');
  //   } else {
  //     console.log('로그인 실패');
  //   }
  // }, [isCertified]);

  // 최초 1번만 실행
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <SectionStyle>
      <LoginWrap>
        <Title>Log In</Title>
        <Form onSubmit={handleLogIn}>
          <Input
            placeholder="아이디를 입력해주세요"
            name="text"
            type="text"
            value={email}
            setValue={setEmail}
          ></Input>
          <Input
            placeholder="비밀번호를 입력해주세요"
            name="text"
            type="password"
            autoComplete="on"
            value={userName}
            setValue={setUserName}
          ></Input>
          <Button type="submit">로그인</Button>
        </Form>
      </LoginWrap>
    </SectionStyle>
  );
};

const SectionStyle = styled.section`
  display: flex;
  justify-content: center;
`;

export default LogIn;
