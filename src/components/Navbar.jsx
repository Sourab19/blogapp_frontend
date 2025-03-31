import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar style={{backgroundColor:'purple' }}>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,textAlign:'left'}}>
            BlogApp
          </Typography>
          <Link to={'/blogs'} style={{color:'white'}}><Button color="inherit">Blogs</Button></Link>
          <Link to={'/addblog'} style={{color:'white'}}><Button color="inherit">AddBlog</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
