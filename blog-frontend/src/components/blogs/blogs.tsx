import React from "react";
import { useQuery} from "@apollo/client"
import { GET_BLOGS } from "../graphql/queries"

const Blogs = () => {
  const {loading,data,error} = useQuery(GET_BLOGS);
  if(loading) return <p>loading the data ....</p>
  if(error) return <p>ERROR....</p>
  console.log(data);
  return (
    <div>blogs</div>
  )  
}

export default Blogs;