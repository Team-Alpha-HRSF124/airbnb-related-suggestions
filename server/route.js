const express = require('express');
const router = require('express').Router();
const db = require('../database');

// to provide some listing in the related neighbourhood
// for now we have a set number of houses with known id
// we are just going to choose 8 numbers randomly between 1 and 100

router.get('/somelistings', (req, res, next) => {
  
});








module.exports = router;