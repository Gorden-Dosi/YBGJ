import React, { useRef } from "react";
import styled from "styled-components";
import { handleTransform } from "../utils/HandleTransform";

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #bf8b67;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 250px;
  padding: 20px;
  background-color: #DEB887;
  border: 1px solid #FFE4C4;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
`;

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: black;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  height: 200px; /* 크기 조정 */
  padding: 30px; /* 크기에 맞게 조정 */
  margin: 20px 0;
  font-size: 1.1em; /* 글자 크기 조정 */
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #A9A9A9;
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
`;

const TransForm = () => {
  const fileInput = useRef(null);

  const onTransformClick = async () => {
    const file = fileInput.current.files[0];
    await handleTransform(file);
  };

  return (
    <Background>
      <FormContainer>
        <Title>파일 양식 변환</Title>
        <Input type="file" accept=".xlsx" ref={fileInput} />
        <Button onClick={onTransformClick}>변환</Button>
      </FormContainer>
    </Background>
  );
};

export default TransForm;
