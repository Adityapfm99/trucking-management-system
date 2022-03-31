import React from 'react'
import Chart from 'react-apexcharts'

const ServiceReminderDoughnutChart = () => {
    const series = [11, 50]

    return <Chart options={option} series={series} type="donut" />
}

const option = {
    labels: ['Vehicle overdue', 'Overdue Soon'],
    stroke: {
        width: 0,
    },
    colors: [
        'rgba(var(--error), 1)',
        'rgba(var(--secondary), 1)',
    ],
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: true,
    },
}

export default ServiceReminderDoughnutChart
