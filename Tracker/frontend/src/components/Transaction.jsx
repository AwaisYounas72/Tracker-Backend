/* eslint-disable react/prop-types */
import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

const Transaction = ({transaction}) => {
  const {deleteTransaction}=useContext(GlobalContext)
  const sign= transaction.amount<0 ?'-':'+';
  return (
    <div>
        
        <li  className={`  p-2 shadow-md flex flex-row justify-between bg-white group 
        ${transaction.amount < 0 ? 'border-r-red-800 border-r-4' : 'border-r-green-800 border-r-4'}
        `}>
<div className="   flex flex-row gap-2 justify-center items-center">
    {/* <div className="hidden group-hover:block"> */}
      <button className="hidden group-hover:block" onClick={()=>{deleteTransaction(transaction._id)}}> 
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="30" viewBox="0 0 48 48">
        <path fill="#F44336" d="M21.5 4.5H26.501V43.5H21.5z" transform="rotate(45.001 24 24)"></path><path fill="#F44336" d="M21.5 4.5H26.5V43.501H21.5z" transform="rotate(135.008 24 24)"></path>
    </svg>
    </button>
    {/* </div> */}
    <div>
    <p>{transaction.text}</p>
    </div>

</div>
<div>
    <p>{sign}${Math.abs(transaction.amount)}</p>
</div>
</li>
    </div>
  )
}

export default Transaction