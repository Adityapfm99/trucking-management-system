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
    Tabs,
    Tab,
    Button,
} from '@material-ui/core'
import OtherDetailsForm from './OtherDetailsVehicleForm'
import VehicleDetailForm from './VehicleDetailForm'
// import ContactPersonForm from './ContactPersonForm'
import { Breadcrumb } from 'app/components'
import OtherDetailsVehicleForm from './OtherDetailsVehicleForm'

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
                        { name: 'New Item Service' },
                    ]}
                />
            </div>

            <Card elevation={3}>
                <div className="flex p-4">
                    <h4 className="m-0">Add a New Item Service</h4>
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
                                    Item Name
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <div className="flex flex-wrap m--2">
                                        <TextField
                                            className="m-2 min-w-188"
                                            label="Item Name"
                                            name="itemName"
                                            size="small"
                                            variant="outlined"
                                            select
                                            value={values.itemName || ''}
                                            onChange={handleChange}

                                        >
                                            {ItemServiceList.map((item, ind) => (
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
const ItemServiceList = [
     'Routine Service', 'Transmission Filter Replacementt','Water Pump Replacement', 'Spark Plug Replacement', 'Air Filter Replacement', 'Ball Joint Replacement', 'Battery Replacement', 'Brake Pad(s) Replacement', 'Engine Belt Inspection', 'Exhaust Manifold Replacement','Intake Manifold Gasket Replacement']


const initialValues = {
    customerType: '',
}

export default DriverFormAdd
