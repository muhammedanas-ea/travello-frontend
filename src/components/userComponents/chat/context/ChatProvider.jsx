import { createContext, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ChatContext = createContext();

// eslint-disable-next-line react/prop-types
const ChatProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [selectedChat, setSelectedChat] = useState('');
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState([]);
  const {userInfo} = useSelector((state) => state.user)

  // const initialChatState = {
  //   _id: '', 
  //   chatName: '', 
  //   users: [], 
  //   createdAt: '',
  //   updatedAt: '', 
  //   // Add other properties as needed
  // };

  useEffect(() =>{
    setUser(userInfo)
    // setSelectedChat(initialChatState);
  },[])

  return (
    <ChatContext.Provider value={{notification,setNotification, user, setUser,setChats,chats,setSelectedChat,selectedChat }}>
      {children}
    </ChatContext.Provider>
  );
};
export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;
