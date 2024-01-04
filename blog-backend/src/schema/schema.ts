import { GraphQLID, GraphQLObjectType, GraphQLString,GraphQLNonNull, GraphQLList } from "graphql";
import Blog from "../models/Blog";
import User from "../models/User";

export const UserType = new GraphQLObjectType({
    name:"UserType",
    fields:()=>({
        id:{type:GraphQLNonNull(GraphQLID)},
        name:{type:GraphQLNonNull(GraphQLString)},
        email:{type:GraphQLNonNull(GraphQLString)},
        password:{type:GraphQLNonNull(GraphQLString)},
        blogs:{
            type:GraphQLList(Blogtype),
            async resolve(parent){
                return await Blog.find(user.find)
            }
        }
    }),
});
export const Blogtype = new GraphQLObjectType({
    name:"BlogType",
    fields:()=>({
        id:{type:GraphQLNonNull(GraphQLID)},
        title:{type:GraphQLNonNull(GraphQLString)},
        content:{type:GraphQLNonNull(GraphQLString)},
        date:{type:GraphQLNonNull(GraphQLString)},
    })
})
export const CommentType = new GraphQLObjectType({
    name:"CommentType",
    fields:({
        id:{type:GraphQLNonNull(GraphQLID)},
        text:{type:GraphQLNonNull(GraphQLString)},
        


    })
})