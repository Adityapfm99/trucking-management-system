import React, { useState, useEffect } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import {
    Button,
    Icon,
    Grid,
    Radio,
    RadioGroup,
    FormControlLabel,
    Checkbox,
} from '@material-ui/core'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'

const SimpleForm = () => {
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

    const handleDateChange = (date) => {
        setState({ ...state, date })
    }

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
                                value={state?.driverName}
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />
                       <TextValidator
                                className="w-full mb-4"
                                label="nik"
                                onChange={handleChange}
                                type="text"
                                name="nik"
                                value={state?.nik}
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />

                            <TextValidator
                                className="w-full mb-4"
                                label="VehicleName"
                                onChange={handleChange}
                                type="text"
                                name="vehicleName"
                                value={state?.vehicleName}
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />

                            <TextValidator
                                className="w-full mb-4"
                                label="pic"
                                onChange={handleChange}
                                type="text"
                                name="pic"
                                value={state?.pic}
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />
                    </Grid>

       
                </Grid>
                <Button color="primary" variant="contained" type="submit">
                    <Icon>send</Icon>
                    <span className="pl-2 capitalize">Submit</span>
                </Button>
            </ValidatorForm>
        </div>
    )
}

export default SimpleForm
