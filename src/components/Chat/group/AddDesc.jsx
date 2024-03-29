import React, { useState } from 'react';
import style from '../styles/ChatStyles.module.css'
import PinkBtn from '../items/PinkBtn';
import { useDispatch } from 'react-redux';
import { addPrivateChatRoom } from '../../../store/chat/chatSlice';

const AddDesc = ({addDesk,members, setAddDesc,setCreateGroup}) => {
   const [groupTitle, setGroupTitle] = useState('')
   const dispatch = useDispatch();
   console.log(groupTitle);



   const addGroup = async () => {
      setAddDesc(false)
      setCreateGroup(false)
      const membersId = await members.map((i => i.id))
      console.log(membersId);
      await dispatch(
         addPrivateChatRoom({
            title:`grouptag${groupTitle}`,
            particip: membersId,
         })
         );
      }


   const clickAddDesc = () => {
      // setAddDesc(false)
      // setCreateGroup(false)

   }
   return (
      <div>
         <div className={style.bar__topside}>
            <div className={style.adddesc__top}>

               <svg onClick={clickAddDesc} style={{marginRight:'20px'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9.56994 18.8201C9.37994 18.8201 9.18994 18.7501 9.03994 18.6001L2.96994 12.5301C2.67994 12.2401 2.67994 11.7601 2.96994 11.4701L9.03994 5.40012C9.32994 5.11012 9.80994 5.11012 10.0999 5.40012C10.3899 5.69012 10.3899 6.17012 10.0999 6.46012L4.55994 12.0001L10.0999 17.5401C10.3899 17.8301 10.3899 18.3101 10.0999 18.6001C9.95994 18.7501 9.75994 18.8201 9.56994 18.8201Z" fill="#BBBBBB"/>
                  <path d="M20.5 12.75H3.67004C3.26004 12.75 2.92004 12.41 2.92004 12C2.92004 11.59 3.26004 11.25 3.67004 11.25H20.5C20.91 11.25 21.25 11.59 21.25 12C21.25 12.41 20.91 12.75 20.5 12.75Z" fill="#BBBBBB"/>
               </svg>
               <p className={style.top__info}>Edit</p>
            </div>
            {/* <div className={style.edit__circle}>
                  
                     <svg style={{position:'absolute'}} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                     <path d="M15 17.9167C12.4666 17.9167 10.4166 15.8667 10.4166 13.3333C10.4166 10.8 12.4666 8.75 15 8.75C17.5333 8.75 19.5833 10.8 19.5833 13.3333C19.5833 15.8667 17.5333 17.9167 15 17.9167ZM15 11.25C13.85 11.25 12.9166 12.1833 12.9166 13.3333C12.9166 14.4833 13.85 15.4167 15 15.4167C16.15 15.4167 17.0833 14.4833 17.0833 13.3333C17.0833 12.1833 16.15 11.25 15 11.25Z" fill="white"/>
                     <path d="M25 37.9163H15C5.95004 37.9163 2.08337 34.0497 2.08337 24.9997V14.9997C2.08337 5.94967 5.95004 2.08301 15 2.08301H21.6667C22.35 2.08301 22.9167 2.64967 22.9167 3.33301C22.9167 4.01634 22.35 4.58301 21.6667 4.58301H15C7.31671 4.58301 4.58337 7.31634 4.58337 14.9997V24.9997C4.58337 32.683 7.31671 35.4163 15 35.4163H25C32.6834 35.4163 35.4167 32.683 35.4167 24.9997V16.6663C35.4167 15.983 35.9834 15.4163 36.6667 15.4163C37.35 15.4163 37.9167 15.983 37.9167 16.6663V24.9997C37.9167 34.0497 34.05 37.9163 25 37.9163Z" fill="white"/>
                     <path d="M35.4167 9.58301H26.25C25.5667 9.58301 25 9.01634 25 8.33301C25 7.64967 25.5667 7.08301 26.25 7.08301H35.4167C36.1 7.08301 36.6667 7.64967 36.6667 8.33301C36.6667 9.01634 36.1 9.58301 35.4167 9.58301Z" fill="white"/>
                     <path d="M30.8334 14.1667C30.15 14.1667 29.5834 13.6 29.5834 12.9167V3.75C29.5834 3.06667 30.15 2.5 30.8334 2.5C31.5167 2.5 32.0834 3.06667 32.0834 3.75V12.9167C32.0834 13.6 31.5167 14.1667 30.8334 14.1667Z" fill="white"/>
                     <path d="M4.44996 32.8336C4.04996 32.8336 3.64996 32.6336 3.41663 32.2836C3.03329 31.7169 3.18329 30.9336 3.74996 30.5503L11.9666 25.0336C13.7666 23.8336 16.25 23.9669 17.8833 25.3503L18.4333 25.8336C19.2666 26.5503 20.6833 26.5503 21.5 25.8336L28.4333 19.8836C30.2166 18.3669 32.9833 18.3669 34.7666 19.8836L37.4833 22.2169C38 22.6669 38.0666 23.4503 37.6166 23.9836C37.1666 24.5003 36.3833 24.5669 35.85 24.1169L33.1333 21.7836C32.3 21.0669 30.8833 21.0669 30.0666 21.7836L23.1333 27.7336C21.3666 29.2503 18.5833 29.2503 16.8 27.7336L16.25 27.2503C15.4833 26.6003 14.2166 26.5336 13.3666 27.1169L5.16663 32.6336C4.93329 32.7669 4.68329 32.8336 4.44996 32.8336Z" fill="white"/>
                     </svg>
                  </div> */}
                     <div className={style.addinput__box}>
                        <input type="text" value={groupTitle}
                        onChange={e => setGroupTitle(e.target.value)} className={style.add__input} placeholder='Group name'/>
                        {/* <input type="text" className={style.add__input} placeholder='Description'/> */}
                     </div>
                  <div>
                    
                   
                  </div>
            
            <div onClick={addGroup}>

               <PinkBtn/>
            </div>
         </div>
      </div>
   );
};

export default AddDesc;