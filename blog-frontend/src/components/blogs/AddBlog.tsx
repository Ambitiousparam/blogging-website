import React, { useRef } from 'react'
import { Box,Typography ,Button} from '@mui/material'
import { addStyles, htmlElmStyles } from '../../styles/addblog-styles'
import { ADD_BLOG } from '../graphql/mutations';
import { useMutation } from '@apollo/client';



const AddBlog = () => {

  const [addBlog] = useMutation(ADD_BLOG);

  const handleSubmit= async ()=>{
    if(headingref.current &&  headingref.current.innerText.trim().length>0 &&paragraphref.current && paragraphref.current.innerText.trim().length>0){
    const title = headingref.current.innerText;
    const content =paragraphref.current.innerText;
    const date = new Date();
    const user = JSON.parse(localStorage.getItem("userData") as string).id;
    console.log(title,content,date,user);
    try{
      const res= await addBlog({
        variables:{
          title,content,date,user
        }
      
      });
      const data = await res.data;
      console.log(data);

    }catch(err:any){
      console.log(err.message);
    }
    }
  }
  const headingref= useRef<HTMLHeadingElement | null >(null);
  const paragraphref = useRef<HTMLParagraphElement | null>(null);
  return (
    <Box sx ={addStyles.container}>
        <Box sx ={addStyles.blogheader}>
          <Typography>Authored by:Param</Typography>
          <Button onClick ={handleSubmit}
          
          color ="success" variant ="contained">Publish Blog</Button>
        </Box>
          
            <Box sx ={addStyles.formcontainer}>
              <h2 ref={headingref} style={htmlElmStyles.h2} contentEditable>Title</h2>

              <p  ref ={paragraphref} style={htmlElmStyles.p} contentEditable> Write Content</p>
            </Box>
        
    </Box>
  );
};

export default AddBlog;