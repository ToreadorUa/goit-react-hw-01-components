import styled from 'styled-components';
import css from './TransactionHistory.module.css';

const Td = styled.td`
  padding: 5px 10px;

  text-align: center;
  background-color: white;
`;
const Tr = styled.tr`
  :nth-child(even) {
    background: #f7f7f7;
  }
`;
const TdName = styled(Td)`
  text-transform: capitalize;
`;

export const TransactionsHistory = ({ type, amount, currency }) => (
  <tr className={css.qwe}>
    <TdName>{type}</TdName>
    <Td>{amount}</Td>
    <Td>{currency}</Td>
  </tr>
);

console.dir(Tr);
