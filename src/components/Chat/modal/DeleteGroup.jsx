import React from 'react';
import style from '../styles/ChatStyles.module.css'


const DeleteGroup = ({deleteGroup, setDeleteGroup}) => {
   const clickCancel = () => {
      setDeleteGroup(false)
   }
   return (
      <div className={style.deletegroup__box}>
         <div className={style.removeuser__top}>
            <p className={style.white__text40024}>Remove user</p>
            <p className={style.grey__text40018}>Remove username from the group? </p>
         </div>
         <div className={style.removeuser__bottom}>
            <button onClick={clickCancel}  className={style.cancel__btn}>
               <p className={style.grey__text50020}>

               Cancel
               </p>
               </button>
            <button className={style.remove__btn}>
               <p className={style.white__text50020}>
                  
               Remove
               </p>
               </button>
         </div>
      </div>
   );
};

export default DeleteGroup;