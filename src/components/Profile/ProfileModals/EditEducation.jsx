import React, { useState, useEffect } from "react";
import style from "./styles/ProfileModals.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getEducations,
  editEducation,
} from "../../../store/profile/ProfileActions";

const EditEducation = ({
  education,
  editEducationModal,
  setEditEducationModal,
}) => {
  const [school, setSchool] = useState(education.username);
  const [degree, setDegree] = useState(education.first_name);
  const [field_of_study, setField_of_study] = useState(education.professions);
  const [description, setDescription] = useState(education.description);

  const dispatch = useDispatch();

  const handleEdit = () => {
    const editEduc = {
      id: education.id,
      user: education.user,
      school: school,
      degree: degree,
      field_of_study: field_of_study,
      description: description,
    };

    dispatch(editEducation({ education: editEduc, id: education.id }));
  };

  useEffect(() => {
    setSchool(education.school);
    setDegree(education.degree);
    setField_of_study(education.field_of_study);
    setDescription(education.country);
  }, [education]);

  useEffect(() => {
    dispatch(getEducations());
  }, [dispatch]);

  return (
    <div
      className={
        editEducationModal
          ? `${style.editName} ${style.activeName}`
          : `${style.editName}`
      }
      onClick={(e) => {
        setEditEducationModal(false);
        e.stopPropagation();
      }}
    >
      <div
        className={
          editEducationModal
            ? `${style.editName__content} ${style.active}`
            : `${style.editName__content}`
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className={style.create_education__block}>
          <h3>School</h3>
          <input
            type="text"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            placeholder="Ex: Northwestern University"
          />
        </div>
        <div className={style.create_education__block}>
          <h3>Degree</h3>
          <input
            type="text"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            placeholder="Ex: Bachelors"
          />
        </div>
        <div className={style.create_education__block}>
          <h3>Field of Study</h3>
          <input
            type="text"
            value={field_of_study}
            onChange={(e) => setField_of_study(e.target.value)}
            placeholder="Ex: Computer Astronomy"
          />
        </div>
        <div className={style.create_education__block}>
          <h3>Description</h3>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Search for language"
          />
        </div>
        <div className={style.name__buttons}>
          <button
            className={style.name__button1}
            onClick={() => setEditEducationModal(false)}
          >
            Cancel
          </button>
          <button
            className={style.name__button2}
            onClick={() => {
              handleEdit();
              setEditEducationModal(false);
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditEducation;
