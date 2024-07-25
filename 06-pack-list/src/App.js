import logo from "./logo.svg"
import "./App.css"

function App() {
  return (
    <div className="App">
      <div className="container--travelling">
        <header className="header">
          <div class="container">
            <h1>Far Away</h1>
          </div>
        </header>
        <div className="form">
          <div class="container container--form">
            <span className="form-description">
              What do you need for your trip?
            </span>
            <select name="plan" className="quantity" id="plan">
              <option value="none" selected disabled hidden>
                Select an Option
              </option>
              <option value="1" selected>
                1
              </option>
              <option value="2">2 </option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <input className="item-input" placeholder="Item..." />
            <input className="add-button" type="button" value="ADD"></input>
          </div>
        </div>
        <div className="packing-list">
          <div className="item-container">
            <div className="item">
              <span className="item-quantity">2</span>
              <span className="item-name">Passports</span>
              <button className="item-cancel">X</button>
            </div>
          </div>
          <div className="filter-container">
            <input className="filter"></input>
            <button className="clear-all">Clear List</button>
          </div>
        </div>
        <div className="sort">
          <div className="description">
            You have 4 items on your list and have packed 2 items (50%)
          </div>
        </div>
        <datalist id="quantity">
          <option value="1" selected></option>
          <option value="2"></option>
          <option value="3"></option>
          <option value="4"></option>
          <option value="5"></option>
        </datalist>
      </div>
    </div>
  )
}

export default App
