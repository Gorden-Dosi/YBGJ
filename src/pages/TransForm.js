import styled from "styled-components";
import { Main } from "./Home";

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  width: 600px;
  height: 800px;
  background-color: #bf8b67;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
`;

const TransForm = () => {
    const handleTransform = () => {
        // 변환 작업을 처리하는 함수
        // 업로드된 엑셀 파일을 읽고 변환 로직을 수행
      };
  return (
    <Main>
      <FormContainer>
      <input type="file" accept=".xlsx" />
        <button onClick={handleTransform}>변환</button>
      </FormContainer>
    </Main>
  );
};

export default TransForm;
