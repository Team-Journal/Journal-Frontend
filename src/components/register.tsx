import styled from "styled-components";

const RegisterForm = () => {
  return (
    <form>
      <NicknameContainer>
        <NicknameInput placeholder="사용할 아이디를 입력하세요." type="email" />
      </NicknameContainer>
    </form>
  );
};

export default RegisterForm;

const NicknameInput = styled.input`
  width: 361px;
  height: 60px;
  border-bottom: 1px solid rgba(169, 169, 169, 1);
  border-top: none;
  border-left: none;
  border-right: none;
  font-size: 17px;
  outline: none;
`;

const NicknameContainer = styled.div``;
