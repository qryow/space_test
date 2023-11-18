import React, { useEffect, useState } from 'react';
import style from './styles/ChatStyles.module.css'
import ChatUser from './items/ChatUser';
import ChatGroup from './ChatGroup';
import CreateGroup from './group/CreateGroup';
import axios from 'axios';
import { useCreateChatRoomMutation } from '../../store/chat/chatApi';


const ChatBar = () => {

   const [showChat, setShowChat] = useState(false)
   const [showGroups, setShowGroups] = useState(false)
   const [createGroup, setCreateGroup] = useState(false)
   const [isIconVisible, setIsIconVisible] = useState(true);
   const [usersList, setUsersList] = useState([]);
   const [usersFil, setUsersFil] = useState([]);
   const [particip, setParticip] = useState([])
   const [currUser, setCurrUser] = useState([]);
   const [createChatRoom, {isError}] = useCreateChatRoomMutation()
   // const { data: users, isLoading } = useGetChatUsersQuery();

   // console.log(users);
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


    const handleInputChange = (event) => {
        if (event.target.value) {
            setIsIconVisible(false);
        } else {
            setIsIconVisible(true);
        }
    };
    let usersData
    let currentUser
   useEffect(() => {
         const usersDatafunc = async (e) => {
           try {
   
             const usersList = await axios('https://server.space-hub.info/api/v1/profile/profile/')
             console.log(usersList);
             const usersData = usersList.data
             const storedEmail = JSON.parse(localStorage.getItem('account'));
             const chatUser = usersData.results.find(user => user.user.toLowerCase() === storedEmail.toLowerCase());
            setCurrUser(chatUser)
             console.log(chatUser);
            const usersFilt = usersData.results.filter((user) => 
               user.user !== currUser.user
            ) 
            // ) 
            console.log(usersFilt);
            setUsersFil(usersFilt)
           } catch (error) {
             console.error(error);
           } 
         };
         
         usersDatafunc()
      }, [])

   const addChatRoom = async (user) => {
      try {
         
         console.log(user.id);
         // if(particip) {
       const tokens = JSON.parse(localStorage.getItem('tokens'));
       const Authorization = `Bearer ${tokens.access}`;
       const config = {
         headers: {
           Authorization,
           'Content-Type': 'application/json'
         },
       };
       let formData = new FormData();
    formData.append("title", "123");
    formData.append("participants", [2,6]);
    let room = {
      "title": "123",
      "participants": [2,4]
   }
   console.log(Authorization);
    console.log(room);
         // await createChatRoom(formData)
         console.log('created');
         // console.log(formData);
    const response = await axios.post(
       `https://server.space-hub.info/api/v1/chat/chatrooms/`,
       room,
       config
       );
       console.log(response);
   // } 
} catch (error) {
   console.error();

}
   
   }
    
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
                        {usersFil && usersFil.map(user => {
                           return (
                              <div key={user.id} onClick={() => addChatRoom(user)}>

                              <ChatUser  {...user}/>
                              </div>

                           ) 
                        })}
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