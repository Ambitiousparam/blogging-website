import React, { useEffect, useRef } from 'react'
import { Box,Typography ,Button} from '@mui/material'
import { addStyles, htmlElmStyles } from '../../styles/addblog-styles'
import { useMutation, useQuery } from '@apollo/client';
import { GET_BLOG_BY_ID } from '../graphql/queries';
import { useParams } from 'react-router-dom';
import { UPDATE_BLOG } from '../graphql/mutations';
import {toast} from "react-hot-toast";


const Updateblog = () => {
    const id  = useParams().id;
    const [updateBlog]= useMutation(UPDATE_BLOG);
    const headingref= useRef<HTMLHeadingElement | null >(null);
    const paragraphref = useRef<HTMLParagraphElement | null>(null);
    const { loading, error, data,refetch } = useQuery(GET_BLOG_BY_ID, {
        variables: {
          id,
        }
      });
 useEffect(()=>{
    if(data && headingref.current && paragraphref.current){
        console.log(data);
        headingref.current.innerHTML = data.blog.title;
        paragraphref.current.innerHTML= data.blog.content;

    }
 },[id,data]);

  const handleSubmit= async ()=>{
    if(headingref.current &&  headingref.current.innerText.trim().length>0 &&paragraphref.current && paragraphref.current.innerText.trim().length>0){
    const title = headingref.current.innerText;
    const content =paragraphref.current.innerText;
    console.log(title);
    console.log(content);
    try{
      const res = await updateBlog({
        variables:{
          id,
          title,
          content,
        },  
      });
      toast.promise(refetch(),{
        error:"unexpected error",
        success:"Blog Updated",
        loading:"Hold on",
      })

    }catch(err:any){
      console.log(err.message);
    }
    }
  };

  return  data &&(
    <Box sx ={addStyles.container}>
        <Box sx ={addStyles.blogheader}>
          <Typography>Authored by:Param</Typography>
          <Button  onClick = {handleSubmit} color ="success" variant ="contained">Publish Blog</Button>
        </Box>
          
            <Box sx ={addStyles.formcontainer}>
              <h2 ref={headingref} style={htmlElmStyles.h2} contentEditable>Title</h2>

              <p  ref ={paragraphref} style={htmlElmStyles.p} contentEditable> Write Content</p>
            </Box>
        
    </Box>
  );
};

export default Updateblog;