import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const register = async (req, res) => {
   try {
      const {
         firstName,
         lastName,
         email,
         password,
         picturePath,
         friends,
         location,
         occupation,
      } = req.body;

      const newUser = new User({
         firstName,
         lastName,
         email,
         password,
         picturePath,
         friends,
         location,
         occupation,
         viewedProfile: Math.floor(Math.random() * 10000),
         impressions: Math.floor(Math.random() * 100),
      });

      const savedUser = await newUser.save();

      //delete savedUser.password

      res.status(201).json(savedUser);
   } catch (err) {
      res.status(500).json({ error: err.message });
   }
};

export const login = async (req, res) => {
   try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
         return res.status(404).json({ msg: "User not found." });
      }

      const passwordValid = await bcrypt.compare(password, user.password);

      if (!passwordValid) {
         return res.status(400).json({ msg: "Invalid credentials." });
      }

      const token = jwt.sign(
         {
            id: user._id,
         },
         process.env.JWT_SECRET,
         { expiresIn: "1d" }
      );

      // delete user.password;
      const userObject = user.toObject();
      delete userObject.password;

      res.status(200).json({
         token,
         userObject,
      });
   } catch (err) {
      res.status(500).json({ error: err.message });
   }
};
