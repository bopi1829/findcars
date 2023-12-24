import React from 'react'
import Input from './Input'
import Checkboxes from './Checkboxes'

export default function SearchBar() {
    return <div>
            <Input 
                value=""
                placeholder="Rechercher..."
                onChange={() => null}
            />
            <Checkboxes
                checked={false}
                onChange={() => null}
            />
        </div>
}
