import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
   {
      firstName: {
         type: String,
         required: true,
         min: 2,
         max: 50,
      },
      lastName: {
         type: String,
         required: true,
         min: 2,
         max: 50,
      },
      email: {
         type: String,
         required: true,
         unique: true,
         max: 50,
      },
      password: {
         type: String,
         required: true,
      },
      picturePath: {
         type: String,
         default: "",
      },
      friends: {
         type: Array,
         default: [],
      },
      location: String,
      occupation: String,
      viewedProfile: Number,
      impressions: Number,
   },
   { timestamps: true }
);

userSchema.methods.serializeWithoutPassword = function () {
   const userObject = this.toObject();
   delete userObject.password;
   return userObject;
};

//to hash password before saving to DB,
//calls a middleware function before the save method is executed on a user object.
userSchema.pre("save", async function (next) {
   //ensure that the password is only hashed when it's being created or modified, and not on every save operation
   if (!this.isModified("password")) {
      return next();
   }

   const salt = bcrypt.genSaltSync(10);
   const hashedPassword = bcrypt.hashSync(this.password, salt);

   this.password = hashedPassword;
   next();
});

const User = mongoose.model("User", userSchema);

export default User;
