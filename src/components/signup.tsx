import styled from "styled-components";
import { SignupFormData } from "../types/type";
import { useState } from "react";
import { ErrorFormData } from "../types/type";

const EmailRegex =
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

const PassRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const SignupForm = () => {
  const [formData, setFormData] = useState<SignupFormData>({
    email: "",
    password: "",
    confirmPassword: "",
    verifyCode: "",
  });

  const [errorData, setErrorData] = useState<ErrorFormData>({
    emailError: false,
    passwordError: false,
    confirmPasswordError: false,
    verifyCodeError: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (!e.target.value || EmailRegex.test(e.target.value)) {
      setErrorData({
        ...errorData,
        emailError: false,
      });
    } else {
      setErrorData({
        ...errorData,
        emailError: true,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    // 회원가입 처리 로직 구현 예정
  };

  return (
    <form onSubmit={handleSubmit}>
      <EmailContainer>
        <EmailInput
          placeholder="name@example.com"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <CodeSubmitBtn>코드 발송</CodeSubmitBtn>
      </EmailContainer>
      {errorData.emailError && (
        <ErrorMessage>이메일 형식이 올바르지 않습니다.</ErrorMessage>
      )}
      <Container>
        <VerifyCodeInput
          placeholder="인증 코드를 입력해주세요."
          type="number"
          autoFocus
          required
          name="verifyCode"
          value={formData.verifyCode}
          onChange={handleInputChange}
        />
        <PasswordInput
          placeholder="비밀번호를 입력해주세요."
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <PasswordCheckInput
          placeholder="비밀번호를 다시 입력해주세요."
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
        <BtnContainer>
          <ContinueBtn type="submit">계속</ContinueBtn>
        </BtnContainer>
      </Container>
    </form>
  );
};

export default SignupForm;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 10px;
`;

const BtnContainer = styled.div`
  width: 101px;
  height: 55px;
  margin: 0 auto;
`;

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
`;

const PasswordCheckInput = styled.input`
  width: 492px;
  height: 61px;
  border-radius: 5px;
  border: 1px solid rgba(204, 204, 204, 1);
  font-size: 17px;
  padding-left: 22px;
  margin-top: 42px;
  outline: none;
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
  outline: none;
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
  outline: none;
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
  outline: none;
`;

const EmailContainer = styled.div`
  width: 492px;
  height: 61px;
  display: flex;
`;
