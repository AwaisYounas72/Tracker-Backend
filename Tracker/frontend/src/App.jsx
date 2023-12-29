
import './App.css'
import Header from './components/Header'
import Balance from './components/Balance'
import Income from './components/Income'
import History from './components/History'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
// import NewTransactions from './components/NewTransactions'
import { GlobalProvider } from './context/GlobalState'
import AddTransaction from './components/AddTransaction'
 
function App() {


  return (
    <GlobalProvider> 
      <Navbar/>
       <div className='flex justify-center items-center bg-slate-200 min-h-screen w-full p-2'>
       <div className='flex flex-col   '>
        <Header />
        <Balance/>
        <Income/>
        <AddTransaction/>
      <History/>
      {/* <NewTransactions/> */}
      </div>
      
       </div>
       <Footer/>
       </GlobalProvider>
       
     
  )
}

export default App
