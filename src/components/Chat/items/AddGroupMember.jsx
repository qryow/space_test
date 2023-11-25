import React, { useState } from 'react';
import style from '../styles/ChatStyles.module.css'

const AddGroupMember = ({members,setMembers,user}) => {

   console.log(members);
   const handleChange = (e) => {
      if(e.target.checked) {
         console.log('checked');
         setMembers((prevMembers) => [...prevMembers, { id: user.id }])
         
      } else {
         console.log('not');
         setMembers((prevMembers) =>
         prevMembers.filter((member) => member.id !== user.id)
       );
      }
   }
   return (
      <div className={style.member__item}>
         {/* <div className={style.square}></div> */}
         <input checked={members.some((member) => member.id === user.id)}
          onChange={handleChange} type="checkbox" className={style.square} />
         <div className={style.usertab__box}>
            <div className={style.pfp__circle}>
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4.16667 17.4998C4.16667 14.2782 6.77834 11.6665 10 11.6665C13.2217 11.6665 15.8333 14.2782 15.8333 17.4998" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M10 9.16667C11.841 9.16667 13.3333 7.67428 13.3333 5.83333C13.3333 3.99238 11.841 2.5 10 2.5C8.15905 2.5 6.66667 3.99238 6.66667 5.83333C6.66667 7.67428 8.15905 9.16667 10 9.16667Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
            </div>
            <div className={style.nameprofession}>
               <div className={style.username}>{user?.first_name}</div>
               <div className={style.profession}>{user?.professions}</div>
            </div>
         </div>
      </div>
   );
};

export default AddGroupMember;