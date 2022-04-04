import React from 'react'
import {
    TextField,
    MenuItem,
 
    Grid,
} from '@material-ui/core'
import StatCard4 from './shared/StatCard4'
import GaugeProgressCard from './shared/GuageProgressCard'
import FollowerCard from './shared/FollowerCard'
import FollowerCard2 from './shared/FollowerCard2'
import AverageChart from './shared/averageChart'


const Analytics2 = () => {
    return (
        <div className="analytics m-sm-30">
            <div className="flex justify-between items-center items-center mb-6">
                <h3 className="m-0">Overview</h3>
                <TextField
                    defaultValue="1"
                    variant="outlined"
                    size="small"
                    select
                >
                    <MenuItem value="1">This Months</MenuItem>
                    <MenuItem value="2">Last Month</MenuItem>
                    <MenuItem value="3">Six Month</MenuItem>
                    <MenuItem value="4">Last Year</MenuItem>
                </TextField>
            </div>
            <AverageChart/>
            {/* <StatCard3 /> */}


            {/* <Grid container spacing={3}>
                <Grid item md={4} xs={12}>
                    <StatCard4 />
                </Grid>
                <Grid item md={4} xs={12}>
                    <GaugeProgressCard />
                </Grid>
                <Grid item md={4} xs={12}>
                    <FollowerCard />
                    <FollowerCard2 />
                </Grid>
            </Grid> */}
        </div>
    )
}

export default Analytics2
