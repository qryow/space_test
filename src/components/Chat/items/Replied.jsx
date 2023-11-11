import React from 'react';
import style from '../styles/ChatStyles.module.css'

const Replied = () => {
   return (
      <div>
         <div className={style.replied__box}>
            <div className={style.white__text40014}>Replying to <span className={style.pink__text70014}>User name</span></div>
            <p className={style.white__text40014}>Ok</p>
         </div>
      </div>
   );
};

export default Replied;