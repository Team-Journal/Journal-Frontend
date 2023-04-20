import styled from 'styled-components'
import LoginForm from '../../components/Login';
import MainHeader from '../../components/main-header'
import useTitle from '../../hooks/title';

const Login = () => {
  const titleUpdater = useTitle('불러오는 중...');
  setTimeout(() => titleUpdater('로그인 - 공유몽'))

  return (
    <div>
      <MainHeader />
      <Container>
        <LoginTitle>
          공유몽에 로그인하기
        </LoginTitle>
        <FormContainer>
          <LoginForm />
        </FormContainer>
      </Container>
    </div>
  )
}

export default Login;

const FormContainer = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: center;
`

const LoginTitle = styled.p`
  font-size: 25px;
  margin-top: 300px;
`

const Container = styled.div`
  display: flex;
  width: 214px;
  height: 29px;
  margin: 0 auto;
  flex-direction: column;
`
