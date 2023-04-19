import * as S from './style';
import { SignupFormData } from "../../types/type";
import { useState } from "react";
import { ErrorFormData } from "../../types/type";
import signUp from "../../api/signup";

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

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailCheck = () => {
    const isValid = validateEmail(formData.email);
    setErrorData((prev) => ({ ...prev, emailError: !isValid }));
  };

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const handlePasswordCheck = () => {
    const isValid = validatePassword(formData.password);
    setErrorData((prev) => ({ ...prev, passwordError: !isValid }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    handleEmailCheck();

    if (e.target.name === "confirmPassword") {
      if (formData.password !== e.target.value) {
        setErrorData((prev) => ({ ...prev, confirmPasswordError: true }));
      } else {
        setErrorData((prev) => ({ ...prev, confirmPasswordError: false }));
      }
    } else {
      handlePasswordCheck();
    }
  };

  const validation = () => {
    if (!formData.email) {
      setErrorData({
        ...errorData,
        emailError: true,
      });
    }

    if (!formData.password) {
      setErrorData({
        ...errorData,
        passwordError: true,
      });
    }

    if (!formData.confirmPassword) {
      setErrorData({
        ...errorData,
        confirmPasswordError: true,
      });
    }

    if (!formData.verifyCode) {
      setErrorData({
        ...errorData,
        verifyCodeError: true,
      });
    }

    if (
      formData.email &&
      formData.password &&
      formData.confirmPassword &&
      formData.verifyCode
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    if (!validation()) {
      return alert("회원가입에 실패했어요.");
    }
    try {
      await signUp(formData.email, formData.password);
      alert("공유몽에 가입하신걸 환영해요!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <S.EmailContainer>
        <S.EmailInput
          placeholder="name@example.com"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <S.CodeSubmitBtn>코드 발송</S.CodeSubmitBtn>
      </S.EmailContainer>
      {errorData.emailError && (
        <S.ErrorMessage>올바른 이메일 형식을 입력해주세요!</S.ErrorMessage>
      )}
      <S.Container>
        <S.VerifyCodeInput
          placeholder="인증 코드를 입력해주세요."
          type="number"
          name="verifyCode"
          value={formData.verifyCode}
          onChange={handleInputChange}
        />
        <S.PasswordInput
          placeholder="비밀번호를 입력해주세요."
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        {errorData.passwordError && (
          <S.ErrorMessage>
            {" "}
            비밀번호는 8자 이상이어햐 하며, 문자와 숫자를 하나 이상
            포함해야해요!
          </S.ErrorMessage>
        )}
        <S.PasswordCheckInput
          placeholder="비밀번호를 다시 입력해주세요."
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
        {errorData.confirmPasswordError && (
          <S.ErrorMessage>입력한 비밀번호와 일치하지 않아요!</S.ErrorMessage>
        )}
        <S.BtnContainer>
          <S.ContinueBtn type="submit">계속</S.ContinueBtn>
        </S.BtnContainer>
      </S.Container>
    </form>
  );
};

export default SignupForm;

