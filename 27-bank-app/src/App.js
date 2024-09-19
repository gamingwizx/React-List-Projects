import logo from "./logo.svg";
import "./App.css";
import Customer from "./Component/Customer";
import Account from "./Component/Account";
import { useSelector } from "react-redux";
function App() {
  const { isPopulated } = useSelector((store) => store.customer);
  return (
    <div className="App">
      <div className="container flow">
        <h1>The React-Redux Bank</h1>
        <Customer></Customer>
        <Account></Account>
      </div>
    </div>
  );
}

export default App;
