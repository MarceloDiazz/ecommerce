import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { fakeData } from "../../fakeData";

export default function SelectProvincias(onChangeHandler) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Provincias}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField 
        {...params} 
        label="Actividades"
        onChange={onChangeHandler}/>}
    />
  );
}
const Provincias = [
    { label: 'paseo en barco' },
    { label: 'escalada' },
    { label: 'ajedrez' },
    { label: 'pesca'},
    { label: 'paracaidismo ' },]