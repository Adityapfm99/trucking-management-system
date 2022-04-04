import React, { useState } from 'react'
import { Formik } from 'formik'
import {
    Grid,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
    Card,
    Divider,
    TextField,
    MenuItem,

    Button,
} from '@material-ui/core'
// import ContactPersonForm from './ContactPersonForm'
import { Breadcrumb } from 'app/components'

const DriverFormAdd = () => {
    const [tabIndex, setTabIndex] = useState(0)

    const handleSubmit = async (values, { isSubmitting }) => {
        console.log(values)
    }

    const handleTabChange = (e, value) => {
        setTabIndex(value)
    }

    return (
        <div className="m-sm-30">
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Pages', path: '/pages' },
                        { name: 'New Vehicle' },
                    ]}
                />
            </div>

            <Card elevation={3}>
                <div className="flex p-4">
                    <h4 className="m-0">Add a New Driver</h4>
                </div>
                <Divider className="mb-2" />

                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    enableReinitialize={true}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        setSubmitting,
                        setFieldValue,
                    }) => (
                        <form className="p-4" onSubmit={handleSubmit}>
                            <Grid container spacing={3} alignItems="center">
                            <Grid item md={2} sm={4} xs={12}>
                                    Driver Name
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <div className="flex flex-wrap m--2">
                                        <TextField
                                            className="m-2 min-w-188"
                                            label="Driver Name"
                                            name="driverName"
                                            size="small"
                                            variant="outlined"
                                            value={values.driverName || ''}
                                            onChange={handleChange}
                                        >
                                        </TextField>
                                    </div>
                                </Grid>
                                <Grid item md={2} sm={4} xs={12}>
                                    Driver NIK
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <div className="flex flex-wrap m--2">
                                        <TextField
                                            className="m-2 min-w-188"
                                            label="Driver NIK"
                                            name="driverNik"
                                            size="small"
                                            variant="outlined"
                                            value={values.driverNik || ''}
                                            onChange={handleChange}
                                        >
                                        </TextField>
                                    </div>
                                </Grid>
                                <Grid item md={2} sm={4} xs={12}>
                                    Driver Phone
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <div className="flex flex-wrap m--2">
                                        <TextField
                                            className="m-2 min-w-188"
                                            label="Driver Phone"
                                            name="driverPhone"
                                            size="small"
                                            variant="outlined"
                                            value={values.driverPhone || ''}
                                            onChange={handleChange}
                                        >
                                        </TextField>
                                    </div>
                                </Grid>
                            <Grid item md={2} sm={4} xs={12}>
                                    Vehicle
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <div className="flex flex-wrap m--2">
                                        <TextField
                                            className="m-2 min-w-188"
                                            label="Vehicle Brand"
                                            name="vehicleBrand"
                                            size="small"
                                            variant="outlined"
                                            select
                                            value={values.vehicle || ''}
                                            onChange={handleChange}

                                        >
                                            {vehicle.map((item, ind) => (
                                                <MenuItem
                                                    value={item}
                                                    key={item}
                                                >
                                                    {item}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                       
                                    </div>
                                </Grid>

                                <Grid item md={2} sm={4} xs={12}>
                                    PIC
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <div className="flex flex-wrap m--2">
                                        <TextField
                                            className="m-2 min-w-188"
                                            label="PIC"
                                            name="pic"
                                            size="small"
                                            variant="outlined"
                                            value={values.pic || ''}
                                            onChange={handleChange}

                                        >
                                   
                                        </TextField>
                                       
                                    </div>
                                </Grid>
                                <Grid item md={2} sm={4} xs={12}>
                                    PIC Phone
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <div className="flex flex-wrap m--2">
                                        <TextField
                                            className="m-2 min-w-188"
                                            label="PIC Phone"
                                            name="picPhone"
                                            size="small"
                                            variant="outlined"
                                            value={values.picPhone || ''}
                                            onChange={handleChange}

                                        >
                                   
                                        </TextField>
                                       
                                    </div>
                                </Grid>
                                <Grid item md={2} sm={4} xs={12}>
                                    Status
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <FormControl component="fieldset">
                                        <RadioGroup
                                            row
                                            name="Status"
                                            value={values.status}
                                            onChange={handleChange}
                                        >
                                            <FormControlLabel
                                                className="h-20 mr-6"
                                                label="Active"
                                                value="active"
                                                control={
                                                    <Radio
                                                        size="small"
                                                        color="secondary"
                                                    />
                                                }
                                            />
                                            <FormControlLabel
                                                className="h-20"
                                                label="Inactive"
                                                value="inactive"
                                                control={
                                                    <Radio
                                                        size="small"
                                                        color="secondary"
                                                    />
                                                }
                                            />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
            
                            </Grid>
                            
                            <div className="mt-6">
                                <Button
                                    color="primary"
                                    variant="contained"
                                    type="submit"
                                >
                                    Save
                                </Button>
                            </div>
                        </form>
                    )}
                </Formik>
            </Card>
        </div>
    )
}

const vehicle = ['MITUSBUSHI CANTER, B 7031 QWE', 'MITUSBUSHI CANTER, B 7332 TEH', 'MITUSBUSHI FUSO, B 7988 ABC', 'ISUZU GIGA 4X2']

const initialValues = {
    customerType: '',
}

export default DriverFormAdd
