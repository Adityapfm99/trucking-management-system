import React from 'react'
import {
    ComposedChart,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from 'recharts'
import { RechartCreator } from 'app/components'

const data = [
    {
        name: 'January',
        averageLoad: 40000,
        fuel: 24000,
        amt: 2400,
    },
    {
        name: 'February',
        averageLoad: 30000,
        fuel: 1398,
        amt: 2210,
    },
    {
        name: 'March',
        averageLoad: 20000,
        fuel: 9800,
        amt: 2290,
    },
    {
        name: 'April',
        averageLoad: 27800,
        fuel: 3908,
        amt: 2000,
    },
    {
        name: 'May',
        averageLoad: 18900,
        fuel: 4800,
        amt: 2181,
    },
    {
        name: 'June',
        averageLoad: 23900,
        fuel: 3800,
        amt: 2500,
    },
    {
        name: 'July',
        averageLoad: 34900,
        fuel: 4300,
        amt: 2100,
    },
    {
        name: 'August',
        averageLoad: 30000,
        fuel: 1398,
        amt: 2210,
    },
    {
        name: 'September',
        averageLoad: 22000,
        fuel: 9800,
        amt: 2290,
    },
    {
        name: 'October',
        averageLoad: 27800,
        fuel: 3908,
        amt: 2000,
    },
    {
        name: 'November',
        averageLoad: 18900,
        fuel: 4800,
        amt: 2181,
    },
    {
        name: 'December',
        averageLoad: 20000,
        fuel: 9800,
        amt: 2290,
    },
]

const LineBarAreaComposedChart = ({ height, width }) => {
    return (
        <RechartCreator height={height} width={width}>
            <ComposedChart
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                {/* <Legend /> */}
                <Area
                    type="monotone"
                    dataKey="fuel"
                    fill="#ff7300"
                    stroke="#8884d8"
                />
                <Bar dataKey="averageLoad" barSize={20} fill="#413ea0" />
                {/* <Line type="monotone" dataKey="averageLoad" stroke="#ff7300" /> */}
            </ComposedChart>
        </RechartCreator>
    )
}

export default LineBarAreaComposedChart
