import MainHeader from "../../components/main-header";
import SubHeader from "../../components/sub-header";
import styled from "styled-components";

const Community = () => {
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
        <PageTitle>커뮤니티 둘러보기</PageTitle>
      </Container>
    </div>
  );
};

export default Community;

const Container = styled.div`
  display: flex;
`;

const PageTitle = styled.p`
  font-size: 35px;
  margin-top: 200px;
  font-weight: 650;
  margin-left: 245px;
  display: flex;
`;
