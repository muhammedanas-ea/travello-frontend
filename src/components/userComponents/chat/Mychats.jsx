import { useEffect, useState } from "react";
import { AllChats } from "../../../api/UserApi";
import { useSelector } from "react-redux";
import { ChatState } from "./context/ChatProvider";
import { Box, Stack, Text } from "@chakra-ui/react";
import SideDrawer from "./SideDrawer";

// eslint-disable-next-line react/prop-types
export default function Mychats({fetchAgain}) {
  const [loggedUser, setLoggedUser] = useState();
  const { setChats, user, selectedChat, chats, setSelectedChat } = ChatState();
  const userId = user.id;
  const { userInfo } = useSelector((state) => state.user);
  

  const fetchChats = async () => {
    try {
      const response = await AllChats(userId);
      setChats(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setLoggedUser(userInfo);
    fetchChats();
  }, [fetchAgain]);

  return (
    <Box
      display={{ base: selectedChat ? "none" : "flex", md: "flex" }}
      flexDir="column"
      alignItems="center"
      p={3}
      w={{ base: "100%", md: "31%" }}
      borderRadius="lg"
      borderWidth="1px"
      bg="#ededed"
    >
      <Box
        display="flex"
        w="100%"
        alignItems="center"
        justifyContent="space-around"
      >
        <Box
          pb={3}
          px={3}
          fontSize={{ base: "28px", md: "30px" }}
          fontFamily="Work sans"
          display="flex"
          w="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          My Chats
        </Box>
        <Box>{user && <SideDrawer />}</Box>
      </Box>
      <Box
        display="flex"
        flexDir="column"
        p={3}
        bg="#ededed"
        w="100%"
        h="100%"
        borderRadius="lg"
        overflowY="hidden"
      >
        {chats ? (
          <Stack overflow="scroll">
            {chats.map((chat) => {
              return (
                <Box
                  onClick={() => setSelectedChat(chat)}
                  key={chat._id}
                  cursor="pointer"
                  bg={selectedChat === chat ? "#3882ac" : "#60a2c8"}
                  color={selectedChat === chat ? "white" : "black"}
                  px={3}
                  py={3}
                  borderRadius="md"
                >
                  <Box>
                    <Text>{chat.users.owner.name}</Text>
                    {chat.latestMessage && (
                      <Text fontSize="xs">
                        <b>
                          {chat.latestMessage.sender.owner
                            ? chat.latestMessage.sender.owner.name
                            : chat.latestMessage.sender.user.name}
                          :
                        </b>
                        {chat.latestMessage.content.length > 50
                          ? chat.latestMessage.content.substring(0, 51) + "..."
                          : chat.latestMessage.content}
                      </Text>
                    )}
                  </Box>
                </Box>
              );
            })}
          </Stack>
        ) : (
          <>loding....</>
        )}
      </Box>
    </Box>
  );
}
