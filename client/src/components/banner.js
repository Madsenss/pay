import styled from "styled-components";

const BannerBox = styled.div`
  width: 100%;
  height: 600px;
  border: 1px solid black;
  .left {
    position: absolute;
    top: 25%;
    left: 18%;
    border: 1px solid red;
    font-size: 24px;
  }
  .right {
    position: absolute;
    top: 24%;
    right: 25%;
    border: 1px solid blue;
    font-size: 24px;
  }
  img {
    display: block;
    margin: auto;
    width: 500px;
  }
`
const BannerBtn = styled.button`
  width: 120px;
  height: 40px;
  display: block;
  margin: auto;
  font-size: 16px;
  background-color: #50BCDF;
  color: white;
  border: 1px solid lightblue;
  border-radius: 5%;
  cursor: pointer;
`
const Banner = () => {
  return (
    <>
      <BannerBox>
        <div className="left">결제 방식은 다양한데<br/>쉽고 빠른 서비스가 있을까?<br/>Hip하고 Easy한 PG서비스<br/>NagumPay</div>
        <div className="right">신용카드<br/>SMS결제<br/>네이버페이<br/>카카오페이<br/>PAYCO까지</div>
        <img src="banner2.png"/>
        <BannerBtn>신청하기</BannerBtn>


      </BannerBox>
    </>
  )
};

export default Banner;