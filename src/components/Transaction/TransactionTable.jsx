import PropTypes from 'prop-types';
import { TransactionsHistory } from 'components/TransactionHistory/TransactionHistory';

import styled from 'styled-components';

const Th = styled.th`
  font-weight: 600;
  padding: 5px;
  background: #00bcd5;
  color: white;
  text-transform: uppercase;
`;
const Table = styled.table`
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  table-layout: fixed;
  width: 600px;
  border-radius: 5px;
  border: 1px solid #e5e5e5;
`;

export const TransactionTable = ({ transactions }) => (
  <Table>
    <thead>
      <tr>
        <Th>Type</Th>
        <Th>Amount</Th>
        <Th>Currency</Th>
      </tr>
    </thead>

    <tbody>
      {transactions.map(({ id, type, amount, currency }) => (
        <TransactionsHistory
          key={id}
          type={type}
          amount={amount}
          currency={currency}
        />
      ))}
    </tbody>
  </Table>
);

TransactionTable.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
