//models/Ngo.js

import mongoose from "mongoose";

const NgoSchema = mongoose.Schema({
  Name: { type: String, required: true },
  Description: { type: String, required: true },
  image: { type: String, required: true },
  ngoId: { type: String },
  createdOn: { type: Date, default: Date.now },
  user: [
    {
        userId: String,
        noOfUsersJoined: { type: Number, default: 0 },
        joinedOn: { type: Date, default: Date.now },
    },
  ],
});

export default mongoose.model("ngo", NgoSchema);