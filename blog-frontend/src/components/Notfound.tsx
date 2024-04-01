import { Box, Typography } from '@mui/material';
import { blogStyles } from '../styles/blog-list-styles';

const Notfound = () => {
  return (
    <Box sx={blogStyles.pagenotfound}>
      <Typography variant="h4" fontFamily="work sans" sx={{ padding: 3 }}>
        Requested Page not found
      </Typography>
      <img src="/pagenotfound.jpg" alt="page not found" width= {"50%"} height = {"50%"} />
    </Box>
  );
};

export default Notfound;
