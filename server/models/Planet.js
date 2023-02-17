import { Schema } from "mongoose";

const ObjectId = Schema.Types.ObjectId

export const PlanetSchema = new Schema(
  {
    name: {type: String, required: true, unique: true},
    biome: {type: String, required: true, minLength: 3, maxLength: 50},
    atmosphere: {type: Boolean, required: true, default: false},
    galaxyId: { type: ObjectId, ref: 'Galaxy', required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

PlanetSchema.virtual('galaxy', {
  ref: 'Galaxy',
  justOne: true,
  localField: 'galaxyId',
  foreignField: "_id"
})