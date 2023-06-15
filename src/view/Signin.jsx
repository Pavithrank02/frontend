import React, { useState } from 'react'
import { Button, Grid, TextField, Typography } from '@mui/material'
import styles from './Signin.module.css'

const Signin = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

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
        defaultValue=""
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
      <Button variant="contained">SignIn</Button>
    </Grid>
  )
}

export default Signin