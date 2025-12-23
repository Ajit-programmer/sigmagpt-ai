// import './App.css';
// import Sidebar from "./Sidebar.jsx";
// import ChatWindow from "./ChatWindow.jsx";
// import { MyContext } from './MyContext.jsx';
// import { useState } from 'react';
// import {v1 as uuidv1} from "uuid";

// function App() {
//   const [prompt , setPrompt] = useState("");
//   const [reply , setReply] = useState(null);
//   const [currThreadId ,setCurrThreadId] = useState(uuidv1());
//   const [prevChats , setPrevChats] = useState([]);
//   const [newChat , setNewChat] = useState(true);
//   const [allThreads , setAllThreads] = useState([]);

//   const providerValues = {
//     prompt , setPrompt,
//     reply , setReply,
//     currThreadId ,setCurrThreadId,
//     newChat , setNewChat,
//     prevChats , setPrevChats,
//     allThreads , setAllThreads
//   }; //passing values

//   return (  
//   <div className='app'>
//     <MyContext.Provider value={providerValues}>
//     <Sidebar></Sidebar>
//     <ChatWindow></ChatWindow>
//     </MyContext.Provider>

//   </div>
  
    
//   )
// }

// export default App;



// import "./App.css";
// import Sidebar from "./Sidebar.jsx";
// import ChatWindow from "./ChatWindow.jsx";
// import Login from "./Login.jsx";
// import Signup from "./Signup.jsx";
// import { MyContext } from "./MyContext.jsx";
// import { MyContextProvider } from "./MyContext.jsx";
// import { useContext } from "react";

// function AppContent() {
//   const { token, authMode } = useContext(MyContext);

//   return (
//     <>
//       {!token ? (
//         authMode === "login" ? <Login /> : <Signup />
//       ) : (
//         <>
//           <Sidebar />
//           <ChatWindow />
//         </>
//       )}
//     </>
//   );
// }

// function App() {
//   return (
//     <div className="app">
//       <MyContextProvider>
//         <AppContent />
//       </MyContextProvider>
//     </div>
//   );
// }

// export default App;


import "./App.css";
import Sidebar from "./Sidebar.jsx";
import ChatWindow from "./ChatWindow.jsx";
import { MyContextProvider } from "./MyContext.jsx";

function App() {
  return (
    <div className="app">
      <MyContextProvider>
        {/* App is ALWAYS visible */}
        <Sidebar />
        <ChatWindow />
      </MyContextProvider>
    </div>
  );
}

export default App;
