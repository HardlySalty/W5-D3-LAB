import { Schema } from "mongoose";


export const GalaxySchema = new Schema(
  {
    name: {type: String, required: true, unique: true},
    stars: {type: Number, min: 1, max:99999999999999999999999999999999999999999999999999999999999, required: true, default: 50000} 
  },
  { timestamps: true, toJSON: { virtuals: true } }
)