import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    image: { type: String, required: true },
    flashcards: { type: [String], default: [] },
    skill: { type: Number, default: 50 },
    emailVerified: { type: Boolean },
  },
  { collection: "user", timestamps: true },
);

export const User = models.User || model("User", UserSchema);
