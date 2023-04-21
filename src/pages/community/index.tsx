import MainHeader from "../../components/MainHeader";
import SubHeader from "../../components/sub-header";
import styled from "styled-components";
import useTitle from "../../hooks/title";

const Community = () => {
  const titleUpdater = useTitle("불러오는 중...");
  setTimeout(() => titleUpdater("커뮤니티 - 공유몽"));

  return (
    <div>
      <MainHeader />
      <SubHeader title="커뮤니티" />
      <Container>
        <SubContainer>
          <PageTitle>커뮤니티 둘러보기</PageTitle>
        </SubContainer>
      </Container>
    </div>
  );
};

export default Community;

const SubContainer = styled.div`
  width: 1200px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const PageTitle = styled.p`
  font-size: 35px;
  margin-top: 200px;
  font-weight: 650;
`;
