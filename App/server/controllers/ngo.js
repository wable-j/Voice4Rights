//controllers/ngo.js

import ngo from '../models/Ngo.js'

// Controller function to create a new NGO
export const createNgo = async (req, res) => {
  try {
    // Extract data from request body
    const { Name, Description, image, ngoId } = req.body;

    // Create a new NGO document
    const newNgo = new ngo({
      Name,
      Description,
      image,
      ngoId,
    });

    // Save the new NGO document to the database
    const savedNgo = await newNgo.save();

    // Respond with the saved NGO document
    res.status(201).json(savedNgo);
  } catch (error) {
    // Handle errors
    console.error("Error creating NGO:", error);
    res.status(500).json({ message: "Failed to create NGO" });
  }
};

export const getAllNgo = async (req, res) => {
  try {
    // Fetch all NGOs from the database
    const allNgo = await ngo.find();

    // const allNgoDetails = []
    //     allNgo.forEach(ngo => {
    //         allNgoDetails.push({ _id: ngo._id, Name: ngo.Name, Description: ngo.Description, image: ngo.image, createdOn: ngo.createdOn })
    //     })
        return res.status(200).json(allNgo);

    // Respond with the array of NGOs
    //res.json(allNgo);
  } catch (error) {
    // Handle errors
    console.error("Error fetching NGOs:", error);
    res.status(500).json({ message: "Failed to fetch NGOs" });
  }
};

export const subscribeUnsubscribeToNgo = async (req, res) => {
  try {
    const { id, userid } = req.params;
    const ngoData = await ngo.findOne({ _id: id });
    const action = req.body && req.body.action;
    switch (action) {
      case "SUBSCRIBE":
        ngoData.user = ngoData.user ? ngoData.user.push(userid) : [userid];
        break;
      case "UNSUBSCRIBE":
        if (ngoData.user) {
          const ind = ngoData.user.indexOf(userid);
          if (ind !== -1) {
            ngoData.user = ngoData.user.splice(ind, 1);
          }
        }
        break;
      default:
        console.log("No action to perform!, returning");
        return res.status(400).json({
          success: false,
          message: 'Invalid action'
        });
    }
    
    await ngo.findByIdAndUpdate(id, ngoData);
    return res.status(200).json({
      success: true,
      message: 'Subscribed to the NGO successfully!'
    });
  } catch (e) {
    console.log('Error during subsribe:' + e.message);
  }
};

// Controller function to delete an NGO by ID
export const deleteNgo = async (req, res) => {
  try {
    // Extract NGO ID from request parameters
    const { id } = req.params;

    // Find and delete the NGO by ID
    const deletedNgo = await ngo.findByIdAndDelete(id);

    // If no NGO found with the provided ID
    if (!deletedNgo) {
      return res.status(404).json({ message: "NGO not found" });
    }

    // Respond with the deleted NGO document
    res.json(deletedNgo);
  } catch (error) {
    // Handle errors
    console.error("Error deleting NGO:", error);
    res.status(500).json({ message: "Failed to delete NGO" });
  }
};
