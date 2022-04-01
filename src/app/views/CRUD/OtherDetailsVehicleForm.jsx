import React from 'react'
import { TextField, Grid, MenuItem } from '@material-ui/core'
import { Facebook, Twitter } from '@material-ui/icons'

const OtherDetailsVehicleForm = ({ values, handleChange }) => {
    return (
        <Grid container spacing={3} alignItems="center">
            <Grid item md={2} sm={4} xs={12}>
                Owner Name
            </Grid>
            <Grid item md={10} sm={8} xs={12}>
                <TextField
                    className="min-w-208"
                    label="ownerName"
                    name="ownerName"
                    size="small"
                    variant="outlined"
                    
                    value={values.ownerName || ''}
                    onChange={handleChange}
                >
               
           
                </TextField>
            </Grid>
            <Grid item md={2} sm={4} xs={12}>
                Supplier Name
            </Grid>
            <Grid item md={10} sm={8} xs={12}>
                <TextField
                    className="min-w-208"
                    label="Supplier Name"
                    name="supplierName"
                    size="small"
                    variant="outlined"
                    value={values.paymentTerm || ''}
                    onChange={handleChange}
                >
     
                </TextField>
            </Grid>
            
        </Grid>
    )
}

export default OtherDetailsVehicleForm
