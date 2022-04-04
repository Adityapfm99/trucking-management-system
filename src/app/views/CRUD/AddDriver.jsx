import React, { useState, useEffect } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import {
    Button,
    Icon,
    Grid,
} from '@material-ui/core'
import { Link } from 'react-router-dom'

import 'date-fns'
import DropdownDriver from './dropDownDriver'

const AddDriver = () => {
    const [state, setState] = useState({
        date: new Date(),
    })

    useEffect(() => {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            console.log(value)

            if (value !== state.password) {
                return false
            }
            return true
        })
        return () => ValidatorForm.removeValidationRule('isPasswordMatch')
    }, [state.password])

    const handleSubmit = (event) => {
        // console.log("submitted");
        // console.log(event);
    }

    const handleChange = (event) => {
        event.persist()
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }

    // const handleDateChange = (date) => {
    //     setState({ ...state, date })
    // }

    const {
        driverName,
        nik,
        creditCard,
        mobile,
        password,
        vehicleName,
        pic,
        date,
        email,
    } = state

    return (
        <div>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                <Grid container spacing={4}>
                <Grid item sm={6} xs={12}>
                            <TextValidator
                                className="w-full mb-4"
                                label="DriverName"
                                onChange={handleChange}
                                type="text"
                                name="driverName"
                                value={state.driverName}
                            />
                       <TextValidator
                                className="w-full mb-4"
                                label="nik"
                                onChange={handleChange}
                                type="text"
                                name="nik"
                                value={state?.nik}
                            />


                            <DropdownDriver 
                        
                            />

                            <TextValidator
                                className="w-full mb-4"
                                label="pic"
                                onChange={handleChange}
                                type="text"
                                name="pic"
                                value={state?.pic}
                            />
                    </Grid>

       
                </Grid>
                <Button component={Link} to="/master-driver"  color="primary" variant="contained" type="submit">
                    <Icon>send</Icon>
                    <span className="pl-2 capitalize">Save</span>
                </Button>
            </ValidatorForm>
            
        </div>
    )
}

export default AddDriver
