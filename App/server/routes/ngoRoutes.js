//routes/ngoRoutes.js

import express from "express";
import {getAllNgo, createNgo, deleteNgo, subscribeUnsubscribeToNgo} from "../controllers/ngo.js";

const router = express.Router();

// Route to get all NGOs
router.get("/", getAllNgo);

// Route to create a new NGO
router.post("/", createNgo);

// Route to update a NGO
router.put("/:id/user/:userid", subscribeUnsubscribeToNgo);

// Route to delete an existing NGO by ID
router.delete("/:id", deleteNgo);


export default router;
