import React, { useState } from "react";
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
            <select
              placeholder="Search for language"
              onClick={() => setLevelDropdown(!levelDropdown)}
              onChange={(e) =>
                setLeng({ ...lang, languages_level: e.target.value })
              }
              className={style.dropdown}
            >
              <option value="A1">A1</option>
              <option value="A2">A2</option>
              <option value="B1">B1</option>
              <option value="B2">B2</option>
              <option value="C1">C1</option>
              <option value="C2">C2</option>
            </select>
            <img
              src={arrowDown}
              alt=""
              className={
                levelDropdown
                  ? `${style.arrow__down} ${style.langArrowBtn}`
                  : `${style.arrow__up} ${style.langArrowBtn}`
              }
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
