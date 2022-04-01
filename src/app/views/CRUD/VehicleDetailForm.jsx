import React from 'react'
import { TextField, Grid, MenuItem } from '@material-ui/core'
import { Facebook, Twitter } from '@material-ui/icons'

const VehicleDetailForm = ({ values, handleChange }) => {
    return (
        <Grid container spacing={3} alignItems="center">
            <Grid item md={2} sm={4} xs={12}>
                Engine No
            </Grid>
            <Grid item md={10} sm={8} xs={12}>
                <TextField
                    className="min-w-208"
                    label="ENGINE NO"
                    name="engineNo"
                    size="small"
                    variant="outlined"
                    
                    value={values.ownerName || ''}
                    onChange={handleChange}
                >
               
           
                </TextField>
            </Grid>
            <Grid item md={2} sm={4} xs={12}>
                Chasis No
            </Grid>
            <Grid item md={10} sm={8} xs={12}>
                <TextField
                    className="min-w-208"
                    label="CHASIS NO"
                    name="chasisNo"
                    size="small"
                    variant="outlined"
                    value={values.paymentTerm || ''}
                    onChange={handleChange}
                >
     
                </TextField>
            </Grid>
            <Grid item md={2} sm={4} xs={12}>
                BPKB No
            </Grid>
            <Grid item md={10} sm={8} xs={12}>
                <TextField
                    className="min-w-208"
                    label="BPKB No"
                    name="bpkbNo"
                    size="small"
                    variant="outlined"
                    
                    value={values.ownerName || ''}
                    onChange={handleChange}
                >
               
           
                </TextField>
            </Grid>
            
            <Grid item md={2} sm={4} xs={12}>
                STNK No
            </Grid>
            <Grid item md={10} sm={8} xs={12}>
                <TextField
                    className="min-w-208"
                    label="STNK NO"
                    name="stnkNo"
                    size="small"
                    variant="outlined"
                    
                    value={values.ownerName || ''}
                    onChange={handleChange}
                >
               
           
                </TextField>
            </Grid>
            
        </Grid>
    )
}

export default VehicleDetailForm
