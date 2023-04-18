const router = require("express").Router();
// const bcrypt = require("bcrypt");
const User = require("../models/User");
// const jwt = require("jsonwebtoken");
// const { isAuthenticated } = require("../middleware/jwt");

router.post("/signupandsave", (req, res, next) => {
  const { username, location, compositions } = req.body;

  if (username === "" ) {
    res
      .status(400)
      .json({ message: "provide email, password and username ser" });
    return;
  }

  // const emailValid = email.includes("@");
  // if (!emailValid) {
  //   res.status(400).json({ message: "provide a valid email" });
  //   return;
  // }

  // if (password.length < 7) {
  //   res
  //     .status(400)
  //     .json({ message: "password requires at least 7 charachters ser" });
  //   return;
  // }

  // User.findOne({ email }).then((foundUser) => {
  //   if (foundUser) {
  //     res
  //       .status(400)
  //       .json({ message: "have u been here already? email already exists" });
  //     return;
  //   }

    // const salt = bcrypt.genSaltSync();
    // const hashedPassword = bcrypt.hashSync(password, salt);

    console.log(req.body);
    return User.create({
      // email,
      // password: hashedPassword,
      username,
      location,
      compositions,
    })
      .then((createdUser) => {
        const { username, _id, location, compositions } = createdUser;
        const user = {  username, _id, location, compositions };
        res.status(201).json({ user: user });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ message: "internal server error" });
      });
  });


router.post("/signup", (req, res, next) => {
  const { username, location, compositions } = req.body;

  if (username === "" ) {
    res
      .status(400)
      .json({ message: "provide email and username ser" });
    return;
  }

  // const emailValid = email.includes("@");
  // if (!emailValid) {
  //   res.status(400).json({ message: "provide a valid email" });
  //   return;
  // }

  // if (password.length < 7) {
  //   res
  //     .status(400)
  //     .json({ message: "password requires at least 7 charachters ser" });
  //   return;
  // }

  // User.findOne({ email }).then((foundUser) => {
  //   if (foundUser) {
  //     res
  //       .status(400)
  //       .json({ message: "have u been here already? email already exists" });
  //     return;
  //   }

    // const salt = bcrypt.genSaltSync();
    // const hashedPassword = bcrypt.hashSync(password, salt);

    console.log(req.body);
    return User.create({
      // email,
      // password: hashedPassword,
      username,
      location,
      compositions,
    })
      .then((createdUser) => {
        const { username, _id, location, compositions } = createdUser;
        const user = { username, _id, location, compositions };
        res.status(201).json({ user: user });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ message: "internal server error" });
      });
  });


// router.post("/login", (req, res, next) => {
//   const { email, password, compositions } = req.body;
//   if (email === "" || password === "") {
//     res.status(400).json({ message: "provide email and password" });
//     return;
//   }

//   console.log({ compositions });

//   User.findOne({ email })
//     .then((foundUser) => {
//       if (!foundUser) {
//         res.status(400).json({ message: "user not found" });
//         return;
//       }

//       User.findByIdAndUpdate(
//         foundUser._id,
//         {
//           $push: {
//             compositions,
//           },
//         },
//         function (err, result) {
//           if (err) {
//             res.send(err);
//           } 
//         }
//       );

//       const passwordCorrect = bcrypt.compareSync(password, foundUser.password);
//       if (passwordCorrect) {
//         const { _id, email, name } = foundUser;
//         const payload = { _id, email, name };
//         const authToken = jwt.sign(payload, process.env.JWT_SECRET, {
//           algorithm: "HS256",
//           expiresIn: "12h",
//         });
//         console.log(foundUser._id);

//         res.status(200).json({ authToken });
//       } else {
//         res.status(401).json({ message: "unable to authenticate" });
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({ message: "internal server error" });
//     });
// });

// router.get("/verify", isAuthenticated, (req, res, next) => {
//   console.log("request payload is:", req.payload);
//   res.status(200).json(req.payload);
// });

module.exports = router;
