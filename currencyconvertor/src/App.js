import logo from './logo.svg';
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import './App.css';
import { useState } from 'react';


function App() {

  const[amount, setAmount] = useState(0);
  const[fromValue, setFromValue] = useState("usd");
  const[toValue, setToValue] = useState("inr");
  const[convertedammount, setConvertedammount] = useState(0);

   const currencyInfo = useCurrencyInfo(fromValue);
   const options =  Object.keys(currencyInfo)

   const swap = () => {
      setFromValue(toValue)
      setToValue(fromValue)
      setConvertedammount(amount)
      setAmount(convertedammount)
    }

    const convert = () => {
      setConvertedammount(amount * currencyInfo[toValue])
    }

  return (

    <div
    className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{
        backgroundImage: `url('data:image/jpeg;base64,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')`,
    }}
>
    <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    convert();
                   
                }}
            >
                <div className="w-full mb-1">
                    <InputBox
                        label="From"
                        amount={amount}
                        currencyOptions={options}
                        onCurrencyChange={(currency) => setFromValue(currency)} 
                        selectCurrency={fromValue}
                        onAmountChange={(amount) => {setAmount(amount)}}
                        
                    />
                </div>
                <div className="relative w-full h-0.5">
                    <button
                        type="button"
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                        onClick={swap}
                    >
                        swap
                    </button>
                </div>
                <div className="w-full mt-1 mb-4">
                    <InputBox
                        label="To"
                        amount={convertedammount}
                        currencyOptions={options}
                        onCurrencyChange={(currency) => setToValue(currency)}
                        selectCurrency={toValue}
                        amountDisable
                    />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                    Convert {fromValue.toUpperCase()} to {toValue.toUpperCase()}
                </button>
            </form>
        </div>
    </div>
</div>
 

  );
}

export default App;
