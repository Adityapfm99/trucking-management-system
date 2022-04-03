import React from 'react'
import ReactEcharts from 'echarts-for-react'
import { useTheme } from '@material-ui/core/styles'

const HistoryVehicleChart = ({ height }) => {
    const { palette } = useTheme()

    const option = {
        grid: {
            left: '6%',
            bottom: '10%',
            right: '1%',
        },
        legend: {
            itemGap: 20,
            icon: 'circle',
            textStyle: {
                color: palette.text.secondary,
                fontSize: 13,
                fontFamily: 'roboto',
            },
        },
        color: [
            palette.primary.dark,
            palette.primary.light,
            palette.secondary.light,
            palette.error.light,
        ],
        barMaxWidth: '10px',
        tooltip: {},
        dataset: {
            source: [
                ['Time', 'Weight History'],
                ['09:00', 50],
                ['09:30', 100],
                ['10:00', 500],
                ['10:30', 700],
                ['11:00', 840],
                ['11:30', 812],
                ['12:00', 810],
                ['12:30', 833],
                ['13:00', 820],
                ['13:30', 810],
                ['14:00', 500],
                ['14:30', 500],
                ['15:00', 500],
                ['15:30', 500],
                ['16:00', 500],
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
                color: palette.text.secondary,
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
                // show: false
                lineStyle: {
                    color: palette.text.secondary,
                    opacity: 0.15,
                },
            },
            axisLabel: {
                color: palette.text.secondary,
                fontSize: 13,
                fontFamily: 'roboto',
            },
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
            {
                type: 'line',
                itemStyle: {
                    barBorderRadius: [10, 10, 0, 0],
                },
            },
            
        ],
    }

    return <ReactEcharts style={{ height: height }} option={option} />
}

export default HistoryVehicleChart
