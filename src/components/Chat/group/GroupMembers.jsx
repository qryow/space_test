import React from 'react';
import style from '../styles/ChatStyles.module.css'


const GroupMembers = ({user}) => {
   return (
      <div>
         <div className={style.group__members}>
               <div className={style.usertab__box}>
                  <div className={style.pfp__circle}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M4.16667 17.4998C4.16667 14.2782 6.77834 11.6665 10 11.6665C13.2217 11.6665 15.8333 14.2782 15.8333 17.4998" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10 9.16667C11.841 9.16667 13.3333 7.67428 13.3333 5.83333C13.3333 3.99238 11.841 2.5 10 2.5C8.15905 2.5 6.66667 3.99238 6.66667 5.83333C6.66667 7.67428 8.15905 9.16667 10 9.16667Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                     </svg>
                  </div>
                  <div className={style.nameprofession}>
                     <div className={style.username}>{user?.username}</div>
                     <div className={style.profession}>{user?.professions}</div>
                  </div>
               </div>
               {/* <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H5.01H5ZM12 12H12.01H12ZM19 12H19.01H19ZM6 12C6 12.2652 5.89464 12.5196 5.70711 12.7071C5.51957 12.8946 5.26522 13 5 13C4.73478 13 4.48043 12.8946 4.29289 12.7071C4.10536 12.5196 4 12.2652 4 12C4 11.7348 4.10536 11.4804 4.29289 11.2929C4.48043 11.1054 4.73478 11 5 11C5.26522 11 5.51957 11.1054 5.70711 11.2929C5.89464 11.4804 6 11.7348 6 12V12ZM13 12C13 12.2652 12.8946 12.5196 12.7071 12.7071C12.5196 12.8946 12.2652 13 12 13C11.7348 13 11.4804 12.8946 11.2929 12.7071C11.1054 12.5196 11 12.2652 11 12C11 11.7348 11.1054 11.4804 11.2929 11.2929C11.4804 11.1054 11.7348 11 12 11C12.2652 11 12.5196 11.1054 12.7071 11.2929C12.8946 11.4804 13 11.7348 13 12V12ZM20 12C20 12.2652 19.8946 12.5196 19.7071 12.7071C19.5196 12.8946 19.2652 13 19 13C18.7348 13 18.4804 12.8946 18.2929 12.7071C18.1054 12.5196 18 12.2652 18 12C18 11.7348 18.1054 11.4804 18.2929 11.2929C18.4804 11.1054 18.7348 11 19 11C19.2652 11 19.5196 11.1054 19.7071 11.2929C19.8946 11.4804 20 11.7348 20 12V12Z" stroke="#F1F1F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
               </div> */}
            </div>
      </div>
   );
};

export default GroupMembers;