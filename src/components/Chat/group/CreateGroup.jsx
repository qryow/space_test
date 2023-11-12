import React, { useState } from 'react';
import style from '../styles/ChatStyles.module.css'
import GroupMembers from './GroupMembers';
import PinkBtn from '../items/PinkBtn';
import AddDesc from './AddDesc';

const CreateGroup = ({setCreateGroup}) => {
   const [addDesc,setAddDesc] = useState(false)

   const clickAddDesc = () => {
      setAddDesc(true)
   }

   const [isIconVisible, setIsIconVisible] = useState(true);

    const handleInputChange = (event) => {
        if (event.target.value) {
            setIsIconVisible(false);
        } else {
            setIsIconVisible(true);
        }
    };
   return (
      <div>
         {addDesc ? <AddDesc addDesc={addDesc} setAddDesc={setAddDesc} setCreateGroup={setCreateGroup}/> : 
         <div className={style.bar__topside}>
            
            <div className={style.addmembers__top}>
               <div className={style.top__title}>
                  Group Creation
               </div>
               <p className={style.grey__text50016}>Add Members</p>
            </div>

            <div>
               <div className={style.search__bar}>
                  {isIconVisible ? 
                  <i className={style.search__icon} aria-hidden="true">
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M8.33333 14.1667C11.555 14.1667 14.1667 11.555 14.1667 8.33333C14.1667 5.11167 11.555 2.5 8.33333 2.5C5.11167 2.5 2.5 5.11167 2.5 8.33333C2.5 11.555 5.11167 14.1667 8.33333 14.1667Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.5 12.5L17.5 17.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                     </svg>
                  </i>
                  : null}
                  <input onChange={handleInputChange} type="text" className={style.chatbar__input} placeholder="         Saerch for people and groups"/>
               </div>
            </div>
            <div className={style.members__list}>
               <div className={style.square}></div>
               {/* <input type="checkbox" className={style.square} /> */}
               <div className={style.usertab__box}>
                  <div className={style.pfp__circle}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M4.16667 17.4998C4.16667 14.2782 6.77834 11.6665 10 11.6665C13.2217 11.6665 15.8333 14.2782 15.8333 17.4998" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10 9.16667C11.841 9.16667 13.3333 7.67428 13.3333 5.83333C13.3333 3.99238 11.841 2.5 10 2.5C8.15905 2.5 6.66667 3.99238 6.66667 5.83333C6.66667 7.67428 8.15905 9.16667 10 9.16667Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                     </svg>
                  </div>
                  <div className={style.nameprofession}>
                     <div className={style.username}>username</div>
                     <div className={style.profession}>profession</div>
                  </div>
               </div>
            </div>
            <div onClick={clickAddDesc}>
               <PinkBtn/>
            </div>
         </div>
         }
      </div>
   );
};

export default CreateGroup;