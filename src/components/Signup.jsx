import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={2} style={{marginTop:'15%',marginLeft:'25%', width:'50%'}}>
        <Grid size={6}>
          <TextField fullWidth variant='outlined' label='Name' ></TextField>
        </Grid>
        <Grid size={6}>
        <TextField fullWidth variant='outlined' label='Email'></TextField>
        </Grid>
        <Grid size={12}>
        <TextField fullWidth variant='outlined' multiline rows={4} label='Address'></TextField>
        </Grid>
        <Grid size={6}>
        <TextField fullWidth variant='outlined' label='Phone No' ></TextField>
        </Grid>
        <Grid size={6}>
        <TextField fullWidth variant='outlined' label='Password' ></TextField>
        </Grid>
        <Grid size={6}>
        <Button  variant='contained' color='secondary' style={{marginLeft:'70%'}} >Register</Button>
        </Grid>
        <Grid size={12}>
        <Link to={'/'}><Typography color='primary' >Already registered? Click here to Login</Typography></Link>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Signup
