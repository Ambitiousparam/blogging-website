import { Box, Dialog, DialogContent, LinearProgress, Typography, IconButton, TextField, Avatar } from "@mui/material";
import { blogpagestyles } from "../../styles/view-styles";
import { useMutation, useQuery } from "@apollo/client";
import { GET_BLOG_BY_ID} from "../graphql/queries";
import { useParams } from "react-router-dom";
import { FaComment } from "react-icons/fa";
import { BiSend } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";
import { useForm} from "react-hook-form"; 
import { ADD_COMMENT,DELETE_COMMENT } from "../graphql/mutations";
import { MdDeleteOutline } from "react-icons/md";
import {toast} from "react-hot-toast";



const Viewblog = () => {
  const user:string = JSON.parse(localStorage.getItem("userdata")as string).id;

  const getInitials = (name: string) => {
    const nameParts = name.split(" ");
    let initials = "";

    for (let i = 0; i < nameParts.length; i++) {
      initials += nameParts[i].charAt(0);
    }

    return initials.toUpperCase();
  };

  const {register,handleSubmit} = useForm();

  const { id } = useParams();
  const [addcommenttoblog] = useMutation(ADD_COMMENT);
  const [deleteComment] = useMutation(DELETE_COMMENT);
  const { loading, error, data,refetch } = useQuery(GET_BLOG_BY_ID, {
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
  const  commenthandler= async (data:any)=>{ 
    const date = new Date();
    const text = data.comment; 
    try{
       await addcommenttoblog({
      variables:{
        text,
        date,
        blog:id,
        user,
      },
    
    });
    toast.promise(refetch(),{
      error:"unexpected error",
      success:"Comment added",
      loading:"Hold on",
    })

    }catch(err:any){
    console.log(err.message);
    }
  };
 
  const handleCommentDelete = async(id:string)=>{
  try{
    await deleteComment({variables:{
      id,
      
    },
  });
  toast.promise(refetch(),{
    error:"unexpected error",
    success:"Comment deleted ",
    loading:"Hold on",
  });
  }catch(err:any){
    console.log(err.message);
  }
  }; 


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
            {...register("comment")}
              type="textarea"
              sx={blogpagestyles.textField}
              InputProps={{
                style: {
                  width: "70%",
                  borderRadius: "20px",
                  height: "40px",
                  fontFamily: "Work Sans"
                },
                endAdornment: (
                  <IconButton onClick={handleSubmit(commenthandler)}>
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
           <Avatar sx={{ width: 32, height: 32, bgcolor: "transparent", color: "red",alignContent:"center" }}>
             {getInitials(comment.user.name)}
           </Avatar>

        <Typography  sx={blogpagestyles.commenttext}> {comment.text}</Typography>
        {user===comment.user.id && <IconButton onClick={async()=> await handleCommentDelete(comment.id)} sx = {{ml:"auto"}}color ="error"><MdDeleteOutline /></IconButton> }
      </Box>
            ))}{"  "}
          </Box> 
        )}
      </Box>
    )
  );
};

export default Viewblog;
