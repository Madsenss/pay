import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavBox = styled.div`
  z-index: 999;
  width: 100%;
  height: 50px;
  background-color: transparent;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    cursor: pointer;
    width: 150px;
  }
`
const Nav = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBox>
        <img src="slp.png" alt="logo" onClick={()=>{(navigate('/'))}}/>
      </NavBox>
    </>
  )
};

export default Nav;
