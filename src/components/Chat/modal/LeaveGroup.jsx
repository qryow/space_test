import React from 'react';
import style from '../styles/ChatStyles.module.css'


const LeaveGroup = ({setLeaveGroup}) => {
   const cancelbtn = () => {
      setLeaveGroup(false)
   }
   return (
      <div className={style.leavegroup}>
         <div className={style.removeuser__top}>
            <p className={style.white__text40024}>Leave Group</p>
            <p className={style.grey__text40018}>Remove username from the group? </p>
         </div>
         <div className={style.removeuser__bottom}>
            <button onClick={cancelbtn}  className={style.cancel__btn}>
               <p className={style.grey__text50020}>

               Cancel
               </p>
               </button>
            <button className={style.remove__btn}>
               <p className={style.white__text50020}>
                  
               Leave
               </p>
               </button>
         </div>
      </div>
   );
};

export default LeaveGroup;