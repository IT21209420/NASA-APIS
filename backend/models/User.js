import mongoose from "mongoose";

// Defining schema for users
const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      max: 50,
      unique: true,
      required: [true, "email is required"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
  },
  { timestamps: true }
);

// Creating the model from schema
const User = mongoose.model("User", UserSchema);

export default User;
