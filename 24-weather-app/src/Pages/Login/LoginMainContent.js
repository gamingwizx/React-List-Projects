import { useAuth } from "../../Context/FakeAuthContext.jsx";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function LoginMainContent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (email && password) login(email, password);
  }

  useEffect(() => {
    if (isAuthenticated) navigate("/app", { replace: true });
  }, [isAuthenticated, navigate]);
  return (
    <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
      <div className="input">
        <label>Email Address</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)}></input>
      </div>
      <div className="input">
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        ></input>
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
