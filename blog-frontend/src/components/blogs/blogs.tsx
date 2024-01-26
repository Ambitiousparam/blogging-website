import { useQuery} from "@apollo/client"
import { GET_BLOGS } from "../graphql/queries"
import Bloglist from "./bloglist";


const Blogs = () => {
  const {loading,data,error} = useQuery(GET_BLOGS);
  if(loading) return <p>loading the data ....</p>
  if(error) return <p>ERROR....</p>

  return (
    <div> <Bloglist  blogs={data.blogs}/> </div>
  )  
}

export default Blogs;