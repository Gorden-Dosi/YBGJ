import * as XLSX from "xlsx";
import { readFile } from "../utils/ReadFile"; // 파일 읽기 로직을 담은 유틸리티 함수
import { transformData } from "../utils/TransformData"; // 데이터 변환 로직을 담은 유틸리티 함수

export const handleTransform = async (file) => {
  const data = await readFile(file);
  const transformedData = transformData(data); // 변환 작업을 위해 유틸리티 함수 사용
  // json_to_sheet에 options 객체를 추가하고 cellStyles를 true로 설정
  const transformedSheet = XLSX.utils.json_to_sheet(transformedData.data, { cellStyles: true });

   // !cols 속성에 각 열의 넓이 설정
   transformedSheet['!cols'] = transformedData.columns.map(() => ({ width: 30 }));  // 각 열의 넓이를 20으로 설정.

  // 변환된 데이터를 XLSX로 다시 변환
  const transformedWorkbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(
    transformedWorkbook,
    XLSX.utils.json_to_sheet(transformedData.data),
    "Sheet1"
  );
  const transformedFile = XLSX.write(transformedWorkbook, {
    bookType: "xlsx",
    type: "binary",
  });

  // Blob 객체를 생성하고 이를 다운로드 링크로 제공
  const blob = new Blob([s2ab(transformedFile)], {
    type: "application/octet-stream",
  });
  const downloadUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = downloadUrl;
  link.download = "transformedData.xlsx";
  link.click();
};

// binary string을 array buffer로 변환하는 함수
function s2ab(s) {
  const buf = new ArrayBuffer(s.length);
  const view = new Uint8Array(buf);
  for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff;
  return buf;
}
