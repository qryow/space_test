import React from "react";
import style from "./styles/ProfileModals.module.css";

const CreateLang = ({ createLangModal, setCreateLangModal }) => {
  return (
    <div
      className={
        createLangModal
          ? `${style.langModal} ${style.activeLang}`
          : `${style.langModal}`
      }
      onClick={(e) => {
        setCreateLangModal(false);
        e.stopPropagation();
      }}
    >
      <div
        className={
          createLangModal
            ? `${style.createLang__content} ${style.active}`
            : `${style.createLang__content}`
        }
        onClick={(e) => e.stopPropagation()}
      >
        qwdqwdqwdqwd
      </div>
    </div>
  );
};

export default CreateLang;
