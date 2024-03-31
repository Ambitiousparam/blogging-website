import { Box, Card, Typography,CardActions} from '@mui/material';
import { Blogtype } from '../../types/types';
import { AiOutlineEdit,AiOutlineDelete} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { blogStyles, randombgcolor } from '../../styles/blog-list-styles';
import { FcCalendar } from "react-icons/fc";
import {IconButton} from '@mui/material';
import { useMutation } from '@apollo/client';
import { DELETE_BLOG } from '../graphql/mutations';
type Props = {
    blog: Blogtype;
    showActions?:boolean;
}


const BlogItem = (props: Props) => {

  const navigate = useNavigate();
  const [deleteBlog]= useMutation(DELETE_BLOG);

  const handleclick = ()=>{
    return navigate(`/blog/view/${props.blog.id}`);
     
  };
  const edithandler=()=>{
    return navigate(`/blog/update/${props.blog.id}`);

  }
  const deletehandler = async () => {
  try {
    const { data } = await deleteBlog({
      variables: {
        id: props.blog.id
      }
    });

    if (data && data.deleteBlog) {
      console.log("Blog deleted successfully.");
      navigate("/profile");
    } else {
      console.log("Delete operation failed or returned undefined data.");
    }
  } catch (err) {
    console.error("Error deleting blog:", err);
  }
};

  return ( 
    <Card  sx={blogStyles.card}>
      {props.showActions && <CardActions>
     <IconButton onClick={edithandler}><AiOutlineEdit /></IconButton>
     <IconButton onClick={deletehandler}> <AiOutlineDelete /></IconButton>
      </CardActions>}
      <Box onClick = {handleclick} sx={{...blogStyles.cardheader,bgcolor:randombgcolor}}>
        <Box display={"flex"} gap={2}>
          <FcCalendar size={"29px"}/>
          <Typography>{new Date(Number(props.blog.date)).toDateString()}</Typography>
        </Box>
        <Typography variant="h4" sx={blogStyles.title}>{props.blog.title}</Typography>
      </Box>
      <Box sx={blogStyles.cardcontent}>
          <Typography sx={blogStyles.contentText}>{props.blog.content}</Typography>
      </Box>
    </Card>
  )  
}

export default BlogItem;
