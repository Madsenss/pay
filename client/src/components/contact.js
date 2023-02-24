import { memo, useState } from "react";
import styled from "styled-components";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md"
const ContactBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const StepBox = styled.div`
  position: fixed;
  top: 100px;
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Hr = styled.hr`
  border: 1px solid #aaa;
  width: 5vw;
  display: inline-block;
  margin-left: 0;
  margin-right: 0;
  margin: 0px;
`
const StepInner = styled.div`
  width: 4vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`
const StepText = styled.span`
  position: absolute;
  top: 3vw;
  font-size: 0.8vw;
  font-weight: ${props=>props.fw};
`
const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.2vw;
  height: 2.2vw;
  
  border-radius: 50%;
  background-color: ${props=>props.bg};

  color: #eee;
  font-size: 1.3vw;
  font-weight: bold;

  transform: scale(${props=>props.scale});
  transition: all 0.5s;
`
const FormBox = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  overflow: hidden;
  transition: all 1s;
  position: relative;
  &:hover .lbtn {
    left: 1.2%;
  }
  &:hover .rbtn {
    right: 0%;
  }
`
const Form = styled.div`
  width: 100%;
  height: 100%;
  flex: none;
  transition: 1s;
  transform: translateX(${props=>props.tx+'%'});
  display: flex;
  align-items: center;
  justify-content: center;
  .url {
    margin-left: 20px;
  }
`
const LBtnBox = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  left: -11.4%;
  top: 46%;
  z-index: 999;
  display: flex;
  transition: 0.5s;
  .icon {
    transition: 0.3s;
    color: #aaa;
    cursor: pointer;
    font-size: 40px;
    &:hover {
      color: black;
    }
  }
`
const RBtnBox = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  right: -10%;
  top: 46%;
  z-index: 999;
  display: flex;
  transition: 0.5s;
  .icon {
    transition: 0.3s;
    color: #aaa;
    cursor: pointer;
    font-size: 40px;
    &:hover {
      color: black;
    }
  }
`
const SubmitBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 13%;

  width: 120px;
  height: 40px;

  cursor: pointer;

  background-color: #50BCDF;
  color: white;
  border-radius: 8px;
  box-shadow: 0px 2px 5px 0px #aaa;
  font-size: 16px;
  font-weight: bold;
  transition: 0.3s;
  display: ${props=>props.dp};
  &:hover {
    opacity: 0.8;
  }
`

const Input = styled.div`
  position: relative;
  display: ${props=>props.dp};
  input {
    width: 300px;
    height: 30px;
    position: relative;
    background: none;
    font-size: 16px;
    border: 1.5px solid #aaa;
    padding-left: 10px;
  }
  input:hover {
    border: 1.5px solid black;
  }
  input:focus { 
    outline: none;
    border: 1.5px solid #fff;
  }
  input:valid {
    border: 1.5px solid #eee;
  }
  label {
    font-size: 14px;
    position: absolute;
    color: #aaa;
    left: 15px;
    bottom: 8px;
    transition: all 0.2s;
  }

  input:focus ~ label, input:valid ~ label {
    bottom: 25px;
    left: 7px;
    font-weight: bold;
    color: black;
  }

`
const Select = styled.select`
  width: 300px;
  height: 35px;
  border: 1.5px solid #aaa;

  font-size: 16px;
  padding-left: 10px;

`
const Contact = () => {
  const [x, setX] = useState(0);

  const [company, setCompany] = useState();
  const [phone, setPhone] = useState();
  const [category, setCategry] = useState();
  const [payment, setPayment] = useState('PAYCO');
  const [mMax, setMMax] = useState('');
  const [url, setURL] = useState();
  const handleCompany = (e) => {
    setCompany(e.target.value);
  }
  const handlePhone = (e) => {
    setPhone(e.target.value);
  }
  const handleCategory = (e) => {
    setCategry(e.target.value);
  }
  const handlePayment = (e) => {
    setPayment(e.target.value);
  }
  const handleMax = (e) => {
    setMMax(e.target.value);
  }
  const handleURL = (e) => {
    setURL(e.target.value);
  }


  // const check = (e) => {
  //   if(x == 0 && a == ('' || undefined)){
  //     console.log(1+ "아님");
  //     return (alert('질문에 대해 답변해주세요.'),e.preventDefault());
  //   }else if(x == -100 && (b == '' || undefined)){
  //     console.log(2+ "아님");
  //     return (alert('질문에 대해 답변해주세요.'),e.preventDefault());
  //   }else if(x == -200 && (c == '' || undefined)){
  //     console.log(3+ "아님");
  //     return (alert('질문에 대해 답변해주세요.'),e.preventDefault());
  //   }else if(x == -300 && (d == '' || undefined)){
  //     console.log(4+ "아님");
  //     return (alert('질문에 대해 답변해주세요.'),e.preventDefault());
  //   }
  // }

  const prev = () => {
    if(x == 0){return null};
    setX(x + 100);
  }
  const next = () => {
    if(x == -400){return null};
    setX(x - 100);
  }
  
  return (
    <> 
      <ContactBox>

        <StepBox>
          <StepInner>
            <Circle bg={x == 0 ? '#50BCDF' : '#aaa'} scale={x == 0 ? 1.2 : null}>1</Circle>
            <StepText fw={x == 0 ? 'bold' : null}>회사명</StepText>
          </StepInner>
          <Hr/>
          <StepInner>
            <Circle bg={x == -100 ? '#50BCDF' : '#aaa'} scale={x == -100 ? 1.2 : null}>2</Circle>
            <StepText fw={x == -100 ? 'bold' : null}>연락처</StepText>
          </StepInner>
          <Hr/>
          <StepInner>
            <Circle bg={x == -200 ? '#50BCDF' : '#aaa'} scale={x == -200 ? 1.2 : null}>3</Circle>
            <StepText fw={x == -200 ? 'bold' : null}>업종</StepText>
          </StepInner>
          <Hr/>
          <StepInner>
            <Circle bg={x == -300 ? '#50BCDF' : '#aaa'} scale={x == -300 ? 1.2 : null}>4</Circle>
            <StepText fw={x == -300 ? 'bold' : null}>결제수단</StepText>
          </StepInner>
          <Hr/>
          <StepInner>
            <Circle bg={x == -400 ? '#50BCDF' : '#aaa'} scale={x == -400 ? 1.2 : null}>5</Circle>
            <StepText fw={x == -400 ? 'bold' : null}>월 한도</StepText>
          </StepInner>  
        </StepBox>

        <FormBox>

          <LBtnBox className="lbtn">
            <MdArrowBackIos className="icon" onClick={()=>{prev();}}/>
          </LBtnBox>
          <RBtnBox className="rbtn">
            <MdArrowForwardIos className="icon" onClick={()=>{next()}}/>
          </RBtnBox>

          <Form tx={x}>
            <Input>
              <input type="text" required onChange={handleCompany}/>
              <label>회사명</label>
            </Input>
          </Form>

          <Form tx={x}>
            <Input>
              <input type="text" required onChange={handlePhone}/>
              <label>연락처</label>
            </Input>
          </Form>

          <Form tx={x}>
            <Select onChange={handleCategory}>
              <option value="김대중">김대중</option>
              <option value="노무현">노무현</option>
              <option value="먼저인">먼저인</option>
            </Select>
          </Form>

          <Form tx={x}>
            <Select onChange={handlePayment}>          
              <option value="PAYCO">PAYCO</option>
              <option value="네이버페이">네이버페이</option>
              <option value="카카오페이">카카오페이</option>
              <option value="SMS결제">SMS결제</option>
              <option value="카드결제API">카드결제API</option>
            </Select> 
            <Input className="url" dp={payment === '카드결제API' ? 'block' : 'none'}>
              <input type="text" required onChange={handleURL}/>
              <label>URL</label>
            </Input>
          </Form>

          <Form tx={x}>
            <Input>
              <input type="text" required onChange={handleMax}/>
              <label>월 한도</label>
            </Input>
          </Form>

        </FormBox>
        
        <SubmitBtn dp={mMax == '' ? 'none' : null} onClick={()=>{
          
        }}>제출하기</SubmitBtn>
      
      </ContactBox>
      <h3>TEST</h3>
      <span>회사 : {company}</span><span>연락처 : {phone}</span><span>업종 : {category}</span><span>결제수단 : {payment}</span><span>월한도 : {mMax}</span>
    </>
  )
};

export default Contact;