import React, { useEffect, useState } from "react";
import style from "./styles/ProfileModals.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getLanguages } from "../../../store/profile/ProfileActions";
import EditLangItem from "./EditLangItem";

const EditLang = ({ editLangModal, setEditLangModal }) => {
  const { languages, loading } = useSelector((state) => state.profile);
  const [func, setFunc] = useState(false);
  const dispatch = useDispatch();

  const handleSave = () => {
    setFunc(!func);
    setEditLangModal(false);
  };

  useEffect(() => {
    dispatch(getLanguages());
  }, []);

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
        <div className={style.lang_up2}>
          <div>
            <h3>Languages</h3>
          </div>
          <div>
            <h3>Proficiency level</h3>
          </div>
        </div>

        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <div className={style.lang__down}>
            {languages && languages.length > 0 ? (
              languages.map((lang) => (
                <EditLangItem
                  key={lang.id}
                  lang={lang}
                  handleSave={handleSave}
                  func={func}
                />
              ))
            ) : (
              <div className={style.p}>No languages</div>
            )}
          </div>
        )}

        <div className={style.name__buttons}>
          <button
            className={style.name__button1}
            onClick={() => setEditLangModal(false)}
          >
            Cancel
          </button>
          <button className={style.name__button2} onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditLang;
