import React, { useEffect } from 'react';
import { getProjects } from '../../../store/projects/ProjectsActions';
import { useDispatch, useSelector } from 'react-redux';
import ProjectItem from './ProjectItem';
import style from './styles/Projects.module.css';

const ProjectsList = () => {
const { projects, loading } = useSelector(state => state.projects);
const dispatch = useDispatch();

useEffect(() => {
    dispatch(getProjects())
    // .catch(error => console.error("Error fetching projects:", error));
}, [])

//   // Получаем информацию о текущем аккаунте пользователя из локального хранилища
//   const currentUser = JSON.parse(localStorage.getItem('account'));

//   // Фильтруем проекты, оставляя только те, которые принадлежат текущему аккаунту
//   const userProjects = projects.filter(project => project.author === currentUser.id);

  console.log(projects);
    return (
        <>
        {loading ? (
            <p>Loading...</p>
        ) : projects.length > 0 ? (
            <div className={style.wrapper}>
        <div className={style.project_carts}>
            {projects.map(project => (
            <ProjectItem project={project} />
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