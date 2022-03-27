import React from 'react'
import { useTheme } from '@mui/system'
import ReactEcharts from 'echarts-for-react'

const TotalFuelPayloadChart = ({ height, color = [] }) => {
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
                ['Day', 'Fuel', 'Payload'],
                ['01 Mar 2022', 1000, 8200],
                ['02 Mar 2022', 950, 8120],
                ['03 Mar 2022', 600, 7921],
                ['04 Mar 2022', 700, 8000],
                ['05 Mar 2022', 610, 8050],
                ['06 Mar 2022', 670, 7720],
                ['07 Mar 2022', 500, 4900],
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
        series: [{ type: 'line' }, { type: 'bar' ,itemStyle: {
            barBorderRadius: [10, 10, 0, 0],
        },}],
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

export default TotalFuelPayloadChart
