import React, { useState } from 'react';
import style from './styles/ChatStyles.module.css'
import ChatUser from './items/ChatUser';
import ChatGroup from './ChatGroup';
import CreateGroup from './group/CreateGroup';


const ChatBar = () => {

   const [showChat, setShowChat] = useState(false)
   const [showGroups, setShowGroups] = useState(false)
   const [createGroup, setCreateGroup] = useState(false)

   const clickChat = () => {
      setShowChat(!showChat)
      setShowGroups(false)
   }
   const clickGroups = () => {
      setShowGroups(!showGroups)
      setShowChat(false)
   }
   const clickCreateGroup = () => {
      setCreateGroup(true)
   }

   const [isIconVisible, setIsIconVisible] = useState(true);

    const handleInputChange = (event) => {
        if (event.target.value) {
            setIsIconVisible(false);
        } else {
            setIsIconVisible(true);
        }
    };

   return (
      <div>
         {createGroup ? <CreateGroup setCreateGroup={setCreateGroup}/> : 
         <div className={style.bar__topside}>

            <div className={style.chatbar__top}>
               <div className={style.top__title}>
                  Messages
               </div>
               <img onClick={clickCreateGroup} src={require('../../img/create group.png')} alt="" />
            </div>
            <div>
               <div className={style.search__bar}>
                  {isIconVisible ? 
                  <i className={style.search__icon} aria-hidden="true">
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M8.33333 14.1667C11.555 14.1667 14.1667 11.555 14.1667 8.33333C14.1667 5.11167 11.555 2.5 8.33333 2.5C5.11167 2.5 2.5 5.11167 2.5 8.33333C2.5 11.555 5.11167 14.1667 8.33333 14.1667Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.5 12.5L17.5 17.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                     </svg>
                  </i>
                  : null}
                  <input onChange={handleInputChange} type="text" className={style.chatbar__input} placeholder="         Saerch for people and groups"/>
               </div>
            </div>
            <div className={style.bar__tabs}>
               <div onClick={clickChat} className={ showChat ? style.bar__tab : style.bar__tabfalse}>Chat</div>
               <div onClick={clickGroups} className={showGroups ? style.bar__tab: style.bar__tabfalse}>Groups</div>
            </div>
               <div className={style.message__container}>
                  <div className={style.scrollbar}>
                     {showChat ? 
                     <div>
                        <ChatUser/>
                        <ChatUser/>
                        <ChatUser/>
                        <ChatUser/>
                        <ChatUser/>
                        <ChatUser/>
                        <ChatUser/>
                        <ChatUser/>
                        <ChatUser/>
                        <ChatUser/>
                        <ChatUser/>
                        <ChatUser/>
                     </div>
                     : null}
                     {showGroups ? 
                     <div>
                        <ChatGroup/>
                        
                     </div>
                     : null}

                  </div>
                  
            </div>
         </div>
         }
      </div>
   );
};

export default ChatBar;