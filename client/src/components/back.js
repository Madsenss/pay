import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BackBox = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #aaa;
  color: #fff;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    background-color: transparent;
    color: black;
    transform: translateX(-10px);
  }
`

const Back = () => {
  const navigate = useNavigate();
  return (
    <BackBox>
      <MdArrowBack onClick={()=>{navigate(-1)}}/>
    </BackBox>
  )
};

export default Back;