import React, { useEffect, useState } from 'react';
import style from './styles/ChatStyles.module.css'
import ChatUser from './items/ChatUser';
import ChatGroup from './group/ChatGroup';
import CreateGroup from './group/CreateGroup';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addPrivateChatRoom, getRooms } from '../../store/chat/chatSlice';
import ChatBody from './ChatBody';
// import { useCreateChatRoomMutation } from '../../store/chat/chatApi';


const ChatBar = () => {
   
   const [showChat, setShowChat] = useState(false)
   const [showGroups, setShowGroups] = useState(false)
   const [createGroup, setCreateGroup] = useState(false)
   const [isIconVisible, setIsIconVisible] = useState(true);
   const [usersList, setUsersList] = useState([]);
   const [usersFil, setUsersFil] = useState([]);
   const [currUser, setCurrUser] = useState([]);
   const [title, setTitle] = useState('')
   const [particip, setParticip] = useState([])
   const [chatRooms, setChatRooms] = useState([])
   const [currentRoom, setCurrentRoom] = useState([])
   const [allProfiles, setAllProfiles] = useState([])
   const [allRes, setAllRes] = useState([])
   const [groupsFil, setGroupsFil] = useState([])
   const [updateGroups, setUpdateGroups] = useState(0)

   // const [createChatRoom, {isError}] = useCreateChatRoomMutation()

   
   // console.log(users);
   const rooms = useSelector(state => state.chat.privateChatRooms);
   
   const dispatch = useDispatch();
console.log(particip);
   
   
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

    useEffect(() => {
       console.log(chatRooms); 
    },[])
    useEffect(() => {
       const getchatrms = async () => {
          await dispatch(
             getRooms()
             );
          };
          getchatrms()
         },[]) 
         // console.log(allRes);
         
useEffect(() => {
   const usersDatafunc = async (e) => {
   try {

   const usersList = await axios('https://server.space-hub.info/api/v1/profile/profile/')
   console.log(usersList);
   const usersData = usersList.data
   const storedEmail = JSON.parse(localStorage.getItem('account'));
   const chatUser = usersData.results.find(user => user.user.toLowerCase() === storedEmail.toLowerCase());
   setCurrUser(chatUser)
   // console.log(chatUser);
   // console.log(currUser);
   // if(currUser.length > 0) {

      const usersFilt = usersData.results.filter((user) => 
      user.user !== chatUser.user
      ) 
      const usersFiltTwo = usersFilt.filter((user) => 
      user.user !== 'admin@gmail.com'
      ) 
      // ) 
      setUsersFil(usersFiltTwo)
      console.log(usersFilt);
      console.log(currUser);
   // }
   } catch (error) {
      console.error(error);
   } 
};

usersDatafunc()
}, [rooms])
///////////////////////////////////


useEffect(() => {
   const groupsDataFunc = async () => {
      try {
         if (currUser && currUser.id && rooms && rooms.length > 0) {
            // Flatten the rooms array
            const allRooms = rooms.flat();

            // Filter rooms where currUser.id is among participants
            const userGroups = allRooms.filter(
               (group) =>
                  group?.participants.includes(currUser.id) &&
                  group?.title.startsWith('grouptag')
            );

            // Set the filtered groups to groupsFil
            setGroupsFil(userGroups);
            console.log('userGroups:', userGroups);
         } else {
            console.log('currUser is not defined or does not have an id property, or rooms is undefined or empty');
         }
      } catch (error) {
         console.error(error);
      }
   };

   groupsDataFunc();
}, [currUser, rooms, updateGroups]);


console.log(groupsFil);
console.log(currUser);
/////////////////////////////////


console.log(usersFil);


const addRoom = async (user) => {
   if (!user.id) {
      console.error('User ID is undefined.');
      return;
   }
   console.log(user);
   

// console.log(allResults);
    setTitle(user.user);
    setParticip([2, currUser.id, user.id]);
   console.log(particip);

   if (rooms && rooms.length > 0) {
      const rss = rooms[0];
      console.log(rss);
      if (rss && rss.length > 0) {
         // const checking = async () => {

            const sortedRoomParticipants = rss.map(i => i.participants.slice().sort());
            const sortedParticip =  particip.slice().sort();
            
            const existingRoom = rss.find(
               (room) =>
               room.title === user.user &&
               sortedRoomParticipants.some((participant) =>
               participant.every((p, i) => p === sortedParticip[i])
               )
               );
               setCurrentRoom(existingRoom);
               
            // }
            console.log(currentRoom);
         if(currentRoom) {
            setCurrentRoom(existingRoom);

            console.log(existingRoom && existingRoom);
            console.log('Already has', currentRoom);
         } else   {
            console.log("It doesn't");
            console.log(particip);

            // Make sure user.id is defined before dispatching the action
            if (user.id) {
               await dispatch(
                  addPrivateChatRoom({
                     title,
                     particip,
                  })
               );
            }
         }
      } else {
         console.log('rss is undefined or empty');
      }
   } else {
      console.log(rooms);
      console.log('chatRooms is undefined or empty');
   }
};




const groupId = (id) => {
   console.log(id);
   setCurrentRoom(id)
}
// console.log(currentRoom);
// console.log(rooms );
    
   return (
      <div style={{display: "flex"}}>
         {createGroup ? <CreateGroup setUpdateGroups={setUpdateGroups}
         updateGroups={updateGroups}
         setCreateGroup={setCreateGroup}/> : 
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
                              <div key={user.id} onClick={() => addRoom(user)}>

                              <ChatUser key={user.id} user={user}/>
                              </div>

                           ) 
                        })}
                     </div>
                     : null}
                     {showGroups ? 
                     <div>
                        {groupsFil && groupsFil.map(group => {
                           return (
                              <div key={group.id} onClick={() => groupId(group)}>

                                 <ChatGroup {...group}/>
                              </div>

                           ) 
                        })}
                        
                     </div>
                     : null}

                  </div>
                  
            </div>
         </div>
         }
         <ChatBody title={title} usersFil={usersFil} currentRoom={currentRoom} currUser={currUser} />
      </div>
   );
};

export default ChatBar;