import { useEffect,useState } from 'react'
import styles from './Account.module.css'
import {useSelector, useDispatch} from "react-redux"
import {deposit, fetchCurrencyList, withdraw, requestLoan} from "../store/Account/AccountSlice"
function Account() {
    const customer = useSelector((store) => store.customer.customer)
    const balance = useSelector((store) => store.account.balance)
    const loan = useSelector((store) => store.account.loan)
    const currencyList = Object.keys(useSelector((store) => store.account.currencyList))
    const [depositAmount, setDepositAmount] = useState(0)
    const [withdrawAmount, setWithdrawAmount] = useState(0)
    const [loanAmount, setLoanAmount] = useState(0)
    const [isPopulated, setIsPopulated] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState("")
    const dispatch = useDispatch()
    const handleDeposit = () => {
        console.log(selectedCurrency)
        dispatch(deposit(selectedCurrency, parseInt(depositAmount)))
    }

    const handleWithdraw = () => {
        dispatch(withdraw(withdrawAmount))
    }
    const handleRequestLoan = () => {
        dispatch(requestLoan(parseInt(loanAmount)))
    }
    console.log(loan)
    useEffect(() => {
        dispatch(fetchCurrencyList())
    }, [])
    useEffect(() => {
        setSelectedCurrency(currencyList[0])
    }, [currencyList])
    useEffect(() => {
        setIsPopulated(customer.isPopulated)
    }, [customer])
    return (
        <>
          {isPopulated && <>
            <div className={styles.title}>
            <div className={styles.left}>
                <h2>Welcome, {customer.fullName}</h2>  
                <h3>Your account operations</h3>
            </div>
            <div className={styles.right}>
                <div>Balance ${balance.toFixed(2)}</div>
                <div>Loan Amount ${loan.toFixed(2)}</div>
            </div>
          </div>
          <div className="flow form">
            <div className="input">
                <span className="label">Deposit</span>
                <input onChange={(e) => setDepositAmount(e.target.value)}></input>
                <select name="currencies" onChange={(e) => setSelectedCurrency(e.target.value)} value={selectedCurrency}>
                    {currencyList.map((currency) => (
                        <option value={currency}>{currency}</option>

                    ))}
                </select>
                <button className="button" onClick={() => handleDeposit()}>Deposit</button>
            </div>
            <div className="input">
                <span>Withdraw</span>
                <input onChange={(e) => setWithdrawAmount(e.target.value)}></input>
                <button className="button" onClick={() => handleWithdraw()}>Withdraw</button>
            </div>
            <div className="input">
                <span>Request Loan</span>
                <input placeholder="Loan amount" onChange={(e) => setLoanAmount(e.target.value)}></input>
                <input placeholder="Loan purpose"></input>
                <button className="button" onClick={() => handleRequestLoan()}>Request Loan</button>
            </div>
          </div>
          </>}
        </>
    )
}

export default Account