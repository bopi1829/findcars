import { Checkbox } from '@mui/material'
import React from 'react'

export default function Checkboxes({onChange, checked, label}) {
	return <div>
		<div>
			<Checkbox 
				checked={checked}
				onChange={e => onChange(e.target.checked)}
			/>
			<label htmlFor="">0 à 3 999 €</label>
		</div>
		<div>
			<Checkbox 
				checked={checked}
				onChange={e => onChange(e.target.checked)}
			/>
			<label htmlFor="">4 000 à 5 999 €</label>
		</div>
		<div>
			<Checkbox 
				checked={checked}
				onChange={e => onChange(e.target.checked)}
			/>
			<label htmlFor="">Plus de 6 000 €</label>
		</div>
	</div>
}
