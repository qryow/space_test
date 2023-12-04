import React, { useEffect } from "react";
import { getProjects } from "../../../store/projects/ProjectsActions";
import { useDispatch, useSelector } from "react-redux";
import ProjectItem from "./ProjectItem";
import style from "./styles/Projects.module.css";

const ProjectsList = () => {
  const { projects, loading } = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  console.log(projects);

  useEffect(() => {
    dispatch(getProjects());
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : projects.length > 0 ? (
        <div className={style.wrapper}>
          <div className={style.project_carts}>
            {projects.map((project) => (
              <ProjectItem project={project} key={project.id} />
            ))}
          </div>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </>
  );
};

export default ProjectsList;
