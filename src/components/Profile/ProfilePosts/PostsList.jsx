import React, { useEffect } from "react";
import { getProfilePosts } from "../../../store/posts/PostsActions";
import { useDispatch, useSelector } from "react-redux";
import style from "./styles/Posts.module.css";
import PostItem from "./PostItem";

const PostsList = () => {
  const { profilePosts, loading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfilePosts());
  }, []);
  console.log(profilePosts);

  return (
    <div className={style.wrapper__list}>
      {loading ? (
        <p>Loading...</p>
      ) : profilePosts.length > 0 ? (
        <div className={style.posts_carts}>
          {profilePosts.map((post) => (
            <PostItem post={post} key={post.id} />
          ))}
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default PostsList;
