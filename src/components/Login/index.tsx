import * as S from './style'
import confirm from '../../assets/svgs/confirm.svg';

const LoginForm = () => {
  return (
    <form>
      <S.InputContaier>
        <S.EmailInput placeholder="name@example.com" type="email" />
        <S.ConfirmBtnContainer>
          <S.PasswordInput placeholder="비밀번호를 입력하세요." type="password" />
          <S.ConfirmBtn src={confirm} alt="학인" />
        </S.ConfirmBtnContainer>
      </S.InputContaier>
    </form>
  );
};

export default LoginForm;

