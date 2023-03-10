import React from "react";

const SinglePost = ({ post }) => {
  console.log(post);
  return (
    <div class="card mt-3">
      <h5 class="card-header">{post.user.name}</h5>
      <div class="card-body">
        <h5 class="card-title">{post.title}</h5>
        <p class="card-text">{post.body}</p>
        {/* <a href="#" class="btn btn-primary">
          Go somewhere
        </a> */}
      </div>
    </div>
  );
};

export default SinglePost;
