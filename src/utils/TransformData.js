export const transformData = (data) => {
    const transformedData = [];
  
    // 열 항목 이름 매핑
    const columnMapping = {
      "판매자 상품코드": "상품번호",
      "주소": "배송주소",
      "수령 방법": "전달사항",
      "수령인": "수령자명",
      "수령인 연락처": "휴대전화",
      "우편번호": "우편번호",
      "수량": "수량"
    };
  
    // 변경 후 열 항목
    const targetColumns = [
      "마켓",
      "상품번호",
      "옵션코드",
      "옵션명",
      "수량",
      "수령자명",
      "우편번호",
      "배송주소",
      "배송 상세주소\n(선택입력)",
      "휴대전화",
      "추가연락처\n(선택입력)",
      "쇼핑몰명\n(도매매 전용)",
      "전달사항",
      "배송요청사항\n(도매매 전용)",
      "통관고유번호\n(해외직배송 전용)"
    ];
  
    // 열 항목에 대한 인덱스 가져오기
    const headerRow = data[0];
    const columnIndices = {};
    for (let i = 0; i < headerRow.length; i++) {
      const columnName = headerRow[i];
      columnIndices[columnName] = i;
    }
  
    // 변환 작업 수행
    for (let rowIndex = 1; rowIndex < data.length; rowIndex++) {
      const row = data[rowIndex];
      const transformedRow = {};
  
      for (const columnName in columnMapping) {
        const sourceColumn = columnName;
        const targetColumn = columnMapping[columnName];
        const columnIndex = columnIndices[sourceColumn];
  
        if (columnIndex !== undefined && row[columnIndex] !== undefined) {
          transformedRow[targetColumn] = row[columnIndex];
        }
      }
  
      // 존재하지 않는 항목은 빈 값으로 설정
      for (const columnName of targetColumns) {
        if (!transformedRow.hasOwnProperty(columnName)) {
          transformedRow[columnName] = '';
        }
      }
  
      transformedData.push(transformedRow);
    }
  
    return transformedData;
  };
