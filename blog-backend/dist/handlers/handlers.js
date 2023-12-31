"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const schema_1 = require("../schema/schema");
const User_1 = __importDefault(require("../models/User"));
const Blog_1 = __importDefault(require("../models/Blog"));
const comment_1 = __importDefault(require("../models/comment"));
const bcryptjs_1 = require("bcryptjs");
const Rootquery = new graphql_1.GraphQLObjectType({
    name: "Rootquery",
    fields: {
        //query to get all users
        users: {
            type: (0, graphql_1.GraphQLList)(schema_1.UserType),
            async resolve() {
                return await User_1.default.find();
            },
        },
        //query to get all blogs
        blogs: {
            type: (0, graphql_1.GraphQLList)(schema_1.Blogtype),
            async resolve() {
                return await Blog_1.default.find();
            }
        },
        comments: {
            type: (0, graphql_1.GraphQLList)(schema_1.CommentType),
            async resolve() {
                return await comment_1.default.find();
            },
        },
    },
});
const mutations = new graphql_1.GraphQLObjectType({
    name: "mutations",
    fields: {
        //user signup
        signup: {
            type: schema_1.UserType,
            args: {
                name: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
                email: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
                password: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
            },
            async resolve(parents, { name, email, password }) {
                let existinguser;
                try {
                    existinguser = await User_1.default.findOne({ email });
                    if (existinguser)
                        return new Error("user already exists");
                    const encryptedPassword = (0, bcryptjs_1.hashSync)(password);
                    const user = new User_1.default({ name, email, password: encryptedPassword });
                    return await user.save();
                }
                catch (err) {
                    return new Error("user signup failed.Try again");
                }
            }
        },
        login: {
            type: schema_1.UserType,
            args: {
                email: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
                password: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) }
            },
            async resolve(parents, { email, password }) {
                let existingUser;
                try {
                    existingUser = await User_1.default.findOne({ email });
                    if (!existingUser)
                        return new Error("no User registered with this email");
                    const decryptedPassword = (0, bcryptjs_1.compareSync)(password, 
                    // @ts-ignore
                    existingUser?.password);
                    if (!decryptedPassword)
                        return new Error("incorrect password");
                    return existingUser;
                }
                catch (err) {
                    return new Error(err);
                }
            }
        },
        addblog: {
            type: schema_1.Blogtype,
            args: {
                title: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
                content: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
                date: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
            },
            async resolve(parents, { title, content, date }) {
                let blog;
                try {
                    blog = new Blog_1.default({ title, content, date });
                    return await blog.save();
                }
                catch (err) {
                    return new Error(err);
                }
            }
        }
    }
});
exports.default = new graphql_1.GraphQLSchema({ query: Rootquery, mutation: mutations });
//# sourceMappingURL=handlers.js.map