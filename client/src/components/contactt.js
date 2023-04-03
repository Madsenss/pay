import { useEffect, useState } from "react";

import styled from "styled-components";
import axios from "axios";

import { MdArrowBackIos, MdArrowForwardIos, MdChangeCircle, MdCheck, MdUploadFile } from "react-icons/md"

const ContactBox = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  justify-content: center;
  align-items: center;
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
    height: 60%;
  }
`
const Form = styled.div`
  width: 100%;
  height: 100%;
  flex: none;
  transition: 1s;
  transform: translateX(${props => props.tx + '%'});
  display: flex;
  align-items: center;
  justify-content: center;
  .title {
    font-size: 18px;
    font-weight: bold;
    position: absolute;
    top: 10%;
  }
  .cbouter {
    width: fit-content;
    margin: auto;
  }

`
const TextInput = styled.input`
  display: ${props => props.dp};
  width: 230px;
  height: 25px;
  border: 1.5px solid #aaa;
  border-radius: 3px;
  font-size: 14px;
  padding-left: 10px;
  &:focus {
    outline: none;
    border: 1.5px solid rgb(138, 43, 226, 0.7);
  }
  &.another {
    margin-top: 10px;
  }
  &.url {
    margin-top: 20px;
  }
  &.max {
    text-align: end;
    margin-right: 10px;
  }

`
const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: block;
  margin: auto;
  width: 244px;
  height: 29px;
  border: 1.5px solid #aaa;
  border-radius: 3px;
  font-size: 14px;
  padding-left: 10px;
  &:focus {
    outline: none;
    border: 1.5px solid rgb(138, 43, 226, 0.7);
  }
`

const CheckBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  .cb {
    cursor: pointer;
    width: 15px;
    height: 15px;
    border: 1.5px solid rgb(138, 43, 226, 0.7);
    border-radius: 2px;
    margin-right: 10px;
    color: #aaa;
    &.active {
      background-color: rgb(138, 43, 226, 0.7);
      color: #fff;
    }
  }
  label {
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

const Contactt = () => {

  const [x, setX] = useState(0);
  const [company, setCompany] = useState(null);
  const [business, setBusiness] = useState(null);
  const [phone, setPhone] = useState(null);
  const [category, setCategry] = useState(null);
  const [another, setAnother] = useState(null);
  const [check, setCheck] = useState([
    {key: '잘 모르겠음', value : 'out'},
    {key: '수기결제', value : 'out'},
    {key: 'PAYCO', value :'out'},
    {key: '네이버페이', value : 'out'},
    {key: '카카오페이', value : 'out'},
    {key: 'SMS결제', value : 'out'},
    {key: '카드결제API', value : 'out'}
  ]);
  const payment = []
  
  const handlePayment = () => {
    var filter = check.filter(v=>v.value == 'in');
    for(let i=0; i<filter.length; i++) {
      payment.push(filter[i].key);
    }
  }
  const [mMax, setMMax] = useState(null);
  const [url, setURL] = useState(null);
  const [fileName] = useState([]);

  const handleFile = () => {
    fileName.splice(0);
    var files = document.getElementById('file').files;
    for (var i = 0; i < files.length; i++) {
      fileName.push(files[i].name);
    }
  };
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
    if (x === 0) { return null };
    setX(x + 100);
  };
  const next = () => {
    if (x === -500) { return null };
    setX(x - 100);
  };

  return (
    <>
      
      <ContactBox>
        <FormBox>

          <LBtnBox className="lbtn">
            <MdArrowBackIos className="icon" onClick={() => { prev(); }} />
          </LBtnBox>
          <RBtnBox className="rbtn">
            <MdArrowForwardIos className="icon" onClick={() => { next(); }} />
          </RBtnBox>

          <Form tx={x}>
            <span className="title">업체명을 입력해주세요</span>
            <TextInput type="text" placeholder="업체명" onChange={handleCompany} onBlur={()=>{window.scrollTo(0, NaN)}}/>
          </Form>
          <Form tx={x}>
            <span className="title">사업자등록번호를 입력해 주세요</span>
            <TextInput type="number" placeholder="-를 제외하고 입력해 주세요" onChange={handleBusiness} onBlur={()=>{window.scrollTo(0, NaN)}}/>
          </Form>
          <Form tx={x}>
            <span className="title">연락처를 입력해 주세요</span>
            <TextInput type="number" placeholder="-를 제외하고 입력해 주세요" onChange={handlePhone} onBlur={()=>{window.scrollTo(0, NaN)}}/>
          </Form>
          <Form tx={x}>
            <span className="title">업종을 선택해 주세요</span>
            <div>
              <Select onChange={handleCategory} name="category">
                <option value="">업종</option>
                <option value="의류">의류</option>
                <option value="식품">식품</option>
                <option value="제조">제조</option>
                <option value="전자기기">전자기기</option>
                <option value="비실물상품">비실물 상품</option>
                <option value="기타">기타</option>
              </Select>
              <TextInput dp={category == '기타' ? 'block' : 'none'} className="another" onChange={handleAnother} onBlur={()=>{window.scrollTo(0, NaN)}} placeholder="업종명을 입력해 주세요"/>
            </div>

          </Form>
          <Form tx={x}>
            <span className="title">관심 있는 결제수단을 체크해 주세요</span>

            <div>
              <div className="cbouter">
                {
                  check.map((item, i) => {
                    return (
                      <CheckBox key={i}>
                        <MdCheck className={'cb ' + `${check[i].value == 'in' ? 'active' : null}`} onClick={()=>{
                          var copy = [...check];
                          if(copy[i].value == 'out') {
                            copy[i].value = 'in'
                          } else {
                            copy[i].value = 'out'
                          }
                          setCheck(copy);
                          handlePayment();
                        }}/>
                        <label>{item.key}</label>
                    </CheckBox>
                    )
                  })
                }
              </div>
              <TextInput dp={check[6].value == 'in' ? 'block' : 'none'} className="url" onChange={handleURL} onBlur={()=>{window.scrollTo(0, NaN)}} placeholder="URL을 입력해 주세요"/>
            </div>


          </Form>
          <Form tx={x}>
            <span className="title">월 한도를 입력해 주세요</span>
            <TextInput className="max" type="number" onChange={handleMax} onBlur={()=>{window.scrollTo(0, NaN)}}/><span>백만원</span>
          </Form>

        </FormBox>
      </ContactBox>

    </>
  )
};

export default Contactt;