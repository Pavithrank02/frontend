import React, { useState } from 'react'
import { Button, Grid, TextField } from '@mui/material'

const Signin = () => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  return (
      <Grid container spacing={2} className='signin'>
      <TextField
          required
          id="outlined-required"
          label="Username"
          defaultValue=""
          onChange={(e) => setUsername(e.target.value)}
        />
         <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}

        />
          <Button variant="contained">SignIn</Button>
      </Grid>
  )
}

export default Signin