import React from 'react'
import Chart from 'react-apexcharts'

const StatusVehicleChart = () => {
    const series = [181, 19]

    return <Chart options={option} series={series} type="donut" />
}

const option = {
    labels: ['Active', 'In Maintenance'],
    stroke: {
        width: 0,
    },
    colors: [
        'rgba(var(--primary), 1)',
        'rgba(var(--secondary), 1)',
    ],
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: true,
    },
}

export default StatusVehicleChart
