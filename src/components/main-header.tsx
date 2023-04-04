import styled from "styled-components";
import MainLogo from "../assets/svgs/header_logo.svg";
import SearchLogo from "../assets/svgs/search_logo.svg";
import MyPageLogo from "../assets/svgs/mypage_logo.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MainHeader = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeaderContainer>
        <MainLogoImage
          src={MainLogo}
          alt="메인 로고"
          onClick={() => navigate("/")}
        />
        <CategoryContainer>
          <LinkStyle to="/">
            <Categries>홈</Categries>
          </LinkStyle>
          <LinkStyle to="/community">
            <Categries>커뮤니티</Categries>
          </LinkStyle>
          <Categries>정보수정</Categries>
          <Categries>고객지원</Categries>
        </CategoryContainer>
        <Right>
          <SearchImage
            src={SearchLogo}
            alt="검색 로고"
            onClick={() => navigate("/search")}
          />
          <img src={MyPageLogo} alt="마이페이지 로고" />
        </Right>
      </HeaderContainer>
    </>
  );
};

export default MainHeader;

const SearchImage = styled.img`
  cursor: pointer;
`

const MainLogoImage = styled.img`
  cursor: pointer;
`;

const LinkStyle = styled(Link)`
  color: black;
  text-decoration: none;
`;

const Categries = styled.li`
  font-size: 15px;
`;

const CategoryContainer = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 521px;
`;

const HeaderContainer = styled.nav`
  width: 100%;
  height: 48px;
  border-bottom: 1px solid rgba(222, 222, 222, 1);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
`;

const Right = styled.div`
  width: 93px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 45px;
`;
