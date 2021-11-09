const { Router } = require('express');
const router = Router();
const axios = require('axios');
const { User } = require('../db');
const { v4: uuidv4 } = require('uuid');
const { Op } = require('sequelize');

router.get('/', async function (req, res, next) {
  return res.send({ message: 'Estoy en User'})
});


module.exports = router;
