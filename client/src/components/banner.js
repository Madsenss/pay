import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BannerBox = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-image: url('임시.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
  p {
    position: absolute;
    font-size: 2.5rem;
    font-weight: bold;
    &.t {
      top: 20%;
    }
    &.b {
      top: 28%;
    }
  }
`
const ContactButton = styled.div`
  position: absolute;
  bottom: 15%;
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  padding: 10px 20px 10px 20px;
  text-align: center;
  background-color: rgb(138, 43, 226, 0.7);
  box-shadow: 0px 0px 6px 1px rgb(0, 0, 0, 0.2);
  border-radius: 6px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  transition: all 0.3s;
  &:hover {
    opacity: 0.7;
  }
`
const Banner = () => {
  const navigate = useNavigate();
  return (
    <>
      <BannerBox>
        <p className="t">결제방식의 모든 것</p>
        <p className="b">UnoPay로 시작하기</p>
        <ContactButton onClick={()=>{navigate('/contact')}}>신청하기</ContactButton>
      </BannerBox>
    </>
  )
};

export default Banner;