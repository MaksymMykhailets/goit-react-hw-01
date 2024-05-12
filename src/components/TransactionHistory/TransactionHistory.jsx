import css from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  const tableNames = ['Type', 'Amount', 'Currency'];

  return (
    <table className={css.table}>
      <thead className={css.tHead}>
        <tr>
          {tableNames.map((name, index) => (
            <th className={css.tableNames} key={index}>
              {name}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={css.tr} key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
