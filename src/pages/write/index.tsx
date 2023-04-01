import styled from "styled-components";
import MainHeader from "../../components/main-header";
import SubHeader from "../../components/sub-header";

const WritePost = () => {
  return (
    <div>
      <MainHeader />
      <SubHeader
        title="커뮤니티"
        menu1="커뮤니티에 업로드"
        menu2="둘러보기"
        menu3="아이디 검색"
      />
      <Container>
        <SubContainer>
            <PageTitle>새 게시물 작성하기</PageTitle>
        </SubContainer>
      </Container>
    </div>
  );
};

export default WritePost;

const PageTitle = styled.p`
    font-size: 33px;
    margin-top: 200px;
    font-weight: 650;
`

const SubContainer = styled.div`
  width: 1200px;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
`
