import { FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import React from 'react'

export default function Checkbox({onChecked, checked, label}) {
	return <FormGroup>
		<FormControlLabel control={<Checkbox 
			checked={checked}
			label={label}
			onChange={e => onChange(e.target.checked)}
		/>} 

	/>
	</FormGroup>
}
