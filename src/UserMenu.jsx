import { useContext } from "react";
import { MyContext } from "./MyContext";
import "./UserMenu.css";

function UserMenu() {
  const { token, setAuthMode, logout } = useContext(MyContext);

  return (
    <div className="userMenu">
      {!token ? (
        <>
          <p onClick={() => setAuthMode("login")}>Login</p>
          <p onClick={() => setAuthMode("signup")}>Signup</p>
        </>
      ) : (
        <p onClick={logout}>Logout</p>
      )}
    </div>
  );
}

export default UserMenu;
