import PropTypes from 'prop-types';
import { TransactionsHistory } from 'components/TransactionHistory/TransactionHistory';
import { Table, Th } from './TransactionTable.styled';

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
