import logo from './logo.svg';
import './App.css';
import {useState, useEffect, useRef} from 'react'
function App() {
  const [conversionAmount, setConversionAmount] = useState("")
  const [convertedAmount, setConvertedAmount] = useState("")
  const [conversionFrom, setConversionFrom] = useState("")
  const [conversionTo, setConversionTo] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [test,setTest] = useState("")
  const [currencyList, setCurrencyList] = useState({})
  const controller = useRef(null)

  useEffect(() => {
    async function fetchCurrencyList() {
      try {
        const res = await fetch("https://api.frankfurter.app/currencies")
        if (!res.ok) {
          throw new Error("Something went wrong when fetching currencies")
        }

        const data = await res.json()
        return data
      } catch(err) {
        console.error(err)
      }
      return function() {
        controller.current.abort("Clean up")
        
      }
    }
    fetchCurrencyList().then(result => {
      setCurrencyList(result)
      setConversionFrom(Object.keys(result)[0])
      setConversionTo(Object.keys(result)[0])
    })

  }, [])

  function convertCurrency(value) {
    setIsLoading(true)
    controller.current !== null && controller.current.abort("Clean up")
    if (conversionFrom === conversionTo) return
    
    controller.current = new AbortController()
    
    async function convert() {
      
      
      const res = await fetch(`https://api.frankfurter.app/latest?amount=${value}&from=${conversionFrom}&to=${conversionTo}`, {signal: controller.current.signal}) 
      if (!res.ok) {
        throw new Error("Something went wrong when converting currency")
      }

      return await res.json()
    }

    convert().then(result => {
      
      const convertedRate = Object.values(result.rates)[0]
      setConvertedAmount(convertedRate)
      setIsLoading(false)
    }).catch(error => {
      console.error(error)
    })
    
  }
  return (
    <div className="App">
      <div className="currency-converter">
        <input onChange={(e) => convertCurrency(e.target.value)}></input>
        <CurrencyList key="1" currencyList={currencyList} onChange={(value) => setConversionFrom(value)} />
        <CurrencyList key="2" currencyList={currencyList} onChange={(value) => setConversionTo(value)} />

        {isLoading ? <p>Loading...</p>: <p>{convertedAmount}</p>}
      </div>
    </div>
  );
}

function CurrencyList({ currencyList, onChange }) {
  return (
    <select onChange={(e) => onChange(e.target.value)}>
          {Object.keys(currencyList).map((key, i) => (
            
            <option key={key} defaultValue={key} value={key}>{key}</option>
          ))}
        </select>
  )
}

export default App;
