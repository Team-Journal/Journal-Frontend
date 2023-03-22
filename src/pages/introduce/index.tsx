import React from "react";
import styled, { keyframes } from "styled-components";
import Header from "../../components/main-header";
import AppLogo from "../../assets/svgs/app_logo.svg";
import phone from "../../assets/svgs/phone.svg";
import { useNavigate } from "react-router-dom";
import useTitle from "../../hooks/title";

const Introduce = () => {
  const navigate = useNavigate();

  const titleUpdater = useTitle("불러오는 중...");
  setTimeout(() => titleUpdater("공유몽 - Journals"));

  return (
    <Container>
      <Header />
      <IntroduceContainer>
        <FisrtSection>
          <TextContainer>
            <Info>꿈을 기록하다.</Info>
            <LogoText>공유몽</LogoText>
          </TextContainer>
          <Right>
            <img src={AppLogo} alt="앱 로고" />
          </Right>
        </FisrtSection>
        <SecondSection>
          <TextContainer>
            <FirstDesc>온라인 꿈 기록 커뮤니티 플랫폼</FirstDesc>
            <LogoText>공유몽</LogoText>
            <SecondDesc>
              나만의 특별한 기억을 적을 수 있어요! <br /> <br />
              친구들과 소통해 꿈을 극대화 해보세요!
            </SecondDesc>
          </TextContainer>
          <Right>
            <Phone src={phone} alt="공유몽 모바일" />
          </Right>
        </SecondSection>
        <ThirdSection>
          <TextContainer>
            <StartText>그럼 시작해볼까요?</StartText>
          </TextContainer>
          <br />
          <StartBtn onClick={() => navigate("/community")}>둘러보기</StartBtn>
        </ThirdSection>
      </IntroduceContainer>
    </Container>
  );
};

export default Introduce;

const StartBtn = styled.button`
  width: 170px;
  height: 60px;
  font-size: 20px;
  border-radius: 30px;
  border: none;
  background-color: #abb2ef;
  color: white;
  font-weight: 600;
  margin-top: 100px;
  transition: opacity 0.8s ease-in-out;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const easeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
  }
`;

const StartText = styled.p`
  font-size: 55px;
  font-weight: 650;
  margin: 0;
`;

const Phone = styled.img`
  width: 400px;
  height: 700px;
  margin-top: -150px;
`;

const SecondDesc = styled.p`
  font-size: 20px;
  font-weight: 650;
`;

const FirstDesc = styled.p`
  font-size: 40px;
`;

const Right = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
`;

const LogoText = styled.p`
  font-size: 100px;
  font-family: "Dovemayo_gothic";
  margin-top: -30px;
  animation: ${easeIn} 1.5s ease-in;
`;

const Container = styled.div`
  width: 100%;
`;

const TextContainer = styled.div``;

const Info = styled.p`
  font-size: 45px;
`;

const IntroduceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ThirdSection = styled.div`
  width: 1200px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SecondSection = styled.div`
  width: 1200px;
  height: 100vh;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FisrtSection = styled.div`
  width: 1200px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
