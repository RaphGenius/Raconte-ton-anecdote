import { useRef, useState } from "react";
import { auth } from "../utils/firebase.config";

export default function SignUp() {
  //State
  const registerEmail = useRef();
  const registerPassword = useRef();
  const [displayName, setDisplayName] = useState("");

  // Comportement
  const handleRegister = (e) => {
    e.preventDefault();

    try {
      auth
        .createUserWithEmailAndPassword(
          registerEmail.current.value,
          registerPassword.current.value
        )
        .then(async (userAuth) => {
          await userAuth.user.updateProfile({
            displayName,
          });
          console.log(userAuth);
          window.location.reload();
        })
        .catch();
    } catch (err) {
      console.log(err);
    }
    console.log(registerEmail.current.value, registerPassword.current.value);
  };
  //Render
  return (
    <div className="signup-container">
      <div className="signup">
        <h3>S'inscrire</h3>
        <form onSubmit={(e) => handleRegister(e)}>
          <input
            type="text"
            placeholder="Pseudo"
            required
            onChange={(e) => setDisplayName(e.target.value)}
            autoComplete="off"
          />
          <input
            type="email"
            placeholder="Email"
            required
            ref={registerEmail}
            autoComplete="off"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            required
            ref={registerPassword}
            autoComplete="off"
          />
          <input type="submit" value="Valider l'inscription" />
        </form>
      </div>
    </div>
  );
}
