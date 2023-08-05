import {
  TransactionHistoryTable,
  TransactionHistoryHead,
  TableRaw,
  TransactionHistoryHeader,
  TableCell,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTable>
      <TransactionHistoryHead>
        <TableRaw>
          <TransactionHistoryHeader>Type</TransactionHistoryHeader>
          <TransactionHistoryHeader>Amount</TransactionHistoryHeader>
          <TransactionHistoryHeader>Currency</TransactionHistoryHeader>
        </TableRaw>
      </TransactionHistoryHead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRaw key={id}>
            <TableCell>{type}</TableCell>
            <TableCell>{amount}</TableCell>
            <TableCell>{currency}</TableCell>
          </TableRaw>
        ))}
      </tbody>
    </TransactionHistoryTable>
  );
};
