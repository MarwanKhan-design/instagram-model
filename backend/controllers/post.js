import _ from "lodash";
import Post from "../models/post.js";

export const createPost = async (req, res) => {
  let post = await new Post({
    ..._.pick(req.body, ["title", "body"]),
    user: req.user._id,
  }).populate("user");

  post.save();
  res.json({
    ..._.pick(post, ["_id", "title", "body"]),
    user: _.pick(post.user, ["name", "email"]),
  });
};

export const getPosts = async (req, res) => {
  const posts = await Post.find()
    .populate("user")
    .select("-password")
    .sort({ _id: -1 });
  res.json(posts);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  const post = await Post.findById(id);
  if (post.user === req.user._id) {
    const post = await Post.findByIdAndRemove(id);
  } else {
    return res.send("You are Not Authorized");
  }
  if (!post) return res.send("The post with the given ID is Already Deleted");

  res.send("Post Deleted");
};
