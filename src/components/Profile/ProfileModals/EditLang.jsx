import React from "react";
import style from "./styles/ProfileModals.module.css";

const EditLang = ({ editLangModal, setEditLangModal }) => {
  return (
    <div
      className={
        editLangModal
          ? `${style.langModal} ${style.activeLang}`
          : `${style.langModal}`
      }
      onClick={(e) => {
        setEditLangModal(false);
        e.stopPropagation();
      }}
    >
      <div
        className={
          editLangModal
            ? `${style.createLang__content} ${style.active}`
            : `${style.createLang__content}`
        }
        onClick={(e) => e.stopPropagation()}
      >
        CreateLang
      </div>
    </div>
  );
};

export default EditLang;
