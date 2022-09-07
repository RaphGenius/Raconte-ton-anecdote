import { signInWithEmailAndPassword } from "firebase/auth";
import { useRef, useState } from "react";
import { auth } from "../utils/firebase.config";

export default function Login() {
  //State
  const loginEmail = useRef();
  const loginPassword = useRef();
  const [error, setError] = useState(false);
  //Comportement
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail.current.value,
        loginPassword.current.value
      );
      console.log(user);
    } catch (err) {
      console.log(err.message);
      setError(true);
    }

    console.log(loginEmail.current.value, loginPassword.current.value);
  };
  //Render
  return (
    <div className="login-container">
      <div className="login">
        <h3>Se connecter</h3>
        <form className="form-login" onSubmit={(e) => handleLogin(e)}>
          <input
            type="email"
            placeholder="Email"
            required
            autoComplete="off"
            ref={loginEmail}
          ></input>
          <input
            type="password"
            placeholder="Mot de passe"
            required
            autoComplete="off"
            ref={loginPassword}
          ></input>
          <input type="submit" value="se connecter"></input>
          <span>
            {error && "Le mail ou le mot de passe ne correspondent pas"}
          </span>
        </form>
      </div>
    </div>
  );
}
