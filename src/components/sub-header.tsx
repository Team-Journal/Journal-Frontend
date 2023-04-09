import styled from "styled-components";
import { HeaderProps } from "../types/type";
import { Link } from "react-router-dom";

const SubHeader = ({ title }: HeaderProps) => {
  return (
    <>
      <HeaderContainer>
        <TextContainer>
          <PageTitle>{title}</PageTitle>
        </TextContainer>
        <MenuContainer>
          <Menu>
            <LinkStyle to="/post">커뮤니티에 업로드</LinkStyle>
          </Menu>
          <Menu>
            <LinkStyle to="/community">둘러보기</LinkStyle>
          </Menu>
          <Menu>
            <LinkStyle to="/search">아이디 검색</LinkStyle>
          </Menu>
          <LogoutBtn>로그아웃</LogoutBtn>
        </MenuContainer>
      </HeaderContainer>
    </>
  );
};

export default SubHeader;

const LinkStyle = styled(Link)`
  color: white;
  text-decoration: none;
`;

const LogoutBtn = styled.button`
  width: 65px;
  height: 26px;
  border: none;
  border-radius: 45px;
  background-color: rgba(171, 178, 239, 1);
  color: white;
`;

const Menu = styled.li`
  font-size: 14px;
  color: white;
`;

const MenuContainer = styled.ul`
  width: 365px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TextContainer = styled.div``;

const PageTitle = styled.p`
  font-size: 23px;
  font-weight: 650;
  color: white;
  margin-right: 190px;
`;

const HeaderContainer = styled.nav`
  width: 100%;
  height: 58px;
  position: sticky;
  top: 0px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
