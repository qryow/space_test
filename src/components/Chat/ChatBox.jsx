import React from 'react';
import ChatBar from './ChatBar';
import ChatBody from './ChatBody';
import NotSelected from './NotSelected';

const ChatBox = () => {
   return (
      <div style={{display:'flex'}}>
         <ChatBar/>
         <ChatBody/>
         {/* <NotSelected/> */}
      </div>
   );
};

export default ChatBox;