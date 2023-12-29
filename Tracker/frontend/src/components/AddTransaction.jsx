/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="bg-gradient-to-r mt-5 from-violet-600 to-indigo-600 text-white font-medium px-4 py-2 rounded hover:opacity-90 transition-opacity"
            >
                Add Transactions
            </button>
            <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
            <ToastContainer />
        </>
    );
};

const SpringModal = ({ isOpen, setIsOpen }) => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);


    const handleAddTransaction = () => {
        const transaction = {
            text: text,
            amount: parseInt(amount)
        }

        addTransaction(transaction)
        setIsOpen(false)
        toast.success('Transaction added successfully!');
    }


    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: "12.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
                    >
                        <div className="relative z-10">

                            <div className=" ">
                                <h2 className="font-semibold pt-3">Add New Transactions</h2>
                                <div className="py-1">
                                    <hr className=" h-0.5 bg-slate-500" />
                                </div>
                                <form action="">

                                    <div className="flex flex-col gap-2">

                                        <div className="flex flex-col gap-1.5 pt-1">
                                            <label htmlFor="" className="text-md font-medium">Text</label>
                                            <input type="text" className="w-full p-2 text-black" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Text..." />
                                        </div>

                                        <div className="flex flex-col gap-1.5">
                                            <label htmlFor="" className="text-md font-medium">
                                                Amount <br />
                                                (negative - expense, positive - income)
                                            </label>
                                            <input type="number" className="w-full p-2 text-black" placeholder="Enter amount..." value={amount} onChange={(e) => setAmount(e.target.value)} />
                                        </div>
                                        {/* <div className="flex justify-center items-center pt-2">
                        <button type="submit" className="bg-[#7a67db] cursor-pointer text-white shadow-lg block  text-lg py-2 px-4 rounded-lg w-full" >
                            Add transaction
                        </button>
                    </div> */}
                                    </div>
                                </form>
                            </div>
                            <div className="flex gap-2 mt-5">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                                >
                                    Go back
                                </button>
                                <button
                                    className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded" onClick={handleAddTransaction}
                                >
                                    Add transaction
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AddTransaction;