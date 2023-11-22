import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import style from "./styles/ProfileModals.module.css";
import { editLanguage } from "../../../store/profile/ProfileActions";

const EditLangItem = ({ lang }) => {
  const dispatch = useDispatch();

  const [language, setLanguage] = useState(lang.languages);
  const [level, setLevel] = useState(lang.languages_level);

  const handleSave = () => {
    const editedLang = {
      id: lang.id,
      user: lang.user,
      languages: language,
      languages_level: level,
    };
    dispatch(editLanguage({ language: editedLang, id: lang.id }));
  };

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
          <input
            value={level}
            type="text"
            placeholder="Search for proficiency level"
            onChange={(e) => setLevel(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default EditLangItem;
