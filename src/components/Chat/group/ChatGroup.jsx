import React, { useState } from 'react';
import style from '../styles/ChatStyles.module.css'

const ChatGroup = ({title,messages,id}) => {
   // console.log(title);
   const newStr = title.substring(8)
   // console.log(newStr);
   const lastmsg = messages.slice(-1)
   // console.log(lastmsg[0]?.text);
   // console.log(lastmsg && lastmsg[0]);


   return (
      <div className={style.chatuser}
      >
         <div className={style.pfp__circle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
               <path d="M14.1666 13.5229C16.1086 13.9805 17.5 15.2153 17.5 16.6666" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M2.5 16.6668C2.5 14.8259 4.73858 13.3335 7.5 13.3335C10.2614 13.3335 12.5 14.8259 12.5 16.6668" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M12.5 10.8332C14.3409 10.8332 15.8333 9.34079 15.8333 7.49984C15.8333 5.65889 14.3409 4.1665 12.5 4.1665" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M7.49996 10.8332C9.34091 10.8332 10.8333 9.34079 10.8333 7.49984C10.8333 5.65889 9.34091 4.1665 7.49996 4.1665C5.65901 4.1665 4.16663 5.65889 4.16663 7.49984C4.16663 9.34079 5.65901 10.8332 7.49996 10.8332Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
         </div>
         <div>
            <div className={style.nametime}>
               <div className={style.username}>{newStr}</div>
               <div className={style.time__bar}>19:00</div>
            </div>
            {/* <div className={style.msg__bar}>some msg</div> */}
         </div>
      </div>
   );
};

export default ChatGroup;