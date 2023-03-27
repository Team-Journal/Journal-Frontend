import styled from "styled-components";
import MainHeader from "../../components/main-header";
import SearchForm from '../../components/search';
import SubHeader from "../../components/sub-header";

const Search = () => {
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
          <PageTitle>아이디를 검색해 친구를 추가해보세요.</PageTitle>
          <SearchForm />
        </SubContainer>
      </Container>
    </div>
  );
};

export default Search;

const PageTitle = styled.p`
  font-size: 35px;
  margin-top: 170px;
  font-weight: 650;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const SubContainer = styled.div`
  width: 1200px;
`;
