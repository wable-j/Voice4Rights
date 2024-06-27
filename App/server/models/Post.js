import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
  Title: { type: String, required: "Post must have a title" },
  Body: { type: String, required: "Post must have a body" },
  image: { type: String, required: "Post must have an image" },
  noOfComments: { type: Number, default: 0 },
  like: { type: [String], default: [] },
  dislike: { type: [String], default: [] },
  userPosted: { type: String, required: "Post must have an author" },
  userId: { type: String },
  postOn: { type: Date, default: Date.now },
  comment: [
    {
      commentBody: String,
      userComment: String,
      userId: String,
      commentOn: { type: Date, default: Date.now },
    },
  ],
});

export default mongoose.model("post", PostSchema);
