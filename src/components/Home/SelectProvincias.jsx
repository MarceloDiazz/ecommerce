import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { fakeData } from "../../fakeData";

export default function SelectProvincias() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Provincias}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Provincia" />}
    />
  );
}
const Provincias = [
    { label: 'Cordoba' },
    { label: 'Buenos Aires' },
    { label: 'Bariloche' },
    { label: 'San Juan'},
    { label: 'Salta' },
    { label: "Chubut" },
    { label: 'Mar Del Plata'},
    {
      label: 'Jujuy',
      
    }]