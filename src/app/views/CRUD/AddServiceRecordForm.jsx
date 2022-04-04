import React from 'react'
import { Formik } from 'formik'
import {
    Grid,
    Card,
    Divider,
    TextField,
    MenuItem,
    Button,
} from '@material-ui/core'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import ServiceItemTable from './ServiceItemTable'
import { calculateAmount } from './ServiceFormService'

const InvoiceForm = () => {
    const calculateSubTotal = (itemList = []) => {
        let subTotal = 0
        itemList.forEach((item) => {
            subTotal += calculateAmount(item)
        })

        return subTotal
    }

    const calculateTotal = (values) => {
        let total = 0
        total += calculateSubTotal(values.items)
        total += values.shippingCharge || 0
        total += values[values.otherField] || 0

        return total
    }

    const handleSubmit = async (values, { isSubmitting }) => {
        console.log(values)
    }

    return (
        <div className="m-sm-30">
            <Card elevation={3}>
                <div className="flex p-4">
                    <h4 className="m-0">New Item</h4>
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
                                    Vehicle Name
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        className="min-w-188"
                                        label="Vehicle Name"
                                        name="VehicleName"
                                        size="small"
                                        variant="outlined"
                                        select
                                        value={values.VehicleName || ''}
                                        onChange={handleChange}
                                    >
                                        {vehicle.map((item, ind) => (
                                            <MenuItem value={item} key={item}>
                                                {item}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>


                                <Grid item md={2} sm={4} xs={12}>
                                    Order Number
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="Order No"
                                        name="orderNo"
                                        size="small"
                                        variant="outlined"
                                        value={values.orderNo}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item md={2} sm={4} xs={12}>
                                    Service Date
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <div className="flex flex-wrap m--2">
                                        <MuiPickersUtilsProvider
                                            utils={DateFnsUtils}
                                        >
                                            <KeyboardDatePicker
                                                className="m-2"
                                                margin="none"
                                                label="Service Date"
                                                inputVariant="outlined"
                                                type="text"
                                                size="small"
                                                autoOk={true}
                                                value={values.serviceDate}
                                                format="MMMM dd, yyyy"
                                                onChange={(date) =>
                                                    setFieldValue(
                                                        'ser',
                                                        date
                                                    )
                                                }
                                            />
                                        </MuiPickersUtilsProvider>
 
                                    </div>
                                </Grid>

                                <Grid item xs={12}>
                                    <Divider />
                                </Grid>

                                <Grid item md={2} sm={4} xs={12}>
                                    Vendor Name
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        className="min-w-188"
                                        label="Vendor Name"
                                        name="vendorName"
                                        size="small"
                                        variant="outlined"
                                        value={values.vendorName || ''}
                                        onChange={handleChange}
                                        
                                    >
                                       
                                    </TextField>
                                </Grid>

                                <Grid item xs={12}>
                                    <Divider />
                                </Grid>
                            </Grid>

                            <div className="mb-8">
                                <ServiceItemTable
                                    values={values}
                                    setFieldValue={setFieldValue}
                                    handleChange={handleChange}
                                />
                            </div>

                            <div className="mb-8">
                                <Grid container spacing={3}>
                                    <Grid item xs={6}>
                                        <TextField
                                            label="Custom Notes"
                                            name="notes"
                                            size="small"
                                            variant="outlined"
                                            multiline
                                            rows={6}
                                            fullWidth
                                            value={values.notes}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Card
                                            className="bg-default p-4"
                                            elevation={0}
                                        >
                                            <Grid
                                                container
                                                spacing={3}
                                                justify="space-between"
                                                alignItems="center"
                                            >
                                                <Grid item xs={6}>
                                                    Sub Total
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <div className="text-right">
                                                        {calculateSubTotal(
                                                            values.items
                                                        ).toFixed(2)}
                                                    </div>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <div className="flex items-center">
                                                        <span className="whitespace-pre">
                                                            Other Charges
                                                        </span>
                                                        <TextField
                                                            className="ml-3"
                                                            name="otherCharges"
                                                            size="small"
                                                            type="number"
                                                            variant="outlined"
                                                            value={
                                                                values.otherCharges ||
                                                                ''
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                        />
                                                    </div>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <div className="text-right">
                                                        {(
                                                            values.otherCharges ||
                                                            0
                                                        ).toFixed(2)}
                                                    </div>
                                                </Grid>
                                                {/* <Grid item xs={6}>
                                                    <div className="flex items-center">
                                                        <TextField
                                                            name="otherField"
                                                            size="small"
                                                            variant="outlined"
                                                            value={
                                                                values.otherField ||
                                                                ''
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                        />

                                                        <TextField
                                                            className="ml-3"
                                                            name={
                                                                values.otherField
                                                            }
                                                            size="small"
                                                            variant="outlined"
                                                            type="number"
                                                            value={
                                                                values[
                                                                    values
                                                                        .otherField
                                                                ] || ''
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                        />
                                                    </div>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <div className="text-right">
                                                        {(
                                                            values[
                                                                values
                                                                    .otherField
                                                            ] || 0
                                                        ).toFixed(2)}
                                                    </div>
                                                </Grid> */}

                                                <Grid item xs={6}>
                                                    <h5 className="m-0">
                                                        Total ( IDR )
                                                    </h5>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <div className="text-right">
                                                        <h5 className="m-0">
                                                            {calculateTotal(
                                                                values
                                                            ).toFixed(2)}
                                                        </h5>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </div>

                            {/* <Card className="bg-default p-4" elevation={0}>
                                <Grid container spacing={3}>
                                    <Grid item xs={6}>
                                        <TextField
                                            label="Terms & Conditions"
                                            name="terms_conditions"
                                            size="small"
                                            variant="outlined"
                                            multiline
                                            rows={6}
                                            fullWidth
                                            value={values.terms_conditions}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <label htmlFor="upload-multiple-file">
                                            <Button
                                                className="capitalize"
                                                color="primary"
                                                component="span"
                                                variant="contained"
                                            >
                                                <div className="flex items-center">
                                                    <Icon className="pr-8">
                                                        cloud_upload
                                                    </Icon>
                                                    <span>Upload File</span>
                                                </div>
                                            </Button>
                                        </label>
                                        <input
                                            className="hidden"
                                            onChange={(e) =>
                                                setFieldValue(
                                                    'files',
                                                    e.target.files
                                                )
                                            }
                                            id="upload-multiple-file"
                                            type="file"
                                            multiple
                                        />
                                    </Grid>
                                </Grid>
                            </Card> */}

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

const vehicle = [
                'MITUSBUSHI CANTER, B 7031 QWE', 
                'MITUSBUSHI CANTER, B 7332 TEH', 
                'MITUSBUSHI FUSO, B 7988 ABC', 
                'ISUZU GIGA 4X2, B 7988 ABC',
            ]

const initialValues = {
    customerType: '',
    otherField: 'Adjustment',
}

export default InvoiceForm
