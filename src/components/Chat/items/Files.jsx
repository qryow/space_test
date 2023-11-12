import React from 'react';
import style from '../styles/ChatStyles.module.css'

const Files = () => {
   return (
      <div>
         <div  div className={style.files__item}>      
            <img src={require('../../../img/chatimgs/Image.png')} alt="" />
            <div>
               <p className={style.white__text500}>File name</p>
               <p className={style.grey__text700}>6.5 KB PNG</p>
            </div>
         </div>
      </div>
   );
};

export default Files;