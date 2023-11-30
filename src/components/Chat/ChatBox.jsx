import React, { useEffect, useState } from 'react';
import ChatBar from './ChatBar';
import ChatBody from './ChatBody';
import NotSelected from './NotSelected';
import axios from 'axios';
import { useSelector } from 'react-redux';

const ChatBox = () => {

  return (
    <div style={{ display: 'flex' }}>
      <ChatBar />
      {/* <ChatBody /> */}
      {/* <NotSelected/> */}
    </div>
  );
};

export default ChatBox;