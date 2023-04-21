import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProfileImage = styled.img`
  cursor: pointer;
`;

export const SearchImage = styled.img`
  cursor: pointer;
`;

export const MainLogoImage = styled.img`
  cursor: pointer;
`;

export const LinkStyle = styled(Link)`
  color: black;
  text-decoration: none;
`;

export const Categries = styled.li`
  font-size: 15px;
`;

export const CategoryContainer = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 521px;
`;

export const HeaderContainer = styled.nav`
  width: 100%;
  height: 48px;
  border-bottom: 1px solid rgba(222, 222, 222, 1);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
`;

export const Right = styled.div`
  width: 93px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 45px;
`;
