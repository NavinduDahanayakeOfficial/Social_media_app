import { response } from "express";
import User from "../models/User.js";

/*Read*/
export const getUser = async (req, res) => {
   try {
      const id = req.params.id;

      const user = await User.findById(id);

      // if(!user){
      //     res.status(404).json({ msg: "User not found." });
      // }

      const userObject = user.toObject();
      delete userObject.password;

      res.status(200).json(userObject);
   } catch (err) {
      res.status(404).json({ error: err.message });
   }
};

export const getUserFriends = async (req, res) => {
   try {
      const id = req.params.id;

      const user = await User.findById(id);

      // if(!user){
      //     res.status(404).json({ msg: "User not found." });
      // }

      const friends = await promise.all(
         user.friends.map((id) => User.findById(id))
      );

      const formattedFriends = friends.map(
         ({ _id, firstName, lastName, picturePath, location, occupation }) => {
            return {
               _id,
               firstName,
               lastName,
               picturePath,
               location,
               occupation,
            };
         }
      );

      res.status(200).json(formattedFriends);
   } catch (err) {
      res.status(404).json({ error: err.message });
   }
};

/*Update*/

//adding or removing a friend
export const addRemoveFriend = async (req, res) => {
   try {
      const { id, friendId } = req.params;

      const user = await User.findById(id);
      const friend = await User.findById(friendId);

      if (user.friends.includes(friendID)) {
         user.friends = user.friends.filter((id) => id !== friendId);
         friend.friends = friend.friends.filter((id) => id !== user.id);
      } else {
         user.friends.push(friendId);
         friend.friends.push(id);
      }

      await user.save();
      await friend.save();

      const friends = await promise.all(
         user.friends.map((id) => User.findById(id))
      );

      const formattedFriends = friends.map(
         ({ _id, firstName, lastName, picturePath, location, occupation }) => {
            return {
               _id,
               firstName,
               lastName,
               picturePath,
               location,
               occupation,
            };
         }
      );

      res.status(200).json(formattedFriends);
   } catch (err) {
      res.status(404).json({ error: err.message });
   }
};
