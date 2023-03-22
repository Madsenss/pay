import styled from "styled-components";
import { MdSearch, MdPowerSettingsNew } from "react-icons/md";
// rgb(138, 43, 226, 0.7);
const NavBox = styled.div`
  z-index: 999;
  width: 100%;
  height: 70px;
  position: fixed;
  background-color: #fff;
  border-bottom: 1px solid #aaa;
`
const NavLogo = styled.div`
  width: 50%;
  height: 100%;

  display: inline-block;
  vertical-align: top;
  display: inline-flex;
  align-items: center;
`
const NavMenu = styled.div`
  width: 50%;
  height: 100%;

  display: inline-flex;
  align-items: center;
  justify-content: end;

`
const SearchBox = styled.div`
  width: fit-content;
  height: fit-content;
  border: 1px solid green;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    width: 200px;
  }
`

const AdminNav = () => {

  return (
    <NavBox>
      <NavLogo>
        <p>UNOPAY</p>
      </NavLogo>

      <NavMenu> 


        <SearchBox>
          <input type="text"/>
          <MdSearch className="icon"/>
        </SearchBox>

        <MdPowerSettingsNew className="icon"/>
      </NavMenu>

    </NavBox>
  )
};

export default AdminNav;