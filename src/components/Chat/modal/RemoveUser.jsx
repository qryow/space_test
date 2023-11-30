import React, { useState } from 'react';
import style from '../styles/ChatStyles.module.css'
import { useDispatch } from 'react-redux';
import { editGroup } from '../../../store/chat/chatSlice';


const RemoveUser = ({removeUser, setRemoveUser,user,currentRoom}) => {
   const [editedMembers, setEditedMembers] = useState([])
   const clickRemoveUser = () => {
      setRemoveUser(false)

   }
   const dispatch = useDispatch();
   const removeGroupUser =async (user) => {
      console.log(user.id);
      // setRemoveUser(false)
      try {
         if (currentRoom && currentRoom.participants) {
            // Replace 9 with the ID you want to filter out
            const idToRemove = user.id;
            
            const filt = currentRoom.participants.filter((userId) =>
              userId !== idToRemove
            );
            setEditedMembers(filt)
            console.log(filt);
            if(currentRoom.id) {

               await dispatch(
                  editGroup({
                     id: currentRoom.id,
                     title: currentRoom.title,
                     particip: filt
                  })
            )
               }
      setRemoveUser(false)

            console.log("edited");
          }
       } catch (error) {
         console.log(error);
       }

   }
   
   console.log();
   return (
      <div className={style.removeuser__box}>
         <div className={style.removeuser__top}>
            <p className={style.white__text40024}>Remove user</p>
            <p className={style.grey__text40018}>Remove username from the group? </p>
         </div>
         <div className={style.removeuser__bottom}>
            <button  onClick={clickRemoveUser} className={style.cancel__btn}>
               <p className={style.grey__text50020}>

               Cancel
               </p>
               </button>
            <button onClick={() => removeGroupUser(user)} className={style.remove__btn}>
               <p className={style.white__text50020}>
                  
               Remove
               </p>
               </button>
         </div>
      </div>
   );
};

export default RemoveUser;