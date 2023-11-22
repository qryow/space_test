import React, { useEffect } from "react";
import style from "./styles/ProfileModals.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getLanguages } from "../../../store/profile/ProfileActions";
import EditLangItem from "./EditLangItem";

const EditLang = ({ editLangModal, setEditLangModal }) => {
  const { languages, loading } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

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
        <div className={style.lang_up}>
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
          <div>
            {languages.map((lang) => (
              <EditLangItem
                key={lang.id}
                lang={lang}
                setEditLangModal={setEditLangModal}
              />
            ))}
          </div>
        )}
        <div className={style.name__buttons}>
          <button
            className={style.name__button1}
            onClick={() => setEditLangModal(false)}
          >
            Cancel
          </button>
          <button className={style.name__button2}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditLang;
