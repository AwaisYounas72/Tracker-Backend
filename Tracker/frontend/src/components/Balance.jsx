import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

const Balance = () => {
  const { transactions } = useContext(GlobalContext)
  const amounts = transactions?.map(transaction => transaction.amount);
  let total = amounts?.reduce((acc, item) => (acc + item), 0);
  total = total.toFixed(2);
  return (
    <div className="py-3">
      <h2 className="text-sm font-medium">
        YOUR BALANCE
      </h2>
      <h2 className="text-2xl font-semibold text-green-500">
        ${total}
      </h2>

    </div>
  )
}

export default Balance