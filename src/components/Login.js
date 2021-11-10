import * as React from 'react';
/* import Avatar from '@mui/material/Avatar'; */
import Button from '@mui/material/Button';
/* import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles'; */
  
  function Login({onChangeEmail, onChangePass, onSubmit}) {
   
    return (
      <form onSubmit={(e) => onSubmit(e)}>

      <h1>
        <Button type="submit" style={{ justifyContent: 'center', alignSelf: "stretch", display: 'flex' }}   >Register</Button>
      </h1>
      <h2>
        <Button type="submit" style={{ justifyContent: 'center', alignSelf: "stretch", display: 'flex' }}   >volver</Button>
      </h2>
      <input
        type="text"
        className="form-control"
        placeholder="email"
        onChange={onChangeEmail}
      />
      <input
        type="text"
        className="form-control"
        placeholder="pasword"
        onChange={onChangePass}
      />

    </form>

    );
  }

  export default Login