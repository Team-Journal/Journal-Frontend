import * as S from "./style";
import confirm from "../../assets/svgs/confirm.svg";
import { LoginFormData } from "../../types/type";
import { useState } from "react";
import logIn from '../../api/login';
import { useNavigate } from 'react-router-dom';
import useStore from '../../store/store';

const LoginForm = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const { isLogin, toggleIsLogin } = useStore();

  const [error, setError] = useState<string | undefined | null>(null);
  const [state, setState] = useState<boolean>(isLogin)
  const navigate = useNavigate();


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toggleIsLogin();

    try {
      await logIn(formData.email, formData.password)
      setError(null)
      setState(isLogin)
      navigate('/community')
    } catch (error: any) {
      console.log(error);
      setError(error.response.data.message)
    }
    console.log(formData);
    console.log(isLogin)
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <S.InputContaier>
        <S.EmailInput
          placeholder="name@example.com"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <S.ConfirmBtnContainer>
          <S.PasswordInput
            placeholder="비밀번호를 입력하세요."
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <S.Button type="submit">
            <S.ConfirmBtn src={confirm} alt="학인" />
          </S.Button>
        </S.ConfirmBtnContainer>
      </S.InputContaier>
      {error && <div>{error}</div>}
    </form>
  );
};

export default LoginForm;
