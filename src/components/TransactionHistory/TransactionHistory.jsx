import styled from 'styled-components';

const Td = styled.td`
  padding: 5px 10px;
  text-align: center;
`;
const Tr = styled.tr`
  &:nth-child(even) {
    background: #f7f7f7;
  }
`;
const TdName = styled(Td)`
  text-transform: capitalize;
`;

export const TransactionsHistory = ({ type, amount, currency }) => (
  <Tr>
    <TdName>{type}</TdName>
    <Td>{amount}</Td>
    <Td>{currency}</Td>
  </Tr>
);

console.dir(Tr);
