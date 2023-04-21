import styled from "styled-components";
import MainHeader from "../../components/MainHeader";
import WritePostForm from "../../components/post";
import SubHeader from "../../components/sub-header";
import useTitle from "../../hooks/title";

const WritePost = () => {
  const titleUpdater = useTitle("불러오는 중...");
  setTimeout(() => titleUpdater("게시물 업로드 - 공유몽"));

  return (
    <div>
      <MainHeader />
      <SubHeader title="커뮤니티" />
      <Container>
        <SubContainer>
          <PageTitle>새 게시물 작성하기</PageTitle>
          <WritePostForm />
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
`;

const SubContainer = styled.div`
  width: 1200px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
