import { GraphQLID, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLSchema, GraphQLString, graphql } from "graphql";
import { Blogtype, CommentType, UserType } from "../schema/schema";
import User from "../models/User";
import Blog from "../models/Blog";
import comment from "../models/comment";
import {Document, startSession} from "mongoose";
import {hashSync,compareSync} from "bcryptjs";  



type DocumentType = Document<any,any,any>


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
        },
        login:{
            type:UserType,
            args:{
                email:{type:GraphQLNonNull(GraphQLString)},
                password:{type:GraphQLNonNull(GraphQLString)}
            },
            async resolve(parents,{email,password}){
                let existingUser:Document<any,any,any>;
                try{
                    existingUser = await User.findOne({email})
                    if(!existingUser) 
                       return new Error("no User registered with this email");
                    const decryptedPassword =  compareSync(
                        password,
                        // @ts-ignore
                        existingUser?.password
                        );
                        if (!decryptedPassword) return new Error("incorrect password")
                        return existingUser;
                }catch(err){
                    return new Error(err);
                }
            }
        },
        addblog:{
            type:Blogtype,
            args:{
                title:{type:GraphQLNonNull(GraphQLString)},
                content:{type:GraphQLNonNull(GraphQLString)},
                date:{type:GraphQLNonNull(GraphQLString)},
                user:{type:GraphQLNonNull(GraphQLID)}
            },
            async resolve(parents,{title,content,date,user}){
                let blog:Document<any,any,any>
                const session = await  startSession();
                try{
                session.startTransaction({session});
                    
                blog = new Blog({title,content,date,user});
                const existingUser = await User.findById(user);
                if (!existingUser) return new Error("user not found! Exiting ")
                
                
                existingUser.blogs.push(blog);
                await existingUser.save({session});
                return await blog.save();

                
                }catch(err){
                    return new Error(err);
                }finally{
                    await session.commitTransaction();

                }
            }

        },
        updateblog:{
            type:Blogtype,
            args:{
                id:{type:GraphQLNonNull(GraphQLID)},
                title:{type:GraphQLNonNull(GraphQLString)},
                content:{type:GraphQLNonNull(GraphQLString)},
            },
            async resolve(parent,{id,title,content}){
                let existingBlog: DocumentType
                try{
                    existingBlog =await Blog.findById(id);
                    if(!existingBlog) return new Error ("blog does not exist")
                    return await Blog.findByIdAndUpdate(id,{
                    title,
                    content,
                },{new:true}
                );
                }catch(err){
                    return new Error(err);

                }
            }

        },
        deleteblog: {
            type: Blogtype,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) }
            },
            async resolve(parent, { id }) {
                let existingBlog: DocumentType;
                const session = await startSession();
                try {
                    existingBlog = await Blog.findById(id).populate("user");
                    //@ts-ignore
                    const existingUser = existingBlog?.user;
                    
                    if (!existingUser) return new Error("No user linked to this blog");
                    if (!existingBlog) return new Error("Blog not found");
        
                    await session.startTransaction();
                    
                    existingUser.blogs.pull(existingBlog);
                    await existingUser.save({ session });
        
                    const deletedBlog = await Blog.findByIdAndDelete(id, { session });
        
                    await session.commitTransaction();
                    return deletedBlog;
                } catch (err) {
                    // Handle errors during the transaction or other errors
                    return new Error(err);
                } finally {
                    await session.endSession();
                }
            }
        }
        commenttoblog:{
            type:CommentType
            args:{
                
            }
        }
        
    }  
});
export default new GraphQLSchema({query:Rootquery,mutation:mutations});