//@ts-nocheck
import { Box,Typography,Avatar, LinearProgress } from "@mui/material"
import { ProfileStyles } from "../../../styles/profile-styles"
import BlogItem from "../../blogs/BlogItem"
import { useQuery } from "@apollo/client"
import { GET_USER_BLOGS } from "../../graphql/queries"

const Profile = () => {
  const {loading,data,error}= useQuery(GET_USER_BLOGS,{
    variables:{
      id:JSON.parse(localStorage.getItem("userdata") as string).id,

    },
  });
  console.log(data);
  if(error){
    return <p>Error</p>
  }
  return loading ? (<LinearProgress /> ) : data && (
   <Box sx ={ProfileStyles.container}>
    <Box sx ={ProfileStyles.blogsContainer}>
      <Typography sx ={ProfileStyles.text} variant= "h3" >
        My Posts
      </Typography>
      <Box sx = {ProfileStyles.CardsContainer}>
      {data.user.blogs.map((item)=> (
      
      <BlogItem 
      showActions={true} 
        blog ={{
        title:item.title,
        content :item.content,
        date:item.date,
        id:item.id,
      }}/>
      
      ))}
      </Box>

    </Box>
    <Box sx ={ProfileStyles.profilecontainer}>
      <Box sx = {ProfileStyles.usercontainer}>
        <Avatar sx ={ProfileStyles.avatar}></Avatar>
        <Typography variant="h6" fontfamily="Work Sans">Parampreet Singh</Typography>
        <Typography variant="h6" fontfamily="Work Sans">Email:getupparam@gmail.com</Typography>
        <Typography variant="h6" fontfamily="monospace">you wrote {10} Blogs 💥💨</Typography>
      </Box>
    </Box>
   </Box>
  )
}

export default Profile