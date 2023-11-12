import React, { useState } from 'react';
import LeftMessage from './LeftMessage';
import style from '../styles/ChatStyles.module.css'

const GroupMessage = () => {
   const [showOptions, setShowOptions] = useState(false)
   const clickOptions = () => {
      setShowOptions(!showOptions)
   }
   return (
      <div className={style.group__message}>
         <div className={style.pfp__circle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
               <path d="M4.16667 17.4998C4.16667 14.2782 6.77834 11.6665 10 11.6665C13.2217 11.6665 15.8333 14.2782 15.8333 17.4998" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M10 9.16667C11.841 9.16667 13.3333 7.67428 13.3333 5.83333C13.3333 3.99238 11.841 2.5 10 2.5C8.15905 2.5 6.66667 3.99238 6.66667 5.83333C6.66667 7.67428 8.15905 9.16667 10 9.16667Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
         </div>
         <div>
            <div className={style.groupmsg_rightbox}>
               <p className={style.white__text70014}>User name1</p>
                  <div className={style.group__leftmsg}>
                     <div className={style.message__recipient}>
                           <div>
                              <p className={style.sender__text}>sadfsafsd</p>
                              <div className={style.time__bar}>
                                 19:00
                              </div>
                           </div>
                           <div className={style.message__options}>
                              <svg onClick={clickOptions} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                 <path d="M15.8333 7.5L9.99999 13.3333L4.16666 7.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                              {
                                 showOptions ? (
                                 <div className={style.options}>
                                    <div className={style.option__one}>
                                       <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                          <path d="M10.5867 13.2067H5.25333C4.97999 13.2067 4.75333 12.98 4.75333 12.7067C4.75333 12.4334 4.97999 12.2067 5.25333 12.2067H10.5867C12.1467 12.2067 13.42 10.9334 13.42 9.37337C13.42 7.81337 12.1467 6.54004 10.5867 6.54004H3.25333C2.97999 6.54004 2.75333 6.31337 2.75333 6.04004C2.75333 5.76671 2.97999 5.54004 3.25333 5.54004H10.5867C12.7 5.54004 14.42 7.26004 14.42 9.37337C14.42 11.4867 12.7 13.2067 10.5867 13.2067Z" fill="white"/>
                                          <path d="M4.78666 8.20659C4.66 8.20659 4.53333 8.15992 4.43333 8.05992L2.72667 6.35326C2.53333 6.15992 2.53333 5.83992 2.72667 5.64659L4.43333 3.93992C4.62667 3.74659 4.94667 3.74659 5.14 3.93992C5.33333 4.13326 5.33333 4.45326 5.14 4.64659L3.78666 5.99992L5.14 7.35326C5.33333 7.54659 5.33333 7.86659 5.14 8.05992C5.04667 8.15992 4.91333 8.20659 4.78666 8.20659Z" fill="white"/>
                                       </svg>
                                    <div className={style.white__text400}>reply</div>
                                    </div>
                                    <div className={style.option__one}>
                                       <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                          <path d="M7.90001 15.6663H5.10001C2.49334 15.6663 1.33334 14.5063 1.33334 11.8997V9.09967C1.33334 6.49301 2.49334 5.33301 5.10001 5.33301H7.90001C10.5067 5.33301 11.6667 6.49301 11.6667 9.09967V11.8997C11.6667 14.5063 10.5067 15.6663 7.90001 15.6663ZM5.10001 6.33301C3.03334 6.33301 2.33334 7.03301 2.33334 9.09967V11.8997C2.33334 13.9663 3.03334 14.6663 5.10001 14.6663H7.90001C9.96668 14.6663 10.6667 13.9663 10.6667 11.8997V9.09967C10.6667 7.03301 9.96668 6.33301 7.90001 6.33301H5.10001Z" fill="white"/>
                                          <path d="M11.9 11.6663H11.1667C10.8933 11.6663 10.6667 11.4397 10.6667 11.1663V9.09967C10.6667 7.03301 9.96668 6.33301 7.90001 6.33301H5.83334C5.56001 6.33301 5.33334 6.10634 5.33334 5.83301V5.09967C5.33334 2.49301 6.49334 1.33301 9.10001 1.33301H11.9C14.5067 1.33301 15.6667 2.49301 15.6667 5.09967V7.89967C15.6667 10.5063 14.5067 11.6663 11.9 11.6663ZM11.6667 10.6663H11.9C13.9667 10.6663 14.6667 9.96634 14.6667 7.89967V5.09967C14.6667 3.03301 13.9667 2.33301 11.9 2.33301H9.10001C7.03334 2.33301 6.33334 3.03301 6.33334 5.09967V5.33301H7.90001C10.5067 5.33301 11.6667 6.49301 11.6667 9.09967V10.6663Z" fill="white"/>
                                       </svg>
                                       <div className={style.white__text400}>copy</div>
                                    </div>
                                 </div>
                                 ) 
                                 : null
                              }
                           </div>
                        </div>
                     </div>
               </div>
         </div>
      </div>
   );
};

export default GroupMessage;