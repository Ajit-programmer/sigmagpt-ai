// // import { createContext } from "react";

// // export const MyContext = createContext("");

// import { createContext, useState } from "react";

// export const MyContext = createContext();

// export const MyContextProvider = ({ children }) => {
//   // =========================
//   // AUTH STATE
//   // =========================
//   const [user, setUser] = useState(
//     JSON.parse(localStorage.getItem("user")) || null
//   );
//   const [token, setToken] = useState(localStorage.getItem("token"));
//   const [authMode, setAuthMode] = useState("login");

//   // =========================
//   // CHAT STATE
//   // =========================
//   const [prompt, setPrompt] = useState("");
//   const [reply, setReply] = useState(null);
//   const [currThreadId, setCurrThreadId] = useState(null);
//   const [prevChats, setPrevChats] = useState([]);
//   const [newChat, setNewChat] = useState(true);
//   const [allThreads, setAllThreads] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   // =========================
//   // LOGOUT
//   // =========================
//   const logout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");

//     setToken(null);
//     setUser(null);
//     setPrevChats([]);
//     setAllThreads([]);
//     setNewChat(true);
//   };

//   return (
//     <MyContext.Provider
//       value={{
//         // auth
//         user,
//         setUser,
//         token,
//         setToken,
//         authMode,
//         setAuthMode,
//         logout,

//         // chat
//         prompt,
//         setPrompt,
//         reply,
//         setReply,
//         currThreadId,
//         setCurrThreadId,
//         prevChats,
//         setPrevChats,
//         newChat,
//         setNewChat,
//         allThreads,
//         setAllThreads,
//         isLoading,
//         setIsLoading,
//       }}
//     >
//       {children}
//     </MyContext.Provider>
//   );
// };




import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  /* =========================
     AUTH STATE
  ========================= */
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [authMode, setAuthMode] = useState(null); // 🔥 FIX HERE

  /* =========================
     CHAT STATE
  ========================= */
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState(null);
  const [currThreadId, setCurrThreadId] = useState(null);
  const [prevChats, setPrevChats] = useState([]);
  const [newChat, setNewChat] = useState(true);
  const [allThreads, setAllThreads] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  /* =========================
     LOGOUT
  ========================= */
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setToken(null);
    setUser(null);
    setAuthMode(null);          // 🔥 IMPORTANT
    setPrevChats([]);
    setAllThreads([]);
    setNewChat(true);
  };

  return (
    <MyContext.Provider
      value={{
        // auth
        user,
        setUser,
        token,
        setToken,
        authMode,
        setAuthMode,
        logout,

        // chat
        prompt,
        setPrompt,
        reply,
        setReply,
        currThreadId,
        setCurrThreadId,
        prevChats,
        setPrevChats,
        newChat,
        setNewChat,
        allThreads,
        setAllThreads,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
