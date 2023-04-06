import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Fail = () => {
  const navigate = useNavigate();
  const back = () => {
    alert('아이디 혹은 비밀번호가 일치하지 않습니다');
    navigate('/login');
  }
  useEffect(()=>{
    back();
  })
}
export default Fail;