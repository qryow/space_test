import React, { useState, useEffect } from "react";
import style from "./styles/ProfileModals.module.css";
import arrowDown from "../../../img/ArrowDown.svg";
import { useDispatch } from "react-redux";
import { createLanguage } from "../../../store/profile/ProfileActions";

const CreateLang = ({ createLangModal, setCreateLangModal }) => {
  const [langDropdown, setLangDropdown] = useState(true);
  const [levelDropdown, setLevelDropdown] = useState(true);

  const [lang, setLeng] = useState({
    languages: "",
    languages_level: "",
  });

  const dispatch = useDispatch();

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
        <div className={style.lang_up}>
          <div className={style.lang_up__block}>
            <h3>Languages</h3>
          </div>
          <div className={style.lang_up__block}>
            <h3>Proficiency level</h3>
          </div>
        </div>

        <div className={style.createLangInp}>
          <div>
            <input
              type="text"
              placeholder="Search for language"
              onClick={() => setLangDropdown(!langDropdown)}
              onChange={(e) => setLeng({ ...lang, languages: e.target.value })}
            />
            <img
              src={arrowDown}
              alt=""
              className={
                langDropdown ? `${style.arrow__down}` : `${style.arrow__up}`
              }
              onClick={() => setLangDropdown(!langDropdown)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Search for proficiency level"
              onClick={() => setLevelDropdown(!levelDropdown)}
              onChange={(e) =>
                setLeng({ ...lang, languages_level: e.target.value })
              }
            />
            <img
              src={arrowDown}
              alt=""
              className={
                levelDropdown ? `${style.arrow__down}` : `${style.arrow__up}`
              }
              onClick={() => setLevelDropdown(!levelDropdown)}
            />
          </div>
        </div>

        <div className={style.name__buttons}>
          <button
            className={style.name__button1}
            onClick={() => setCreateLangModal(false)}
          >
            Cancel
          </button>
          <button
            className={style.name__button2}
            onClick={() => {
              dispatch(createLanguage({ language: lang }));
              setCreateLangModal(false);
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateLang;
