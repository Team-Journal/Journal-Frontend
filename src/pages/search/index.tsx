import styled from "styled-components";
import MainHeader from "../../components/MainHeader";
import SearchForm from "../../components/search";
import SubHeader from "../../components/sub-header";
import useTitle from "../../hooks/title";

const Search = () => {
  const titleUpdater = useTitle("불러오는 중...");
  setTimeout(() => titleUpdater("아이디 검색 - 공유몽"));

  return (
    <div>
      <MainHeader />
      <SubHeader title="커뮤니티" />
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
