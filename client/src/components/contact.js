import { memo, useState } from "react";
import styled from "styled-components";

const ContactBox = styled.div`
  width: 100%;
  height: 100vh;
  border: 1px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
`
const StatBox = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 200px;
`
const Line = styled.div`
  width: 50%;
  height: 50%;
  border-bottom: 6px double black;
  display: block;
  margin: auto;
  opacity: 0.5;
`
const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props=>props.bg};
  color: #eee;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 39%;
  transition: all 1s;
  &.a {
    left: 24%;
    transform: scale(${props=>props.scale});
  }
  &.b {
    left: 36.5%;
    transform: scale(${props=>props.scale});
  }
  &.c {
    left: 49%;
    transform: scale(${props=>props.scale});
  }
  &.d {
    left: 61.5%;
    transform: scale(${props=>props.scale});
  }
  &.e {
    left: 74%;
    transform: scale(${props=>props.scale});
  }
`
const FormBox = styled.div`
  width: 50%;
  height: 50%;
  border: 1px solid red;
  display: flex;
  align-items: center;
  overflow: hidden;
  transition: all 1s;
`
const Form = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 100%;
  flex: none;
  transition: 1s;
  transform: translateX(${props=>props.tx+'%'});
`

const Contact = () => {
  const [x, setX] = useState(0);
  const [a, setA] = useState('1');
  const [b, setB] = useState('2');
  const [c, setC] = useState('3');
  const [d, setD] = useState('4');
  const [e, setE] = useState('5');
  // a = 0
  // b = -100
  // c = -200
  // d = -300
  // e = -400
  const changeA = (e) => {
    setA(e.target.value);
  }
  const changeB = (e) => {
    setB(e.target.value);
  }
  const changeC = (e) => {
    setC(e.target.value);
  }
  const changeD = (e) => {
    setD(e.target.value);
  }
  const changeE = (e) => {
    setE(e.target.value);
  }
  const check = (e) => {
    if(x == 0 && a == '' || null){
      alert('질문에 대해 답변해주세요.');
      e.preventDefault();
    }else if(x == -100 && b == '' || null){
      alert('질문에 대해 답변해주세요.');
      e.preventDefault();
    }else if(x == -200 && c == '' || null){
      alert('질문에 대해 답변해주세요.');
      e.preventDefault();
    }else if(x == -300 && d == '' || null){
      alert('질문에 대해 답변해주세요.');
      e.preventDefault();
    }else if(x == -400 && e == '' || null){
      alert('질문에 대해 답변해주세요.');
      e.preventDefault();
    }
  }
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
      <div>{x}</div>
      <button onClick={()=>{check();prev();}}>prev</button>
      <button onClick={()=>{check();next()}}>next</button>

      <ContactBox>
        <StatBox>
          <Line/>
          <Circle className="a" bg={x == 0 ? 'black' : '#aaa'} scale={x == 0 ? 1.5 : null}>1</Circle>
          <Circle className="b" bg={x == -100 ? 'black' : '#aaa'} scale={x == -100 ? 1.5 : null}>2</Circle>
          <Circle className="c" bg={x == -200 ? 'black' : '#aaa'} scale={x == -200 ? 1.5 : null}>3</Circle>
          <Circle className="d" bg={x == -300 ? 'black' : '#aaa'} scale={x == -300 ? 1.5 : null}>4</Circle>
          <Circle className="e" bg={x == -400 ? 'black' : '#aaa'} scale={x == -400 ? 1.5 : null}>5</Circle>
        </StatBox>
        <FormBox>

          <Form tx={x}>
            AAAAA
          </Form>
          <Form tx={x}>
            BBBBB
          </Form>
          <Form tx={x}>
            CCCCC
          </Form>
          <Form tx={x}>
            DDDDD
          </Form>
          <Form tx={x}>
            EEEEE
          </Form>
        </FormBox>
      </ContactBox>
    </>
  )
};

export default Contact;
{/* <span>회사명</span><input type="text"/><br/>
<span>연락처</span><input type="text"/><br/>
<h3>업종</h3>
<select>  
  <option>1</option>
  <option>2</option>
  <option>3</option>
</select><br/>
<h3>결제수단</h3>
<select>          
  <option>1</option>
  <option>2</option>
  <option>3</option>
</select> */}