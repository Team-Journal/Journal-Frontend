import styled from 'styled-components'
import LoginForm from '../../components/login';
import MainHeader from '../../components/main-header'

const Login = () => {
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
