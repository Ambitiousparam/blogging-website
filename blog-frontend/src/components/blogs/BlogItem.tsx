import { Box, Card, Typography } from '@mui/material';
import { Blogtype } from '../../types/types';
import { useNavigate } from 'react-router-dom';
import { blogStyles, randombgcolor } from '../../styles/blog-list-styles';
import { FcCalendar } from "react-icons/fc";
type Props = {
    blog: Blogtype;
}


const BlogItem = (props: Props) => {
  const navigate = useNavigate();

  const handleclick = ()=>{
    return navigate(`/blog/view/${props.blog.id}`);
     
  };
  return ( 
    <Card onClick = {handleclick} sx={blogStyles.card}>
      <Box sx={{...blogStyles.cardheader,bgcolor:randombgcolor}}>
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
