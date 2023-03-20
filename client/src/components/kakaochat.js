import { useEffect } from "react";
import styled from "styled-components";

const KakaoBox = styled.div`
  position: fixed;
  bottom: 45px;
  right: 30px;
`

const KakaoChat = () => {

  useEffect(()=>{
    const script = document.createElement('script');
    script.async = true;
    try{
      if (window.Kakao) {
        const kakao = window.Kakao;
        if (!kakao.isInitialized()) {
          kakao.init("363e0a1e53c4fc3a67529bd5441a090e");
        }
      }

    window.Kakao.Channel.createChatButton({
      container: '#kakao-talk-channel-chat-button',
      channelPublicId: '_IgLkxj',
      title: 'consult',
      size: 'small',
      color: 'yellow',
      shape: 'pc',
      supportMultipleDensities: true,
    });
    document.body.appendChild(script);
    
    return () => document.body.removeChild(script);
  } catch (err){}
  }, [])
  return (
    <KakaoBox>
      <div id="kakao-talk-channel-chat-button"/>
    </KakaoBox> 
  )
};


export default KakaoChat;