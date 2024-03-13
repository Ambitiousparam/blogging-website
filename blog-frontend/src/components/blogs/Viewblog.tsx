import { Box, Dialog, DialogContent, LinearProgress, Typography, IconButton, TextField, Avatar } from "@mui/material";
import { blogpagestyles } from "../../styles/view-styles";
import { useQuery } from "@apollo/client";
import { GET_BLOG_BY_ID } from "../graphql/queries";
import { useParams } from "react-router-dom";
import { FaComment } from "react-icons/fa";
import { BiSend } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";

const Viewblog = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_BLOG_BY_ID, {
    variables: {
      id,
    }
  });

  if (loading) {
    return <LinearProgress />;
  }
  if (error) {
    return (
      <Dialog open={true}>
        <DialogContent>Error Fetching Blog</DialogContent>
      </Dialog>
    );
  }

  return (
    data && (
      <Box sx={blogpagestyles.container}>
        <Box sx={blogpagestyles.profileheader}>
          <Typography sx={blogpagestyles.headertext}>
            {data.blog.user.name}
          </Typography>
          <Box sx={blogpagestyles.profileheaderitems}>
            <MdOutlineMailOutline size={20 } />
            <Typography sx={blogpagestyles.headertext}>
              {data.blog.user.email}
            </Typography>
          </Box>
        </Box>
        <Typography sx={blogpagestyles.blogtitle}>{data.blog.title}</Typography>
        <Typography sx={blogpagestyles.blogcontent}>{data.blog.content}</Typography>
        <Box sx={blogpagestyles.commentbox}>
          Comments:{"   "}
          <IconButton><FaComment size={"30"} /></IconButton>
        </Box>
        <Box sx={blogpagestyles.commentinputcontainer}>
          <Typography  variant="h6" sx={{margin:2 }}>Add your Comment</Typography>
          <Box sx={blogpagestyles.commentinputlayout}>
            <TextField
              multiline
              sx={blogpagestyles.textField}
              InputProps={{
                style: {
                  width: "70%",
                  borderRadius: "20px",
                  height: "40px",
                  fontFamily: "Work Sans"
                },
                endAdornment: (
                  <IconButton>
                    <BiSend size="25" />
                  </IconButton>
                )
              }} />
          </Box>
        </Box>
        { data.blog.comments.length>0 && (
          <Box sx={blogpagestyles.comments}>
            {data.blog.comments.map((comment:any) => (
              <Box sx={blogpagestyles.commentitem} key={comment.id}>
                <Avatar sx={{ padding: 1, color: "red", bgcolor: "transparent" }}> Param</Avatar>
                <Typography sx={blogpagestyles.commenttext}> {comment.text}</Typography>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    )
  );
};

export default Viewblog;
