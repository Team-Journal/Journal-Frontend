import styled from "styled-components";
import confirm from '../assets/svgs/confirm.svg';

const LoginForm = () => {
  return (
    <form>
      <InputContaier>
        <EmailInput placeholder="name@example.com" type="email" />
        <ConfirmBtnContainer>
          <PasswordInput placeholder="비밀번호를 입력하세요." type="password" />
          <ConfirmBtn src={confirm} alt="학인" />
        </ConfirmBtnContainer>
      </InputContaier>
    </form>
  );
};

export default LoginForm;

const ConfirmBtn = styled.img`
  margin-left: 20px;
`

const ConfirmBtnContainer = styled.div`
  display: flex;
`;

const PasswordInput = styled.input`
  width: 270px;
  height: 70px;
  border: none;
  border-radius: 25px;
  font-size: 20px;
  padding-left: 27px;
`;

const EmailInput = styled.input`
  width: 300x;
  height: 70px;
  border-bottom: 1px solid rgba(198, 198, 198, 1);
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 25px;
  font-size: 20px;
  padding-left: 27px;
`;

const InputContaier = styled.div`
  width: 392px;
  height: 146px;
  border: 1.2px solid rgba(198, 198, 198, 1);
  display: flex;
  border-radius: 25px;
  flex-direction: column;
`;
