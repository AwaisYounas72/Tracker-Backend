import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"
import Transaction from "./Transaction";

const History = () => {

    const { transactions }=useContext(GlobalContext);

    return (


        <div>

            <p className="font-semibold pt-4"> History </p>
            <div className="py-1">
                <hr className=" h-0.5 bg-slate-500" />
            </div>
            <ul className="py-2 flex flex-col gap-3">

                {transactions?.map(transaction => (<Transaction key={transaction._id} transaction={transaction}/>))}
                 
{/* 
                <li className="  p-2 shadow-md flex flex-row justify-between bg-white group  border-r-red-800 border-r-4">
                    <div className="   flex flex-row gap-2 justify-center items-center">
                        <div className="hidden group-hover:block">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="30" viewBox="0 0 48 48">
                            <path fill="#F44336" d="M21.5 4.5H26.501V43.5H21.5z" transform="rotate(45.001 24 24)"></path><path fill="#F44336" d="M21.5 4.5H26.5V43.501H21.5z" transform="rotate(135.008 24 24)"></path>
                        </svg>
                        </div>
                        <div>
                        <p>Cash</p>
                        </div>

                    </div>
                    <div>
                        <p>-$400</p>
                    </div>
                </li> */}
                {/* <li className="  p-2 border border-black flex flex-row justify-between bg-white border-r-red-800 border-r-4">
                    <p>Cash</p>
                    <p>-$400</p>
                </li>
                <li className="  p-2 border border-black flex flex-row justify-between bg-white  border-r-red-800 border-r-4">
                    <p>Cash</p>
                    <p>-$400</p>
                </li> */}
            </ul>
        </div>
    )
}

export default History