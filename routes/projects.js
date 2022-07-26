const router = require("express").Router();
const User = require ("../models/User")

router.get("/", (req, res, next) => {
  User.find()
  .then(user => {
    res.status(200).json(user)
  })
});

router.post('/', (req, res, next) => {
  const {username, password, email, location, composition } = req.body
  User.create({username, password, email, location, composition })
  .then(user => {
    res.status(201).json(user)
  })
  .catch(err => next(err))
});

module.exports = router;
