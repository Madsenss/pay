import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavBox = styled.div`
  width: 100%;
  height: 70px;
  background-color: transparent;
  position: fixed;
  display: flex;
  align-items: center;
`
const NavLogo = styled.div`
  width: 20%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 200px;
  img {
    cursor: pointer;
    width: 180px;
  }

`
const NavMenu = styled.div`
  width: 80%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 200px;
  p {
    cursor: pointer;
    font-size: 16px;
    padding: 0px 15px 0px 15px;
  }
`
const Nav = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBox>
        <NavLogo>
          <img src="sample2.png" alt="logo" onClick={()=>{(navigate('/'))}}/>
        </NavLogo>
        <NavMenu className="right">
          <p>회사 소개</p>
          <p onClick={()=>{navigate('/contact')}}>빠른 상담</p>
        </NavMenu>
      </NavBox>
    </>
  )
};

export default Nav;
