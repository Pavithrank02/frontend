import React, { useState } from 'react'
import { Button, Grid, TextField, Typography } from '@mui/material'
import styles from './Signin.module.css'

const Signin = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const data = { 
    username: "test",
    password: "123456"
  }
  const handleValidation = () => {
    if(!username || !password){
      alert("field shouldnt be empty")
    }
    if(username === data.username && password === data.password){
      console.log('success fv')
      
    }else{
      alert("username or password doesnt match")
      
    }
  }

  return (
    <Grid container spacing={2} className={styles.grid}>
      <Typography variant='h3' >
        Sign In
      </Typography>
      <TextField
        className={styles.field}
        required
        id="outlined-required"
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        className={styles.field}
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}

      />
      <Button variant="contained" onClick={handleValidation}>SignIn</Button>
    </Grid>
  )
}

export default Signin