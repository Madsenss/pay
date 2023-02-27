import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import styled from "styled-components";

import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md"
import { useNavigate } from "react-router-dom";


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
    left: 1.4%;
  }
  &:hover .rbtn {
    right: 0%;
  }
  @media screen and (max-width: 1000px) {
    width: 80%;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
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
  .title {
    font-size: 20px;
    font-weight: bold;
    position: absolute;
    top: 36%;
  }
  .url {
    position: absolute;
    bottom: 16%;
  }
  .cbtitle {
    font-size: 20px;
    font-weight: bold;
    position: absolute;
    top: 18%;
  }

  input[id="cb"] + label {
    font-size: 18px;
    margin-left: 10px;
  }
  input[id="cb"]:checked ~ label {
    font-weight: bold;
  }
`
const LBtnBox = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  left: -11.4%;
  top: 45.5%;
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
  top: 45.5%;
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
    @media screen and (max-width: 600px) {
      width: 200px;
    }
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
  width: 315px;
  height: 35px;
  border: 1.5px solid #aaa;

  font-size: 14px;
  padding-left: 8px;
  @media screen and (max-width: 600px) {
    width: 215px;
  }
`
const SubmitBtn = styled.button`
  position: absolute;
  bottom: 20%;

  width: 120px;
  height: 40px;

  cursor: pointer;

  background-color: black;
  color: white;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  transition: 0.3s;
  display: ${props=>props.dp};
  &:hover {
    opacity: 0.55;
  }
`
const CheckBox = styled.div`
`
const CheckInner = styled.div`
  margin-bottom: 10px;
`
const Contact = () => {
  const [x, setX] = useState(0);
  const form = useRef();
  const [check, setCheck] = useState(false);

  const [company, setCompany] = useState();
  const [phone, setPhone] = useState();
  const [category, setCategry] = useState();
  const [payment, setPayment] = useState([]);
  const [mMax, setMMax] = useState('');
  const [url, setURL] = useState();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_13jorms', 'template_ghdzid4', form.current, 'iCX9sUDw24-Idue2Z')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  const handleCompany = (e) => {
    setCompany(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleCategory = (e) => {
    setCategry(e.target.value);
  };

  const handlePayment = (e) => {
    if(e.target.checked) {
      payment.push(e.target.value);
    } else {
      payment.pop(e.target.value);
    }
  };

  const handleMax = (e) => {
    setMMax(e.target.value);
  };

  const handleURL = (e) => {
    setURL(e.target.value);
  };

  const prev = () => {
    if(x == 0){return null};
    setX(x + 100);
  };

  const next = () => {
    if(x == -400){return null};
    setX(x - 100);
  };
  
  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
      <ContactBox>

        {/* <StepBox>
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
        </StepBox> */}
        <FormBox>

          <LBtnBox className="lbtn">
            <MdArrowBackIos className="icon" onClick={()=>{prev();}}/>
          </LBtnBox>
          <RBtnBox className="rbtn">
            <MdArrowForwardIos className="icon" onClick={()=>{next();}}/>
          </RBtnBox>
    
          <Form tx={x}>
            <Input>
              <input type="text" onChange={handleCompany} name="company"/>
              <label>회사명</label>
            </Input>
          </Form>
          
          <Form tx={x}>
            <Input>
              <input type="text" onChange={handlePhone} name="phone"/>
              <label>연락처</label>
            </Input>
          </Form>

          <Form tx={x}>
            <span className="title">업종을 선택하세요</span>
            <Select onChange={handleCategory}  name="category">
              <option value="김대중">김대중</option>
              <option value="노무현">노무현</option>
              <option value="먼저인">먼저인</option>
            </Select>
          </Form>

          <Form tx={x}>
            <span className="cbtitle">결제수단을 선택하세요</span>
            <CheckBox>
              <CheckInner>
                <input type="checkbox" id="cb" value="PAYCO" onChange={handlePayment} name="payment"/>
                <label className="cb" htmlFor="cb">PAYCO</label>
              </CheckInner>
              <CheckInner>
                <input type="checkbox" id="cb" value="네이버페이" onChange={handlePayment} name="payment"/>
                <label className="cb" htmlFor="cb">네이버페이</label>
              </CheckInner>
              <CheckInner>
                <input type="checkbox" id="cb" value="카카오페이" onChange={handlePayment} name="payment"/>
                <label className="cb" htmlFor="cb">카카오페이</label>
              </CheckInner>
              <CheckInner>
                <input type="checkbox" id="cb" value="SMS결제" onChange={handlePayment} name="payment"/>
                <label className="cb" htmlFor="cb">SMS결제</label>
              </CheckInner>
              <CheckInner>
                <input type="checkbox" id="cb" value="카드결제API" onChange={handlePayment} onClick={()=>{setCheck(!check)}} name="payment"/>
                <label className="cb" htmlFor="cb">카드결제API</label>
              </CheckInner>
            </CheckBox>
            <Input className="url" dp={check ? 'block' : 'none'}>
              <input type="text" onChange={handleURL} name="url"/>
              <label>URL</label>
            </Input>
          </Form>

          <Form tx={x}>
            <Input>
              <input type="text" onChange={handleMax} name="mmax"/>
              <label>월 한도</label>
            </Input>
          </Form>
          
        </FormBox>

        
        <SubmitBtn type="submit" dp={mMax == '' ? 'none' : null} onClick={()=>{
          alert("감사합니다. 확인 후 연락드리겠습니다.");
          navigate(-1);
        }}>제출하기</SubmitBtn>
      </ContactBox>  
      </form>
    </>
  )
};

export default Contact;

          // <Container fluid className="gx-0">
          //   <Form ref={form} onSubmit={sendEmail}>
          //     <Form.Group>
          //       <Form.Label style={{ fontWeight: 'bold' }}>Name</Form.Label>
          //       <Form.Control type="text" placeholder="name" className="mb-3" name="name" onChange={inputName}/>

          //       <Form.Label style={{ fontWeight: 'bold' }}>Email</Form.Label>
          //       <Form.Control type="email" placeholder="email" className="mb-3" name="email" onChange={inputEmail}/>

          //       <Form.Label style={{ fontWeight: 'bold' }}>Phone</Form.Label>
          //       <Form.Control type="text" placeholder="phone" className="mb-3" name="phone" onChange={inputPhone}/>

          //       <Form.Label style={{ fontWeight: 'bold' }}>Message</Form.Label>
          //       <Form.Control as="textarea" rows={5} placeholder="message" className="mb-3" name="message" onChange={inputMessage}/>
          //     </Form.Group>

          //     <Button type="submit" variant="secondary" id="aboutbutton" onClick={() => {
          //       axios.post('/mail',{
          //         data : {
          //           'name' : name,
          //           'email' : email,
          //           'phone' : phone,
          //           'message' : message
          //         }
          //       })
          //         .then(result => {
          //           alert(result.data);
          //           window.location.replace('/about')
          //         })
          //         .catch(() => {
          //           alert('서버 응답 실패');
          //         })
          //     }}>Send</Button>
          //   </Form>
          // </Container>
