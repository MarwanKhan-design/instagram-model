import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  body: String,
  user: {
    type: String,
    ref: 'User'
  }
});

const post = mongoose.model("Post", postSchema);

export default post;
