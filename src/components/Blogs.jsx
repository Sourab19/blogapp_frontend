import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosInterceptor';

const Blogs = () => {
    // const data=[{blogname:'FoodBlog',blogimg:'',blogdesc:'Food Blog'},{blogname:'TravelBlog',blogimg:'',blogdesc:'Travel Blog'},{blogname:'MovieBlog',blogimg:'',blogdesc:'Movie Blog'}]
 const [data,setData] =useState([]);
 const navigate =useNavigate();
 useEffect(()=>{
  axiosInstance.get("http://localhost:3000/blog").then((res)=>{
    setData(res.data);
  }).catch((err)=>{
    console.log(err);
  })
 },[])

 function update_val(val){
   navigate('/addblog',{state:{val}});
 }


    return (
    <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={2} style={{marginTop:'3%'}}>
        {data.map((item)=>(
        <Grid size={4}>
        
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
      image={item.blogImage}
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {item.blogName}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
      {item.blogDescription}
      </Typography>
      <br /><br />
      <Button  variant='contained' color='warning' onClick={()=>{
        update_val(item);
      }} >Update</Button>
      <Button  variant='contained' color='error' style={{marginLeft:'10%'}} >Delete</Button>
      

    </CardContent>
    
  </Card>
  </Grid>
  ))}
  </Grid>
  </Box>
  )
}

export default Blogs
