import React, { useState } from "react";
import style from "./styles/Posts.module.css";
import { useDispatch } from "react-redux";
import { createPost } from "../../../store/posts/PostsActions";

import exportImg from "../../../img/posts/export.svg";

const PostCreate = ({ createPostModal, setCreatePostModal }) => {
  const [post, setPost] = useState({
    title: "",
    content: "",
    blog: "",
    category: "",
  });

  const dispatch = useDispatch();
  return (
    <div
      className={
        createPostModal
          ? `${style.createModal} ${style.activeModal}`
          : `${style.createModal}`
      }
      onClick={(e) => {
        setCreatePostModal(false);
        e.stopPropagation();
      }}
    >
      <div
        className={
          createPostModal
            ? `${style.Create__content} ${style.active}`
            : `${style.Create__content}`
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className={style.chooseImg}>
          <img src={exportImg} alt="" />
          <h3>Drag and drop or browse files</h3>
        </div>
        <div className={style.type}>
          <input
            type="text"
            placeholder="Title"
            className={style.type__input1}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
          <textarea
            type="text"
            placeholder="Type something..."
            className={style.type__input2}
            onChange={(e) => setPost({ ...post, content: e.target.value })}
          />
          <div className={style.select__block}>
            <select
              className={style.selectCategory}
              type="text"
              onChange={(e) => setPost({ ...post, category: e.target.value })}
            >
              <option value="a">a</option>
              <option value="qwerty">qwerty</option>
            </select>

            <select
              className={style.selectCategory}
              type="number"
              onChange={(e) => setPost({ ...post, blog: e.target.value })}
            >
              <option value="1">earth</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <div className={style.createBtns}>
            <button
              className={style.cancelBtn}
              onClick={() => setCreatePostModal(false)}
            >
              cancel
            </button>
            <button
              className={style.publishBtn}
              onClick={() => {
                dispatch(createPost({ postObj: post }));
                setCreatePostModal(false);
              }}
            >
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCreate;
