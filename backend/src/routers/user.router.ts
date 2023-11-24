import { Router } from "express";
//import { sample_users } from "../data";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import { User, UserModel } from "../models/user.model";
import bcrypt from "bcryptjs";
const router = Router();

// router.get(
//   "/seed",
//   asyncHandler(async (req, res) => {
//     const usersCount = await UserModel.countDocuments();
//     if (usersCount > 0) {
//       res.send("Database is already seeded");
//       return;
//     }

//     await UserModel.create(sample_users);
//     res.send("Database seeded successfully");
//   })
// );

router.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.send(generateTokenResponse(user));
    } else {
      res.status(401).send({ message: "Invalid email or password" });
    }
  })
);

router.post(
  "/register",
  asyncHandler(async (req, res) => {
    const { name, email, password, address } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
      res.status(401).send({ message: "User already exists" });
      return;
    }
    const encryptedPassword = await bcrypt.hash(password, 10);

    const newUser: User = {
      id: "",
      name,
      email: email.toLowerCase(),
      password: encryptedPassword,
      address,
      isAdmin: false,
    };

    const dbuser = await UserModel.create(newUser);
    res.send(generateTokenResponse(dbuser));
  })
);

const generateTokenResponse = (user: User) => {
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET!,
    {
      expiresIn: "30d",
    }
  );

  return {
    id: user.id,
    email: user.email,
    name: user.name,
    address: user.address,
    isAdmin: user.isAdmin,
    token: token,
  };
};

export default router;
