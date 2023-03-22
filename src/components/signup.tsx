import styled from "styled-components";

const SignupForm = () => {
  return (
    <form>
      <EmailContainer>
        <EmailInput placeholder="name@example.com" type="email" />
        <CodeSubmitBtn>코드 발송</CodeSubmitBtn>
      </EmailContainer>
      <Container>
        <VerifyCodeInput
          placeholder="인증 코드를 입력해주세요."
          type="number"
          autoFocus
          required
        />
        <PasswordInput placeholder="비밀번호를 입력해주세요." type="password" />
        <PasswordCheckInput
          placeholder="비밀번호를 다시 입력해주세요."
          type="password"
        />
        <BtnContainer>
            <ContinueBtn>계속</ContinueBtn>
        </BtnContainer>
      </Container>
    </form>
  );
};

export default SignupForm;

const BtnContainer = styled.div`
    width: 101px;
    height: 55px;
    margin: 0 auto;
`

const ContinueBtn = styled.button`
    width: 101px;
    height: 55px;
    background-color: rgba(171, 178, 239, 1);
    font-size: 20px;
    border-radius: 7px;
    color: white;
    border: none;
    font-weight: 600;
    margin-top: 100px;
    cursor: pointer;
`

const PasswordCheckInput = styled.input`
  width: 492px;
  height: 61px;
  border-radius: 5px;
  border: 1px solid rgba(204, 204, 204, 1);
  font-size: 17px;
  padding-left: 22px;
  margin-top: 42px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const PasswordInput = styled.input`
  width: 492px;
  height: 61px;
  border-radius: 5px;
  border: 1px solid rgba(204, 204, 204, 1);
  font-size: 17px;
  padding-left: 22px;
  margin-top: 42px;
`;

const VerifyCodeInput = styled.input`
  width: 492px;
  height: 61px;
  border-radius: 5px;
  border: 1px solid rgba(204, 204, 204, 1);
  font-size: 17px;
  padding-left: 22px;
  margin-top: 42px;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const CodeSubmitBtn = styled.button`
  width: 107px;
  height: 61px;
  margin-left: 21px;
  border-radius: 7px;
  border: none;
  background-color: rgba(171, 178, 239, 1);
  color: white;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

const EmailInput = styled.input`
  width: 364px;
  height: 61px;
  border-radius: 5px;
  border: 1px solid rgba(204, 204, 204, 1);
  font-size: 17px;
  padding-left: 22px;
`;

const EmailContainer = styled.div`
  width: 492px;
  height: 61px;
  display: flex;
`;
