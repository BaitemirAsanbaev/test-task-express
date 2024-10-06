const express = require("express");
const router = express.Router();
const services = require("./services")
// Define your route
router.get('/all', services.getAllUsers);
router.post('/create', services.createUser);

module.exports = router;
