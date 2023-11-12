import React from 'react';
import MainNavbar from '../../components/Main/MainNavbar';
import SideBar from '../../components/Profile/SideBar';
import ChatBox from '../../components/Chat/ChatBox';
import ChatBody from '../../components/Chat/ChatBody';
import style from '../../components/Chat/styles/ChatStyles.module.css'
import GroupInfo from '../../components/Chat/group/GroupInfo';
import EditGroup from '../../components/Chat/group/EditGroup';
import Replying from '../../components/Chat/items/Replying';
import EditMembers from '../../components/Chat/group/EditMembers';
import RemoveUser from '../../components/Chat/modal/RemoveUser';
import CreateGroup from '../../components/Chat/group/CreateGroup';
import AddDesc from '../../components/Chat/group/AddDesc';


const ChatPage = () => {
   return (
      <div className={style.chatpage__cont}>

         <MainNavbar/>
         <div className={style.chatpage}>
            <SideBar/>
            <ChatBox/>
         </div>
      </div>
   );
};

export default ChatPage;