import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
    const[form,setForm]=useState({
      blogName:'',
      blogDescription:'',
      blogImage:''
    })
    const navigate=useNavigate();
  function subVal(){
    axios.post('http://localhost:3000/blog/add',form).then((res)=>{
      alert(res.data)
      navigate('/blogs');
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <Box sx={{ flexGrow: 1 }} >
    <Grid container spacing={2} style={{marginTop:'5%',marginLeft:'25%', width:'50%'}}>
    <Grid size={12}>
        <Typography  variant='h4' style={{color:'purple'}}>  Add your blog </Typography>
      </Grid>
      <Grid size={12} style={{marginTop:'2%'}}>
        <TextField  variant='outlined' name='blogName' label='Blog Name' onChange={(e)=>{
          setForm({...form,blogName:e.target.value})
        }}></TextField>
      </Grid>
      <Grid size={12}>
        <TextField  variant='outlined' name='blogDescription' label='Blog Desciption' onChange={(e)=>{
          setForm({...form,blogDescription:e.target.value})
        }}></TextField>
      </Grid>
      <Grid size={12}>
        <TextField  variant='outlined' name='blogImage' label='Blog Image' onChange={(e)=>{
          setForm({...form,blogImage:e.target.value})
        }}></TextField>
      </Grid>
      <Grid size={6}>
        <Button  variant='contained' color='secondary' onClick={subVal} style={{marginLeft:'85%'}} >Submit</Button>
        </Grid>
    </Grid>
    </Box>
  )
}

export default AddBlog
