import axios from "axios";

const Login = () => {
  return (
    <>
      <button onClick={()=>{
        axios.post('http://localhost:8080/login', {
          id : 'koon',
          password : 'qAWSED12!'
        }).then((result) => {
          alert(result.data);
        }).catch((error) => {
          alert(error);
        })
      }}>로그인</button>
      <form method="POST" action="http://localhost:8080/login">
        <input type="text" name="id"/>
        <input type="text" name="password"/>
        <button type="submit">FORM로그인</button>
      </form>
      
    </>
  )
};

export default Login;