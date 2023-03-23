// import styled from "styled-components";
// import { MdSearch, MdPowerSettingsNew, MdMenu } from "react-icons/md";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useQuery } from "@tanstack/react-query";
// // rgb(138, 43, 226, 0.7);
// const NavBox = styled.div`
//   z-index: 999;
//   width: 100%;
//   height: 60px;
//   position: fixed;
//   border-bottom: 4px solid rgb(0, 0, 0, 0.1);
//   .icon {
//     font-size: 28px;
//     cursor: pointer;
//     color: rgb(138, 43, 226, 0.7);
//     margin-right: 10px;
//     transition: all 0.3s;
//     &:hover {
//       opacity: 0.6;
//     }
//   }
//   @media screen and (max-width: 800px) {
//     height: fit-content;
//     border: none;
//   }
// `
// const NavLogo = styled.div`
//   position: relative;
//   z-index: 998;
//   width: 60%;
//   height: 100%;
//   background-color: #fff;
//   vertical-align: top;
//   display: inline-flex;
//   align-items: center;
//   font-weight: bold;
//   .menu {
//     position: absolute;
//     right: 30px;
//     display: none;
//     @media screen and (max-width: 800px) {
//       display: block;
//     }
//     @media screen and (max-width: 500px) {
//       right: 20px;
//     }
//     &.active {
//       transform: rotate(-90deg);
//       opacity: 0.6;
//     }
//   }
//   img {
//     width: 180px;
//     margin-left: 180px;
//     @media screen and (max-width: 1500px) {
//       margin-left: 70px;
//     }
//     @media screen and (max-width: 800px) {
//       margin-left: 0px;
//     }
//   }
//   p {
//     color: rgb(138, 43, 226, 0.7);
//     margin-left: 20px;
//   }
//   span {
//     color: lightseagreen;
//   }
//   @media screen and (max-width: 800px) {
//     width: 100%;
//     justify-content: center;
//     padding: 10px 0px 10px 0px;
//     border-bottom: 4px solid rgb(0, 0, 0, 0.1);
//   }
//   @media screen and (max-width: 500px) {
//     p {
//       font-size: 14px;
//       position: absolute;
//       &.visitor {
//         top: 10px;
//         left: 10px;
//       }
//       &.readoff {
//         bottom: 10px;
//         left: 10px;
//       }
//     }
//   }
// `
// const NavMenu = styled.div`
//   z-index: 997;
//   position: relative;
//   background-color: #fff;
//   overflow: hidden;
//   width: 40%;
//   height: 100%;
//   display: inline-flex;
//   align-items: center;
//   justify-content: end;
//   .mr {
//     margin-right: 180px;
//     @media screen and (max-width: 1500px) {
//       margin-right: 70px;
//     }
//     @media screen and (max-width: 800px) {
//       margin-right: 15px;
//     }
//   }
//   @media screen and (max-width: 800px) {
//     width: 90%;
//     margin-left: 5%;
//     margin-top: 15px;
//     box-shadow: 2px 2px 6px 1px rgb(0, 0, 0, 0.2);
//     background-color: #fff;
//     border: 2px solid rgb(138, 43, 226, 0.7);
//     border-radius: 15px;
//     padding: 10px 0px 10px 0px;
//     transform: translateY(${props => props.x});
//     transition: 0.6s;
//   }
// `
// const SearchBox = styled.div`
//   width: fit-content;
//   height: fit-content;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   input {
//     width: 0px;
//     opacity: 0;
//     height: 20px;
//     font-size: 14px;
//     padding-left: 10px;
//     margin-right: 10px;
//     border: 1.5px solid #aaa;
//     border-radius: 12px;
//     visibility: visible;
//     transition: all 0.8s;
//     &.active {
//       width: 180px;
//       opacity: 1;
//       visibility: visible;
//     }
//   }
//   input:focus {
//     outline: none;
//   }
// `

// const AdminNav = () => {
//   const [showInput, setShowInput] = useState(false);
//   const [showSearch, setShowSearch] = useState(false);
//   const navigate = useNavigate();

//   const count = useQuery(['dbdata2'], () =>
//     axios.get('http://localhost:8080/contactdata').then((result) => {
//       return result.data
//     })
//   );
//   const findRead = count.data&&count.data.filter(v => v.read === 'off');
//   return (
//     <NavBox>

//       <NavLogo>
//         <img src="sample.png" alt="logo"/>
//         <p className="visitor">방문자<span>&nbsp;1명</span></p>
//         <p className="readoff">미확인<span>&nbsp;{findRead&&findRead.length}건</span></p>
//         <MdMenu className={'icon menu ' + `${showSearch ? 'active' : null}`} onClick={()=>{setShowSearch(!showSearch)}}>TEST`</MdMenu>
//       </NavLogo>

//       <NavMenu x={showSearch ? '0%' : '-150%'}> 
//         <SearchBox>
//           <input type="text" className={showInput ? 'active' : null}/>
//           <MdSearch className="icon" onClick={()=>{setShowInput(!showInput)}}/>
//         </SearchBox>
//         <MdPowerSettingsNew className="icon mr" onClick={()=>{
//           navigate('/login')
//         }}/>
//       </NavMenu>

//     </NavBox>
//   )
// };

// export default AdminNav;