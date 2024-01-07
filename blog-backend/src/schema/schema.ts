import { GraphQLID, GraphQLObjectType, GraphQLString,GraphQLNonNull, GraphQLList } from "graphql";
import Blog from "../models/Blog";
import User from "../models/User";
import Comment from "../models/comment";
import comment from "../models/comment";

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
                return await Blog.find({user:parent.id});
            }
        },
        comments:{
            type:GraphQLList(CommentType),
            async resolve(parent){
                return await Comment.find({user:parent.id})
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
        user:{
            type:UserType,
            async resolve(parent){
                return await User.findById(parent.user);
            }
        },
        comment:{
            type:GraphQLList(CommentType),
            async resolve(parent){
                return Comment.find({blog:parent.id})

            }
        }
    })
})
export const CommentType = new GraphQLObjectType({
    name:"CommentType",
    fields:({
        id:{type:GraphQLNonNull(GraphQLID)},
        text:{type:GraphQLNonNull(GraphQLString)},
        user:{
            type:UserType,
            async resolve(parent){
                return await User.findById(parent.user)
            },

        },
        blog:{
            type:Blogtype,
            async resolve(parent){
                return await Blog.findById(parent.blog);
            }
        }
    })
})