import React from 'react'
import ReactEcharts from 'echarts-for-react'
import { useTheme } from '@material-ui/core/styles'

const ComparisonChart2 = ({ height }) => {
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

    return <ReactEcharts style={{ height: height }} option={option} />
}

export default ComparisonChart2
