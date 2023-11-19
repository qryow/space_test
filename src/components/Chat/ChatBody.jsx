import React, { useEffect, useRef, useState } from 'react';
import style from './styles/ChatStyles.module.css'
import ChatFooter from './ChatFooter';
import LeftMessage from './items/LeftMessage';
import RightMessage from './items/RightMessage';
import GroupInfo from './group/GroupInfo';
import Replying from './items/Replying';
import GroupMessage from './items/GroupMessage';
import { useDispatch, useSelector } from 'react-redux';
import { getRooms } from '../../store/chat/chatSlice';


const ChatBody = ({title}) => {
 
const [groupInfo,setGroupInfo] = useState(false)

const clickGroupInfo = () => {
   setGroupInfo(true)
}

const rooms = useSelector(state => state.chat.privateChatRooms);
const dispatch = useDispatch()
useEffect(() => {
   const getcard = async () => {
      await dispatch(
         getRooms()
         );
      };
      getcard()
   },[]) 

   console.log(rooms);
   return (             
      <div className={style.chatbody}>
         <div>
            <div className={style.chatbody__usertab}>
               <div className={style.usertab__box}>
                  <div className={style.pfp__circle}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M4.16667 17.4998C4.16667 14.2782 6.77834 11.6665 10 11.6665C13.2217 11.6665 15.8333 14.2782 15.8333 17.4998" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10 9.16667C11.841 9.16667 13.3333 7.67428 13.3333 5.83333C13.3333 3.99238 11.841 2.5 10 2.5C8.15905 2.5 6.66667 3.99238 6.66667 5.83333C6.66667 7.67428 8.15905 9.16667 10 9.16667Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                     </svg>
                  </div>
                  <div className={style.nameprofession}>
                     <div className={style.username}>user name</div>
                     <div className={style.profession}>profession</div>
                  </div>
               </div>
               <div onClick={clickGroupInfo}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                     <path d="M5 12H5.01H5ZM12 12H12.01H12ZM19 12H19.01H19ZM6 12C6 12.2652 5.89464 12.5196 5.70711 12.7071C5.51957 12.8946 5.26522 13 5 13C4.73478 13 4.48043 12.8946 4.29289 12.7071C4.10536 12.5196 4 12.2652 4 12C4 11.7348 4.10536 11.4804 4.29289 11.2929C4.48043 11.1054 4.73478 11 5 11C5.26522 11 5.51957 11.1054 5.70711 11.2929C5.89464 11.4804 6 11.7348 6 12V12ZM13 12C13 12.2652 12.8946 12.5196 12.7071 12.7071C12.5196 12.8946 12.2652 13 12 13C11.7348 13 11.4804 12.8946 11.2929 12.7071C11.1054 12.5196 11 12.2652 11 12C11 11.7348 11.1054 11.4804 11.2929 11.2929C11.4804 11.1054 11.7348 11 12 11C12.2652 11 12.5196 11.1054 12.7071 11.2929C12.8946 11.4804 13 11.7348 13 12V12ZM20 12C20 12.2652 19.8946 12.5196 19.7071 12.7071C19.5196 12.8946 19.2652 13 19 13C18.7348 13 18.4804 12.8946 18.2929 12.7071C18.1054 12.5196 18 12.2652 18 12C18 11.7348 18.1054 11.4804 18.2929 11.2929C18.4804 11.1054 18.7348 11 19 11C19.2652 11 19.5196 11.1054 19.7071 11.2929C19.8946 11.4804 20 11.7348 20 12V12Z" stroke="#F1F1F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
               </div>
            </div>
            {/* //////Group tab //////*/}
            {/* <div className={style.chatbody__usertab}>
               <div className={style.usertab__box}>
                  <div className={style.pfp__circle}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M14.1665 13.5229C16.1085 13.9805 17.4998 15.2153 17.4998 16.6666" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2.49976 16.6663C2.49976 14.8254 4.73833 13.333 7.49976 13.333C10.2612 13.333 12.4998 14.8254 12.4998 16.6663" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.4998 10.8337C14.3407 10.8337 15.8331 9.34128 15.8331 7.50033C15.8331 5.65938 14.3407 4.16699 12.4998 4.16699" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.49984 10.8337C9.34079 10.8337 10.8332 9.34128 10.8332 7.50033C10.8332 5.65938 9.34079 4.16699 7.49984 4.16699C5.65889 4.16699 4.1665 5.65938 4.1665 7.50033C4.1665 9.34128 5.65889 10.8337 7.49984 10.8337Z" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                     </svg>
                  </div>
                  <div className={style.nameprofession}>
                     <div className={style.username}>group name</div>
                     <div className={style.profession}>4 member</div>
                  </div>
               </div>
               <div onClick={clickGroupInfo}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                     <path d="M5 12H5.01H5ZM12 12H12.01H12ZM19 12H19.01H19ZM6 12C6 12.2652 5.89464 12.5196 5.70711 12.7071C5.51957 12.8946 5.26522 13 5 13C4.73478 13 4.48043 12.8946 4.29289 12.7071C4.10536 12.5196 4 12.2652 4 12C4 11.7348 4.10536 11.4804 4.29289 11.2929C4.48043 11.1054 4.73478 11 5 11C5.26522 11 5.51957 11.1054 5.70711 11.2929C5.89464 11.4804 6 11.7348 6 12V12ZM13 12C13 12.2652 12.8946 12.5196 12.7071 12.7071C12.5196 12.8946 12.2652 13 12 13C11.7348 13 11.4804 12.8946 11.2929 12.7071C11.1054 12.5196 11 12.2652 11 12C11 11.7348 11.1054 11.4804 11.2929 11.2929C11.4804 11.1054 11.7348 11 12 11C12.2652 11 12.5196 11.1054 12.7071 11.2929C12.8946 11.4804 13 11.7348 13 12V12ZM20 12C20 12.2652 19.8946 12.5196 19.7071 12.7071C19.5196 12.8946 19.2652 13 19 13C18.7348 13 18.4804 12.8946 18.2929 12.7071C18.1054 12.5196 18 12.2652 18 12C18 11.7348 18.1054 11.4804 18.2929 11.2929C18.4804 11.1054 18.7348 11 19 11C19.2652 11 19.5196 11.1054 19.7071 11.2929C19.8946 11.4804 20 11.7348 20 12V12Z" stroke="#F1F1F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
               </div>
            </div> */}
            {/* //////////////// */}

            <div className={style.message__container}>
               <div className={style.scrollbar}>
                  <div className={style.msgs__list}>

                  
                 
                  <LeftMessage/>
                  

                  </div>
               {groupInfo ? 
            <GroupInfo groupInfo={groupInfo}  setGroupInfo={setGroupInfo}/>
         : null}
               </div>
            </div>
         </div>
         {/* <Replying/> */}
         <ChatFooter/>
      </div>
   );
};

export default ChatBody;