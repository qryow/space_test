import React from 'react';
import style from '../styles/ChatStyles.module.css'


const Replying = () => {
   return (
      <div className={style.reply__box}>
         <div className={style.white__text40014}>Replying to <span className={style.pink__text70014}>User name</span></div>
         <p className={style.white__text40014}>Ok</p>
      </div>
   );
};

export default Replying;