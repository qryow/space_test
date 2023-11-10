import React, { useEffect } from "react";
import { getPosts } from "../../../store/posts/postsActions";
import { useDispatch, useSelector } from "react-redux";
import style from "./styles/Posts.module.css";
import PostItem from "./PostItem";

const PostsList = () => {
//   const { posts, loading } = useSelector((state) => state.posts);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getPosts());
//   }, []);

  return (
    <div>
        {/* {loading ? (
          <p>Loading...</p>
        ) : posts.length > 0 ? ( */}
        <div className={style.wrapper__list}></div>
          <div className={style.post_carts}>
            {/* {posts.map((posts) => ( */}
              <PostItem />
            {/* ))} */}
          </div>
        {/* ) : (
          <p>No data available</p>
        )} */}
    </div>
  );
};

export default PostsList;
