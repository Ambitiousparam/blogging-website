import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import { Blogtype, CommentType, UserType } from "../schema/schema";
import User from "../models/User";
import Blog from "../models/Blog";
import comment from "../models/comment";
import {Document} from "mongoose";
import {hashSync} from "bcryptjs";
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
const mutations = new GraphQLObjectType({
    name : "mutations",
    fields:{
        //user signup
        signup:{
            type:UserType,
            args:{
                name:{type:GraphQLNonNull(GraphQLString)},
                email:{type:GraphQLNonNull(GraphQLString)},
                password:{type:GraphQLNonNull(GraphQLString)},
            },
            async resolve(parents,{name,email,password}){
            let existinguser:{type:Document<any,any,any>};
            try{
            existinguser = await User.findOne({email });
            if(existinguser) return new Error("user already exists");
            const encryptedPassword = hashSync(password);
            const user = new User({name,email,password:encryptedPassword});
            return await user.save();
            }catch(err){
                return new Error("user signup failed.Try again");
            }
            }
        }

    }
    
});
export default new GraphQLSchema({query:Rootquery});