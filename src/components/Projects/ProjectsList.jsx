import React, { useEffect } from 'react';
import { getProjects } from '../../store/projects/projectsActions';
import { useDispatch, useSelector } from 'react-redux';
import ProjectItem from './ProjectItem';
import style from './styles/Projects.module.css';
import ProjectsPagination from './ProjectsPagination';

const ProjectsList = () => {
const { projects, loading } = useSelector(state => state.projects);
const dispatch = useDispatch();

useEffect(() => {
    dispatch(getProjects())
}, [])

//   // Получаем информацию о текущем аккаунте пользователя из локального хранилища
//   const currentUser = JSON.parse(localStorage.getItem('account'));

//   // Фильтруем проекты, оставляя только те, которые принадлежат текущему аккаунту
//   const userProjects = projects.filter(project => project.ath === currentUser.id);

//   console.log(userProjects);
    return (
        <>
        {loading ? (
            <p>Loading...</p>
        ) : projects.length > 0 ? (
            <div className={style.wrapper}>
        <div className={style.project_carts}>
            {projects.map(project => (
            <ProjectItem key={project.id} project={project} />
            ))}
        </div>
        <ProjectsPagination />
        </div>
        ) : (
            <p>No data available</p>
        )}
        </>
    );
};

export default ProjectsList;