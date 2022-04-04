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

const VehicleForm = () => {
    const [tabIndex, setTabIndex] = useState(0)

    const handleSubmit = async (values, { isSubmitting }) => {
        console.log(values)
    }

    // const handleTabChange = (e, value) => {
    //     setTabIndex(value)
    // }

    return (
        <div className="m-sm-30">
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Pages', path: '/pages' },
                        { name: 'New Supplier' },
                    ]}
                />
            </div>

            <Card elevation={3}>
                <div className="flex p-4">
                    <h4 className="m-0">Add a New Supplier</h4>
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
                                    Supplier Code
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <div className="flex flex-wrap m--2">
                                        <TextField
                                            className="m-2 min-w-188"
                                            label="Supplier Code"
                                            name="supplierCode"
                                            size="small"
                                            variant="outlined"
                                            
                                            value={values.supplierCode || ''}
                                            onChange={handleChange}

                                        >
                                          
                                        </TextField>
                                       
                                    </div>
                                </Grid>
                                <Grid item md={2} sm={4} xs={12}>
                                    Supplier Name
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <div className="flex flex-wrap m--2">
                                        <TextField
                                            className="m-2 min-w-188"
                                            label="Supplier Name"
                                            name="supplierName"
                                            size="small"
                                            variant="outlined"
                                            
                                            value={values.supplierName || ''}
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
                                    Supplier PIC
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <div className="flex flex-wrap m--2">
                                        <TextField
                                            className="m-2 min-w-188"
                                            label="Supplier PIC"
                                            name="supplierPic"
                                            size="small"
                                            variant="outlined"
                                            value={values.supplierPic || ''}
                                            onChange={handleChange}

                                        >
                                   
                                        </TextField>
                                       
                                    </div>
                                </Grid>
        

                                <Grid item md={2} sm={4} xs={12}>
                                    Supplier Phone
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <div className="flex flex-wrap m--2">
                                        <TextField
                                            className="m-2 min-w-188"
                                            label="Supplier Phone"
                                            name="supplierPhone"
                                            size="small"
                                            variant="outlined"
                                            
                                            value={values.supplierPhone || ''}
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
                                    Supplier Address
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <div className="flex flex-wrap m--2">
                                        <TextField
                                            className="m-2 min-w-188"
                                            label="Supplier Addres"
                                            name="supplierAddress"
                                            size="small"
                                            multiline
                                            variant="outlined"
                                            
                                            value={values.supplierAddress || ''}
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

const vehicleType = ['DYNA', 'CANTER', 'FUSO', 'HINO']

const vehicleYear = ['2001', '2002', '2003', '2004', '2005','2006', '2007', '2008', '2009', '2010']


const initialValues = {
    customerType: '',
}

export default VehicleForm
