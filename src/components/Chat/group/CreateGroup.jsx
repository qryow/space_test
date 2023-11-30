import React, { useEffect, useState } from 'react';
import style from '../styles/ChatStyles.module.css'
import GroupMembers from './GroupMembers';
import PinkBtn from '../items/PinkBtn';
import AddDesc from './AddDesc';
import AddGroupMember from '../items/AddGroupMember';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const CreateGroup = ({setCreateGroup,updateGroups,setUpdateGroups}) => {
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
         {addDesc ? <AddDesc updateGroups={updateGroups}
         setUpdateGroups={setUpdateGroups}
         addDesc={addDesc} members={members}
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
            <div style={{display:'flex', alignItems:'', justifyContent:'space-between',width: '400px'}}
            onClick={() => setCreateGroup(false)}
            >
                  <div className={style.group__back}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" >
                     <path d="M14.4301 18.8201C14.6201 18.8201 14.8101 18.7501 14.9601 18.6001L21.0301 12.5301C21.3201 12.2401 21.3201 11.7601 21.0301 11.4701L14.9601 5.40012C14.6701 5.11012 14.1901 5.11012 13.9001 5.40012C13.6101 5.69012 13.6101 6.17012 13.9001 6.46012L19.4401 12.0001L13.9001 17.5401C13.6101 17.8301 13.6101 18.3101 13.9001 18.6001C14.0401 18.7501 14.2401 18.8201 14.4301 18.8201Z" fill="white"/>
                     <path d="M3.50008 12.75H20.3301C20.7401 12.75 21.0801 12.41 21.0801 12C21.0801 11.59 20.7401 11.25 20.3301 11.25H3.50008C3.09008 11.25 2.75008 11.59 2.75008 12C2.75008 12.41 3.09008 12.75 3.50008 12.75Z" fill="white"/>
                     </svg>
                  </div>
            </div>
               <div  onClick={clickAddDesc}>
                  <PinkBtn/>
               </div>
         </div>
         }
      </div>
   );
};

export default CreateGroup;