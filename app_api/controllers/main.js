// JavaScript Document
const mongoose = require('mongoose');
const Parts = require('../models/parts');

const home = (req, res) => {
  res.send('Welcome to the DIYTechSolutions API');
};

const partsCreate = async function (req, res) {
  try {
    const part = await Parts.create({
      _partName: req.body._partName,
      _partType: req.body._partType,
      _description: req.body._description,
      _price: req.body._price,
      _quantity: req.body._quantity
    });
    res
      .status(201)
      .json(part);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error creating part", error: err.message });
  }
};
 
const partsListByPrice = async function (req, res) {
  try {
    const parts = await Parts.find().sort({ _price: 1 }).lean();
    res
      .status(200)
      .json(parts);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error listing parts", error: err.message });
  }
};
 
const partsReadOne = async function (req, res) {
  if (!req.params.locationid) {
    res
      .status(404)
      .json({ "message": "No partid in request" });
    return;
  }
  try {
    const part = await Parts.findById(req.params.locationid);
    if (!part) {
      res
        .status(404)
        .json({ "message": "Part not found" });
      return;
    }
    res
      .status(200)
      .json(part);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error retrieving part", error: err.message });
  }
};
 
const partsUpdateOne = async function (req, res) {
  if (!req.params.locationid) {
    res
      .status(404)
      .json({ "message": "Not found, partid is required" });
    return;
  }
  try {
    const part = await Parts.findById(req.params.locationid);
    if (!part) {
      res
        .status(404)
        .json({ "message": "Part not found" });
      return;
    }
    part._partName = req.body._partName;
    part._partType = req.body._partType;
    part._description = req.body._description;
    part._price = req.body._price;
    part._quantity = req.body._quantity;
    
    const updatedPart = await part.save();
    res
      .status(200)
      .json(updatedPart);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error updating part", error: err.message });
  }
};
 
const partsDeleteOne = async function (req, res) {
  const partid = req.params.locationid;
  if (!partid) {
    res
      .status(404)
      .json({ "message": "No partid" });
    return;
  }
  try {
    await Parts.findByIdAndRemove(partid);
    res
      .status(204)
      .json(null);
  } catch (err) {
    res
      .status(404)
      .json({ message: "Error deleting part", error: err.message });
  }
};

module.exports = {
  home,
  partsListByPrice,
  partsCreate,
  partsReadOne,
  partsUpdateOne,
  partsDeleteOne
};
