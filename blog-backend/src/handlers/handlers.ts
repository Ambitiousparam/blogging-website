import { GraphQLList, GraphQLObjectType, GraphQLSchema } from "graphql";
import { Blogtype, CommentType, UserType } from "../schema/schema";
import User from "../models/User";
import Blog from "../models/Blog";
import comment from "../models/comment";

const Rootquery = new GraphQLObjectType({
    name:"Rootquery",
    fields:{
        //query to get all users
     users:{
        type:GraphQLList(UserType),
        async resolve(){
            return await User.find();
        },
     },
     //query to get all blogs
     blogs:{
        type:GraphQLList(Blogtype),
        async resolve(){
            return await Blog.find();
        }
     },
     comments:{
        type:GraphQLList(CommentType),
        async resolve(){
            return await comment.find();
        },
    },
    },
});
export default new GraphQLSchema({query:Rootquery});