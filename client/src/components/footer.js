import styled from "styled-components";

const FooterBox = styled.div`
  position: fixed;
  width: 100%;
  height: fit-content;
  bottom: 0px;
  background-color: rgb(138, 43, 226, 0.7);
  color: rgb(0, 255, 0, 1);
  font-weight: bold;

  .animated-title {
    position: relative;
    width: 100%;
    max-width:100%;
    height: 25px;
    display: flex;
    align-items: center;
    overflow-x: hidden;
    overflow-y: hidden;
  }
  .track {
    position: absolute;
    white-space: nowrap;
    animation: marquee 60s linear infinite;
    &:hover {
    animation: none;
  } 
  }
  @keyframes marquee {
    from { transform: translateX(0%); }
    to { transform: translateX(-50%); }
  }

`
const Footer = () => {
  return (
    <FooterBox>
      <div class="animated-title">
        <div class="track">
          © 2023 UnoPay. All rights reserved. 
          Designed by Madsens 
          © 2023 UnoPay. All rights reserved. 
          Designed by Madsens
          © 2023 UnoPay. All rights reserved. 
          Designed by Madsens
          © 2023 UnoPay. All rights reserved. 
          Designed by Madsens
          © 2023 UnoPay. All rights reserved. 
          Designed by Madsens
          © 2023 UnoPay. All rights reserved. 
          Designed by Madsens
          © 2023 UnoPay. All rights reserved. 
          Designed by Madsens
          © 2023 UnoPay. All rights reserved. 
          Designed by Madsens
          © 2023 UnoPay. All rights reserved. 
          Designed by Madsens
          © 2023 UnoPay. All rights reserved. 
          Designed by Madsens
        </div>
      </div>
    </FooterBox>
  )
};

export default Footer;