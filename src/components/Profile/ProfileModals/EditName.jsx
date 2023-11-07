import React from 'react';
import style from './styles/ProfileModals.module.css';

const EditName = ({ activeName, setActiveName }) => {
    return (
        <div className={ activeName ? `${style.editName} ${style.activeName}` : `${style.editName}` } onClick={() => setActiveName(false)}>
            <div className={ activeName ? `${style.editName__content} ${style.activeName}` : `${style.editName__content}` } onClick={e => e.stopPropagation()}>
            <h1>EditName</h1>
            <button onClick={() => setActiveName(false)}>close</button>
            </div>
        </div>
    );
};

export default EditName;