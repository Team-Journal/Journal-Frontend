import styled from 'styled-components';

const WritePostForm = () => {
    return (
        <form>
            <Container>
              <InputTitle placeholder="게시물의 제목을 입력하세요. (최대 15자)" />
              <InputContent />
              <BtnContainer>
                <UploadBtn>게시물 업로드</UploadBtn>
                <CancelBtn>취소</CancelBtn>
              </BtnContainer>
              <Space />
            </Container>
        </form>
    )
}

export default WritePostForm;

const Space = styled.div`
    height: 100px;
`

const CancelBtn = styled.button`
    width: 108px;
    height: 51px;
    background-color: black;
    color: white;
    font-size: 19px;
    border: none;
    border-radius: 25px;
    margin-left: 20px;
`

const UploadBtn = styled.button`
    width: 237px;
    height: 51px;
    background-color: rgba(171, 178, 239, 1);
    color: white;
    border: none;
    border-radius: 25px;
    margin-top: 69px;
    font-size: 19px;
    font-weight: 600;
`

const BtnContainer = styled.div`
    
`

const InputContent = styled.textarea`
    width: 878px;
    height: 380px;
    margin-top: 73px;
    border-radius: 20px;
    border: 1px solid rgba(198, 198, 198, 1);
    font-size: 19px;
    padding: 20px;
    font-family: Arial, Helvetica, sans-serif;
    outline: none;
`

const InputTitle = styled.input`
    width: 878px;
    height: 53px;
    border-radius: 5px;
    border: 1px solid rgba(170, 170, 170, 1);
    font-size: 17px;
    padding-left: 18px;
`

const Container = styled.div`
    margin-top: 72px;
`