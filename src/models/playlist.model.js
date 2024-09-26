import mongoose, { Schema } from "mongoose";

const playlistSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,            
        },
        video: [
            {
                type: Schema.types.ObjectId,
                ref: "Video"
            }
        ],
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true
    }
)

export const Playlist = mongoose.model("Playlist", playlistSchema)