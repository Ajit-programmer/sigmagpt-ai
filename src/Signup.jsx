// import { useContext, useState } from "react";
// import { MyContext } from "./MyContext";
// import "./Auth.css"; // optional

// function Signup() {
//   const { setAuthMode } = useContext(MyContext);

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     try {
//       const res = await fetch("http://localhost:8080/api/auth/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name, email, password }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.error || "Signup failed");
//         return;
//       }

//       setSuccess("Account created! Please login.");
//       setTimeout(() => setAuthMode("login"), 1500);

//     } catch (err) {
//       setError("Server error. Try again.");
//     }
//   };

//   return (
//     <div className="authContainer">
//       <h2>Create SigmaGPT Account</h2>

//       {error && <p className="errorText">{error}</p>}
//       {success && <p className="successText">{success}</p>}

//       <form onSubmit={handleSignup}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />

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

//         <button type="submit">Sign Up</button>
//       </form>

//       <p className="switchAuth">
//         Already have an account?{" "}
//         <span onClick={() => setAuthMode("login")}>Login</span>
//       </p>
//     </div>
//   );
// }

// export default Signup;




// import { useContext, useState } from "react";
// import { MyContext } from "./MyContext";
// import "./Auth.css";

// // ✅ Render backend URL
// const BASE_URL = "https://sigmagpt-backend-ggrs.onrender.com";

// function Signup() {
//   const { setAuthMode } = useContext(MyContext);

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     try {
//       const res = await fetch(`${BASE_URL}/api/auth/signup`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name, email, password }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.error || "Signup failed");
//         return;
//       }

//       setSuccess("Account created successfully! Please login.");

//       // ✅ Switch to login after short delay
//       setTimeout(() => {
//         setAuthMode("login");
//       }, 1200);

//     } catch (err) {
//       setError("Server error. Try again.");
//     }
//   };

//   return (
//     <div className="authContainer">
//       <h2>Create SigmaGPT Account</h2>

//       {error && <p className="errorText">{error}</p>}
//       {success && <p className="successText">{success}</p>}

//       <form onSubmit={handleSignup}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />

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

//         <button type="submit">Sign Up</button>
//       </form>

//       <p className="switchAuth">
//         Already have an account?{" "}
//         <span onClick={() => setAuthMode("login")}>Login</span>
//       </p>
//     </div>
//   );
// }

// export default Signup;



import { useContext, useState } from "react";
import { MyContext } from "./MyContext";
import "./Auth.css";

// ✅ Backend URL from ENV
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Signup() {
  const { setAuthMode } = useContext(MyContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await fetch(`${BASE_URL}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Signup failed");
        return;
      }

      setSuccess("Account created successfully! Please login.");

      // ✅ Switch to login automatically
      setTimeout(() => {
        setAuthMode("login");
      }, 1200);

    } catch (err) {
      setError("Server error. Try again.");
    }
  };

  return (
    <div className="authContainer">
      <h2>Create SigmaGPT Account</h2>

      {error && <p className="errorText">{error}</p>}
      {success && <p className="successText">{success}</p>}

      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

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

        <button type="submit">Sign Up</button>
      </form>

      <p className="switchAuth">
        Already have an account?{" "}
        <span onClick={() => setAuthMode("login")}>Login</span>
      </p>
    </div>
  );
}

export default Signup;
