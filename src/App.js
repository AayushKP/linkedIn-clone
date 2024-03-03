import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { auth } from "./firebase";
import Header from "./Header";
import Sbar from "./Sbar";
import FeedL from "./FeedL";
import { login, selectUser, logout } from "./features/userSlice";
import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth"; // Import onAuthStateChanged
import Widgets from "./widgets";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      // Use onAuthStateChanged
      if (userAuth) {
        //user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        //user is logged out
        dispatch(logout());
      }
    });

    return unsubscribe; // Cleanup function to unsubscribe from the listener
  }, []);

  return (
    <div className="app">
      {/* {Header} */}
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          {/* {Sidebar} */}
          <Sbar />
          {/* {Feed} */}
          <FeedL />

          {/* {Widgets} */}
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
