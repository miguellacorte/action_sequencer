const router = require("express").Router();
const User = require ("../models/User")

router.get("/", (req, res, next) => {
  User.find()
  .then(user => {
    res.status(200).json(user)
  })
});

router.post('/', (req, res, next) => {
  const {username, password, email, location } = req.body
  User.create({username, password, email, location })
  .then(user => {
    res.status(201).json(user)
  })
  .catch(err => next(err))
});

// router.get("/", (req, res, next) => {
//   Sequence.find()
//   .then(sequence => {
//     res.status(200).json(sequence)
//   })
// });

// router.post('/sequence', (req, res, next) => {
//   const {notes, drawingX, drawingY} = req.body
//   Sequence.create({notes, drawingX, drawingY})
//   .then(sequence => {
//     res.status(201).json(sequence)
//   })
//   .catch(err => next(err))
// });


module.exports = router;
