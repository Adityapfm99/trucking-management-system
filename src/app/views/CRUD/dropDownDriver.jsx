import React, { Fragment } from 'react'
import { TextField } from '@material-ui/core'
import { Autocomplete, createFilterOptions } from '@material-ui/lab'


const suggestions = [
    { label: 'MITSUBISHI, FUSO - B 7782 UJI' },
    { label: 'MITSUBISHI, FUSO - B 7782 RRT' },
    { label: 'MITSUBISHI, CANTER - B 7839 HUN' },
    { label: 'MITSUBISHI, CANTER - B 7101 QIP' },
    { label: 'MITSUBISHI, FUSO - B 7512 IOA' },
    { label: 'MITSUBISHI, FUSO - B 7782 HUI' },
    { label: 'MITSUBISHI, CANTER - B 7539 HFE' },
    { label: 'MITSUBISHI, FUSO - B 7329 FDN' },
    { label: 'MITSUBISHI, FUSO - B 7232 TYU' },
    { label: 'MITSUBISHI, FUSO - B 7021 ISQ' },
    { label: 'MITSUBISHI, FUSO - B 7731 HTY' },
    { label: 'MITSUBISHI, FUSO - B 7481 YTF' },
    
]

const filter = createFilterOptions()

const AutocompleteCombo = () => {
    const [value, setValue] = React.useState(null)

    const handleChange = (event, newValue) => {
        if (newValue && newValue.inputValue) {
            setValue({
                label: newValue.inputValue,
            })
            return
        }
        setValue(newValue)
    }

    const filterOptions = (options, params) => {
        const filtered = filter(options, params)
        if (params.inputValue !== '') {
            filtered.push({
                inputValue: params.inputValue,
                label: `Add "${params.inputValue}"`,
            })
        }
        return filtered
    }

    return (
        <Fragment>
            <Autocomplete
                options={suggestions}
                getOptionLabel={(option) => option.label}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Vehicle"
                        // variant="outlined"
                        fullWidth
                    />
                )}
            />

            
        </Fragment>
    )
}

export default AutocompleteCombo
