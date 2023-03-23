import styled from 'styled-components'
import MainHeader from '../../components/main-header'
import RegisterForm from '../../components/register';
import useTitle from '../../hooks/title';

const Register = () => {
  const titleUpdater = useTitle('불러오는 중...');
  setTimeout(() => titleUpdater('아이디(닉네임) 등록 - 공유몽'))

  return (
    <div>
      <MainHeader />
      <Container>
        <RegisterTitle>아이디 등록</RegisterTitle>
        <Desc>공유몽에서 사용할 개성 넘치는 아이디를 등록해보세요.</Desc>
        <FormContainer>
          <RegisterForm />
        </FormContainer>
      </Container>
    </div>
  )
}

export default Register;

const FormContainer = styled.div`
  display: flex;
  margin-top: 180px;
  justify-content: center;
`

const Desc = styled.p`
  font-size: 20px;
  color: rgba(185, 185, 185, 1);
  display: flex;
  justify-content: center;
  margin-top: -20px;
  margin-left: 20px;
`

const RegisterTitle = styled.p`
  font-size: 45px;
  font-weight: 650;
  margin-top: 157px;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  display: flex;
  width: 457px;
  height: 66px;
  margin: 0 auto;
  flex-direction: column;
`
