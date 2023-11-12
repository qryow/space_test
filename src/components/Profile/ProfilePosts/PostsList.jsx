import React, { useEffect } from "react";
import { getPosts } from "../../../store/posts/postsActions";
import { useDispatch, useSelector } from "react-redux";
import style from "./styles/Posts.module.css";
import PostItem from "./PostItem";

const PostsList = () => {
  const { posts, loading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);
  console.log(posts);

  return (
    <div className={style.wrapper__list}>
        {loading ? (
          <p>Loading...</p>
        ) : posts.length > 0 ? (
          <div className={style.posts_carts}>
            {posts.map((post) => (
              <PostItem post={post} />
            ))}
            </div>
        ) : (
          <p>No data available</p>
        )}
    </div>
  );
};

export default PostsList;
