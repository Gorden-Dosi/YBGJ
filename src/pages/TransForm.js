import { useRef } from "react";
import styled from "styled-components";
import { handleTransform } from "../utils/HandleTransform";

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
  position: relative;
  z-index: 80;
  border-radius: 5px;
`;

const TransForm = () => {
  const fileInput = useRef(null);

  const onTransformClick = async () => {
    const file = fileInput.current.files[0];
    await handleTransform(file);
  };

  return (
    <FormContainer>
      <input type="file" accept=".xlsx" ref={fileInput} />
      <button onClick={onTransformClick}>변환</button>
    </FormContainer>
  );
};

export default TransForm;
