import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { createPostsAPi, getPostsApi } from "../apis/post";
import CreatePostForm from "../components/CreatePostForm";
import SinglePost from "../components/SinglePost";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({ title: "", body: "" });
  const [loading, setLoading] = useState(false);

  const getPosts = async () => {
    const posts = await getPostsApi();
    setPosts(posts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const createPost = async () => {
    const post = await createPostsAPi(formData);

    setFormData({ title: "", body: "" });
    setPosts([{ ...post }, ...posts]);
    setLoading(false);
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <Card>
            <Card.Header>Make Your Own Post</Card.Header>
            <Card.Body>
              <CreatePostForm
                formData={formData}
                setFormData={setFormData}
                createPost={createPost}
                loading={loading}
                setLoading={setLoading}
              />
            </Card.Body>
          </Card>
          <div>{posts && posts.map((post) => <SinglePost post={post} />)}</div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default Home;
