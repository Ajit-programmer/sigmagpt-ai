

import "./Sidebar.css";
import { useContext, useEffect } from "react";
import { MyContext } from "./MyContext";
import { v1 as uuidv1 } from "uuid";

// ✅ BACKEND BASE URL (ENV)
const API_BASE = import.meta.env.VITE_API_BASE_URL;

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
     FETCH ALL THREADS
  ========================= */
  const getAllThreads = async () => {
    if (!token) return;

    try {
      const response = await fetch(`${API_BASE}/api/thread`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) return;

      const res = await response.json();

      const filteredData = res.map((thread) => ({
        threadId: thread.threadId,
        title: thread.title,
      }));

      setAllThreads(filteredData);
    } catch (err) {
      console.error("Fetch threads error:", err);
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
        `${API_BASE}/api/thread/${newThreadId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) return;

      const res = await response.json();

      setPrevChats(res);
      setNewChat(false);
      setReply(null);
    } catch (err) {
      console.error("Change thread error:", err);
    }
  };

  /* =========================
     DELETE THREAD
  ========================= */
  const deleteThread = async (threadId) => {
    if (!token) return;

    try {
      await fetch(`${API_BASE}/api/thread/${threadId}`, {
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
      console.error("Delete thread error:", err);
    }
  };

  return (
    <section className="sidebar">
      {/* ===== NEW CHAT BUTTON ===== */}
      <button onClick={createNewChat}>
        {/* ✅ FIXED LOGO PATH */}
        <img src="/blacklogo.png" alt="GPT LOGO" />
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

      {/* ===== CHAT HISTORY ===== */}
      <ul className="history">
        {token ? (
          allThreads.map((thread) => (
            <li
              key={thread.threadId}
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

      {/* ===== FOOTER ===== */}
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
