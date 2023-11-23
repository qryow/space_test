import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProjects } from "../../store/projects/ProjectsActions";
import ProjectsItem from "./ProjectsItem";
import MainNavbar from "../Main/MainNavbar";
import MainHeader from "../Main/MainHeader";
import style from "./ProjectsItemStyles.module.css";

const ProjectsList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { projects, loading } = useSelector((state) => state.projects);
  useEffect(() => {
    dispatch(getProjects());
  }, []);
  // console.log(projects);
  return (
    <div className={style.mainDiv}>
      <MainNavbar />

      {loading ? (
        <h2>loading...</h2>
      ) : (
        <div className={style.projectList}>
          {projects.map((item, index) => (
            <ProjectsItem key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsList;
