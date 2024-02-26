import React, { useRef } from 'react'
import { Box,Typography ,Button} from '@mui/material'
import { addStyles, htmlElmStyles } from '../../styles/addblog-styles'


const AddBlog = () => {
  const headingref= useRef<HTMLHeadingElement | null >(null);
  const paragraphref = useRef<HTMLParagraphElement | null>(null);
  return (
    <Box sx ={addStyles.container}>
        <Box sx ={addStyles.blogheader}>
          <Typography>Authored by:Param</Typography>
          <Button onClick ={()=>{
             
          }}color ="success" variant ="contained">Publish Blog</Button>
        </Box>
          
            <Box sx ={addStyles.formcontainer}>
              <h2  ref = {headingref}style={htmlElmStyles.h2} contentEditable >Title</h2>
              <p  ref ={paragraphref} style={htmlElmStyles.p} contentEditable> Write Content</p>
            </Box>
        
    </Box>
  );
};

export default AddBlog;