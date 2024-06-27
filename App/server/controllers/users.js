
import mongoose from 'mongoose'
import users from '../models/auth.js'
import User from "../models/auth.js";

export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await users.find();
        const allUserDetails = []
        allUsers.forEach(user => {
            allUserDetails.push({ _id: user._id, name: user.name, about: user.about, tags: user.tags, image: user.image, joinedOn: user.joinedOn })
        })
        res.status(200).json(allUserDetails);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getUser = async (req, res) => {
  const user = await users.findOne({ _id: req.params.id});
  console.log(user);
  return res.status(200).json(user);
}

export const updateProfile = async (req, res) => {
    const { id: _id } = req.params;
    const { name, about, tags , image} = req.body;
    debugger;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send("question unavailable...");
    }
    try {
      const updatedProfile = await users.findByIdAndUpdate(
        _id,
        { $set: { name: name, about: about, tags: tags , image:image } },
        { new: true }
      );
      res.status(200).json(updatedProfile);
    } catch (error) {
      res.status(405).json({ message: error.message });
    }
  };
