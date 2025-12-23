// // // import "./Chat.css";
// // // import { useContext, useState } from "react";
// // // import { MyContext } from "./MyContext";
// // // import rehypeHighlight from "rehype-highlight";
// // // import ReactMarkdown from "react-markdown";
// // // import "highlight.js/styles/github-dark.css";


// // // function Chat() {
// // //     const {newChat , prevChats} = useContext(MyContext);

// // //   return (

// // //     <div className="chatArea">

// // //         {newChat && <h1>Start a New Chat</h1>}

// // //       <div className="chatContent">

// // //            {
// // //             prevChats?.map((chat , idx) => 
// // //                <div className={chat.role === "user"? "userDiv" :"gptDiv"} key={idx}>
// // //                    {
// // //                     chat.role === "user"?
// // //                     <p className="userMessage">{chat.content}</p> :
// // //                     <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{chat.content}</ReactMarkdown>
// // //                    }
// // //                </div>
// // //             )
// // //            }

// // //         {/* messages will come here later */}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Chat;
// // import "./Chat.css";
// // import { useContext  , useState , useEffect} from "react";
// // import { MyContext } from "./MyContext";
// // import ReactMarkdown from "react-markdown";
// // import rehypeHighlight from "rehype-highlight";
// // import "highlight.js/styles/github-dark.css";

// // function Chat() {
// //   const { newChat, prevChats , reply} = useContext(MyContext);
// //   const [latestReply , setLatestReply] = useState(null);

// //   useEffect (() => {
// //     //LatestReply separate => typing effect create
// //     if(!prevChats?.length) return;

// //     const content = reply.split(" "); //Individual Words

// //     let idx = 0;
// //     const interval = setInterval(() => {
// //         setLatestReply(content.slice(0 , idx+1).join(" "));

// //         idx++;
// //         if(idx >= content.length) clearInterval(interval);
// //     } , 40);

// //   } , [prevChats , reply])

// //   return (
// //     <div className="chatArea">

// //       {/* ===== EMPTY CHAT STATE ===== */}
// //       {newChat && prevChats.length === 0 && (
// //         <div className="emptyChat">
// //           <h1>Start a New Chat</h1>
// //         </div>
// //       )}

// //       {/* ===== CHAT CONTENT ===== */}
// //       <div className="chatContent">
// //         {prevChats?.slice(0 , -1).map((chat, idx) => (
// //           <div
// //             key={idx}
// //             className={chat.role === "user" ? "userDiv" : "gptDiv"}
// //           >
// //             {/* USER MESSAGE */}
// //             {chat.role === "user" ? (
// //               <p className="userMessage">{chat.content}</p>
// //             ) : (
// //               /* GPT MESSAGE (MARKDOWN WRAPPED) */
// //               <div className="gptMessage">
// //                 <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
// //                   {chat.content}
// //                 </ReactMarkdown>
// //               </div>
// //             )}
// //           </div>
// //         ))}

// //            {
// //             prevChats.length > 0 && latestReply !== null &&
// //             <div className="gptDiv"  key={"typing"}>
// //                <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
// //                   {latestReply}
// //                 </ReactMarkdown> 
                   
// //              </div>
// //            }

// //       </div>

// //     </div>
// //   );
// // }

// // export default Chat;


// import "./Chat.css";
// import { useContext, useState, useEffect } from "react";
// import { MyContext } from "./MyContext";
// import ReactMarkdown from "react-markdown";
// import rehypeHighlight from "rehype-highlight";
// import "highlight.js/styles/github-dark.css";

// function Chat() {
//   const { newChat, prevChats, reply, isLoading } = useContext(MyContext);
//   const [latestReply, setLatestReply] = useState("");

//   useEffect(() => {

//     if(reply === null) {
//         setLatestReply(null);
//         return;
//     }


//     if (!reply || !isLoading) return;

//     const words = reply.split(" ");
//     let idx = 0;

//     setLatestReply("");

//     const interval = setInterval(() => {
//       setLatestReply((prev) =>
//         prev ? prev + " " + words[idx] : words[idx]
//       );

//       idx++;
//       if (idx >= words.length) clearInterval(interval);
//     }, 40);

//     return () => clearInterval(interval);
//   }, [reply, isLoading]);

//   return (
//     <div className="chatArea">
//       {/* EMPTY STATE */}
//       {newChat && prevChats.length === 0 && (
//         <div className="emptyChat">
//           <h1>Start a New Chat</h1>
//         </div>
//       )}

//       <div className="chatContent">
//         {/* CHAT HISTORY (EXCEPT LAST GPT WHEN TYPING) */}
//         {prevChats.map((chat, idx) => {
//           const isLastGPT =
//             chat.role === "assistant" &&
//             idx === prevChats.length - 1 &&
//             isLoading;

//           if (isLastGPT) return null;

//           return (
//             <div
//               key={idx}
//               className={chat.role === "user" ? "userDiv" : "gptDiv"}
//             >
//               {chat.role === "user" ? (
//                 <p className="userMessage">{chat.content}</p>
//               ) : (
//                 <div className="gptMessage">
//                   <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
//                     {chat.content}
//                   </ReactMarkdown>
//                 </div>
//               )}
//             </div>
//           );
//         })}


//         {
//               prevChats.length > 0 && (
//                 <>
//                      {
//                         latestReply === null ? (
//                             <div className="gptDiv" key={"non-typing"}>
//             <div className="gptMessage">
//               <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
//                 {prevChats[prevChats,length-1].content}
//               </ReactMarkdown>
//             </div>
//                         )  : (

//                         )

//                      }
//                 </>
//               )
           

//         }

//         {/* TYPING EFFECT (ONLY ONE GPT MESSAGE) */}
//         {isLoading && latestReply && (
//           <div className="gptDiv" key={"non-typing"}>
//             <div className="gptMessage">
//               <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
//                 {prevChats[prevChats,length-1].content}
//               </ReactMarkdown>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// // export default Chat;
// import "./Chat.css";
// import { useContext, useState, useEffect } from "react";
// import { MyContext } from "./MyContext";
// import ReactMarkdown from "react-markdown";
// import rehypeHighlight from "rehype-highlight";
// import "highlight.js/styles/github-dark.css";

// function Chat() {
//   const { newChat, prevChats, reply, isLoading } = useContext(MyContext);
//   const [latestReply, setLatestReply] = useState("");

//   // Typing effect
//   useEffect(() => {
//     if (!isLoading || !reply) return;

//     const words = reply.split(" ");
//     let idx = 0;
//     setLatestReply("");

//     const interval = setInterval(() => {
//       setLatestReply((prev) =>
//         prev ? prev + " " + words[idx] : words[idx]
//       );

//       idx++;
//       if (idx >= words.length) clearInterval(interval);
//     }, 40);

//     return () => clearInterval(interval);
//   }, [reply, isLoading]);

//   return (
//     <div className="chatArea">
//       {/* EMPTY STATE */}
//       {newChat && prevChats.length === 0 && (
//         <div className="emptyChat">
//           <h1>Start a New Chat</h1>
//         </div>
//       )}

//       <div className="chatContent">
//         {/* CHAT HISTORY */}
//         {prevChats.map((chat, idx) => {
//           const isLastAssistant =
//             chat.role === "assistant" &&
//             idx === prevChats.length - 1 &&
//             isLoading;

//           // Skip last assistant while typing
//           if (isLastAssistant) return null;

//           return (
//             <div
//               key={idx}
//               className={chat.role === "user" ? "userDiv" : "gptDiv"}
//             >
//               {chat.role === "user" ? (
//                 <p className="userMessage">{chat.content}</p>
//               ) : (
//                 <div className="gptMessage">
//                   <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
//                     {chat.content}
//                   </ReactMarkdown>
//                 </div>
//               )}
//             </div>
//           );
//         })}

//         {/* TYPING GPT MESSAGE */}
//         {isLoading && latestReply && (
//           <div className="gptDiv">
//             <div className="gptMessage">
//               <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
//                 {latestReply}
//               </ReactMarkdown>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Chat;




import "./Chat.css";
import { useContext, useState, useEffect } from "react";
import { MyContext } from "./MyContext";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

function Chat() {
  const { newChat, prevChats, reply, isLoading } = useContext(MyContext);
  const [latestReply, setLatestReply] = useState("");

  // =========================
  // Typing Effect
  // =========================
  useEffect(() => {
    if (!isLoading || !reply) return;

    const words = reply.split(" ");
    let idx = 0;
    setLatestReply("");

    const interval = setInterval(() => {
      setLatestReply((prev) =>
        prev ? prev + " " + words[idx] : words[idx]
      );

      idx++;
      if (idx >= words.length) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, [reply, isLoading]);

  return (
    <div className="chatArea">
      {/* EMPTY STATE */}
      {newChat && prevChats.length === 0 && (
        <div className="emptyChat">
          <h1>Start a New Chat</h1>
        </div>
      )}

      <div className="chatContent">
        {/* CHAT HISTORY */}
        {prevChats.map((chat, idx) => {
          const isLastModel =
            chat.role === "model" &&
            idx === prevChats.length - 1 &&
            isLoading;

          // Skip last AI message while typing
          if (isLastModel) return null;

          return (
            <div
              key={idx}
              className={chat.role === "user" ? "userDiv" : "gptDiv"}
            >
              {chat.role === "user" ? (
                <p className="userMessage">{chat.content}</p>
              ) : (
                <div className="gptMessage">
                  <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                    {chat.content}
                  </ReactMarkdown>
                </div>
              )}
            </div>
          );
        })}

        {/* TYPING AI MESSAGE */}
        {isLoading && latestReply && (
          <div className="gptDiv">
            <div className="gptMessage">
              <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                {latestReply}
              </ReactMarkdown>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Chat;

