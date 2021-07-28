const express = require('express');
const router = express.Router();
const { getHeroes } = require('../controllers/heroes');


router
  .route('/')
  .get(getHeroes);

module.exports = router;