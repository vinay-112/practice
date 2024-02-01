const mongoose = require("mongoose");

const YoutubeSchema = new mongoose.Schema(
  {
    influencer_id:{
      type: String,
    },
    channelId: {
      type: String,
      unique: false
    },
    access_token:{
      type: String,
      unique: false
    },
    scope:{
      type: String,
      unique: false
    },
    token_type:{
      type: String,
      unique: false
    },
    expiry_date:{
      type: String,
      unique: false
    },
    viewCount:{
      type: Number,
      default: 0,
      unique: false
    },
    likeCount:{
        type: Number,
        default: 0,
        unique: false
    },
    subscriberCount: {
      type: Number,
      default: 0,
      unique: false
    },
    commentCount: {
      type: Number,
      default: 0,
      unique: false
    },
  },
  { timestamps: true }
);

console.log("we are love penguin");

