import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosInterceptor';

const AddBlog = () => {
    const[form,setForm]=useState({
      blogName:'',
      blogDescription:'',
      blogImage:''
    })
    const location=useLocation();
    useEffect(()=>{
      if(location.state!=null){
        setForm({...form,blogName:location.state.val.blogName,
          blogDescription:location.state.val.blogDescription,
          blogImage:location.state.val.blogImage

        })
      }else{
          setForm({...form,blogName:'',
            blogDescription:'',
            blogImage:''

          })
      }
    },[])

    const navigate=useNavigate();
  // function subVal(){
  //   axios.post('http://localhost:3000/blog/add',form).then((res)=>{
  //     alert(res.data)
  //     navigate('/blogs');
  //   }).catch((err)=>{
  //     console.log(err);
  //   })
  // }
  function addvalue(){
    if (location.state!=null) {
      axiosInstance.put('http://localhost:3000/blog/update/'+location.state.val._id,form).then((res)=>{
        alert('Updated Successfully')
        navigate('/blogs');

      }).catch((error)=>{
        console.log(error);
      })
    }
    else{
      axiosInstance.post('http://localhost:3000/blog/add',form).then((res)=>{
        alert('Added Successfully')
        navigate('/blogs');
      }).catch((error)=>{
        console.log(error);
      })
    }
  }
  return (
    <Box sx={{ flexGrow: 1 }} >
    <Grid container spacing={2} style={{marginTop:'5%',marginLeft:'25%', width:'50%'}}>
    <Grid size={12}>
        <Typography  variant='h4' style={{color:'purple'}}>  Add your blog </Typography>
      </Grid>
      <Grid size={12} style={{marginTop:'2%'}}>
        <TextField  variant='outlined' name='blogName' label='Blog Name' value={form.blogName}onChange={(e)=>{
          setForm({...form,blogName:e.target.value})
        }}></TextField>
      </Grid>
      <Grid size={12}>
        <TextField  variant='outlined' name='blogDescription' label='Blog Desciption' value={form.blogDescription} onChange={(e)=>{
          setForm({...form,blogDescription:e.target.value})
        }}></TextField>
      </Grid>
      <Grid size={12}>
        <TextField  variant='outlined' name='blogImage' label='Blog Image' value={form.blogImage} onChange={(e)=>{
          setForm({...form,blogImage:e.target.value})
        }}></TextField>
      </Grid>
      <Grid size={6}>
        <Button  variant='contained' color='secondary' onClick={addvalue} style={{marginLeft:'85%'}} >Submit</Button>
        </Grid>
    </Grid>
    </Box>
  )
}

export default AddBlog
