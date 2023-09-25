import { FC } from "react";

interface tableData {
  bet_amount: string;
  outcome: string;
  timeAgo: string;
  public_key: string;
}

interface RecentFlickersTableProps {
  tableData: Array<tableData>;
}

const RecentFlickersTable:FC<RecentFlickersTableProps> = ({ tableData }) => {
  return(
    <ul className="primary-list primary-list--home">
      {
        tableData ? tableData.map((item, index) => (
          <li className="primary-list__item" key={index}>
            <div className="primary-list__col">{item?.public_key.slice(0, 5)}...{item?.public_key.slice(-5)}</div>
            <div className="primary-list__col-2">flipped {Math.round((parseInt(item.bet_amount) + Number.EPSILON) * 100) / 100} ACD3 and {item.outcome}.</div>
            <div className="primary-list__col">{item.timeAgo}</div>
          </li>
        )) : <p style={{ textAlign: 'center', marginTop: 50 }}>Loading Data</p>
      }
    </ul>
  )
}

export default RecentFlickersTable;