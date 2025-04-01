import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const[form,setForm]=useState({
    email:'',
    password:''
  })
  const navigate=useNavigate();
  function capValue(){
    axios.post('http://localhost:3000/user/login',form).then((res)=>{
      alert(res.data.message);
      if(res.data.token){
        sessionStorage.setItem('token',res.data.token)
        navigate('/blogs');
      }
      
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <Box sx={{ flexGrow: 1 }} >
    <Grid container spacing={2} style={{marginTop:'15%',marginLeft:'25%', width:'50%'}}>
    <Grid size={12}>
        <Typography  variant='h3' style={{color:'purple'}}> BlogApp Login</Typography>
      </Grid>
      <Grid size={12} style={{marginTop:'2%'}}>
        <TextField  variant='outlined' name='email 'label='Email'   onChange={(e)=>{
          setForm({...form,email:e.target.value})
        }} ></TextField>
      </Grid>
      <Grid size={12}>
        <TextField  variant='outlined'  type='password' label='Password'  onChange={(e)=>{
          setForm({...form,password:e.target.value})
        }} ></TextField>
      </Grid>
      <Grid size={6}>
        <Button  variant='contained' color='secondary' style={{marginLeft:'85%'}} onClick={capValue} >Login</Button>
        </Grid>
    </Grid>
    <Grid size={12} style={{marginTop:'2%'}}>
        <Link to={'/signup'}><Typography color='primary' >New User? Please Click here</Typography></Link>
        </Grid>
    </Box>
  )
}

export default Login
