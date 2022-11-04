import Link from "next/link";
import moment from "moment";
import { useRouter } from "next/router";

const TransactionHistory = [
  {
    credit: false,
    value: 25,
    name: "Token purchase",
    date: "2023-02-19T06:00:00Z",
  },
  /*
  {
    credit: true,
    value: 1000,
    name: "Tournament prize money",
    date: "2022-12-01T06:00:00Z",
  },
  */
  {
    credit: false,
    value: 5,
    name: "Token purchase",
    date: "2022-11-06T06:00:00Z",
  },
  {
    credit: false,
    value: 50,
    name: "Token purchase",
    date: "2022-10-05T06:00:00Z",
  },
];

export default function TabWalletHistory() {
  const { query } = useRouter();
  const isEmpty = query.empty === "true" ? true : false;

  return (
    <>
      {isEmpty && (
        <>
          <div className="surface rounded-lg px-4 py-8 text-center">
            <div className="max-w-xs mx-auto">
              <span className="icon icon-smile text-6xl text-ui-500" />
              <div className="mt-2 mb-6">
                <p className="text-sm text-ui-400">
                  There are no events to be displayed yet.
                </p>
                <p className="text-lg text-ui-300">
                  Play tournaments and competitions to see the history of your
                  earnings.
                </p>
              </div>
              <Link href="/prototype/valorant/tournaments">
                <a className="button button-main">
                  <span>Browse tournaments</span>
                </a>
              </Link>
            </div>
          </div>
        </>
      )}
      {!isEmpty && (
        <>
          <div className="overflow-y-hidden overflow-x-auto scrollbar-desktop px-4 sm:px-0 pb-4">
            <table className="table table-rounded rounded-xl w-full">
              <thead>
                <tr>
                  <th>Amount</th>
                  <th>Type</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {TransactionHistory.map((transaction, transactionIndex) => (
                  <>
                    <tr
                      key={transaction}
                      className="animate-slide-in-bottom animate-delay"
                      style={{
                        "--delay": "calc(" + transactionIndex + " * 0.05s)",
                      }}
                    >
                      <td>
                        <div
                          className={`ml-1 rounded w-24 text-center p-1 bg-gradient-to-b from-ui-900/50 to-ui-900/10 font-headings font-bold text-lg ${
                            transaction.credit === true
                              ? "text-main"
                              : "text-error-500"
                          }`}
                        >
                          {transaction.credit === true && <>+</>}
                          {transaction.credit === false && <>-</>}
                          {transaction.value}€
                        </div>
                      </td>
                      <td>{transaction.name}</td>
                      <td>
                        <div className="text-sm text-ui-300">
                          {moment(
                            transaction.date,
                            "YYYY-MM-DDThh:mm:ss.SSS"
                          ).format("dddd, MMMM Do YYYY")}
                        </div>
                        <div className="text-sm text-ui-300">
                          {moment(
                            transaction.date,
                            "YYYY-MM-DDThh:mm:ss.SSS"
                          ).format("h:mm:ss a")}{" "}
                          UTC
                        </div>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-4 mb-8">
            <button type="button" className="button button-sm button-primary">
              <span>Load more</span>
            </button>
          </div>
        </>
      )}
    </>
  );
}
