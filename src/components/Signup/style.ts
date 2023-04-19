import styled from 'styled-components';

export const ErrorMessage = styled.div`
  color: red;
  margin-top: 10px;
`;

export const BtnContainer = styled.div`
  width: 101px;
  height: 55px;
  margin: 0 auto;
`;

export const ContinueBtn = styled.button`
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

export const PasswordCheckInput = styled.input`
  width: 492px;
  height: 61px;
  border-radius: 5px;
  border: 1px solid rgba(204, 204, 204, 1);
  font-size: 17px;
  padding-left: 22px;
  margin-top: 42px;
  outline: none;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PasswordInput = styled.input`
  width: 492px;
  height: 61px;
  border-radius: 5px;
  border: 1px solid rgba(204, 204, 204, 1);
  font-size: 17px;
  padding-left: 22px;
  margin-top: 42px;
  outline: none;
`;

export const VerifyCodeInput = styled.input`
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

export const CodeSubmitBtn = styled.button`
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

export const EmailInput = styled.input`
  width: 364px;
  height: 61px;
  border-radius: 5px;
  border: 1px solid rgba(204, 204, 204, 1);
  font-size: 17px;
  padding-left: 22px;
  outline: none;
`;

export const EmailContainer = styled.div`
  width: 492px;
  height: 61px;
  display: flex;
`;
