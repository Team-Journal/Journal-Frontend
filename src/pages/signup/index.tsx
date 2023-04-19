import styled from "styled-components";
import MainHeader from "../../components/main-header";
import text from "../../assets/svgs/text_logo.svg";
import SignupForm from "../../components/Signup";
import useTitle from "../../hooks/title";

const Signup = () => {
  const titleUpdater = useTitle("불러오는 중...");
  setTimeout(() => titleUpdater("회원가입 - 공유몽"));

  return (
    <div>
      <MainHeader />
      <Container>
        <TextImage src={text} alt="텍스트" />
        <Desc>공유몽에 가입하면 더 많은 혜택을 누릴 수 있어요!</Desc>
      </Container>
      <FormContainer>
        <SignupForm />
      </FormContainer>
      <Space />
    </div>
  );
};

export default Signup;

const Space = styled.div`
  height: 200px;
`;

const FormContainer = styled.div`
  display: flex;
  margin-top: 300px;
  justify-content: center;
`;

const Desc = styled.p`
  font-size: 20px;
`;

const TextImage = styled.img`
  margin-top: 129px;
`;

const Container = styled.div`
  width: 392px;
  height: 75px;
  margin: 0 auto;
`;
