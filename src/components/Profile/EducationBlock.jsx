import React, { useState } from "react";
import style from "./styles/ProfileStyles.module.css";

import edit from "../../img/profile/editbtn.svg";
import EditEducation from "./ProfileModals/EditEducation";

const EducationBlock = ({ education }) => {
  const [editEducationModal, setEditEducationModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className={style.education__block}>
        <div
          className={`${style.education__info} ${
            isHovered ? style.hovered : ""
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h4>{education.school}</h4>
          <p>{education.degree}</p>
          <p>{education.field_of_study}</p>
          <p className={style.hidden_text}>{education.description}</p>
        </div>

        <button
          className={style.edit__btn}
          onClick={() => setEditEducationModal(true)}
        >
          <img src={edit} alt="" />
        </button>
      </div>
      <EditEducation
        education={education}
        editEducationModal={editEducationModal}
        setEditEducationModal={setEditEducationModal}
      />
    </>
  );
};

export default EducationBlock;
