import styled from "styled-components";
import { HeaderProps } from "../types/type";
import { Link } from "react-router-dom";

const SubHeader = ({ title, menu1, menu2, menu3 }: HeaderProps) => {
  return (
    <>
      <HeaderContainer>
        <TextContainer>
          <PageTitle>{title}</PageTitle>
        </TextContainer>
        <MenuContainer>
          <Menu>
            <LinkStyle to="/post">{menu1}</LinkStyle>
          </Menu>
          <Menu>
            <LinkStyle to="/community">{menu2}</LinkStyle>
          </Menu>
          <Menu>
            <LinkStyle to="/search">{menu3}</LinkStyle>
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
