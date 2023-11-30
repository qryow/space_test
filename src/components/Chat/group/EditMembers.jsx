import React from 'react';
import style from '../styles/ChatStyles.module.css'
import GroupMembers from './GroupMembers';
import EditMemberItem from '../items/EditMemberItem';


const EditMembers = ({editMembers, setEditMembers, currentRoom,groupMembers}) => {

   const clickEditMembers = () => {
      setEditMembers(false)
   }
   console.log(groupMembers);
   // console.log(currentRoom);
  
   return (
      <>
      
         <div>
            <div className={style.group__info}>
               <div className={style.edit__top}>
                  <svg onClick={clickEditMembers} style={{marginRight:'20px'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                     <path d="M9.56994 18.8201C9.37994 18.8201 9.18994 18.7501 9.03994 18.6001L2.96994 12.5301C2.67994 12.2401 2.67994 11.7601 2.96994 11.4701L9.03994 5.40012C9.32994 5.11012 9.80994 5.11012 10.0999 5.40012C10.3899 5.69012 10.3899 6.17012 10.0999 6.46012L4.55994 12.0001L10.0999 17.5401C10.3899 17.8301 10.3899 18.3101 10.0999 18.6001C9.95994 18.7501 9.75994 18.8201 9.56994 18.8201Z" fill="#BBBBBB"/>
                     <path d="M20.5 12.75H3.67004C3.26004 12.75 2.92004 12.41 2.92004 12C2.92004 11.59 3.26004 11.25 3.67004 11.25H20.5C20.91 11.25 21.25 11.59 21.25 12C21.25 12.41 20.91 12.75 20.5 12.75Z" fill="#BBBBBB"/>
                  </svg>
                  <p className={style.top__info}>Edit</p>
               </div>
              
               {groupMembers && groupMembers.map(user => {
                           return (
                              <div  key={user.id}>

                              <EditMemberItem currentRoom={currentRoom} key={user.id} user={user}/>
                              </div>

                           ) 
                        })}
                 
                  </div>
            </div>
          
         </>
      );
   };
            
export default EditMembers;