import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BannerBox = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 97);
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-image: url('임시.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
  .edge {
    color: rgb(173, 106, 235);
  }
  .title {
    padding-bottom: 50px;
    opacity: 0;
    visibility: visible;
    p {
      text-align: center;
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 10px;
    }
    &.show-one {
      padding-bottom: 150px;
      opacity: 1;
      visibility: visible;
      transition: all 0.8s ease-in;
    }
  }
  /* img {
    position: absolute;
    width: 100px;
    &.center {
      margin-top: 10%;
    }
    &.x1 {
      margin-right: 800px;
      margin-bottom: 150px;
    }
    &.x2 {
      margin-right: 500px;
    }
    &.x3 {
      margin-left: 500px;
    }
    &.x4 {
      margin-left: 800px;
      margin-bottom: 150px;
    }
  } */
`


const ContactButton = styled.div`
  position: absolute;
  bottom: 25%;
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  padding: 8px 20px 8px 20px;
  text-align: center;
  background-color: rgb(173, 106, 235);
  box-shadow: 0px 0px 6px 1px rgb(0, 0, 0, 0.2);
  border-radius: 6px;
  color: white;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 16px;
  transition: all 0.3s;
  &:hover {
    opacity: 0.7;
  }
`
const Banner = () => {
  const [fadeOne, setFadeOne] = useState('');
  const [fadeTwo, setFadeTwo] = useState('');
  const navigate = useNavigate();
  useEffect(()=>{
    setFadeOne('show-one');
    setFadeTwo('show-two');
    return () => {
      setFadeOne('');
      setFadeTwo('');
    }
  },[])
  return (
    <>
      <BannerBox>
        <div className={'title ' + fadeOne}>
          <p>결제의 모든 것</p>
          <p><span className="edge">UnoPay</span>로 시작하기</p>
        </div>
        {/* <img src="Card.png" className="center" alt="item"/>
        <img src="ApplePay.png" className="x1" alt="item"/>
        <img src="NaverPay.png" className="x2" alt="item"/>
        <img src="PAYCO.png" className="x3" alt="item"/>
        <img src="KaKaoPay.png" className="x4" alt="item"/> */}
        <ContactButton onClick={()=>{navigate('/contact')}}>신청하기</ContactButton>
      </BannerBox>
    </>
  )
};

export default Banner;