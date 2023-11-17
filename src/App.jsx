import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo';
import Navbar from './components/navBar';



function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div className='h-[100vh] m-0 overflow-hidden'>
        <div>
            <Navbar/>
        </div>
        <div className='flex align-center  flex-col items-center bg-gray-300 '>
                <h3 className='font-semibold font-mono  text-5xl  mt-10 mb-10 px-5  text-center '>Currency Converter</h3>
        </div>
    <div className='grid grid-cols-2 bg-gray-300'>
        <div className=' px-10 h-screen'>
            <img src="https://m.media-amazon.com/images/I/61oqwXlDvOL.png" alt="" width="70%" className='justify-center text-center ' />
        </div>
         
    <div className="px-10 mt-5  w-full flex flex-wrap justify-center bg-cover bg-no-repeat" >
       
        <div className="w-full">
            <div className="w-full max-w-md mx-auto  border-gray-60 border-solid border-4 sha rounded-lg p-5 backdrop-blur-sm bg-blue-500">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setAmount(amount)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}

                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-gray-600 hover:bg-gray-800 text-white font-semibold px-2 py-0.5"
                            onClick={swap}
                        >
                            Swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-gray-600 hover:bg-gray-800 text-white font-semibold px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
    </div>
    </div>
)
};

export default App;