import React, { useEffect, useState } from 'react';
import style from '../styles/ChatStyles.module.css'
import GroupMembers from './GroupMembers';
import PinkBtn from '../items/PinkBtn';
import AddDesc from './AddDesc';
import AddGroupMember from '../items/AddGroupMember';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const CreateGroup = ({setCreateGroup}) => {
   const [addDesc,setAddDesc] = useState(false)
   const [title, setTitle] = useState('')
   const [particip, setParticip] = useState([])
   const rooms = useSelector(state => state.chat.privateChatRooms);
   const dispatch = useDispatch();
   const [usersFil, setUsersFil] = useState([]);
   const [currUser, setCurrUser] = useState([]);
   const [members, setMembers] = useState([{id:2}])
   const [chatRooms, setChatRooms] = useState([])
   const [currentRoom, setCurrentRoom] = useState([])
   const [allRes, setAllRes] = useState([])
   console.log(members);

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
         console.log(currUser);
         // if(currUser.length > 0) {
      
            const usersFilt = usersData.results.filter((user) => 
            user.user !== chatUser.user
            ) 
            const usersFiltTwo = usersFilt.filter((user) => 
            user.user !== 'admin@gmail.com'
            ) 
            // ) 
            setUsersFil(usersFiltTwo)
            console.log(usersFil);
            console.log(currUser);
            // if(currUser.id !== undefined) {

               await setMembers(((prevMembers) => [...prevMembers, { id: chatUser.id }]))
            // }
         // }
         } catch (error) {
            console.error(error);
         } 
      };
      usersDatafunc()
}, [])     

   console.log(particip);
   const clickAddDesc = () => {
      setAddDesc(true)
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
         {addDesc ? <AddDesc addDesc={addDesc} members={members}
         setAddDesc={setAddDesc} setCreateGroup={setCreateGroup}/> : 
         <div className={style.bar__topside}>
            
            <div className={style.addmembers__top}>
               <div className={style.top__title}>
                  Group Creation
               </div>
               <p className={style.grey__text50016}>Add Members</p>
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
            <div className={style.members__list}>
            {usersFil && usersFil.map(user => {
                           return (
                              <div key={user.id}>
                                 <AddGroupMember members={members} setMembers={setMembers} user={user}/>
                              </div>

                           ) 
                        })}
            </div>
            <div onClick={clickAddDesc}>
               <PinkBtn/>
            </div>
         </div>
         }
      </div>
   );
};

export default CreateGroup;