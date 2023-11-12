import React from 'react';
import style from '../styles/ChatStyles.module.css'
import Replied from './Replied';


const RightMessage = () => {
   return (
      <div>
         <div className={style.chat__message}>
            <div className={style.message__sender}>
               {/* <Replied/> */}
               <p className={style.sender__text}>asdfasdfas</p>
               <div className={style.time__bar}>
                  19:00
               </div>
            </div>
         </div>
      </div>
   );
};

export default RightMessage;