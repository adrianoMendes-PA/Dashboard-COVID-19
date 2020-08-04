import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'

import styles from './seletor.module.css'

import { buscaPaises } from '../../api'

const Seletor_Pais = ({ handleCountryChange }) => {
    const [buscadaPaises, setBuscadaPaises] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setBuscadaPaises(await buscaPaises())
        }
        fetchAPI()
    }, [setBuscadaPaises])

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)} >
                <option value="">Global</option>
                {buscadaPaises.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default Seletor_Pais