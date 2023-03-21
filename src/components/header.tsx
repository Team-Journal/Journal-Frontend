import styled from "styled-components";
import MainLogo from "../assets/svgs/header_logo.svg";
import SearchLogo from "../assets/svgs/search_logo.svg";
import MyPageLogo from "../assets/svgs/mypage_logo.svg";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <img src={MainLogo} alt="로고 이미지" />
        <CategoryContainer>
          <Categries>홈</Categries>
          <Categries>커뮤니티</Categries>
          <Categries>정보수정</Categries>
          <Categries>고객지원</Categries>
        </CategoryContainer>
        <Right>
          <img src={SearchLogo} alt="검색 로고" />
          <img src={MyPageLogo} alt="마이페이지 로고" />
        </Right>
      </HeaderContainer>
    </>
  );
};

export default Header;

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
  position: fixed;
  background-color: white;
`;

const Right = styled.div`
  width: 93px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 45px;
`;
