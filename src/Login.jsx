// import { useContext, useState } from "react";
// import { MyContext } from "./MyContext";
// import "./Auth.css"; // optional (you can style later)

// function Login() {
//   const { setUser, setToken, setAuthMode } = useContext(MyContext);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const res = await fetch("http://localhost:8080/api/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.error || "Login failed");
//         return;
//       }

//       // ✅ Save auth data
//       localStorage.setItem("token", data.token);
//       localStorage.setItem("user", JSON.stringify(data.user));

//       setToken(data.token);
//       setUser(data.user);

//     } catch (err) {
//       setError("Server error. Try again.");
//     }
//   };

//   return (
//     <div className="authContainer">
//       <h2>Login to SigmaGPT</h2>

//       {error && <p className="errorText">{error}</p>}

//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button type="submit">Login</button>
//       </form>

//       <p className="switchAuth">
//         Don’t have an account?{" "}
//         <span onClick={() => setAuthMode("signup")}>Sign up</span>
//       </p>
//     </div>
//   );
// }

// export default Login;


import { useContext, useState } from "react";
import { MyContext } from "./MyContext";
import "./Auth.css";

// ✅ Render backend URL
const BASE_URL = "https://sigmagpt-backend-ggrs.onrender.com";

function Login() {
  const { setUser, setToken, setAuthMode } = useContext(MyContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(`${BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed");
        return;
      }

      // ✅ Save auth data
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setToken(data.token);
      setUser(data.user);

      // ✅ Close auth modal after login
      setAuthMode(null);

    } catch (err) {
      setError("Server error. Try again.");
    }
  };

  return (
    <div className="authContainer">
      <h2>Login to SigmaGPT</h2>

      {error && <p className="errorText">{error}</p>}

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>

      <p className="switchAuth">
        Don’t have an account?{" "}
        <span onClick={() => setAuthMode("signup")}>Sign up</span>
      </p>
    </div>
  );
}

export default Login;
