const express = require('express');
const router = express.Router();
const { getHeroes, addHero, deleteHero } = require('../controllers/heroes');


router
  .route('/')
  .get(getHeroes)
  .post(addHero);

router
  .route('/:id')
  .delete(deleteHero);

module.exports = router;