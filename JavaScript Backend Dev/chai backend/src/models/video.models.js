import mongoose, {Schema, model} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const videoSchema = new Schema({
    videoFile: {
        type: String,           // cloudinary
        required: [true, "Video file is required"],
    },
    thumbnail: {
        type: String,           // cloudinary
        required: [true, "Thumbnail is required"],
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,       // cloudinary dega
        required: true,
    },
    views: {
        type: String,
        default: 0,
    },
    isPublished: {
        type: Boolean,
        default: false,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },


},{timestamps: true});


videoSchema.plugin(mongooseAggregatePaginate);

export const Video = model("Video", videoSchema);