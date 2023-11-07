import React, { useState } from 'react';
import style from './styles/ProfileStyles.module.css';

import ProjectsList from '../Projects/ProjectsList';
import BlogsList from '../Blogs/BlogsList';

import plus from '../../img/Add_Plus.svg';

const ProfileProjectsAndPosts = () => {
const [activeTab, setActiveTab] = useState('projects');

const handleTabClick = (tab) => {
    setActiveTab(tab);
};

return (
<div className={style.content}>
      <div className={style.content_buttons}>
        <div className={style.content_buttons_left}>
            <button
              className={`${activeTab === 'projects' ? style.project_button : style.project_button_no_active}`}
              onClick={() => handleTabClick('projects')}
            >
              Projects
            </button>
            <button className={`${activeTab === 'posts' ? style.plus_project_no_active : style.plus_project}`}><img src={plus} alt="" /></button>
        </div>
        <div className={style.content_buttons_right}>
          <button
            className={`${activeTab === 'posts' ? style.post_button : style.post_button_no_active}`}
            onClick={() => handleTabClick('posts')}
          >
            Blogs
          </button>
          <button className={`${activeTab === 'posts' ? style.plus_post : style.plus_post_no_active}`}><img src={plus} alt="" /></button>
        </div>
      </div>

      <div style={{ display: activeTab === 'projects' ? 'flex' : 'none' }}><ProjectsList /></div>
      <div style={{ display: activeTab === 'posts' ? 'flex' : 'none' }}><BlogsList /></div>
      
    </div>
);
}

export default ProfileProjectsAndPosts;