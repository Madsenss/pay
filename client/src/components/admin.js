import styled from "styled-components";
import { MdOutlineToggleOff, MdOutlineToggleOn, MdAddCircle, MdLocalPhone, MdOutlineFileDownload, MdPrint, MdDeleteForever, MdLogout, MdOutlineCheckCircleOutline, MdHighlightOff, MdCheckCircle, MdClose, MdOutlineCheck, MdMessage  } from "react-icons/md";
import { useEffect, useState } from "react";


const Logout = styled.div`
  width: fit-content;
  height: fit-content;
  position: fixed;
  bottom: 30px;
  right: 30px;
  font-size: 35px;
  cursor: pointer;
  z-index: 999;
  transition: all 0.3s;
  &:hover {
    opacity: 0.5;
  }
`
const AdminBox = styled.div`
  padding-top: 50px;
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eee;
`
const ContactBox = styled.div`
  width: 80%;
  height: fit-content;
  @media screen and (max-width: 800px) {
    width: 90%;
  }
`
const ContactItem = styled.div`
  background-color: #fff;

  display: inline-block;
  vertical-align: top;
  width: 30%;
  margin: 0% 1.65% 3.33% 1.65%;
  height: fit-content;
  border-radius: 20px;
  position: relative;
  box-shadow: 2px 2px 7px 0px rgb(0, 0, 0, 0.2);
  @media screen and (max-width: 1500px) {
    width: 46.7%;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 0px;
    margin-bottom: 50px;
  }
`
const ContentBox = styled.div`
  width: 100%;
  height: fit-content;
  border-radius: 20px;
  padding: 30px 20px 40px 20px;
  font-size: 16px;
  .bold {
    font-weight: bold;
    margin-right: 10px;
    color: rgb(138, 43, 226, 0.7);
  }
  p {
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(0, 0, 0, 0.2);
  }
`
const DialBox = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 25px;
  right: 25px;
  
  .z {
    z-index: 998;
  }
  .zz {
    z-index: 997;
  }
  .icon {
    transition: all 0.7s;
    font-size: 30px;
    position: absolute;
    cursor: pointer;
    color: rgb(138, 43, 226, 0.7);
  }

  .y1 {
    opacity: 1;
    transform: translateY(-150%);
  }
  .y2 {
    opacity: 1;
    transform: translateY(-300%);
  }
  .y3 {
    opacity: 1;
    transform: translateY(-450%);
  }
  .y4 {
    opacity: 1;
    transform: translateY(-600%);
  }

  .active {
    transition: all 0.5s;
    transform: rotate(-270deg);
    opacity: 0.5;
  }
  .hide {
    opacity: 0;
  }
`
const ToggleBox = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  bottom: 10px;
  left: 20px;
  display: flex;
  align-items: center;
  font-weight: bold;
  .icon {
    cursor: pointer;
    font-size: 30px;
    margin-right: 10px;
  }
  .on {
    color: rgb(138, 43, 226, 0.7);
  }
`
// MdMessage
const MemoIcon = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  bottom:2px;
  right: 45px;
  font-size: 30px;
  position: absolute;
  cursor: pointer;
  color: rgb(138, 43, 226, 0.7);
`
const MemoBox = styled.div`
  visibility: ${props=>props.dp};
  width: 90%;
  height: 200px;
  background-color: #fff;
  border: 2px solid #aaa;
  border-radius: 20px;
  position: absolute;
  display: flex;
  justify-content: center;
  z-index: 995;
  bottom: 9%;
  right: 5%;
  .save {
    font-size: 30px;
    position: absolute;
    bottom: 5px;
    right: 40px;
    color: rgb(138, 43, 226, 0.7);
    cursor: pointer;
  }
  .close {
    font-size: 30px;
    position: absolute;
    bottom: 5px;
    right: 10px;
    color: rgb(138, 43, 226, 0.7);
    cursor: pointer;
  }
  textarea {
    margin-top: 10px;
    width: 90%;
    height: 125px;
    border: 1px solid #aaa;
    border-radius: 15px;
    font-size: 16px;
    resize: none;
    padding: 10px;
  }
  textarea:focus {
    outline: none;
    border: 1px solid black;
  }
`
const Admin = () => {

  const post = ['a','b','c','d','e','f'];
  const [active, setActive] = useState([]);
  const [memo, setMemo] = useState([]);
  const [read, setRead] = useState(false);
  useEffect(()=>{
    const copyActive = [];
    const copyMemo = [];
    for(let i=0; i<post.length; i++){
      copyActive.push(false);
      copyMemo.push(false);
    }
    setActive(copyActive);
    setMemo(copyMemo);
  },[])
  return (
    <AdminBox>
      <Logout>
        <MdLogout/>
      </Logout>
      <ContactBox>
      
      {
        post.map((item, i)=>{
          return(
            <ContactItem key={i}>

              <ContentBox>
                <p><span className="bold">발신일</span>2023년 3월 27일 18시 10분</p>
                <p><span className="bold">업체명</span>우노페이</p>
                <p><span className="bold">사업자 등록번호</span>123-123456</p>
                <p><span className="bold">연락처</span>010-1234-1234</p>
                <p><span className="bold">업종</span>기타</p>
                <p><span className="bold">업종 기타내용</span>도박장</p>
                <p><span className="bold">결제수단</span>카드결제API, 수기결제, 뭐시기, 저시기, 네이버페이, 카카오페이</p>
                <p><span className="bold">카드결제API URL</span>www.pornhub.com</p>
                <p><span className="bold">월 한도</span>10백만원</p>
                <p><span className="bold">첨부파일 여부</span>O</p>
                <p><span className="bold">개인정보 폐기일</span>D - 364</p>
              </ContentBox>

              <DialBox>
                <MdAddCircle className={'icon z' + `${active[i] ? ' active' : ''}`} onClick={()=>{
                  var copy = [...active];
                  copy[i] = !active[i];
                  setActive(copy);
                }}/>
                <MdLocalPhone className={'icon zz' + `${active[i] ? ' y4' : ' hide'}`}/>
                <MdOutlineFileDownload className={'icon zz' + `${active[i] ? ' y3' : ' hide'}`}/>
                <MdPrint className={'icon zz' + `${active[i] ? ' y2' : ' hide'}`}/>
                <MdDeleteForever className={'icon zz' + `${active[i] ? ' y1' : ' hide'}`}/>
              </DialBox>
              <ToggleBox>
                {
                  read == false
                  ? <><MdOutlineToggleOff className="icon" onClick={()=>{setRead(!read)}}/><span>미확인</span></>
                  : <><MdOutlineToggleOn className="icon on" onClick={()=>{setRead(!read)}}/><span className="on">확인</span></>
                }
                
              </ToggleBox>
              <MemoIcon>
                <MdMessage onClick={()=>{
                  var copymemo = [...memo];
                  copymemo[i] = !memo[i];
                  setMemo(copymemo);
                }}/>
              </MemoIcon>
              <MemoBox dp={memo[i] ? 'visible' : 'hidden'}>
                <textarea/>
                <MdOutlineCheck className="save"/>
                <MdClose className="close" onClick={()=>{
                  var copymemo = [...memo];
                  copymemo[i] = !memo[i];
                  setMemo(copymemo);
                }}/>
              </MemoBox>
            </ContactItem>
          )
        })
      }

      </ContactBox>
      
    </AdminBox>
  )
};

export default Admin;