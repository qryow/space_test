import React from 'react';
import style from './styles/ProfileModals.module.css';

const EditName = ({activeName, setActiveName}) => {
    return (
        <div className={activeName ? `${style.editName} ${style.activeName}` : `${style.editName}`} onClick={() => setActiveName(false)}>
            <div className={activeName ? `${style.editName__content} ${style.activeName}` : `${style.editName__content}`} onClick={e => e.stopPropagation()}>
                <div className={style.name__block}>
                    <h1>Username</h1>
                    <input className={style.name__input} type="text" />
                </div>
                <div className={style.name__block}>
                    <h1>Name</h1>
                    <input className={style.name__input} type="text" />
                </div>
                <div className={style.name__block}>
                    <h1>Professional role</h1>
                    <input className={style.name__input} type="text" />
                </div>
                <div className={style.name__block2}>
                    <div className={style.name__block2_block}>
                        <h1>Country</h1>
                        <input className={style.name__input} type="text" />
                    </div>
                    <div className={style.name__block2_block}>
                        <h1>Area</h1>
                        <input className={style.name__input} type="text" />
                    </div>
                </div>
                <div className={style.name__buttons}>
                    <button className={style.name__button1} onClick={() => setActiveName(false)}>Cancel</button>
                    <button className={style.name__button2}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default EditName;