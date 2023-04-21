import * as S from './style'
import MainLogo from "../../assets/svgs/header_logo.svg";
import SearchLogo from "../../assets/svgs/search_logo.svg";
import MyPageLogo from "../../assets/svgs/mypage_logo.svg";
import { useNavigate } from "react-router-dom";

const MainHeader = () => {
  const navigate = useNavigate();

  return (
    <>
      <S.HeaderContainer>
        <S.MainLogoImage
          src={MainLogo}
          alt="메인 로고"
          onClick={() => navigate("/")}
        />
        <S.CategoryContainer>
          <S.LinkStyle to="/">
            <S.Categries>홈</S.Categries>
          </S.LinkStyle>
          <S.LinkStyle to="/community">
            <S.Categries>커뮤니티</S.Categries>
          </S.LinkStyle>
          <S.Categries>정보수정</S.Categries>
          <S.Categries>고객지원</S.Categries>
        </S.CategoryContainer>
        <S.Right>
          <S.SearchImage
            src={SearchLogo}
            alt="검색 로고"
            onClick={() => navigate("/search")}
          />
          <S.ProfileImage
            src={MyPageLogo}
            alt="마이페이지 로고"
            onClick={() => navigate("/mypage")}
          />
        </S.Right>
      </S.HeaderContainer>
    </>
  );
};

export default MainHeader;

