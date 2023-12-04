import React, { useState } from "react";
import style from "./styles/ProfileStyles.module.css";

import ProjectsList from "./ProfileProjects/ProjectsList";
import BlogsList from "./ProfileBlogs/BlogsList";
import PostsList from "./ProfilePosts/PostsList";

import plus from "../../img/Add_Plus.svg";
import PostCreate from "./ProfilePosts/PostCreate";

const ProfileProjectsAndPosts = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [createPostModal, setCreatePostModal] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className={style.content}>
        <div className={style.content_buttons}>
          <div className={style.content_buttons_project}>
            <button
              className={`${
                activeTab === "projects"
                  ? style.project_button
                  : style.project_button_no_active
              }`}
              onClick={() => handleTabClick("projects")}
            >
              Projects
            </button>
            <button
              className={`${
                activeTab === "projects"
                  ? style.plus_project
                  : style.plus_project_no_active
              }`}
            >
              <img src={plus} alt="" />
            </button>
          </div>

          <div className={style.content_buttons_post}>
            <button
              className={`${
                activeTab === "posts"
                  ? style.post_button
                  : style.post_button_no_active
              }`}
              onClick={() => handleTabClick("posts")}
            >
              Posts
            </button>
            <button
              className={`${
                activeTab === "posts"
                  ? style.plus_post
                  : style.plus_post_no_active
              }`}
              onClick={() => setCreatePostModal(true)}
            >
              <img src={plus} alt="" />
            </button>
          </div>

          <div className={style.content_buttons_blog}>
            <button
              className={`${
                activeTab === "blogs"
                  ? style.blog_button
                  : style.blog_button_no_active
              }`}
              onClick={() => handleTabClick("blogs")}
            >
              Blogs
            </button>
            <button
              className={`${
                activeTab === "blogs"
                  ? style.plus_blog
                  : style.plus_blog_no_active
              }`}
            >
              <img src={plus} alt="" />
            </button>
          </div>
        </div>

        <div style={{ display: activeTab === "projects" ? "flex" : "none" }}>
          <ProjectsList />
        </div>
        <div style={{ display: activeTab === "posts" ? "flex" : "none" }}>
          <PostsList />
        </div>
        <div style={{ display: activeTab === "blogs" ? "flex" : "none" }}>
          <BlogsList />
        </div>
      </div>
      <div className={style.createPost}>
        <PostCreate
          createPostModal={createPostModal}
          setCreatePostModal={setCreatePostModal}
        />
      </div>
    </>
  );
};

export default ProfileProjectsAndPosts;
