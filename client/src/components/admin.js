import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import styled from "styled-components";
import {
  MdOutlineToggleOff, MdOutlineToggleOn, MdAddCircle, MdLocalPhone, MdOutlineFileDownload, MdPrint, MdDeleteForever, MdClose, MdOutlineCheck,
  MdMessage, MdNorth, MdSouth, MdOutlineChangeCircle, MdSearch, MdOutlineWatchLater, MdOutlineMonetizationOn, MdPowerSettingsNew, MdMenu
} from "react-icons/md";

// NAV
const NavBox = styled.div`
  z-index: 999;
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0px;
  border-bottom: 4px solid rgb(0, 0, 0, 0.1);
  .icon {
    font-size: 28px;
    cursor: pointer;
    color: rgb(138, 43, 226, 0.7);
    margin-right: 10px;
    transition: all 0.3s;
    &:hover {
      opacity: 0.6;
    }
  }
  @media screen and (max-width: 800px) {
    border: none;
  }
`
const NavLogo = styled.div`
  position: relative;
  z-index: 998;
  width: 60%;
  height: 100%;
  background-color: #fff;
  vertical-align: top;
  display: inline-flex;
  align-items: center;
  font-weight: bold;
  .menu {
    position: absolute;
    right: 30px;
    display: none;
    @media screen and (max-width: 800px) {
      display: block;
    }
    @media screen and (max-width: 500px) {
      right: 20px;
    }
    &.active {
      transform: rotate(-90deg);
      opacity: 0.6;
    }
  }
  img {
    width: 180px;
    margin-left: 180px;
    @media screen and (max-width: 1500px) {
      margin-left: 70px;
    }
    @media screen and (max-width: 800px) {
      margin-left: 0px;
    }
  }
  p {
    color: rgb(138, 43, 226, 0.7);
    margin-left: 20px;
  }
  span {
    color: lightseagreen;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    height: 100%;
    justify-content: center;
    padding: 10px 0px 10px 0px;
    border-bottom: 4px solid rgb(0, 0, 0, 0.1);
  }
  @media screen and (max-width: 500px) {
    p {
      font-size: 14px;
      position: absolute;
      &.visitor {
        top: 10px;
        left: 10px;
      }
      &.readoff {
        bottom: 10px;
        left: 10px;
      }
    }
  }
`
const NavMenu = styled.div`
  z-index: 997;
  position: relative;
  background-color: #fff;
  overflow: hidden;
  width: 40%;
  height: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: end;
  .mr {
    margin-right: 180px;
    @media screen and (max-width: 1500px) {
      margin-right: 70px;
    }
    @media screen and (max-width: 800px) {
      margin-right: 15px;
    }
  }
  @media screen and (max-width: 800px) {
    width: 90%;
    height: 100%;
    margin-left: 5%;
    margin-top: 15px;
    box-shadow: 2px 2px 6px 1px rgb(0, 0, 0, 0.2);
    background-color: #fff;
    border: 2px solid rgb(138, 43, 226, 0.7);
    border-radius: 15px;
    padding: 10px 0px 10px 0px;
    transform: translateY(${props => props.x});
    transition: 0.6s;
  }
`
const SearchBox = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    width: 0px;
    opacity: 0;
    height: 20px;
    font-size: 14px;
    padding-left: 10px;
    margin-right: 10px;
    border: 1.5px solid #aaa;
    border-radius: 12px;
    visibility: visible;
    transition: all 0.8s;
    &.active {
      width: 150px;
      opacity: 1;
      visibility: visible;
    }
  }
  input:focus {
    outline: none;
    border: 1.5px solid rgb(138, 43, 226, 0.7);
  }
  input:focus::placeholder {
    color: transparent;
  }
  input::placeholder {
    transition: all 0.4s;
    padding-left: 7px;
  }
`

// ADMIN CONTENT
const AdminBox = styled.div`
  padding-top: 150px;
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eee;
`
const ContactBox = styled.div`
  position: relative;
  z-index: 1;
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
  border: 2px solid #fff;
  box-shadow: 2px 2px 6px 1px rgb(0, 0, 0, 0.2);
  @media screen and (max-width: 1500px) {
    width: 46.7%;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 0px;
    margin-bottom: 50px;
  }
  &:hover {
    border: 2px solid rgb(138, 43, 226, 0.7);
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
  .pay {
    height: 50px;
  }
  p {
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(0, 0, 0, 0.2);
  }
  a {
    text-decoration: none;
    color: green;
    font-weight: bold;
    cursor: pointer;
  }
  .payitem {
    display: inline-block;
    background-color: rgb(138, 43, 226, 0.7);
    color: white;
    margin-right: 5px;
    margin-bottom: 5px;
    width: fit-content;
    height: fit-content;
    font-size: 12px;
    font-weight: bold;
    padding: 4px;
    border-radius: 5px;
  }
`

// SUB BUTTON
const DialBox = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 25px;
  right: 30px;
  
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
    transform: rotate(-315deg);
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

// MODAL
const DeleteBox = styled.div`
  z-index: 999;
  display: ${props => props.dp};
  border: 1px solid black;
  position: absolute;
  bottom: 40%;
  right: 25%;
  width: 50%;
  height: fit-content;
  border-radius: 15px;
  border: 1.5px solid #eee;
  box-shadow: 2px 2px 7px 0px rgb(0, 0, 0, 0.2);
  background-color: #fff;
  text-align: center;
  p{
    font-weight: bold;
    margin: 10px 0px 10px 0px;
  }
  input {
    width: 70%;
    margin: 0% 10% 0% 10%
  }
  input:focus {
    outline: none;
  }
  button {
    font-size: 13px;
    cursor: pointer;
    width: 50px;
    padding: 3px;
    background-color: rgb(138, 43, 226, 0.7);
    border-radius: 10px;
    color: white;
    border: none;
    margin: 10px 5px 10px 5px;
    transition: all 0.3s;
    &:hover {
      opacity: 0.6;
    }
  }

`

const MemoBox = styled.div`
  visibility: ${props => props.dp};
  width: 90%;
  height: 200px;
  background-color: #fff;
  border: 1.5px solid #eee;
  box-shadow: 2px 2px 7px 0px rgb(0, 0, 0, 0.2);
  border-radius: 20px;
  position: absolute;
  display: flex;
  justify-content: center;
  z-index: 999;
  bottom: 30%;
  right: 5%;
  .save {
    font-size: 30px;
    position: absolute;
    bottom: 5px;
    right: 45px;
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
    margin-top: 18px;
    width: 86%;
    height: 110px;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    resize: none;
    padding: 10px;
    border: 1px solid #eee;
    /* transform: rotate(0.03deg); */
  }
  textarea:focus {
    outline: none;
    border: 1px solid #eee;
  }
`
const MemoBadge = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  bottom: 28px;
  right: -3px;
  display: ${props => props.dp};
`
const MemoIcon = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  bottom:1px;
  right: 55px;
  font-size: 30px;
  position: absolute;
  cursor: pointer;
  color: rgb(138, 43, 226, 0.7);
`

const FileBox = styled.div`
  z-index: 999;
  display: ${props => props.dp};
  border: 1px solid black;
  position: absolute;
  top: 40%;
  right: 5%;
  width: 90%;
  min-height: 70px;
  border-radius: 15px;
  border: 1.5px solid #eee;
  box-shadow: 2px 2px 7px 0px rgb(0, 0, 0, 0.2);
  background-color: #fff;
  text-align: center;
  p {
    font-weight: bold;
    margin: 10px 0px 10px 0px;
  }
  .close {
    font-size: 30px;
    position: absolute;
    top: 5px;
    right: 5px;
    color: rgb(138, 43, 226, 0.7);
    cursor: pointer;
  }
`
const FileItem = styled.div`
  width: 100%;
  margin-bottom: 15px;
  a {
    width: fit-content;
    height: fit-content;
    text-decoration: none;
    background-color: rgb(138, 43, 226, 0.7);
    color: white;
    font-size: 13px;
    font-weight: bold;
    padding: 4px;
    border-radius: 6px;
  }
`

// SORT BUTTON
const SortBox = styled.div`
  z-index: 999;
  position: fixed;
  top: 103px;
  left: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  .icon {
    font-size: 35px;
    cursor: pointer;
    color: rgb(138, 43, 226, 0.7);
    @media screen and (max-width: 800px) {
      font-size: 30px;
    }
  }
  .z {
    z-index: 999;
  }
`
const SortItem = styled.div`
  z-index: 999;
  position: absolute;
  /* position: relative; */
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0.5px 0.5px 5px 1px rgb(0, 0, 0, 0.5);
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s;
  &.x1 {
    transform: translate(150%, 0px);
    opacity: 1;
    transition: all 0.4s;
  }
  &.x2 {
    transform: translate(300%, 0px);
    opacity: 1;
    transition: all 0.8s;
  }
  &.x3 {
    transform: translate(450%, 0px);
    opacity: 1;
    transition: all 1.2s;
  }
  &.x4 {
    transform: translate(600%, 0px);
    opacity: 1;
    transition: all 1.3s;
  }
  &.hide {
    z-index: 1;
    opacity: 0;
  }
  .active {
    transition: all 1.3s;
    transform: rotate(-180deg);
    opacity: 0.5;
  }
  .noneactive {
    opacity: 1;
    transition: all 1s;
    transform: rotate(180deg);
  }
  @media screen and (max-width: 800px) {
    
  }
`
const ItemBadge = styled.span`

  visibility: ${props => props.vi};
  position: absolute;
  font-size: 20px;
  top: -15px;
  right: -13px;
  color: lightseagreen;
  display: flex;
  align-items: center;
  justify-content: center;

`

// SEARCH NULL
const NullCompany = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 50vh;

  width: 40%;
  height: 50px;
  margin-left: 30%;

  box-shadow: 2px 2px 6px 1px rgb(0, 0, 0, 0.2);
  background-color: #fff;
  border: 2px solid rgb(138, 43, 226, 0.7);
  border-radius: 15px;

  font-weight: bold;
  font-size: 18px;
  @media screen and (max-width: 800px) {
    width: 90%;
    margin-left: 5%;
  }
`

const Admin = () => {

  // NAV
  const [showInput, setShowInput] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState('');

  // ADMIN
  const [active, setActive] = useState([]);
  const [memo, setMemo] = useState([]);
  const [showDelete, setShowDelete] = useState([]);
  const [showFile, setShowFile] = useState([]);

  const [memoText, setMemoText] = useState();
  const [password, setPassword] = useState();

  const [dataSort, setDataSort] = useState();
  const [sortActive, setSortActive] = useState(false);

  const today = new Date().getTime();
  const navigate = useNavigate();

  // QUERY
  const contactData = useQuery(['contactdata'], () =>
    axios.get('/contactdata').then((result) => {
      return result.data.sort((a, b) => {
        return b._id - a._id;
      })
    })
  );
  const findRead = contactData.data && contactData.data.filter(v => v.read === 'off');
  const searchFilter = contactData.data && contactData.data.filter((item) => {
    return item.company&&item.company.toUpperCase().includes(search&&search.toUpperCase());
  });
  const countData = useQuery(['countdata'], () => 
    axios.get('/todaycount').then((result) => {
      return result.data;
    })
  );

  // PRINT
  var prtContent;
  var initBody;
  function startPrint(id) {
    prtContent = document.getElementById(id);
    window.onbeforeprint = beforePrint;
    window.onafterprint = afterPrint;
    window.print();
  }
  function beforePrint() {
    initBody = document.body.innerHTML;
    document.body.innerHTML = prtContent.innerHTML;
  }
  function afterPrint() {
    document.body.innerHTML = initBody;
  }

  // HANDLE
  const handleMemo = (e) => {
    setMemoText(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  // SORT
  const newOrder = () => {
    searchFilter && searchFilter.sort((a, b) => {
      return b._id - a._id;
    });
  }
  const oldOrder = () => {
    searchFilter && searchFilter.sort((a, b) => {
      return a._id - b._id;
    });
  }
  const highMax = () => {
    searchFilter && searchFilter.sort((a, b) => {
      return b.max - a.max;
    });
  }
  const lowMax = () => {
    searchFilter && searchFilter.sort((a, b) => {
      return a.max - b.max;
    });
  }
  if (dataSort === 'new') {
    newOrder();
  } else if (dataSort === 'old') {
    oldOrder();
  } else if (dataSort === 'high') {
    highMax()
  } else if (dataSort === 'low') {
    lowMax()
  } else {
    newOrder();
  }

  // INITIALIZE
  useEffect(() => {
    const copyActive = [];
    const copyMemo = [];
    const copyDelete = [];
    const copyFile = [];
    for (let i = 0; i < contactData && contactData.length; i++) {
      copyActive.push(false);
      copyMemo.push(false);
      copyDelete.push(false);
      copyFile.push(false);
    };
    setShowDelete(copyDelete);
    setActive(copyActive);
    setMemo(copyMemo);
    setShowFile(copyFile);
  }, [])

  // 방문자 카운터
  const getCookie = (name) => (
    document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
  )

  const platformCheck = () => {
    const filter = "win16|win32|win64|mac|macintel";
    if(0>filter.indexOf(navigator.platform.toLowerCase())){
      return 'Mobile';
    }else{
      return 'PC';
    }
  }
  const cookieCount = () => {
    axios.post('/count', { platform : platformCheck().toString() });
    document.cookie = 'cookieCheck=true'
  };
  useEffect(()=>{
    if(getCookie('cookieCheck') == 'true') {
      document.cookie = `cookieCheck=true; Max-Age=${60 * 60 * 24}`; 
    } else {
      cookieCount();
    }
  },[]);

  return (
    <>
      <AdminBox>
        <NavBox>
          <NavLogo>
            <img src="sample2.png" alt="logo" />
            <p className="visitor">방문자<span>&nbsp;{countData.data && countData.data.total}명</span></p>
            <p className="readoff">미확인<span>&nbsp;{findRead && findRead.length}건</span></p>
            <MdMenu className={'icon menu ' + `${showSearch ? 'active' : null}`} onClick={() => { setShowSearch(!showSearch) }}/>
          </NavLogo>
          <NavMenu x={showSearch ? '0%' : '-150%'}>
            <SearchBox>
              <input type="text" className={showInput ? 'active' : null} onChange={handleSearch} placeholder="업체명을 입력하세요"/>
              <MdSearch className="icon" onClick={() => { setShowInput(!showInput) }} />
            </SearchBox>
            <MdPowerSettingsNew className="icon mr" onClick={() => {
              navigate('/login')
            }} />
          </NavMenu>
        </NavBox>
        <SortBox>
          
          <SortItem className="z">
            <MdOutlineChangeCircle className={'icon ' + `${sortActive ? 'active' : 'noneactive'}`} onClick={() => { setSortActive(!sortActive) }} />
          </SortItem>

          <SortItem className={sortActive ? 'x1' : 'hide'}>
            <MdOutlineWatchLater className="icon" onClick={() => { setDataSort('new'); setSortActive(!sortActive); }}/>
            <ItemBadge vi={sortActive ? 'visible' : 'hidden'}><MdNorth/></ItemBadge>
          </SortItem>

          <SortItem className={sortActive ? 'x2' : 'hide'}>
            <MdOutlineWatchLater className="icon" onClick={() => { setDataSort('old'); setSortActive(!sortActive); }}/>
            <ItemBadge vi={sortActive ? 'visible' : 'hidden'}><MdSouth/></ItemBadge>
          </SortItem>

          <SortItem className={sortActive ? 'x3' : 'hide'}>
            <MdOutlineMonetizationOn className="icon" onClick={() => { setDataSort('high'); setSortActive(!sortActive); }}/>
            <ItemBadge vi={sortActive ? 'visible' : 'hidden'}><MdNorth/></ItemBadge>
          </SortItem>

          <SortItem className={sortActive ? 'x4' : 'hide'}>
            <MdOutlineMonetizationOn className="icon" onClick={() => { setDataSort('low'); setSortActive(!sortActive); }}/>
            <ItemBadge vi={sortActive ? 'visible' : 'hidden'}><MdSouth/></ItemBadge>
          </SortItem>

        </SortBox>

        <ContactBox>
          {
            searchFilter && searchFilter.map((item, i) => {
              return (
                <ContactItem key={i} id={i}>

                  <ContentBox>
                    <p><span className="bold">발신일</span>{item.date}</p>
                    <p><span className="bold">업체명</span>{item.company}</p>
                    <p><span className="bold">사업자 등록번호</span>{item.bn}</p>
                    <p><span className="bold">연락처</span>{item.phone}</p>
                    <p><span className="bold">업종</span>{item.category}</p>
                    <p><span className="bold">업종 기타내용</span>{item.another}</p>
                    <p className="pay">
                      <span className="bold">결제수단</span>
                      {
                        item.payment.map((item, i) => {
                          return (
                            <span key={i} className="payitem">{item}</span>
                          )
                        })
                      }
                    </p>
                    <p><span className="bold">카드결제API URL</span><a onClick={() => { window.open(`${'http://' + item.url}`); }}>{item.url}</a></p>
                    <p><span className="bold">월 한도</span>{item.max + '백만원'}</p>
                    <p>
                      <span className="bold">첨부파일</span>
                      {
                        item.saveFileName && item.saveFileName.length > 0
                          ? <>O</>
                          : <>X</>
                      }
                    </p>
                    <p>
                      <span className="bold">개인정보 폐기일</span>
                      {
                        'D - ' + Math.floor(((parseInt(item.destructionDate) - today) / 86400000))
                      }
                    </p>
                  </ContentBox>

                  <DialBox>
                    <MdAddCircle className={'icon z' + `${active[i] ? ' active' : ''}`} onClick={() => {
                      var copy = [...active];
                      copy[i] = !active[i];
                      setActive(copy);
                    }} />
                    <MdLocalPhone className={'icon zz' + `${active[i] ? ' y4' : ' hide'}`} onClick={() => { document.location.href = `tel:${item.phone}`; }} />
                    <MdOutlineFileDownload className={'icon zz' + `${active[i] ? ' y3' : ' hide'}`} onClick={() => {

                      if (item.saveFileName && item.saveFileName.length > 0) {
                        var copyShowFile = [...showFile];
                        copyShowFile[i] = !showFile[i];
                        setShowFile(copyShowFile);
                      } else {
                        alert('첨부파일이 없습니다');
                      }

                    }} />
                    <MdPrint className={'icon zz' + `${active[i] ? ' y2' : ' hide'}`} onClick={() => {
                      startPrint(i);
                      window.location.replace('/admin');
                    }} />
                    <MdDeleteForever className={'icon zz' + `${active[i] ? ' y1' : ' hide'}`} onClick={() => {
                      var copyShowDelete = [...showDelete];
                      copyShowDelete[i] = !showDelete[i];
                      setShowDelete(copyShowDelete);
                    }} />
                  </DialBox>

                  <ToggleBox>
                    {
                      item.read === 'off'
                        ? <><MdOutlineToggleOff className="icon" onClick={() => {
                          axios.post('/readon', {
                            no: item._id
                          }).then((result) => {
                            alert(result.data);
                          }).catch((error) => {
                            alert(error);
                          });
                        }} /><span>미확인</span></>
                        : <><MdOutlineToggleOn className="icon on" onClick={() => {
                          axios.post('/readoff', {
                            no: item._id
                          }).then((result) => {
                            alert(result.data);
                          }).catch((error) => {
                            alert(error);
                          });
                        }} /><span className="on">확인</span></>
                    }
                  </ToggleBox>

                  <MemoIcon>
                    <MdMessage onClick={() => {
                      var copymemo = [...memo];
                      copymemo[i] = !memo[i];
                      setMemo(copymemo);
                    }} />
                    <MemoBadge dp={item.memo && item.memo.length > 0 ? 'block' : 'none'} />
                  </MemoIcon>

                  <MemoBox dp={memo[i] ? 'visible' : 'hidden'}>
                    <textarea onChange={handleMemo} defaultValue={item.memo} />
                    <MdOutlineCheck className="save" onClick={() => {
                      axios.post('/writememo', {
                        no: item._id,
                        text: memoText
                      }).then((result) => {
                        alert(result.data);
                        var copymemo = [...memo];
                        copymemo[i] = !memo[i];
                        setMemo(copymemo);
                      }).catch((error) => {
                        alert(error);
                      });
                    }} />
                    <MdClose className="close" onClick={() => {
                      var copymemo = [...memo];
                      copymemo[i] = !memo[i];
                      setMemo(copymemo);
                    }} />
                  </MemoBox>

                  <DeleteBox dp={showDelete[i] ? 'block' : 'none'}>
                    <p>비밀번호</p>
                    <input type="password" onChange={handlePassword} />
                    <button onClick={() => {
                      axios.delete('/delete', {
                        data: {
                          no: item._id,
                          password: password
                        }
                      }).then((result) => {

                        if (result.data === '삭제 완료') {
                          alert(result.data);
                          var copyShowDelete = [...showDelete];
                          copyShowDelete[i] = !showDelete[i];
                          setShowDelete(copyShowDelete);
                        } else if (result.data === '비밀번호가 틀렸습니다') {
                          alert(result.data);
                        } else {
                          alert('서버 오류 발생');
                        }
                      }).catch((error) => {
                        alert(error);
                      });
                    }}>삭제</button>
                    <button onClick={() => {
                      var copyShowDelete = [...showDelete];
                      copyShowDelete[i] = !showDelete[i];
                      setShowDelete(copyShowDelete);
                    }}>취소</button>
                  </DeleteBox>

                  <FileBox dp={showFile[i] ? 'block' : 'none'}>
                    <p>파일 목록</p>
                    <MdClose className="close" onClick={() => {
                      var copyShowFile = [...showFile];
                      copyShowFile[i] = !showFile[i];
                      setShowFile(copyShowFile);
                    }} />
                    {
                      item.saveFileName && item.saveFileName.map((item, i) => {
                        return (
                          <FileItem key={i}><a href={'/download/' + `${item}`} download>{item}</a></FileItem>
                        )
                      })
                    }
                  </FileBox>
                </ContactItem>
              )
            })
          }

        </ContactBox>

      </AdminBox>
      {
        searchFilter && searchFilter.length === 0
        ? <NullCompany>일치하는 업체명이 존재하지 않습니다</NullCompany>
        : null
      }
    </>
  )
};

export default Admin;