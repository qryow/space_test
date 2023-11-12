import React, { useState } from 'react';
import style from '../styles/ChatStyles.module.css'
import GroupMembers from './GroupMembers';
import EditGroup from './EditGroup';
import Files from '../items/Files';
import LeaveGroup from '../modal/LeaveGroup';


const GroupInfo = ({groupInfo,setGroupInfo}) => {

   const [showMembers, setShowMembers] = useState(false)
   const [showMedia, setShowMedia] = useState(false)
   const [showFiles, setShowFiles] = useState(false)
   const [editGroup,setEditGroup] = useState(false)
   const [leaveGroup,setLeaveGroup] = useState(false)

   const clickMembers = () => {
      setShowMembers(true)
      setShowMedia(false)
      setShowFiles(false)
   }
   const clickMedia = () => {
      setShowMedia(true)
      setShowMembers(false)
      setShowFiles(false)
   }
   const clickFiles = () => {
      setShowFiles(true)
      setShowMembers(false)
      setShowMedia(false)
   }
   const clickGroupInfo = () => {
      setGroupInfo(false)
   }
   const clickLeaveGroup = () => {
      setLeaveGroup(true)
   }


   const clickEditGroup = () => {
      // setGroupInfo(false)
      setEditGroup(true)
   }
   return (
      <div>
         {groupInfo ? 
         <div className={style.group__info}>
            <div className={style.info__top}>
               <svg onClick={clickGroupInfo} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M15.75 15.75L2.25 2.25" stroke="#BBBBBB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M15.75 2.25L2.25 15.75" stroke="#BBBBBB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
               <p className={style.top__info}>Information</p>
               <svg onClick={clickEditGroup} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H11C11.41 1.25 11.75 1.59 11.75 2C11.75 2.41 11.41 2.75 11 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V13C21.25 12.59 21.59 12.25 22 12.25C22.41 12.25 22.75 12.59 22.75 13V15C22.75 20.43 20.43 22.75 15 22.75Z" fill="#BBBBBB"/>
                  <path d="M8.50008 17.6901C7.89008 17.6901 7.33008 17.4701 6.92008 17.0701C6.43008 16.5801 6.22008 15.8701 6.33008 15.1201L6.76008 12.1101C6.84008 11.5301 7.22008 10.7801 7.63008 10.3701L15.5101 2.49006C17.5001 0.500059 19.5201 0.500059 21.5101 2.49006C22.6001 3.58006 23.0901 4.69006 22.9901 5.80006C22.9001 6.70006 22.4201 7.58006 21.5101 8.48006L13.6301 16.3601C13.2201 16.7701 12.4701 17.1501 11.8901 17.2301L8.88008 17.6601C8.75008 17.6901 8.62008 17.6901 8.50008 17.6901ZM16.5701 3.55006L8.69008 11.4301C8.50008 11.6201 8.28008 12.0601 8.24008 12.3201L7.81008 15.3301C7.77008 15.6201 7.83008 15.8601 7.98008 16.0101C8.13008 16.1601 8.37008 16.2201 8.66008 16.1801L11.6701 15.7501C11.9301 15.7101 12.3801 15.4901 12.5601 15.3001L20.4401 7.42006C21.0901 6.77006 21.4301 6.19006 21.4801 5.65006C21.5401 5.00006 21.2001 4.31006 20.4401 3.54006C18.8401 1.94006 17.7401 2.39006 16.5701 3.55006Z" fill="#BBBBBB"/>
                  <path d="M19.8501 9.82978C19.7801 9.82978 19.7101 9.81978 19.6501 9.79978C17.0201 9.05978 14.9301 6.96978 14.1901 4.33978C14.0801 3.93978 14.3101 3.52978 14.7101 3.40978C15.1101 3.29978 15.5201 3.52978 15.6301 3.92978C16.2301 6.05978 17.9201 7.74978 20.0501 8.34978C20.4501 8.45978 20.6801 8.87978 20.5701 9.27978C20.4801 9.61978 20.1801 9.82978 19.8501 9.82978Z" fill="#BBBBBB"/>
               </svg>
            </div>
            <div className={style.group__maininfo}>
               <div className={style.group__circle}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                     <path d="M70.8333 67.6152C80.5432 69.9032 87.4999 76.0768 87.4999 83.3335" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                     <path d="M12.5 83.3332C12.5 74.1284 23.6929 66.6665 37.5 66.6665C51.3071 66.6665 62.5 74.1284 62.5 83.3332" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                     <path d="M62.5 54.1668C71.7047 54.1668 79.1667 46.7049 79.1667 37.5002C79.1667 28.2954 71.7047 20.8335 62.5 20.8335" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                     <path d="M37.4999 54.1668C46.7047 54.1668 54.1666 46.7049 54.1666 37.5002C54.1666 28.2954 46.7047 20.8335 37.4999 20.8335C28.2952 20.8335 20.8333 28.2954 20.8333 37.5002C20.8333 46.7049 28.2952 54.1668 37.4999 54.1668Z" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
               </div>
               <p className={style.username}>
                  group name
               </p>
               <p className={style.profession}>
                  4 members
               </p>
            </div>
            <div className={style.white__text}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit repellendus hic suscipit cupiditate id eius consectetur quas accusantium, deserunt expedita!
            </div>
            <div style={{display:'flex',justifyContent: 'left', alignItems:'left',width: "88%"}}>
               <div style={{display:'flex'}}>

               <svg  style={{display:'flex', marginRight:'15px'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3 19C3 16.7909 5.68629 15 9 15C12.3137 15 15 16.7909 15 19" stroke="#FF39A4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M19 16V10" stroke="#FF39A4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16 13L22 13" stroke="#FF39A4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9 12C11.2091 12 13 10.2091 13 8C13 5.79086 11.2091 4 9 4C6.79086 4 5 5.79086 5 8C5 10.2091 6.79086 12 9 12Z" stroke="#FF39A4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
               <p className={style.pink__text}>Add Members</p>
               </div>
            </div>
            {/* ////// viewer look */}
            {/* <div className={style.edit__bottom} onClick={clickLeaveGroup}>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M14 10L14 17" stroke="#EC243C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M10 10L10 17" stroke="#EC243C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M18 6H6V20C6 20.5523 6.44772 21 7 21H17C17.5523 21 18 20.5523 18 20V6Z" stroke="#EC243C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M4 6H20" stroke="#EC243C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M15 3H9C8.44772 3 8 3.44772 8 4V6H16V4C16 3.44772 15.5523 3 15 3Z" stroke="#EC243C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
               <p  className={style.red__text500}>Leave Group</p>
            </div> */}
            {/* ////// */}
            <div className={style.info__tabs}>
               <p onClick={clickMembers} className={showMembers ? style.group__tabtrue : style.group__tabfalse}>Members</p>
               <p onClick={clickMedia} className={showMedia ? style.group__tabtrue : style.group__tabfalse}>Media</p>
               <p onClick={clickFiles} className={showFiles ? style.group__tabtrue : style.group__tabfalse}>Files</p>
            </div>
            {showMembers ? (
               <div className={style.message__container}>

               <div className={style.scrollbar}>
               <GroupMembers/>
               <GroupMembers/>
               <GroupMembers/>
               <GroupMembers/>
               <GroupMembers/>
               <GroupMembers/>
               <GroupMembers/>
               <GroupMembers/>
               <GroupMembers/>
               <GroupMembers/>
               <GroupMembers/>
               <GroupMembers/>
               <GroupMembers/>
               </div>
               </div>
               )
               : null}
            {showMedia ? (
               <div className={style.message__container}>
                  <div className={style.scrollbar}>
                     <div className={style.media__cont}>
                        <img src={require('../../../img/chatimgs/UH378DBwJVtE9poo 1.png')} alt="" />
                        <img src={require('../../../img/chatimgs/UH378DBwJVtE9poo 1.png')} alt="" />
                        <img src={require('../../../img/chatimgs/UH378DBwJVtE9poo 1.png')} alt="" />
                        <img src={require('../../../img/chatimgs/UH378DBwJVtE9poo 1.png')} alt="" />
                        <img src={require('../../../img/chatimgs/UH378DBwJVtE9poo 1.png')} alt="" />
                        <img src={require('../../../img/chatimgs/UH378DBwJVtE9poo 1.png')} alt="" />
                        <img src={require('../../../img/chatimgs/UH378DBwJVtE9poo 1.png')} alt="" />
                        <img src={require('../../../img/chatimgs/UH378DBwJVtE9poo 1.png')} alt="" />
                        <img src={require('../../../img/chatimgs/UH378DBwJVtE9poo 1.png')} alt="" />
                        <img src={require('../../../img/chatimgs/UH378DBwJVtE9poo 1.png')} alt="" />
                     </div>
                  </div>
               </div>
               )
               : null}
            {showFiles ? (
               <div>
                  <div className={style.message__container}>
                     <div className={style.scrollbar}>
                        <div className={style.files__cont}>

                           <Files/>
                           <Files/>
                           <Files/>
                           <Files/>
                           <Files/>
                           <Files/>
                           <Files/>
                        </div>
                     </div>
                  </div>
               </div>
               )
            : null}
         </div>
   : null}
   {editGroup ? <EditGroup editGroup={editGroup} setEditGroup={setEditGroup}/> : null}
   {leaveGroup ? <LeaveGroup leaveGroup={leaveGroup} setLeaveGroup={setLeaveGroup}/> : null}
      </div>
   );
};

export default GroupInfo;