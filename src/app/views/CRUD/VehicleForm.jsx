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

const VehicleForm = () => {
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
                    <h4 className="m-0">Add a New Vehicle</h4>
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
                                    Vehicle Brand
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
                                            value={values.vehicleBrand || ''}
                                            onChange={handleChange}

                                        >
                                            {vehicleBrand.map((item, ind) => (
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
                                    Vehicle Type
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <div className="flex flex-wrap m--2">
                                        <TextField
                                            className="m-2 min-w-188"
                                            label="Vehicle Type"
                                            name="vehicleType"
                                            size="small"
                                            variant="outlined"
                                            select
                                            value={values.vehicleType || ''}
                                            onChange={handleChange}

                                        >
                                            {vehicleType.map((item, ind) => (
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
                                    License Plate
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <div className="flex flex-wrap m--2">
                                        <TextField
                                            className="m-2 min-w-188"
                                            label="License Plate"
                                            name="licensePlate"
                                            size="small"
                                            variant="outlined"
                                            value={values.licensePlate || ''}
                                            onChange={handleChange}

                                        >
                                   
                                        </TextField>
                                       
                                    </div>
                                </Grid>
        

                                <Grid item md={2} sm={4} xs={12}>
                                    Vehicle Year
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <div className="flex flex-wrap m--2">
                                        <TextField
                                            className="m-2 min-w-188"
                                            label="year"
                                            name="year"
                                            size="small"
                                            variant="outlined"
                                            select
                                            value={values.year || ''}
                                            onChange={handleChange}

                                        >
                                            {vehicleYear.map((item, ind) => (
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
                                    Vehicle Status
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <div className="flex flex-wrap m--2">
                                        <TextField
                                            className="m-2 min-w-188"
                                            label="Vehicle Status"
                                            name="vehicleStatus"
                                            size="small"
                                            variant="outlined"
                                            select
                                            value={values.vehicleStatus || ''}
                                            onChange={handleChange}

                                        >
                                            {vehicleStatus.map((item, ind) => (
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
                              
                            </Grid>
                            <Tabs
                                className="mt-4 mb-6"
                                value={tabIndex}
                                onChange={handleTabChange}
                                indicatorColor="primary"
                                textColor="primary"
                            >
                                {tabList.map((item, ind) => (
                                    <Tab
                                        className="capitalize"
                                        value={ind}
                                        label={item}
                                        key={ind}
                                    />
                                ))}
                            </Tabs>
                            {tabIndex === 0 && (
                                <OtherDetailsForm
                                    values={values}
                                    handleChange={handleChange}
                                />
                            )}
                            {tabIndex === 1 && (
                                <VehicleDetailForm
                                    values={values}
                                    setFieldValue={setFieldValue}
                                    handleChange={handleChange}
                                />
                            )}
                            {tabIndex === 2 && (
                                <VehicleDetailForm
                                    values={values}
                                    setFieldValue={setFieldValue}
                                    handleChange={handleChange}
                                />
                            )}

                            <div className="mt-6">
                                <Button
                                    color="primary"
                                    variant="contained"
                                    type="submit"
                                >
                                    Submit
                                </Button>
                            </div>
                        </form>
                    )}
                </Formik>
            </Card>
        </div>
    )
}

const vehicleStatus = ['RENTAL', 'OWN']
const vehicleBrand = ['TOYOYA', 'MITSUBISHI', 'SUZUKI', 'DAIHATSU', 'MERCEDES BENZ']
const vehicleType = ['DYNA', 'CANTER', 'FUSO', 'HINO']

const vehicleYear = ['2001', '2002', '2003', '2004', '2005','2006', '2007', '2008', '2009', '2010']
const tabList = ['Other Details', 'Vehicle Detail']

const initialValues = {
    customerType: '',
}

export default VehicleForm
