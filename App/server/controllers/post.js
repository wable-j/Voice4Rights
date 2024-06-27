import Post from "../models/Post.js";
import mongoose from 'mongoose';

export const post = async (req, res) => {
    const postData = req.body;
    const userId = req.userId;
    const makePost = new Post({ ...postData, userId})
    try{
        await makePost.save();
        res.status(200).json("Post uploaded successfully")
    } catch (error){
        console.log(error)
        res.status(409).json("Couldn't post successfully")
    }
}

export const getAllPost = async (req, res) => {
    try{
    const postList = await Post.find();
    res.status(200).json(postList);
    } catch (error) {
    res.status(404).json({message: error.message})
}
}

export const deletePost = async (req, res) => {
    const {id: _id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('question unavailable...');
}

try {
    await Post.findByIdAndRemove(_id);
    res.status(200).json({ message: "successfully deleted.." })
  } catch (error) {
    res.status(404).json({ message: error.message })

  }
}

export const likePost = async (req, res) => {
    const { id: _id } = req.params;
    const { value } = req.body;
    const userId = req.userId;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send("post unavailable...");
    }
    try {
      const post = await Post.findById(_id);
      const upIndex = question.like.findIndex((id) => id === String(userId));
      const downIndex = question.dislike.findIndex(
        (id) => id === String(userId)
      );
      if (value === "like") {
        if (downIndex !== -1) {
          question.dislike = question.dislike.filter(
            (id) => id !== String(userId)
          );
        }
        if (upIndex === -1) {
          post.like.push(userId);
        } else {
          question.like = question.like.filter((id) => id !== String(userId));
        }
      } else if (value === "dislike") {
        if (upIndex !== -1) {
          question.like = question.like.filter((id) => id !== String(userId));
        }
        if (downIndex === -1) {
          post.dislike.push(userId);
        } else {
          post.dislike = post.dislike.filter(
            (id) => id !== String(userId)
          );
        }
      }
      await Post.findByIdAndUpdate(_id, post);
      res.status(200).json({ message: "Liked successfully..." });
    } catch (error) {
      res.status(404).json({ message: "id not found" });
    }
  };
