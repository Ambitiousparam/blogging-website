import { Schema ,model} from "mongoose";
import comment from "./comment";
const mongoose = require("mongoose");
const blogSchema:Schema= new Schema({
     title:{
        type:String,
        required:true,

     },
     content:{
        type:String,
        required:true,
     },
     date:{
        type:Date,
        required:true,
     },
     user:{
      type:Schema.Types.ObjectId,
      ref:"User"
     },
     comments:[{
      type:Schema.Types.ObjectId,
      ref:"comment"
     }]
});
export default model("Blog",blogSchema);