// // // import "./Sidebar.css";
// // // import { useContext, useEffect } from "react";
// // // import { MyContext } from "./MyContext";
// // // import {v1 as uuidv1} from "uuid";


// // // function Sidebar() {

// // //     const {allThreads , setAllThreads , currThreadId , setNewChat , setPrompt , setReply , setCurrThreadId ,setPrevChats} = useContext(MyContext);

// // //     const getAllThreads = async () => {
// // //       try {
// // //         const response = await fetch("http://localhost:8080/api/thread");
// // //         const res = await response.json();
// // //         const filteredData = res.map(thread => ({threadId: thread.threadId , title: thread.title}));
// // //         //console.log(filteredData);
// // //         setAllThreads(filteredData);
// // //       } catch (err) {
// // //         console.log(err);
// // //       }
// // //     };

// // //     useEffect (() => {
// // //       getAllThreads();
// // //     } , [currThreadId])


// // //     const createNewChat = () => {
// // //       setNewChat(true);
// // //       setPrompt(" ");
// // //       setReply(null);
// // //       setCurrThreadId(uuidv1());
// // //       setPrevChats([]);
// // //     }

// // //     const changeThread = async (newThreadId) => {
// // //         setCurrThreadId(newThreadId);

// // //         try{
// // //            const response =await fetch(`http://localhost:8080/api/thread/${newThreadId}`);
// // //            const res = await response.json();
// // //            console.log(res);
// // //            setPrevChats(res);
// // //            setNewChat(false);
// // //            setReply(null);
// // //         } catch(err) {
// // //            console.log(err);
// // //         }
// // //     }

// // //     const deleteThread = async (threadId) => {
// // //   try {
// // //     await fetch(`http://localhost:8080/api/thread/${threadId}`, {
// // //       method: "DELETE",
// // //     });

// // //     setAllThreads(prev =>
// // //       prev.filter(t => t.threadId !== threadId)
// // //     );

// // //     // if deleted thread is active
// // //     if (threadId === currThreadId) {
// // //       setNewChat(true);
// // //       setPrevChats([]);
// // //       setPrompt("");
// // //       setReply(null);
// // //     }

// // //   } catch (err) {
// // //     console.log(err);
// // //   }
// // // };


// // //     return (
// // //         <section className="sidebar">
// // //               {/* {new chat button} */}
// // //               <button onClick={createNewChat}>
// // //                 <img src="src/assets/blacklogo.png" alt="GPT LOGO" ></img>
// // //                 <i className="fa-solid fa-pen-to-square"></i>
// // //               </button>

// // //               {/* {history} */}

// // //               <ul className="history">
// // //                 {
// // //                   allThreads?.map((thread , idx) => (
// // //                          <li key={idx}
// // //                          onClick={ (e) => changeThread(thread.threadId)}
// // //                          >
// // //                           {thread.title}
// // //                                <i className="fa-solid fa-trash"
// // //                                   onClick={(e) => {
// // //                                        e.stopPropagation();
// // //                                        deleteThread(thread.threadId);
// // //                                      }}
// // //                                ></i>
// // //                           </li>
// // //                   ))
// // //                 }
// // //               </ul>
// // //               {/* {sign} */}
// // //               <div className="sign">
// // //                 <p>BY AJIT GUPTA</p>
// // //               </div>
// // //         </section>
// // //     )
// // // }

// // // export default Sidebar;



// // import "./Sidebar.css";
// // import { useContext, useEffect } from "react";
// // import { MyContext } from "./MyContext";
// // import { v1 as uuidv1 } from "uuid";

// // function Sidebar() {
// //   const {
// //     allThreads,
// //     setAllThreads,
// //     currThreadId,
// //     setNewChat,
// //     setPrompt,
// //     setReply,
// //     setCurrThreadId,
// //     setPrevChats,
// //     token,
// //     user,
// //     logout,
// //   } = useContext(MyContext);

// //   /* =========================
// //      FETCH ALL THREADS
// //   ========================= */
// //   const getAllThreads = async () => {
// //     try {
// //       const response = await fetch("http://localhost:8080/api/thread", {
// //         headers: {
// //           Authorization: `Bearer ${token}`, // 🔐 REQUIRED
// //         },
// //       });

// //       const res = await response.json();

// //       const filteredData = res.map((thread) => ({
// //         threadId: thread.threadId,
// //         title: thread.title,
// //       }));

// //       setAllThreads(filteredData);
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };

// //   useEffect(() => {
// //     if (token) {
// //       getAllThreads();
// //     }
// //   }, [currThreadId, token]);

// //   /* =========================
// //      CREATE NEW CHAT
// //   ========================= */
// //   const createNewChat = () => {
// //     setNewChat(true);
// //     setPrompt("");
// //     setReply(null);
// //     setCurrThreadId(uuidv1());
// //     setPrevChats([]);
// //   };

// //   /* =========================
// //      CHANGE THREAD
// //   ========================= */
// //   const changeThread = async (newThreadId) => {
// //     setCurrThreadId(newThreadId);

// //     try {
// //       const response = await fetch(
// //         `http://localhost:8080/api/thread/${newThreadId}`,
// //         {
// //           headers: {
// //             Authorization: `Bearer ${token}`, // 🔐 REQUIRED
// //           },
// //         }
// //       );

// //       const res = await response.json();

// //       setPrevChats(res);
// //       setNewChat(false);
// //       setReply(null);
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };

// //   /* =========================
// //      DELETE THREAD
// //   ========================= */
// //   const deleteThread = async (threadId) => {
// //     try {
// //       await fetch(`http://localhost:8080/api/thread/${threadId}`, {
// //         method: "DELETE",
// //         headers: {
// //           Authorization: `Bearer ${token}`, // 🔐 REQUIRED
// //         },
// //       });

// //       setAllThreads((prev) =>
// //         prev.filter((t) => t.threadId !== threadId)
// //       );

// //       if (threadId === currThreadId) {
// //         setNewChat(true);
// //         setPrevChats([]);
// //         setPrompt("");
// //         setReply(null);
// //       }
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };

// //   return (
// //     <section className="sidebar">
// //       {/* ===== New Chat Button ===== */}
// //       <button onClick={createNewChat}>
// //         <img src="src/assets/blacklogo.png" alt="GPT LOGO" />
// //         <i className="fa-solid fa-pen-to-square"></i>
// //       </button>

// //       {/* ===== User Info ===== */}
// //       <div className="userInfo">
// //         <p>👤 {user?.name}</p>
// //         <small>{user?.email}</small>
// //       </div>

// //       {/* ===== Chat History ===== */}
// //       <ul className="history">
// //         {allThreads?.map((thread, idx) => (
// //           <li
// //             key={idx}
// //             onClick={() => changeThread(thread.threadId)}
// //             className={thread.threadId === currThreadId ? "active" : ""}
// //           >
// //             {thread.title}
// //             <i
// //               className="fa-solid fa-trash"
// //               onClick={(e) => {
// //                 e.stopPropagation();
// //                 deleteThread(thread.threadId);
// //               }}
// //             ></i>
// //           </li>
// //         ))}
// //       </ul>

// //       {/* ===== Footer ===== */}
// //       <div className="sign">
// //         <button className="logoutBtn" onClick={logout}>
// //           Logout
// //         </button>
// //         <p>BY AJIT GUPTA</p>
// //       </div>
// //     </section>
// //   );
// // }

// // export default Sidebar;



// import "./Sidebar.css";
// import { useContext, useEffect } from "react";
// import { MyContext } from "./MyContext";
// import { v1 as uuidv1 } from "uuid";

// function Sidebar() {
//   const {
//     allThreads,
//     setAllThreads,
//     currThreadId,
//     setNewChat,
//     setPrompt,
//     setReply,
//     setCurrThreadId,
//     setPrevChats,
//     token,
//     user,
//     logout,
//   } = useContext(MyContext);

//   /* =========================
//      FETCH ALL THREADS (ONLY IF LOGGED IN)
//   ========================= */
//   const getAllThreads = async () => {
//     if (!token) return;

//     try {
//       const response = await fetch("http://localhost:8080/api/thread", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       const res = await response.json();

//       const filteredData = res.map((thread) => ({
//         threadId: thread.threadId,
//         title: thread.title,
//       }));

//       setAllThreads(filteredData);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     if (token) {
//       getAllThreads();
//     } else {
//       setAllThreads([]);
//     }
//   }, [currThreadId, token]);

//   /* =========================
//      CREATE NEW CHAT
//   ========================= */
//   const createNewChat = () => {
//     setNewChat(true);
//     setPrompt("");
//     setReply(null);
//     setCurrThreadId(uuidv1());
//     setPrevChats([]);
//   };

//   /* =========================
//      CHANGE THREAD
//   ========================= */
//   const changeThread = async (newThreadId) => {
//     if (!token) return;

//     setCurrThreadId(newThreadId);

//     try {
//       const response = await fetch(
//         `http://localhost:8080/api/thread/${newThreadId}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       const res = await response.json();

//       setPrevChats(res);
//       setNewChat(false);
//       setReply(null);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   /* =========================
//      DELETE THREAD
//   ========================= */
//   const deleteThread = async (threadId) => {
//     if (!token) return;

//     try {
//       await fetch(`http://localhost:8080/api/thread/${threadId}`, {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       setAllThreads((prev) =>
//         prev.filter((t) => t.threadId !== threadId)
//       );

//       if (threadId === currThreadId) {
//         setNewChat(true);
//         setPrevChats([]);
//         setPrompt("");
//         setReply(null);
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <section className="sidebar">
//       {/* ===== New Chat Button ===== */}
//       <button onClick={createNewChat}>
//         <img src="src/assets/blacklogo.png" alt="GPT LOGO" />
//         <i className="fa-solid fa-pen-to-square"></i>
//       </button>

//       {/* ===== USER INFO CARD ===== */}
//       {token && user && (
//         <div className="userInfo">
//           <div className="avatar">
//             {user.name?.charAt(0).toUpperCase()}
//           </div>

//           <div className="userDetails">
//             <p className="userName">{user.name}</p>
//             <p className="userEmail">{user.email}</p>
//           </div>
//         </div>
//       )}

//       {/* ===== Chat History ===== */}
//       <ul className="history">
//         {token ? (
//           allThreads.map((thread, idx) => (
//             <li
//               key={idx}
//               onClick={() => changeThread(thread.threadId)}
//               className={
//                 thread.threadId === currThreadId ? "active" : ""
//               }
//             >
//               {thread.title}
//               <i
//                 className="fa-solid fa-trash"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   deleteThread(thread.threadId);
//                 }}
//               ></i>
//             </li>
//           ))
//         ) : (
//           <p className="guestHint">
//             Login to see your chat history
//           </p>
//         )}
//       </ul>

//       {/* ===== Footer ===== */}
//     <div className="sidebarFooter">
//   {token && (
//     <button className="logoutBtn" onClick={logout}>
//       <i className="fa-solid fa-right-from-bracket"></i>
//       Logout
//     </button>
//   )}

//   <div className="footerDivider"></div>

//   <p className="credit">BY AJIT GUPTA</p>
// </div>

//     </section>
//   );
// }

// export default Sidebar;



import "./Sidebar.css";
import { useContext, useEffect } from "react";
import { MyContext } from "./MyContext";
import { v1 as uuidv1 } from "uuid";

function Sidebar() {
  const {
    allThreads,
    setAllThreads,
    currThreadId,
    setNewChat,
    setPrompt,
    setReply,
    setCurrThreadId,
    setPrevChats,
    token,
    user,
    logout,
  } = useContext(MyContext);

  /* =========================
     FETCH ALL THREADS (ONLY IF LOGGED IN)
  ========================= */
  const getAllThreads = async () => {
    if (!token) return;

    try {
      const response = await fetch("http://localhost:8080/api/thread", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const res = await response.json();

      const filteredData = res.map((thread) => ({
        threadId: thread.threadId,
        title: thread.title,
      }));

      setAllThreads(filteredData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (token) {
      getAllThreads();
    } else {
      setAllThreads([]);
    }
  }, [currThreadId, token]);

  /* =========================
     CREATE NEW CHAT
  ========================= */
  const createNewChat = () => {
    setNewChat(true);
    setPrompt("");
    setReply(null);
    setCurrThreadId(uuidv1());
    setPrevChats([]);
  };

  /* =========================
     CHANGE THREAD
  ========================= */
  const changeThread = async (newThreadId) => {
    if (!token) return;

    setCurrThreadId(newThreadId);

    try {
      const response = await fetch(
        `http://localhost:8080/api/thread/${newThreadId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const res = await response.json();

      setPrevChats(res);
      setNewChat(false);
      setReply(null);
    } catch (err) {
      console.log(err);
    }
  };

  /* =========================
     DELETE THREAD
  ========================= */
  const deleteThread = async (threadId) => {
    if (!token) return;

    try {
      await fetch(`http://localhost:8080/api/thread/${threadId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setAllThreads((prev) =>
        prev.filter((t) => t.threadId !== threadId)
      );

      if (threadId === currThreadId) {
        setNewChat(true);
        setPrevChats([]);
        setPrompt("");
        setReply(null);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="sidebar">
      {/* ===== New Chat Button ===== */}
      <button onClick={createNewChat}>
        <img src="src/assets/blacklogo.png" alt="GPT LOGO" />
        <i className="fa-solid fa-pen-to-square"></i>
      </button>

      {/* ===== USER INFO CARD ===== */}
      {token && user && (
        <div className="userInfo">
          <div className="avatar">
            {user.name?.charAt(0).toUpperCase()}
          </div>

          <div className="userDetails">
            <p className="userName">{user.name}</p>
            <p className="userEmail">{user.email}</p>
          </div>
        </div>
      )}

      {/* ===== Chat History ===== */}
      <ul className="history">
        {token ? (
          allThreads.map((thread, idx) => (
            <li
              key={idx}
              onClick={() => changeThread(thread.threadId)}
              className={
                thread.threadId === currThreadId ? "active" : ""
              }
            >
              {thread.title}
              <i
                className="fa-solid fa-trash"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteThread(thread.threadId);
                }}
              ></i>
            </li>
          ))
        ) : (
          <p className="guestHint">
            Login to see your chat history
          </p>
        )}
      </ul>

      {/* ===== Footer ===== */}
    <div className="sidebarFooter">
  {token && (
    <button className="logoutBtn" onClick={logout}>
      <i className="fa-solid fa-right-from-bracket"></i>
      Logout
    </button>
  )}

  <div className="footerDivider"></div>

  <p className="credit">BY AJIT GUPTA</p>
</div>

    </section>
  );
}

export default Sidebar;
