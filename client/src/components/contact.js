import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import styled from "styled-components";

import { MdArrowBackIos, MdArrowForwardIos, MdCheckCircleOutline, MdCheckCircle, MdChangeCircle, MdOutlineCheckCircle, MdOutlineFileUpload, MdUploadFile } from "react-icons/md"
import { useNavigate } from "react-router-dom";
import axios from "axios";


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
  width: 40%;
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
  .bn {
    position: absolute;
    bottom: 30%;
  }
  .url {
    position: absolute;
    bottom: 16%;
  }
  .another {
    position: absolute;
    bottom: 30%;
  }
  .cbtitle {
    font-size: 20px;
    font-weight: bold;
    position: absolute;
    top: 15%;
  }
  .filetitle {
    font-size: 20px;
    font-weight: bold;
    position: absolute;
    top: 15%;
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
  span {
    padding-left: 10px;
  }
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
    &.max {
      text-align: end;
      padding-left: 0;
      padding-right: 10px;
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
  left: 147px;
  bottom: 7%;
  z-index: 999;
  width: 110px;
  height: 40px;

  cursor: pointer;

  background-color: rgb(138, 43, 226, 0.7);
  border: none;
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
const SideResultBox = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  /* border: 1px solid black; */
  padding-left: 30px;
`
const ResultInner = styled.div`
  width: fit-content;
  height: fit-content;
  
`
const ResultItem = styled.div`
  display: ${props=>props.dp};
  width: 350px;
  height: fit-content;
  padding: 15px 0px 15px 0px;
  margin-bottom: 40px;
  border: 1.5px solid black;
  border-radius: 10px;
  position: relative;
  font-size: 18px;
  font-weight: bold;
  /* background-color: rgb(154,215,86); */
  .title {
    font-size: 18px;
    position: absolute;
    top: -10px;
    left: 10px;
    font-weight: bold;
    margin-bottom: 10px;
    background-color: #fff;
    padding: 0px 3px 0px 3px;
    /* color: rgb(51, 255, 51, 0.7); */
    /* color: rgb(138, 43, 226, 0.7); */
  }
  .cng {
    position: absolute;
    top: -13px;
    right: -14px;
    font-size: 28px;
    background-color: #fff;
    border-radius: 50%;
    color: rgb(138, 43, 226, 0.7);

    cursor: pointer;
  }
`

const PaymentItem = styled.div`
  width: 30%;
  height: 40px;
  margin: 5px 4px 0px 4px;
  background-color: rgb(138, 43, 226, 0.7);
  color: #fff;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  display: inline-flex;
  justify-content: center;
  vertical-align: top;
  align-items: center;
  display: ${props=>props.dp};
`
const FileInput = styled.div`

  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 40px;
    padding-bottom:10px ;
  }

  p {
    padding-top: 10px;
    font-size: 16px;
    font-weight: bold;
  }
`
const Contact = () => {
  const form = useRef();
  const navigate = useNavigate();

  const [x, setX] = useState(0);
  
  const [check, setCheck] = useState(false);
  const [show, setShow] = useState(false);

  const [company, setCompany] = useState(null);
  const [business, setBusiness] = useState(null);
  const [phone, setPhone] = useState(null);
  const [category, setCategry] = useState(null);
  const [another, setAnother] = useState(null);
  const [payment, setPayment] = useState([]);
  const [mMax, setMMax] = useState(null);
  const [url, setURL] = useState(null);
  const [fileName] = useState([]);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_13jorms', 'template_ghdzid4', form.current, 'iCX9sUDw24-Idue2Z')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  const handleFile = (e) => {
    fileName.splice(0);
    var files = document.getElementById('file').files;
    for(var i = 0; i < files.length; i++){
      fileName.push(files[i].name);
    }
  }
  const handleBusiness = (e) => {
    setBusiness(e.target.value);
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
  const handleAnother = (e) => {
    setAnother(e.target.value);
  };
  const prev = () => {
    if(x == 0){return null};
    setX(x + 100);
  };
  const next = () => {
    if(x == -500){return null};
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
            <Input className="bn">
              <input type="text" onChange={handleBusiness} name="business"/>
              <label>사업자 등록번호</label>
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
              <option value="">업종을 선택하세요</option>
              <option value="의류">의류</option>
              <option value="식품">식품</option>
              <option value="제조">제조</option>
              <option value="전자기기">전자기기</option>
              <option value="비실물상품">비실물 상품</option>
              <option value="기타">기타</option>
            </Select>
            <Input className="another" dp={category == '기타' ? 'block' : 'none'}>
              <input type="text" onChange={handleAnother} name="another"/>
              <label>업종을 선택하세요</label>
            </Input>
          </Form>

          <Form tx={x}>
            <span className="cbtitle">결제수단을 선택하세요</span>
            <CheckBox>
              <CheckInner>
                <input type="checkbox" id="cb" value="수기결제" onChange={handlePayment} onClick={()=>{setShow(!show)}} name="payment"/>
                <label className="cb" htmlFor="cb">수기결제</label>
              </CheckInner>
              <CheckInner>
                <input type="checkbox" id="cb" value="PAYCO" onChange={handlePayment} onClick={()=>{setShow(!show)}} name="payment"/>
                <label className="cb" htmlFor="cb">PAYCO</label>
              </CheckInner>
              <CheckInner>
                <input type="checkbox" id="cb" value="네이버페이" onChange={handlePayment} onClick={()=>{setShow(!show)}} name="payment"/>
                <label className="cb" htmlFor="cb">네이버페이</label>
              </CheckInner>
              <CheckInner>
                <input type="checkbox" id="cb" value="카카오페이" onChange={handlePayment} onClick={()=>{setShow(!show)}} name="payment"/>
                <label className="cb" htmlFor="cb">카카오페이</label>
              </CheckInner>
              <CheckInner>
                <input type="checkbox" id="cb" value="SMS결제" onChange={handlePayment} onClick={()=>{setShow(!show)}} name="payment"/>
                <label className="cb" htmlFor="cb">SMS결제</label>
              </CheckInner>
              <CheckInner>
                <input type="checkbox" id="cb" value="카드결제API" onChange={handlePayment} onClick={()=>{setCheck(!check)}} name="payment"/>
                <label className="cb" htmlFor="cb">카드결제API</label>
              </CheckInner>
              <CheckInner>
                <input type="checkbox" id="cb" value="잘 모르겠음" onChange={handlePayment} onClick={()=>{setShow(!show)}} name="payment"/>
                <label className="cb" htmlFor="cb">잘 모르겠음</label>
              </CheckInner>
            </CheckBox>
            <Input className="url" dp={check ? 'block' : 'none'}>
              <input type="text" onChange={handleURL} name="url"/>
              <label>URL</label>
            </Input>
          </Form>

          <Form tx={x} onMouseOver={()=>{setShow(!show)}} onMouseEnter={()=>{setShow(!show)}}>
            <span className="filetitle">첨부파일을 선택하세요</span>
            <FileInput>
              <label for="file"><MdUploadFile/></label> 
              <input type="file" id="file" multiple onChange={handleFile}/>
              {
                fileName.map((item, i)=>{
                  return(
                    <p>{i+1} - {item}</p>
                  )
                })
              }
            </FileInput>
          </Form>

          <Form tx={x}>
            <Input>
              <input type="text" className="max" onChange={handleMax} name="mmax"/>
              <label>월 한도</label>
              <span>백만원</span>
            </Input>
          </Form>

          
          
        </FormBox>

        
        <SubmitBtn type="submit" dp={mMax == null ? 'none' : null} onClick={()=>{
          alert("감사합니다. 확인 후 연락드리겠습니다.");
          navigate(-1);
        }}>제출하기</SubmitBtn>
      </ContactBox>  
      </form>
      <SideResultBox>
        <ResultInner>

          <ResultItem dp={company == null ? 'none' : 'block'}>
            <p className="title">회사명</p>
            <p>{company}</p>
            <MdChangeCircle className="cng" onClick={()=>{setX(0);}}/>
          </ResultItem>

          <ResultItem dp={business == null ? 'none' : 'block'}>
            <p className="title">사업자 등록번호</p>
            <p>{business}</p>
            <MdChangeCircle className="cng" onClick={()=>{setX(0);}}/>
          </ResultItem>

          <ResultItem dp={phone == null ? 'none' : 'block'}> 
            <p className="title">연락처</p>
            <p>{phone}</p>
            <MdChangeCircle className="cng" onClick={()=>{setX(-100);}}/>
          </ResultItem>

          <ResultItem dp={category == null ? 'none' : 'block'}>
            <p className="title">업종</p>
            <p>{category}</p>
            <MdChangeCircle className="cng" onClick={()=>{setX(-200);}}/>
          </ResultItem>

          <ResultItem dp={payment.length < 1 ? 'none' : 'block'}>
            <p className="title">결제수단</p>        
            {
              payment.map((item, i)=>{
                return(
                  <PaymentItem key={i}>
                    <span>{item}</span>
                  </PaymentItem>
                )
              })
            }
            <MdChangeCircle className="cng" onClick={()=>{setX(-300);}}/>      
          </ResultItem>

          <ResultItem dp={fileName.length < 1 ? 'none' : 'block'}>
            <p className="title">첨부파일</p>        
            {
              fileName.map((item, i)=>{
                return(
                  <PaymentItem key={i}>
                    <span>{item}</span>
                  </PaymentItem>
                )
              })
            }
            <MdChangeCircle className="cng" onClick={()=>{setX(-400);}}/>      
          </ResultItem>
          
          <ResultItem dp={mMax == null ? 'none' : 'block'}>
            <p className="title">월 한도</p>
            <p>{mMax}백만원</p>
            <MdChangeCircle className="cng" onClick={()=>{setX(-500);}}/>
          </ResultItem>
            
        </ResultInner>
      </SideResultBox>
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
