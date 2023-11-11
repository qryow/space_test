import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './styles/Projects.module.css';

import project_img from '../../../img/project_img.svg';
import save from '../../../img/profile/archive.svg';
import saveActive from '../../../img/profile/saveActive.svg';
import location from '../../../img/profile/Location2.svg';
import like from '../../../img/profile/like.svg';
import eyes from '../../../img/profile/eyes icon.svg';

const ProjectItem = ({ project }) => {
    const navigate = useNavigate();
    return (
        <>
            <div className={style.project_cart}>
            <img src={project_img} alt="" />
            <div className={style.project_name}>
            <h2>{ project.title }</h2>
            <img src={save} alt="" />
            </div>
            <p>{ project.description }</p>
            <div className={style.location}>
                <img src={location} alt="" />
                <p>{ project.location }</p>
            </div>
            <div className={style.project_reactions}>
                <div className={style.project_likes}><img src={like} alt="" /> { project.likes }</div>
                <div className={style.project_views}><img src={eyes} alt="" /> {project.views_count}</div>
            </div>
            <button className={style.project_edit_button}>View Detail</button>
            </div>
        </>
    );
};

export default ProjectItem;