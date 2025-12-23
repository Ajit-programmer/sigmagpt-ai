// // // import "./ChatWindow.css";
// // // import Chat from "./Chat.jsx";
// // // import { MyContext } from "./MyContext.jsx";
// // // import { useContext , useState  , useEffect} from "react";
// // // import {ScaleLoader} from "react-spinners";

// // // function ChatWindow() {

// // //   /* ===== Context Values ===== */
// // //   const {
// // //     prompt,
// // //     setPrompt,
// // //     reply,
// // //     setReply,
// // //     currThreadId,
// // //     prevChats ,
// // //     setPrevChats,
// // //     setNewChat
// // //   } = useContext(MyContext);

// // //   const [
// // //     loading,
// // //     setLoading
// // //    ] = useState(false);

// // //   /* ===== Fetch Reply from Backend ===== */
// // //   const getReply = async () => {
// // //     setLoading(true);
// // //     setNewChat(false);
    
// // //     console.log("Message :" , prompt , "threadId" , currThreadId);
// // //     const options = {
// // //       method: "POST",
// // //       headers: {
// // //         "Content-Type": "application/json"
// // //       },
// // //       body: JSON.stringify({
// // //         message: prompt,
// // //         threadId: currThreadId
// // //       })
// // //     };

// // //     try {
// // //       const response = await fetch(
// // //         "http://localhost:8080/api/chat",
// // //         options
// // //       );
// // //       const res = await response.json();
// // //       console.log(res);
// // //       setReply(res.reply);
// // //     } catch (err) {
// // //       console.error(err);
// // //     }
// // //     setLoading(false);
// // //   };

// // //   //Append New Chat to Previous chat
// // //   useEffect (() => {
// // //     if(prompt && reply) {
// // //          setPrevChats(prevChats => (
// // //           [...prevChats , {
// // //             role: "user",
// // //             content: prompt
// // //           } , {
// // //             role: "assistant",
// // //             content: reply
// // //           }]
// // //          ))
// // //     }
// // //     setPrompt("");
// // //   } , [reply]);

// // //   return (
// // //     <div className="chatWindow">

// // //       {/* ===== Top Navigation Bar ===== */}
// // //       <div className="navbar">
// // //         <span>
// // //           SigmaGPT&nbsp;
// // //           <i className="fa-solid fa-angle-down fa-fade"></i>
// // //         </span>

// // //         <div className="userIconDiv">
// // //           <span>
// // //             <i className="fa-solid fa-user fa-fade"></i>
// // //           </span>
// // //         </div>
// // //       </div>

// // //       {/* ===== Chat Messages Area ===== */}
// // //       <Chat />

// // //       {/* {Loader} */}
// // //       <ScaleLoader color="#fff" loading={loading}>

// // //       </ScaleLoader>

// // //       {/* ===== Input Section ===== */}
// // //       <div className="chatInput">

// // //         <div className="userInput">
// // //           <input
// // //             type="text"
// // //             placeholder="Ask Anything"
// // //             value={prompt}
// // //             onChange={(e) => setPrompt(e.target.value)}
// // //             onKeyDown={(e) => e.key === 'Enter' ? getReply() : ''}
// // //           />

// // //           <div id="submit" onClick={getReply}>
// // //             <i className="fa-solid fa-paper-plane"></i>
// // //           </div>
// // //         </div>

// // //         <p className="info">
// // //           ChatGPT can make mistakes. Check important info.
// // //           See Cookie Preferences.
// // //         </p>

// // //       </div>

// // //     </div>
// // //   );
// // // }

// // // export default ChatWindow;


// // // import "./ChatWindow.css";
// // // import Chat from "./Chat.jsx";
// // // import { MyContext } from "./MyContext.jsx";
// // // import { useContext, useEffect } from "react";
// // // import { ScaleLoader } from "react-spinners";

// // // function ChatWindow() {
// // //   /* ===== Context Values ===== */
// // //   const {
// // //     prompt,
// // //     setPrompt,
// // //     reply,
// // //     setReply,
// // //     currThreadId,
// // //     setCurrThreadId,
// // //     prevChats,
// // //     setPrevChats,
// // //     setNewChat,
// // //     token,
// // //     isLoading,
// // //     setIsLoading,
// // //   } = useContext(MyContext);

// // //   /* ===== Fetch Reply from Backend ===== */
// // //   const getReply = async () => {
// // //     if (!prompt.trim()) return;

// // //     setIsLoading(true);
// // //     setNewChat(false);

// // //     // Add user message immediately
// // //     setPrevChats((prev) => [
// // //       ...prev,
// // //       { role: "user", content: prompt },
// // //     ]);

// // //     const options = {
// // //       method: "POST",
// // //       headers: {
// // //         "Content-Type": "application/json",
// // //         Authorization: `Bearer ${token}`, // 🔐 REQUIRED
// // //       },
// // //       body: JSON.stringify({
// // //         message: prompt,
// // //         threadId: currThreadId,
// // //       }),
// // //     };

// // //     try {
// // //       const response = await fetch(
// // //         "http://localhost:8080/api/chat",
// // //         options
// // //       );

// // //       const res = await response.json();

// // //       if (!response.ok) {
// // //         throw new Error(res.error || "Chat failed");
// // //       }

// // //       setReply(res.reply);

// // //       // Save AI reply after response
// // //       setPrevChats((prev) => [
// // //         ...prev,
// // //         { role: "model", content: res.reply },
// // //       ]);

// // //       // Update threadId if new
// // //       if (res.threadId) {
// // //         setCurrThreadId(res.threadId);
// // //       }

// // //     } catch (err) {
// // //       console.error(err);
// // //     } finally {
// // //       setIsLoading(false);
// // //       setPrompt("");
// // //     }
// // //   };

// // //   return (
// // //     <div className="chatWindow">
// // //       {/* ===== Top Navigation Bar ===== */}
// // //       <div className="navbar">
// // //         <span>
// // //           SigmaGPT&nbsp;
// // //           <i className="fa-solid fa-angle-down fa-fade"></i>
// // //         </span>

// // //         <div className="userIconDiv">
// // //           <span>
// // //             <i className="fa-solid fa-user fa-fade"></i>
// // //           </span>
// // //         </div>
// // //       </div>

// // //       {/* ===== Chat Messages Area ===== */}
// // //       <Chat />

// // //       {/* ===== Loader ===== */}
// // //       <ScaleLoader color="#fff" loading={isLoading} />

// // //       {/* ===== Input Section ===== */}
// // //       <div className="chatInput">
// // //         <div className="userInput">
// // //           <input
// // //             type="text"
// // //             placeholder="Ask Anything"
// // //             value={prompt}
// // //             onChange={(e) => setPrompt(e.target.value)}
// // //             onKeyDown={(e) => e.key === "Enter" && getReply()}
// // //             disabled={isLoading}
// // //           />

// // //           <div id="submit" onClick={getReply}>
// // //             <i className="fa-solid fa-paper-plane"></i>
// // //           </div>
// // //         </div>

// // //         <p className="info">
// // //           SigmaGPT can make mistakes. Check important info.
// // //         </p>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default ChatWindow;



// // import "./ChatWindow.css";
// // import Chat from "./Chat.jsx";
// // import { MyContext } from "./MyContext.jsx";
// // import { useContext, useEffect } from "react";
// // import { ScaleLoader } from "react-spinners";

// // function ChatWindow() {
// //   /* ===== Context Values ===== */
// //   const {
// //     prompt,
// //     setPrompt,
// //     reply,
// //     setReply,
// //     currThreadId,
// //     setCurrThreadId,
// //     prevChats,
// //     setPrevChats,
// //     setNewChat,
// //     token,
// //     isLoading,
// //     setIsLoading,
// //   } = useContext(MyContext);

// //   /* ===== Fetch Reply from Backend ===== */
// //   const getReply = async () => {
// //     if (!prompt.trim()) return;

// //     setIsLoading(true);
// //     setNewChat(false);

// //     // Add user message immediately
// //     setPrevChats((prev) => [
// //       ...prev,
// //       { role: "user", content: prompt },
// //     ]);

// //     const options = {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //         Authorization: `Bearer ${token}`, // 🔐 REQUIRED
// //       },
// //       body: JSON.stringify({
// //         message: prompt,
// //         threadId: currThreadId,
// //       }),
// //     };

// //     try {
// //       const response = await fetch(
// //         "http://localhost:8080/api/chat",
// //         options
// //       );

// //       const res = await response.json();

// //       if (!response.ok) {
// //         throw new Error(res.error || "Chat failed");
// //       }

// //       setReply(res.reply);

// //       // Save AI reply after response
// //       setPrevChats((prev) => [
// //         ...prev,
// //         { role: "model", content: res.reply },
// //       ]);

// //       // Update threadId if new
// //       if (res.threadId) {
// //         setCurrThreadId(res.threadId);
// //       }

// //     } catch (err) {
// //       console.error(err);
// //     } finally {
// //       setIsLoading(false);
// //       setPrompt("");
// //     }
// //   };

// //   return (
// //     <div className="chatWindow">
// //       {/* ===== Top Navigation Bar ===== */}
// //       <div className="navbar">
// //         <span>
// //           SigmaGPT&nbsp;
// //           <i className="fa-solid fa-angle-down fa-fade"></i>
// //         </span>

// //         <div className="userIconDiv">
// //           <span>
// //             <i className="fa-solid fa-user fa-fade"></i>
// //           </span>
// //         </div>
// //       </div>

// //       {/* ===== Chat Messages Area ===== */}
// //       <Chat />

// //       {/* ===== Loader ===== */}
// //       <ScaleLoader color="#fff" loading={isLoading} />

// //       {/* ===== Input Section ===== */}
// //       <div className="chatInput">
// //         <div className="userInput">
// //           <input
// //             type="text"
// //             placeholder="Ask Anything"
// //             value={prompt}
// //             onChange={(e) => setPrompt(e.target.value)}
// //             onKeyDown={(e) => e.key === "Enter" && getReply()}
// //             disabled={isLoading}
// //           />

// //           <div id="submit" onClick={getReply}>
// //             <i className="fa-solid fa-paper-plane"></i>
// //           </div>
// //         </div>

// //         <p className="info">
// //           SigmaGPT can make mistakes. Check important info.
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }

// // export default ChatWindow;

// import "./ChatWindow.css";
// import Chat from "./Chat.jsx";
// import UserMenu from "./UserMenu";
// import { MyContext } from "./MyContext.jsx";
// import { useContext } from "react";
// import { ScaleLoader } from "react-spinners";

// function ChatWindow() {
//   /* =========================
//      CONTEXT VALUES
//   ========================= */
//   const {
//     prompt,
//     setPrompt,
//     reply,
//     setReply,
//     currThreadId,
//     setCurrThreadId,
//     setPrevChats,
//     setNewChat,
//     token,
//     isLoading,
//     setIsLoading,
//     setAuthMode,
//   } = useContext(MyContext);

//   /* =========================
//      SEND MESSAGE
//   ========================= */
//   const getReply = async () => {
//     if (!prompt.trim()) return;

//     // 🔐 Require login only when sending
//     if (!token) {
//       setAuthMode("login");
//       return;
//     }

//     setIsLoading(true);
//     setNewChat(false);

//     // Add user message immediately
//     setPrevChats((prev) => [
//       ...prev,
//       { role: "user", content: prompt },
//     ]);

//     try {
//       const response = await fetch("http://localhost:8080/api/chat", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           message: prompt,
//           threadId: currThreadId,
//         }),
//       });

//       const res = await response.json();

//       if (!response.ok) {
//         throw new Error(res.error || "Chat failed");
//       }

//       // Add AI reply
//       setReply(res.reply);
//       setPrevChats((prev) => [
//         ...prev,
//         { role: "model", content: res.reply },
//       ]);

//       if (res.threadId) {
//         setCurrThreadId(res.threadId);
//       }
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setIsLoading(false);
//       setPrompt("");
//     }
//   };

//   return (
//     <div className="chatWindow">
//       {/* =========================
//           TOP NAVBAR
//       ========================= */}
//       <div className="navbar">
//         <span>
//           SigmaGPT&nbsp;
//           <i className="fa-solid fa-angle-down fa-fade"></i>
//         </span>

//         {/* USER ICON + HOVER MENU */}
//         <div className="userIconDiv">
//           <i className="fa-solid fa-user fa-fade"></i>
//           <UserMenu />
//         </div>
//       </div>

//       {/* =========================
//           CHAT AREA
//       ========================= */}
//       <Chat />

//       {/* =========================
//           LOADER
//       ========================= */}
//       <ScaleLoader color="#fff" loading={isLoading} />

//       {/* =========================
//           INPUT AREA
//       ========================= */}
//       <div className="chatInput">
//         <div className="userInput">
//           <input
//             type="text"
//             placeholder={
//               token ? "Ask Anything..." : "Login to start chatting"
//             }
//             value={prompt}
//             onChange={(e) => setPrompt(e.target.value)}
//             onKeyDown={(e) => e.key === "Enter" && getReply()}
//             disabled={isLoading}
//           />

//           <div id="submit" onClick={getReply}>
//             <i className="fa-solid fa-paper-plane"></i>
//           </div>
//         </div>

//         <p className="info">
//           SigmaGPT can make mistakes. Check important info.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default ChatWindow;



// import "./ChatWindow.css";
// import Chat from "./Chat.jsx";
// import UserMenu from "./UserMenu";
// import Login from "./Login";
// import Signup from "./Signup";
// import { MyContext } from "./MyContext.jsx";
// import { useContext } from "react";
// import { ScaleLoader } from "react-spinners";

// function ChatWindow() {
//   /* =========================
//      CONTEXT VALUES
//   ========================= */
//   const {
//     prompt,
//     setPrompt,
//     reply,
//     setReply,
//     currThreadId,
//     setCurrThreadId,
//     setPrevChats,
//     setNewChat,
//     token,
//     isLoading,
//     setIsLoading,
//     authMode,
//     setAuthMode,
//   } = useContext(MyContext);

//   /* =========================
//      SEND MESSAGE
//   ========================= */
//   const getReply = async () => {
//     if (!prompt.trim()) return;

//     // 🔐 Require login only when sending
//     if (!token) {
//       setAuthMode("login");
//       return;
//     }

//     setIsLoading(true);
//     setNewChat(false);

//     // Add user message immediately
//     setPrevChats((prev) => [
//       ...prev,
//       { role: "user", content: prompt },
//     ]);

//     try {
//       const response = await fetch("http://localhost:8080/api/chat", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           message: prompt,
//           threadId: currThreadId,
//         }),
//       });

//       const res = await response.json();

//       if (!response.ok) {
//         throw new Error(res.error || "Chat failed");
//       }

//       // Add AI reply
//       setReply(res.reply);
//       setPrevChats((prev) => [
//         ...prev,
//         { role: "model", content: res.reply },
//       ]);

//       if (res.threadId) {
//         setCurrThreadId(res.threadId);
//       }
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setIsLoading(false);
//       setPrompt("");
//     }
//   };

//   return (
//     <div className="chatWindow">
//       {/* =========================
//           TOP NAVBAR
//       ========================= */}
//       <div className="navbar">
//         <span>
//           SigmaGPT&nbsp;
//           <i className="fa-solid fa-angle-down fa-fade"></i>
//         </span>

//         {/* USER ICON + HOVER MENU */}
//         <div className="userIconDiv">
//           <i className="fa-solid fa-user fa-fade"></i>
//           <UserMenu />
//         </div>
//       </div>

//       {/* =========================
//           CHAT AREA
//       ========================= */}
//       <Chat />

//       {/* =========================
//           LOADER
//       ========================= */}
//       <ScaleLoader color="#fff" loading={isLoading} />

//       {/* =========================
//           INPUT AREA
//       ========================= */}
//       <div className="chatInput">
//         <div className="userInput">
//           <input
//             type="text"
//             placeholder={
//               token ? "Ask Anything..." : "Login to start chatting"
//             }
//             value={prompt}
//             onChange={(e) => setPrompt(e.target.value)}
//             onKeyDown={(e) => e.key === "Enter" && getReply()}
//             disabled={isLoading}
//           />

//           <div id="submit" onClick={getReply}>
//             <i className="fa-solid fa-paper-plane"></i>
//           </div>
//         </div>

//         <p className="info">
//           SigmaGPT can make mistakes. Check important info.
//         </p>
//       </div>

//       {/* =========================
//           AUTH OVERLAY (LOGIN / SIGNUP)
//       ========================= */}
//       {!token && authMode && (
//         <div
//           className="authOverlay"
//           onClick={() => setAuthMode(null)}
//         >
//           <div onClick={(e) => e.stopPropagation()}>
//             {authMode === "login" ? <Login /> : <Signup />}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ChatWindow;




import "./ChatWindow.css";
import Chat from "./Chat.jsx";
import UserMenu from "./UserMenu";
import Login from "./Login";
import Signup from "./Signup";
import { MyContext } from "./MyContext.jsx";
import { useContext } from "react";
import { ScaleLoader } from "react-spinners";

// ✅ Backend URL from ENV (Render)
const API_BASE = import.meta.env.VITE_API_BASE_URL;

function ChatWindow() {
  /* =========================
     CONTEXT VALUES
  ========================= */
  const {
    prompt,
    setPrompt,
    reply,
    setReply,
    currThreadId,
    setCurrThreadId,
    setPrevChats,
    setNewChat,
    token,
    isLoading,
    setIsLoading,
    authMode,
    setAuthMode,
  } = useContext(MyContext);

  /* =========================
     SEND MESSAGE
  ========================= */
  const getReply = async () => {
    if (!prompt.trim()) return;

    // 🔐 Require login only when sending
    if (!token) {
      setAuthMode("login");
      return;
    }

    setIsLoading(true);
    setNewChat(false);

    // Add user message immediately
    setPrevChats((prev) => [
      ...prev,
      { role: "user", content: prompt },
    ]);

    try {
      const response = await fetch(`${API_BASE}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          message: prompt,
          threadId: currThreadId,
        }),
      });

      const res = await response.json();

      if (!response.ok) {
        throw new Error(res.error || "Chat failed");
      }

      // Add AI reply
      setReply(res.reply);
      setPrevChats((prev) => [
        ...prev,
        { role: "model", content: res.reply },
      ]);

      if (res.threadId) {
        setCurrThreadId(res.threadId);
      }
    } catch (err) {
      console.error("Chat error:", err);
    } finally {
      setIsLoading(false);
      setPrompt("");
    }
  };

  return (
    <div className="chatWindow">
      {/* =========================
          TOP NAVBAR
      ========================= */}
      <div className="navbar">
        <span>
          SigmaGPT&nbsp;
          <i className="fa-solid fa-angle-down fa-fade"></i>
        </span>

        {/* USER ICON + MENU */}
        <div className="userIconDiv">
          <i className="fa-solid fa-user fa-fade"></i>
          <UserMenu />
        </div>
      </div>

      {/* =========================
          CHAT AREA
      ========================= */}
      <Chat />

      {/* =========================
          LOADER
      ========================= */}
      <ScaleLoader color="#fff" loading={isLoading} />

      {/* =========================
          INPUT AREA
      ========================= */}
      <div className="chatInput">
        <div className="userInput">
          <input
            type="text"
            placeholder={
              token ? "Ask Anything..." : "Login to start chatting"
            }
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && getReply()}
            disabled={isLoading}
          />

          <div id="submit" onClick={getReply}>
            <i className="fa-solid fa-paper-plane"></i>
          </div>
        </div>

        <p className="info">
          SigmaGPT can make mistakes. Check important info.
        </p>
      </div>

      {/* =========================
          AUTH OVERLAY
      ========================= */}
      {!token && authMode && (
        <div
          className="authOverlay"
          onClick={() => setAuthMode(null)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            {authMode === "login" ? <Login /> : <Signup />}
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatWindow;
