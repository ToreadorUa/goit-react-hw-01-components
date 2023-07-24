import { Tr, TdName, Td } from './TransactionHistory.styled';

export const TransactionsHistory = ({ type, amount, currency }) => (
  <Tr>
    <TdName>{type}</TdName>
    <Td>{amount}</Td>
    <Td>{currency}</Td>
  </Tr>
);
