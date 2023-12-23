import React from 'react'
import Input from './Input'

export default function SearchBar() {
    return <div>
            <Input 
                value=""
                placeholder="Rechercher..."
                onChange={onchange}
            />
        </div>
}
