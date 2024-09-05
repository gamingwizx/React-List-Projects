export default function DatePicker() {
  return (
    <div className="datepicker-container">
      <div className="buttons">
        <button>Previous Month</button>
        <button>Current Month</button>
      </div>
      <div className="datepicker-day">
        <button>Sun</button>
        <button>Mon</button>
        <button>Tue</button>
        <button>Wed</button>
        <button>Thu</button>
        <button>Fri</button>
        <button>Sat</button>
      </div>
      <div className=""></div>
    </div>
  );
}
