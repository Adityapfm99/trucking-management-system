import React, { Fragment } from 'react'
import { Grid, Card } from '@material-ui/core'
import DoughnutChart from './shared/Doughnut'
import ModifiedAreaChart from './shared/ModifiedAreaChart'
import StatCards from './shared/StatCards'
import ComparisonChart2 from './shared/ComparisonChart2'
import TotalFuelPayloadChart from './shared/TotalFuelPayloadChart'
import ServiceReminderDoughnutChart from './shared/ServiceReminderDoughnutChart'
import StatusVehicleChart from './shared/StatusVehicleChart'
import { useTheme } from '@material-ui/styles'

const Analytics = () => {
    const theme = useTheme()

    return (
        <Fragment>
            <div className="pb-24 pt-7 px-8 bg-primary">
                <div className="card-title capitalize text-white mb-4 text-white-secondary">
                    Average Payload Weekly
                </div>
                <ModifiedAreaChart
                    height="280px"
                    option={{
                        series: [
                            {
                                data: [
                                    34000,
                                    45000,
                                    31000,
                                    45000,
                                    31000,
                                    
                                ],
                                type: 'line',
                            },
                        ],
                        xAxis: {
                            data: [
                                '01 - 07 Mar',
                                '08 - 14 Mar',
                                '15 - 21 Mar',
                                '22 - 28 Mar',
                                '29 - 30 Mar',
                            ],
                        },
                    }}
                />
            </div>

            <div className="analytics m-sm-30 mt--18">
                <Grid container spacing={3}>
                    <Grid item lg={8} md={8} sm={12} xs={12}>

                        <StatCards />
                        
                        <h4 className="card-title text-muted mb-4">
                            DRIVERS PERFORMANCE
                        </h4>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <ComparisonChart2 height={300} />
                        </Grid>
                        <h4 className="card-title text-muted mb-4">
                        Total Payloads - Total Fuels
                        </h4>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <TotalFuelPayloadChart height={300} />
                        </Grid>
                    </Grid>

                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Card className="px-6 py-4 mb-6">
                            <div className="card-title">Status Vehicle</div>
                            <StatusVehicleChart
                                height="300px"
                                color={[
                                    theme.palette.primary.dark,
                                    theme.palette.primary.main,
                                    theme.palette.primary.light,
                                ]}
                            />
                        </Card>
                        <Card className="px-6 py-4 mb-6">
                            <div className="card-title">Reminder Service</div>
                            <ServiceReminderDoughnutChart
                                height="300px"
                                color={[
                                    theme.palette.primary.dark,
                                    theme.palette.primary.main,
                                    theme.palette.primary.light,
                                ]}
                            />
                        </Card>

                    </Grid>
                    
                </Grid>
            </div>
        </Fragment>
    )
}

export default Analytics
