import styled from "styled-components";

const MainTable = styled.table`
  border-collapse: collapse;
  width: 90%;
  margin: 0 auto;
  border: 1px solid #ddd;
`;

const TableHeader = styled.thead`
  background-color: #f5f5f5;
`;

const TableHeaderCell = styled.th`
  padding: 10px;
  border: 1px solid #ddd;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const TableFooterStyled = styled.div`
  background-color: #f1f1f1;
  padding: 8px 0px;
  width: 90%;
  font-weight: 500;
  text-align: left;
  font-size: 16px;
  color: #2c3e50;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export {
  MainTable,
  TableHeader,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  TableFooterStyled
};
