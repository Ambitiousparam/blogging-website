import { Box } from "@mui/material";
import { blogStyles } from "../../styles/blog-list-styles";
import { Blogtype} from "../../types/types"
import BlogItem from "./BlogItem";



type Props ={
     blogs:Blogtype[];
}
const Bloglist = (props:Props) => {
  return  <Box sx ={blogStyles.container}>
    {props.blogs.length>0 && props.blogs.map((blog:Blogtype)=>
    <BlogItem blog={blog} />)}
  </Box> 
}

export default Bloglist; 