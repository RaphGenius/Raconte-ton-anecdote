import React, { useState } from "react";
import ConnectModal from "./components/ConnectModal";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase.config";
const App = () => {
  //State
  const [user, setUser] = useState(null);
  //Comportement
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  return (
    <div>
      <div className="app-header">
        <ConnectModal />
      </div>
      <div className="posts-container"></div>
    </div>
  );
};

export default App;
