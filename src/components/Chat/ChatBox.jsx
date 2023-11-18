import React, { useEffect, useState } from 'react';
import ChatBar from './ChatBar';
import ChatBody from './ChatBody';
import NotSelected from './NotSelected';
// import { getUsers } from '../../store/account/AccountActions';
import { useGetChatRoomsQuery } from '../../store/chat/chatApi';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useGetChatUsersQuery } from '../../store/chat/usersApi';

const ChatBox = () => {
  const [room, setRoom] = useState();
//   const { data = [], isLoading } = useGetChatRoomsQuery();
// console.log(data);




  useEffect(() => {
    const CurrentUser = async () => {
      try {
        const tokens = JSON.parse(localStorage.getItem('tokens'));
         const Authorization = `Bearer ${tokens.access}`;
         const config = {
            headers: {
            Authorization,
            },
         };
        const data = await axios('https://server.space-hub.info/api/v1/account/users/',config);
         console.log(data);
        const users = data.data.results;
        const storedEmail = JSON.parse(localStorage.getItem('account'));
        const chatUser = users.filter(user => user.email.toLowerCase() === storedEmail.toLowerCase());

        console.log(chatUser);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    CurrentUser();
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <ChatBar />
      <ChatBody />
      {/* <NotSelected/> */}
    </div>
  );
};

export default ChatBox;