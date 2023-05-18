import styled from 'styled-components';
import { useState } from 'react';
import Main from './Home';

const TitleText = styled.div`
 font-size : 40px;
 color: #fff;
 font-weight: bold;
 margin-bottom: 20px;
`

const Container = styled.div`
  width: 600px;
  height: 800px;
  background-color: #BF8B67;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
`

const Table = styled.div`
  display: flex;
  flex-direction: column;
  border-collapse: collapse;
  width: 100%;
`;

const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
`;

const TableColumn = styled.span`
  flex: 1;
  padding: 10px;
  text-align: center;
  border-right: ${({ noBorder }) => (noBorder ? 'none' : '1px solid #ccc')};
`;

const Input = styled.input`
  width: 70px;
`;

const Result = styled.span`
    width: 100px;
`

function Calculater() {
    const [inputs, setInputs] = useState({
        매입가: 0,
        배송료: 0,
        포장비: 0,
        사은품: 0,
        기타비용: 0,
        오픈마켓: 0,
        카드결제: 0,
        기타수수료: 0,
    });

    const handleChange = (label, value) => {
        setInputs({ ...inputs, [label]: parseFloat(value) });
    };

    const calculateResults = () => {
        const totalCost = inputs.매입가 + inputs.배송료 + inputs.포장비 + inputs.사은품 + inputs.기타비용;
        const totalFees = totalCost * (inputs.오픈마켓 / 100) + totalCost * (inputs.카드결제 / 100) + totalCost * (inputs.기타수수료 / 100);
        const netProfit = totalCost - totalFees;
        const marginRate = totalCost ? (netProfit / totalCost) * 100 : 0;

        return { netProfit, marginRate };
    };

    const { netProfit, marginRate } = calculateResults();


    return (
        <Main>
            <Container>
                <TitleText>마진율 계산기</TitleText>
                <Table>
          <TableRow>
            <TableColumn>대분류</TableColumn>
            <TableColumn>구분</TableColumn>
            <TableColumn>입력</TableColumn>
            <TableColumn noBorder>계산가</TableColumn>
          </TableRow>
                {[
                    { category: '상품', label: '매입가', unit: '원' },
                    { category: '상품', label: '배송료', unit: '원' },
                    { category: '상품', label: '포장비', unit: '원' },
                    { category: '상품', label: '사은품', unit: '원' },
                    { category: '상품', label: '기타', unit: '원' },
                    { category: '수수료', label: '오픈마켓', unit: '%' },
                    { category: '수수료', label: '카드결제', unit: '%' },
                    { category: '수수료', label: '기타', unit: '%' },
                ].map((row) => (
                    <TableRow key={row.label}>
                      <TableColumn>{row.category}</TableColumn>
                      <TableColumn>{row.label}</TableColumn>
                      <TableColumn>
                        <Input
                          type="number"
                          placeholder={`[${row.unit}]`}
                          onChange={(e) => handleChange(row.label, e.target.value)}
                        />
                      </TableColumn>
                      <TableColumn noBorder>
                        {row.category === '상품'
                          ? inputs[row.label]
                          : (inputs[row.label] / 100) * inputs.매입가}{' '}
                        {row.unit}
                      </TableColumn>
                    </TableRow>
                  ))}
                </Table>
                <TableRow>
                    <span>결과</span>
                    <span>마진율</span>
                    <Result>{marginRate.toFixed(2)} %</Result>
                    <span>순이익</span>
                    <Result>{netProfit.toFixed(2)} 원</Result>
                </TableRow>
              </Container>
            </Main>
          );
        }

export default Calculater;