
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

