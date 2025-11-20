// JavaScript Document

const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main.js');

// parts
router
  .route('/Main')
  .get(ctrlMain.partsListByPrice)
  .post(ctrlMain.partsCreate);

router
  .route('/parts/:locationid')
  .get(ctrlMain.partsReadOne)
  .put(ctrlMain.partsUpdateOne)
  .delete(ctrlMain.partsDeleteOne);
  
router.get('/', ctrlMain.home);

module.exports = router;