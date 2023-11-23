import React, { useState } from "react";
import style from "./styles/ProfileModals.module.css";
import { useDispatch } from "react-redux";
import { createEducation } from "../../../store/profile/ProfileActions";

const CreateEducation = ({ createEducationModal, setCreateEducationModal }) => {
  const [educ, setEduc] = useState({
    school: "",
    degree: "",
    field_of_study: "",
    description: "",
  });
  const dispatch = useDispatch();
  return (
    <div
      className={
        createEducationModal
          ? `${style.langModal} ${style.activeLang}`
          : `${style.langModal}`
      }
      onClick={(e) => {
        setCreateEducationModal(false);
        e.stopPropagation();
      }}
    >
      <div
        className={
          createEducationModal
            ? `${style.editEducation__content} ${style.active}`
            : `${style.editEducation__content}`
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className={style.create_education__block}>
          <h3>School</h3>
          <input
            type="text"
            onChange={(e) => setEduc({ ...educ, school: e.target.value })}
            placeholder="Search for language"
          />
        </div>
        <div className={style.create_education__block}>
          <h3>Degree</h3>
          <input
            type="text"
            onChange={(e) => setEduc({ ...educ, degree: e.target.value })}
            placeholder="Search for language"
          />
        </div>
        <div className={style.create_education__block}>
          <h3>Field of Study</h3>
          <input
            type="text"
            onChange={(e) =>
              setEduc({ ...educ, field_of_study: e.target.value })
            }
            placeholder="Search for language"
          />
        </div>
        <div className={style.create_education__block}>
          <h3>Description</h3>
          <input
            type="text"
            onChange={(e) => setEduc({ ...educ, description: e.target.value })}
            placeholder="Search for language"
          />
        </div>
        <div className={style.name__buttons}>
          <button
            className={style.name__button1}
            onClick={() => setCreateEducationModal(false)}
          >
            Cancel
          </button>
          <button
            className={style.name__button2}
            onClick={() => {
              dispatch(createEducation({ education: educ }));
              setCreateEducationModal(false);
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateEducation;
