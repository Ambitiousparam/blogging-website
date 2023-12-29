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
exports.default = new graphql_1.GraphQLSchema({ query: Rootquery });
//# sourceMappingURL=handlers.js.map