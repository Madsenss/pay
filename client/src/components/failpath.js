import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FailPath = () => {
  const navigate = useNavigate();
  const back = () => {
    alert('경로가 올바르지 않습니다');
    navigate('/');
  }
  useEffect(()=>{
    back();
  })
}
export default FailPath;