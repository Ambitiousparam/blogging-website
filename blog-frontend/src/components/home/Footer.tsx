import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { homepageStyles } from '../../styles/homepage-styles'

const Footer = () => {
  return (
    <Box sx ={homepageStyles.footercontainer}>
        <Button variant = "contained" sx ={homepageStyles.footerbtns}>View articles</Button>
        <Typography sx ={homepageStyles.footertext}> Made with &#x1F498; by Parampreet</Typography>
        <Button variant = "contained" sx ={homepageStyles.footerbtns}>Publish One</Button>



    </Box>
  )
} 

export default Footer