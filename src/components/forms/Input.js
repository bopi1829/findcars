import { TextField } from '@mui/material'
import React from 'react'

export default function Input({placeholder, onChange, value}) {
    return <TextField 
        id="outlined-search" 
        type="search" 
        value={value}
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
    />    
}
