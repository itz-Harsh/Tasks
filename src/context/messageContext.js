// MessageContext.js
import { createContext, useContext, useState } from "react";

const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState("");

  const showMessage = (msg, duration = 3000) => {
    setMessage(msg);

    // clear after duration
    setTimeout(() => {
      setMessage("");
    }, duration);
  };

  return (
    <MessageContext.Provider value={{ message, showMessage }}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessage = () => useContext(MessageContext);
