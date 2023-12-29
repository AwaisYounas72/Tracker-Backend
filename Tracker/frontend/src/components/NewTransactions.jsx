import  { useState } from "react"

const NewTransactions = () => {
    const [text,setText]=useState('');
    const [amount, setAmount]=useState(0);
    return (
        <div className=" ">
            <h2 className="font-semibold pt-3">Add New Transactions</h2>
             <div className="py-1">
             <hr className=" h-0.5 bg-slate-500" />
             </div>
            <form action="">

                <div className="flex flex-col gap-2">

                    <div className="flex flex-col gap-1.5 pt-1">
                        <label htmlFor="" className="text-md font-medium">Text</label>
                        <input type="text" className="w-full p-2" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Enter Text..." />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="" className="text-md font-medium">
                            Amount <br />
                            (negative - expense, positive - income)
                        </label>
                        <input type="number" className="w-full p-2" placeholder="Enter amount..." value={amount} onChange={(e)=> setAmount(e.target.value)} />
                    </div>
                    <div className="flex justify-center items-center pt-2">
                        <button type="submit" className="bg-[#7a67db] cursor-pointer text-white shadow-lg block  text-lg py-2 px-4 rounded-lg w-full">
                            Add transaction
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default NewTransactions