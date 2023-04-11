import styled from "styled-components";

const FooterBox = styled.div`
  z-index: 999;
  position: fixed;
  width: 100%;
  height: fit-content;
  bottom: 0px;
  background-color: rgb(150, 150, 150, 0.2);
  color: rgb(173, 106, 235);
  overflow-x: hidden;
  overflow-y: hidden;
  font-weight: bold;
  font-size: 12px;
  .animated-title {
    position: relative;
    width: 100%;
    max-width:100%;
    height: 2.5vh;
    display: flex;
    align-items: center;
    overflow-x: hidden;
    overflow-y: hidden;
  }
  .track {
    letter-spacing: 1px;
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