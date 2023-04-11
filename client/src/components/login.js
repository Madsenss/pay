import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const LoginBox = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  justify-content: center;
  align-items: center;
`
const LoginInner = styled.div`
  width: fit-content;
  height: fit-content;
  img {
    width: 150px;
    display: block;
    margin: auto;
    padding-bottom: 10px;
  }
  input {
    margin: auto;
    display: block;
    width: 140px;
    height: 20px;
    border: 1.5px solid #aaa;
    border-radius: 3px;
    margin-bottom: 5px;
    padding-left: 10px;
    transition: all 0.2s;
    &:hover {
      border: 1.5px solid black;
    }
    &:focus {
      outline: none;
      border: 1.5px solid rgb(173, 106, 235);
    }
  }
`
const SubmitButton = styled.div`
  cursor: pointer;
  display: flex;
  margin: auto;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 26px;
  color: #fff;
  background-color: rgb(173, 106, 235);
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px;
  box-shadow: 0px 0px 6px 2px rgb(0, 0, 0, 0.1);
  transition: all 0.3s;
  &:hover {
    opacity: 0.6;
  }
`
const Login = () => {
  const [id, setID] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleID = (e) => {
    setID(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  return (
    <>
      <LoginBox>
        <LoginInner>
          <img src="slp.png" alt="logo" />
          <input type="text" placeholder="ID" onChange={handleID} />
          <input type="password" placeholder="Password" onChange={handlePassword} />
          <SubmitButton onClick={() => {
            axios.post('/login', {
              id: id,
              password: password
            }).then((result) => {
              if(result.data == 'good') {
                navigate('/admin')
              } else {
                alert('아이디 혹은 비밀번호가 일치하지 않습니다.');
              }
            }).catch((error) => {
              alert('서버 응답 실패');
            })
          }}>LOGIN</SubmitButton>
        </LoginInner>
      </LoginBox>
    </>
  )
};

export default Login;