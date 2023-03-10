import styled from "styled-components";
import { MdOutlineToggleOff, MdOutlineToggleOn, MdAddCircle, MdLocalPhone, MdOutlineFileDownload, MdPrint, MdDeleteForever, MdLogout, MdClose, MdOutlineCheck, MdMessage  } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";

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
const DeleteBox = styled.div`
  z-index: 999;
  display: ${props=>props.dp};
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

const MemoBadge = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  bottom: 28px;
  right: -3px;
  display: ${props=>props.dp};
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
const MemoBox = styled.div`
  visibility: ${props=>props.dp};
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
  }
  textarea:focus {
    outline: none;
    border: 1px solid #eee;
  }
`
const FileBox = styled.div`
  z-index: 999;
  display: ${props=>props.dp};
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
const Admin = (props) => {

  const [active, setActive] = useState([]);
  const [memo, setMemo] = useState([]);
  const [showDelete, setShowDelete] = useState([]);
  const [showFile, setShowFile] = useState([]);
  const [memoText, setMemoText] = useState();
  const [password, setPassword] = useState();
  const [test, setTest] = useState(2);
  const today = new Date().getTime();
  const dbdata = props.contactData;
  // dbdata && dbdata.sort((a, b)=>{
  //   return b._id - a._id;
  // });
  
  var prtContent;
  var initBody;
  function startPrint (id) {
    prtContent = document.getElementById(id);
    window.onbeforeprint = beforePrint;
    window.onafterprint = afterPrint;
    window.print();
  }
  function beforePrint(){
    initBody = document.body.innerHTML;
    document.body.innerHTML = prtContent.innerHTML;
  }
  function afterPrint(){
    document.body.innerHTML = initBody;
  }

  const handleMemo = (e) => {
    setMemoText(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  useEffect(()=>{
    const copyActive = [];
    const copyMemo = [];
    const copyDelete = [];
    const copyFile = [];
    for(let i=0; i<dbdata&&dbdata.length; i++){
      copyActive.push(false);
      copyMemo.push(false);
      copyDelete.push(false);
      copyFile.push(false);
    };
    setShowDelete(copyDelete);
    setActive(copyActive);
    setMemo(copyMemo);
    setShowFile(copyFile);
  },[])
  const cg1 = () => {
    dbdata && dbdata.sort((a, b)=>{
      return a._id - b._id;
    });
  }

  const cg2 = () => {
    dbdata && dbdata.sort((a, b)=>{
      return b._id - a._id;
    });
  }
 useEffect(()=>{
  if(test == 1) {
    cg1()
  } else if(test == 2) {
    cg2()
  }
 },[test]); 
  return (

    <AdminBox>

      <Logout>
        <MdLogout/>
      </Logout>

      <ContactBox>
      
      {
        dbdata&&dbdata.map((item, i)=>{
          return(
            <ContactItem key={i} id={i}>

              <ContentBox>
                <p><span className="bold">?????????</span>{item.date}</p>
                <p><span className="bold">?????????</span>{item.company}</p>
                <p><span className="bold">????????? ????????????</span>{item.bn}</p>
                <p><span className="bold">?????????</span>{item.phone}</p>
                <p><span className="bold">??????</span>{item.category}</p>
                <p><span className="bold">?????? ????????????</span>{item.another}</p>
                <p className="pay">
                  <span className="bold">????????????</span>
                  {
                    item.payment.map((item, i)=>{
                      return (
                        <span className="payitem">{item}</span>
                      )
                    })
                  }
                </p>
                <p><span className="bold">????????????API URL</span><a onClick={() => { window.open(`${item.url}`); }}>{item.url}</a></p>
                <p><span className="bold">??? ??????</span>{item.max}</p>
                <p>
                  <span className="bold">????????????</span>
                  {
                    item.saveFileName&&item.saveFileName.length > 0
                    ? <>O</>
                    : <>X</>
                  }
                </p>
                <p>
                  <span className="bold">???????????? ?????????</span>
                  {
                    'D - ' + Math.floor(((parseInt(item.destructionDate) - today) / 86400000))
                  }
                </p>
              </ContentBox>

              <DialBox>
                <MdAddCircle className={'icon z' + `${active[i] ? ' active' : ''}`} onClick={()=>{
                  var copy = [...active];
                  copy[i] = !active[i];
                  setActive(copy);
                }}/>
                <MdLocalPhone className={'icon zz' + `${active[i] ? ' y4' : ' hide'}`} onClick={()=>{document.location.href=`tel:${item.phone}`;}}/>
                <MdOutlineFileDownload className={'icon zz' + `${active[i] ? ' y3' : ' hide'}`} onClick={()=>{
                  
                  if(item.saveFileName&&item.saveFileName.length > 0) {
                    var copyShowFile = [...showFile];
                    copyShowFile[i] = !showFile[i];
                    setShowFile(copyShowFile);
                  } else {
                    alert('??????????????? ????????????');
                  }

                }}/>
                <MdPrint className={'icon zz' + `${active[i] ? ' y2' : ' hide'}`} onClick={()=>{
                  startPrint(i);
                  window.location.replace('/admin');
                }}/>
                <MdDeleteForever className={'icon zz' + `${active[i] ? ' y1' : ' hide'}`} onClick={()=>{
                  var copyShowDelete = [...showDelete];
                  copyShowDelete[i] = !showDelete[i];
                  setShowDelete(copyShowDelete);
                }}/>
              </DialBox>

              <ToggleBox>
                {
                  item.read === 'off'
                  ? <><MdOutlineToggleOff className="icon" onClick={()=>{
                    axios.post('http://localhost:8080/readon', {
                      no : item._id
                    }).then((result) => { 
                      alert(result.data);
                      window.location.replace('/admin');
                    }).catch((error) => {
                      alert(error);
                    });
                  }}/><span>?????????</span></>
                  : <><MdOutlineToggleOn className="icon on" onClick={()=>{
                    axios.post('http://localhost:8080/readoff', {
                      no : item._id
                    }).then((result) => {
                      alert(result.data);
                      window.location.replace('/admin')
                    }).catch((error) => {
                      alert(error);
                    });
                  }}/><span className="on">??????</span></>
                }
              </ToggleBox>

              <MemoIcon>
                <MdMessage onClick={()=>{
                  var copymemo = [...memo];
                  copymemo[i] = !memo[i];
                  setMemo(copymemo);
                }}/>
                <MemoBadge dp={item.memo && item.memo.length > 0 ? 'block' : 'none'}/>
              </MemoIcon>

              <MemoBox dp={memo[i] ? 'visible' : 'hidden'}>
                <textarea onChange={handleMemo} defaultValue={item.memo}/>
                <MdOutlineCheck className="save" onClick={()=>{
                  axios.post('http://localhost:8080/writememo', {
                    no : item._id,
                    text : memoText
                  }).then((result) => {
                    alert(result.data);
                    window.location.replace('/admin')
                  }).catch((error) => {
                    alert(error);
                  });
                }}/>
                <MdClose className="close" onClick={()=>{
                  var copymemo = [...memo];
                  copymemo[i] = !memo[i];
                  setMemo(copymemo);
                }}/>
              </MemoBox>

              <DeleteBox dp={showDelete[i] ? 'block' : 'none'}>
                <p>????????????</p>
                <input type="password" onChange={handlePassword}/>
                <button onClick={()=>{
                  axios.delete('http://localhost:8080/delete', {
                    data : {
                      no : item._id,
                      password : password
                    }
                  }).then((result) => {
                     
                    if(result.data === '?????? ??????') {
                      alert(result.data);
                      window.location.replace('/admin')
                    } else if( result.data === '??????????????? ???????????????') {
                      alert(result.data);
                    } else {
                      alert('?????? ?????? ??????');
                    }
                  }).catch((error) => {
                    alert(error);
                  });
                }}>??????</button>
                <button onClick={()=>{
                  var copyShowDelete = [...showDelete];
                  copyShowDelete[i] = !showDelete[i];
                  setShowDelete(copyShowDelete);
                }}>??????</button>
              </DeleteBox>

              <FileBox dp={showFile[i] ? 'block' : 'none'}>
                <p>?????? ??????</p>
                <MdClose className="close" onClick={()=>{
                  var copyShowFile = [...showFile];
                  copyShowFile[i] = !showFile[i];
                  setShowFile(copyShowFile);
                }}/>
                {
                  item.saveFileName&&item.saveFileName.map((item, i)=>{
                    return (
                      <FileItem><a href={'http://localhost:8080/download/' + `${item}`} download>{item}</a></FileItem>
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
  )
};

export default Admin;