import React, { useEffect, useState } from 'react';
import style from '../styles/ChatStyles.module.css'
import { deleteGroup } from '../../../store/chat/chatSlice';
import { useDispatch } from 'react-redux';


const DeleteGroup = ({ setDeleteGroup, currentRoom}) => {
   const [id, setId] = useState()
   useEffect(() => {
      setId(currentRoom.id)
   },[currentRoom])
   const clickCancel = () => {
      setDeleteGroup(false)
   }
   const dispatch = useDispatch();
   
   const delGroup = async () => {
      if (currentRoom?.id) {
         await dispatch(
            deleteGroup(
               id
            )
         );
      } else {
         console.error("currentRoom or currentRoom.id is undefined");
      }
   }

   console.log(id);
   
   return (
      <div className={style.deletegroup__box}>
         <div className={style.removeuser__top}>
            <p className={style.white__text40024}>group delete</p>
            <p className={style.grey__text40018}>delete this group? </p>
         </div>
         <div className={style.removeuser__bottom}>
            <button onClick={clickCancel}  className={style.cancel__btn}>
               <p className={style.grey__text50020}>

               Cancel
               </p>
               </button>
            <button className={style.remove__btn} onClick={delGroup}>
               <p className={style.white__text50020}>
                  
               delete
               </p>
               </button>
         </div>
      </div>
   );
};

export default DeleteGroup;