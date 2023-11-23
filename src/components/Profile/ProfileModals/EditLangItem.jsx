import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import style from "./styles/ProfileModals.module.css";
import { editLanguage } from "../../../store/profile/ProfileActions";
import deleteBtn from "../../../img/profile/delete.svg";
import arrowDown from "../../../img/ArrowDown.svg";
import { deleteLanguage } from "../../../store/profile/ProfileActions";

const EditLangItem = ({ lang, handleSave, func }) => {
  const dispatch = useDispatch();
  console.log(lang);

  const [language, setLanguage] = useState(lang.languages || "");
  const [level, setLevel] = useState(lang.languages_level || "");
  const [isRotated, setIsRotated] = useState(false);

  const handleSaveClick = () => {
    const editedLang = {
      id: lang.id,
      user: lang.user,
      languages: language,
      languages_level: level,
    };
    dispatch(editLanguage({ language: editedLang, id: lang.id }));
    console.log("workeddd");
  };

  const toggleRotation = () => {
    setIsRotated(!isRotated);
  };
  useEffect(() => {
    handleSaveClick();
  }, [func, handleSave]);

  useEffect(() => {
    setLanguage(lang.languages);
    setLevel(lang.languages_level);
  }, [lang]);

  return (
    <div className={style.lang__item}>
      <div className={style.lang__item__inputs}>
        <div className={style.lang__item__input}>
          <input
            value={language}
            type="text"
            placeholder="Search for language"
            onChange={(e) => setLanguage(e.target.value)}
          />
        </div>
        <div className={style.lang__item__input}>
          <div>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className={style.dropdown}
              onClick={toggleRotation}
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
                isRotated
                  ? `${style.arrow__down} ${style.langArrowBtn}`
                  : `${style.arrow__up} ${style.langArrowBtn}`
              }
            />
          </div>
        </div>
      </div>
      <button>
        <img
          src={deleteBtn}
          alt=""
          onClick={() => dispatch(deleteLanguage({ id: lang.id }))}
        />
      </button>
      <button onClick={handleSaveClick}>save</button>
    </div>
  );
};

export default EditLangItem;
