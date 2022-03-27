import React from 'react'
import { useTheme } from '@mui/system'
import ReactEcharts from 'echarts-for-react'

const TopDriversChart = ({ height, color = [] }) => {
    const theme = useTheme()

    const option = {
        grid: {
            top: '10%',
            bottom: '10%',
            right: '5%',
        },
        legend: {
            show: true,
        },
        barGap: 0,
        barMaxWidth: '44px',
        tooltip: {},
        dataset: {
            source: [
                ['Date', 'Driver A', 'Driver B', 'Driver C', 'Driver D','Driver E'],
                ['01 Mar 2022', 2200, 2100, 1950, 1800, 1500],
                ['03 Mar 2022', 2800, 2500, 1500, 1600, 1200],
                ['03 Mar 2022', 2700, 2350, 1800, 1700, 2399],
                ['05 Mar 2022', 2500, 1250, 1950, 1100, 1100],
                ['05 Mar 2022', 2450, 1000, 1950, 1500, 750],
                ['06 Mar 2022', 2400, 1750, 1200, 1400, 700],
                ['07 Mar 2022', 2700, 2250, 1500, 1800, 900],
            ],
        },
        xAxis: {
            type: 'category',
            axisLine: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                color: theme.palette.text.primary,
                fontSize: 13,
                fontFamily: 'roboto',
            },
        },
        yAxis: {
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: theme.palette.text.secondary,
                    opacity: 0.15,
                },
            },
            axisLabel: {
                color: theme.palette.text.primary,
                fontSize: 13,
                fontFamily: 'roboto',
            },
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
            {
                type: 'bar',
                itemStyle: {
                    barBorderRadius: [10, 10, 0, 0],
                },
            },
            {
                type: 'bar',
                itemStyle: {
                    barBorderRadius: [10, 10, 0, 0],
                },
            },
            {
                type: 'bar',
                itemStyle: {
                    barBorderRadius: [10, 10, 0, 0],
                },
            },
            {
                type: 'bar',
                itemStyle: {
                    barBorderRadius: [10, 10, 0, 0],
                },
            },
            {
                type: 'bar',
                itemStyle: {
                    barBorderRadius: [10, 10, 0, 0],
                },
            },
        ],
    }

    return (
        <ReactEcharts
            style={{ height: height }}
            option={{
                ...option,
                // color: [...color],
            }}
        />
    )
}

export default TopDriversChart
