import Header from "../Header.js";
import LoginMainContent from "./LoginMainContent.js";

export default function Login() {
  return (
    <div className="container-parent container-parent__login">
      <div className="container">
        <Header />
      </div>
      <div className="container container__login">
        <LoginMainContent />
      </div>
    </div>
  );
}
