import { Box, Card, Typography,CardActions} from '@mui/material';
import { Blogtype } from '../../types/types';
import { AiOutlineEdit,AiOutlineDelete} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { blogStyles, randombgcolor } from '../../styles/blog-list-styles';
import { FcCalendar } from "react-icons/fc";
import {IconButton} from '@mui/material';
type Props = {
    blog: Blogtype;
    showActions?:boolean;
}


const BlogItem = (props: Props) => {

  const navigate = useNavigate();

  const handleclick = ()=>{
    return navigate(`/blog/view/${props.blog.id}`);
     
  };
  const edithandler=()=>{
    return navigate(`/blog/update/${props.blog.id}`);

  }
  const deletehandler=()=>{
    return navigate(`/blog/view/${props.blog.id}`);

  }
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
