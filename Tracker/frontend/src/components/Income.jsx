import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"
 

 
const Income = () => {
    const {transactions} = useContext(GlobalContext) 
     
const amounts = transactions?.map(transaction => transaction.amount);  
    const income = amounts?.filter(item => item > 0)?.reduce((acc, item) => (acc += item), 0)?.toFixed(2);

  const expense = (
    amounts?.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
    return (
        <div className="flex flex-row justify-center items-center  w-full p-3 bg-white shadow-md">
            <div className="px-7 ">
                <p className=" font-semibold text-slate-700">INCOME</p>
                <p className="text-lg font-semibold text-green-500 ">{income}</p>

            </div>
            <div className="border border-slate-500 h-12 ">

            </div>
            <div className="px-7">
                <p className="font-semibold text-slate-700">EXPENSE</p>
                <p className="text-lg font-semibold text-red-500 ">{expense}</p>
            </div>
        </div>
    )
}

export default Income