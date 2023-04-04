import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { MdArrowBackIos, MdArrowForwardIos, MdChangeCircle, MdCheck, MdEditNote, MdLaptopMac, MdManageAccounts, MdOutlineFastfood, MdPrecisionManufacturing, MdSupportAgent, MdUploadFile } from "react-icons/md"
import { GiLargeDress } from "react-icons/gi";


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
  .title-top {
    font-size: 18px;
    font-weight: bold;
    position: absolute;
    top: 20%;
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
  transition: all 0.3s;
  &:hover {
    border: 1.5px solid black;
  }
  &:focus {
    outline: none;
    border: 1.5px solid rgb(138, 43, 226, 0.7);
  }
  &.another {
    width: 235px;
    margin-top: 10px;
  }
  &.url {
    margin-top: 20px;
  }
  &.max {
    padding-left: 0;
    padding-right: 10px;
    text-align: end;
    margin-right: 5px;
    margin-bottom: 20px;
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
    background-color: rgb(205, 205, 205, 0.1);
    border-radius: 2px;
    margin-right: 10px;
    color: rgb(205, 205, 205, 0.5);
    &.active {
      background-color: rgb(138, 43, 226, 0.7);
      color: #fff;
    }
  }
  label {
    font-weight: bold;
  }
`
const SelectBox = styled.div`
  width: 250px;
  height: 200px;
`
const SelectItem = styled.div`
  cursor: pointer;
  display: inline-flex;
  position: relative;
  width: 30%;
  height: 45%;
  margin: 1.6% 1.6% 1.6% 1.6%;
  border-radius: 8px;
  border: 1.5px solid #eee;
  box-shadow: 1px 1px 3px 1px rgb(0, 0, 0, 0.2);
  vertical-align: top;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  .icon {
    position: absolute;
    top: 23px;
    font-size: 30px;
  }
  p {
    font-weight: bold;
    font-size: 14px;
    position: absolute;
    bottom: 8px;
  }
  &:hover {
    border: 1.5px solid rgb(138, 43, 226, 0.7);
  }
  &.active {
    box-shadow: inset 0px 0px 4px 4px rgb(0, 0, 0, 0.3);
    opacity: 0.5;
  }
`
const LBtnBox = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  left: -11.4%;
  top: 43%;
  z-index: 999;
  display: flex;
  transition: 0.5s;
  .icon {
    transition: 0.3s;
    color: #aaa;
    cursor: pointer;
    font-size: 40px;
    &:hover {
      color: rgb(138, 43, 226, 0.7);
    }
  }
`
const RBtnBox = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  right: -10%;
  top: 43%;
  z-index: 999;
  display: flex;
  transition: 0.5s;
  .icon {
    transition: 0.3s;
    color: #aaa;
    cursor: pointer;
    font-size: 40px;
    &:hover {
      color: rgb(138, 43, 226, 0.7);
    }
  }
`
const LastButton = styled.div`
  position: absolute;
  bottom: 20%;
  display: ${props => props.dp};
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  padding: 8px 18px 8px 18px;
  text-align: center;
  background-color: rgb(138, 43, 226, 0.7);
  box-shadow: 0px 1px 3px 2px rgb(0, 0, 0, 0.1);
  border-radius: 6px;
  color: white;
  font-weight: bold;
  transition: all 0.3s;
  &:hover {
    opacity: 0.6;
  }
`
const ModalWrap = styled.div`
  z-index: 990;
  background-color: rgb(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  position: fixed;
  display: ${props => props.dp};
  align-items: center;
  justify-content: center;
`
const CheckModal = styled.div`
  position: relative;
  z-index: 999;
  width: 350px;
  height:fit-content;
  background-color: #fff;
  box-shadow: 2px 2px 6px 1px rgb(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 25px;
`
const ModalItem = styled.div`
  display: inline-flex;
  align-items: center;
  width: 100%;
  height: fit-content;
  line-height: 40px;
  border-bottom: 2px solid #eee;
  font-size: 14px;
  .payitem {
    left: 30%;
    position: absolute;
  }
  .title {
    font-weight: bold;
    color: rgb(138, 43, 226, 0.7);
    margin-right: 5px;
  }
  .cng {
    cursor: pointer;
    position: absolute;
    right: 30px;
    font-size: 24px;
    color: rgb(138, 43, 226, 0.7);
  }
`
const SubmitOverlay = styled.div`
  display: ${props => props.dp};
  z-index: 998;
  width: 100%;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.2);
  position: absolute;
  align-items: center;
  justify-content: center;
`
const SubmitBox = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 999;
  padding: 30px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 2px 2px 6px 1px rgb(0, 0, 0, 0.2);
  width: fit-content;
  height: fit-content;

`
const SubmitInner = styled.div`
  width: fit-content;
  height: fit-content;
  
`
const SubmitItem = styled.div`
  display: ${props => props.dp};
  width: 300px;
  height: fit-content;
  padding: 15px 0px 15px 0px;
  margin-bottom: 40px;
  border: 1.5px solid black;
  border-radius: 10px;
  position: relative;
  font-size: 18px;
  font-weight: bold;
  .title {
    font-size: 18px;
    position: absolute;
    top: -10px;
    left: 10px;
    font-weight: bold;
    margin-bottom: 10px;
    background-color: #fff;
    color: rgb(138, 43, 226, 0.7);
    border-radius: 50%;
    padding: 0px 3px 0px 3px;
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
  height: 30px;
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
  display: ${props => props.dp};
`
const Contactt = () => {

  const [x, setX] = useState(0);
  const [company, setCompany] = useState(null);
  const [business, setBusiness] = useState(null);
  const [phone, setPhone] = useState(null);
  const [category, setCategory] = useState(null);
  const [another, setAnother] = useState(null);
  const [check, setCheck] = useState([
    { key: '잘 모르겠음', value: 'none' },
    { key: '수기결제', value: 'none' },
    { key: 'PAYCO', value: 'none' },
    { key: '네이버페이', value: 'none' },
    { key: '카카오페이', value: 'none' },
    { key: '애플페이', value: 'none' },
    { key: 'SMS결제', value: 'none' },
    { key: '카드결제API', value: 'none' }
  ]);
  const payment = []
  const [mMax, setMMax] = useState(null);
  const [url, setURL] = useState(null);
  const [fileName] = useState([]);
  const [modal, setModal] = useState(false);



  var filter = check.filter(v => v.value == 'checked');
  for (let i = 0; i < filter.length; i++) {
    payment.push(filter[i].key);
  }

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

      <SubmitOverlay dp={modal ? 'flex' : 'none'} onClick={() => { setModal(false); }}>
        <SubmitBox onClick={()=>{alert(1)}}>
          <SubmitInner>

            <SubmitItem dp={company == null ? 'none' : 'block'}>
              <p className="title">회사명</p>
              <p>{company}</p>
              <MdChangeCircle className="cng" onClick={() => { setX(0); setModal(false); }} />
            </SubmitItem>

            <SubmitItem dp={business == null ? 'none' : 'block'}>
              <p className="title">사업자 등록번호</p>
              <p>{business}</p>
              <MdChangeCircle className="cng" onClick={() => { setX(-100); setModal(false); }} />
            </SubmitItem>

            <SubmitItem dp={phone == null ? 'none' : 'block'}>
              <p className="title">연락처</p>
              <p>{phone}</p>
              <MdChangeCircle className="cng" onClick={() => { setX(-200); setModal(false); }} />
            </SubmitItem>

            <SubmitItem dp={category == null ? 'none' : 'block'}>
              <p className="title">업종</p>
              <p>{category}</p>
              <MdChangeCircle className="cng" onClick={() => { setX(-300); setModal(false); }} />
            </SubmitItem>

            <SubmitItem dp={payment.length < 1 ? 'none' : 'block'}>
              <p className="title">결제수단</p>
              {
                payment.map((item, i) => {
                  return (
                    <PaymentItem key={i}>
                      <span>{item}</span>
                    </PaymentItem>
                  )
                })
              }
              <MdChangeCircle className="cng" onClick={() => { setX(-400); setModal(false); }} />
            </SubmitItem>

            <SubmitItem>
              <p className="title">월 한도</p>
              <p>{mMax}백만원</p>
              <MdChangeCircle className="cng" onClick={() => { setX(-500); setModal(false); }} />
            </SubmitItem>

          </SubmitInner>
        </SubmitBox>
      </SubmitOverlay>

      <ContactBox>
        <FormBox>

          <LBtnBox className="lbtn">
            <MdArrowBackIos className="icon" onClick={() => { prev(); }} />
          </LBtnBox>
          <RBtnBox className="rbtn">
            <MdArrowForwardIos className="icon" onClick={() => { next(); }} />
          </RBtnBox>

          <Form tx={x}>
            <span className="title-top">업체명을 입력해주세요</span>
            <TextInput type="text" placeholder="업체명" onChange={handleCompany} onBlur={() => { window.scrollTo(0, NaN) }} />
          </Form>
          <Form tx={x}>
            <span className="title-top">사업자등록번호를 입력해 주세요</span>
            <TextInput type="number" placeholder="-를 제외하고 입력해 주세요" onChange={handleBusiness} onBlur={() => { window.scrollTo(0, NaN) }} />
          </Form>
          <Form tx={x}>
            <span className="title-top">연락처를 입력해 주세요</span>
            <TextInput type="number" placeholder="-를 제외하고 입력해 주세요" onChange={handlePhone} onBlur={() => { window.scrollTo(0, NaN) }} />
          </Form>
          <Form tx={x}>
            <span className="title">업종을 선택해 주세요</span>
            <div>
              <SelectBox>

                <SelectItem className={category == '전자' ? 'active' : null} onClick={() => { setCategory('전자') }}>
                  <MdLaptopMac className="icon" />
                  <p>전자</p>
                </SelectItem>

                <SelectItem className={category == '제조' ? 'active' : null} onClick={() => { setCategory('제조') }}>
                  <MdPrecisionManufacturing className="icon" />
                  <p>제조</p>
                </SelectItem>

                <SelectItem className={category == '의류' ? 'active' : null} onClick={() => { setCategory('의류') }}>
                  <GiLargeDress className="icon" />
                  <p>의류</p>
                </SelectItem>

                <SelectItem className={category == '식품' ? 'active' : null} onClick={() => { setCategory('식품') }}>
                  <MdOutlineFastfood className="icon" />
                  <p>식품</p>
                </SelectItem>

                <SelectItem className={category == '서비스' ? 'active' : null} onClick={() => { setCategory('서비스') }}>
                  <MdManageAccounts className="icon" />
                  <p>서비스</p>
                </SelectItem>

                <SelectItem className={category == '기타' ? 'active' : null} onClick={() => { setCategory('기타') }}>
                  <MdEditNote className="icon" />
                  <p>기타</p>
                </SelectItem>

              </SelectBox>
              <TextInput dp={category == '기타' ? 'block' : 'none'} className="another" onChange={handleAnother} onBlur={() => { window.scrollTo(0, NaN) }} placeholder="업종명을 입력해 주세요" />
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
                        <MdCheck className={'cb ' + `${check[i].value == 'checked' ? 'active' : null}`} onClick={() => {
                          var copy = [...check];
                          if (copy[i].value == 'none') {
                            copy[i].value = 'checked'
                          } else {
                            copy[i].value = 'none'
                          }
                          setCheck(copy);

                          console.log(payment);
                        }} />
                        <label>{item.key}</label>
                      </CheckBox>
                    )
                  })
                }
              </div>
              <TextInput dp={check[7].value == 'checked' ? 'block' : 'none'} className="url" onChange={handleURL} onBlur={() => { window.scrollTo(0, NaN) }} placeholder="URL을 입력해 주세요" />
            </div>


          </Form>
          <Form tx={x}>
            <span className="title-top">월 한도를 입력해 주세요</span>
            <div>
              <TextInput className="max" type="number" onChange={handleMax} onBlur={() => { window.scrollTo(0, NaN) }} /><span>백만원</span>
            </div>

          </Form>

        </FormBox>
        {/* 
        <ModalWrap dp={modal ? 'flex' : 'none'}>
          <CheckModal>
            <form method="POST" action="/uploadfile" encType="multipart/form-data" acceptCharset="UTF-8">
              <ModalItem>
                <span className="title">업체명</span>
                <span className="content">{company}</span>
                <MdChangeCircle className="cng" onClick={() => { setModal(false); setX(0); }} />
              </ModalItem>
              <ModalItem>
                <span className="title">사업자 등록번호</span>
                <span className="content">{business}</span>
                <MdChangeCircle className="cng" onClick={() => { setModal(false); setX(-100); }} />
              </ModalItem>
              <ModalItem>
                <span className="title">연락처</span>
                <span className="content">{phone}</span>
                <MdChangeCircle className="cng" onClick={() => { setModal(false); setX(-200); }} />
              </ModalItem>
              <ModalItem>
                <span className="title">업종</span>
                <span className="content">{category}</span>
                <MdChangeCircle className="cng" onClick={() => { setModal(false); setX(-300); }} />
              </ModalItem>
              <ModalItem>
                <span className="title">- 업종 기타내용</span>
                <span className="content">{another == null ? '----' : another}</span>
                <MdChangeCircle className="cng" onClick={() => { setModal(false); setX(-300); }} />
              </ModalItem>
              <ModalItem>
                <span className="title">결제수단</span>
                {
                  payment.map((item, i) => {
                    return (
                      <span className="payitem">{item}</span>
                    )
                  })
                }
                <MdChangeCircle className="cng" onClick={() => { setModal(false); setX(-400); console.log(payment) }} />
              </ModalItem>
              <ModalItem>
                <span className="title">- 카드결제API URL</span>
                <span className="content">{url == null ? '----' : url}</span>
                <MdChangeCircle className="cng" onClick={() => { setModal(false); setX(-400); }} />
              </ModalItem>
              <ModalItem>
                <span className="title">월 한도</span>
                <span className="content">{mMax}</span>
                <MdChangeCircle className="cng" onClick={() => { setModal(false); setX(-500); }} />
              </ModalItem>
            </form>
          </CheckModal>

        </ModalWrap> */}
        <LastButton dp={mMax == null ? 'none' : 'block'} onClick={() => { setModal(true) }}>제출하기</LastButton>
      </ContactBox>

    </>
  )
};

export default Contactt;