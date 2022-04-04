import React from 'react'
import { Grow, Icon, IconButton, TextField, Tooltip } from '@material-ui/core'

import { Breadcrumb } from 'app/components'
import MUIDataTable from 'mui-datatables'
import { Link } from 'react-router-dom'
import VehicleSingleMap from '../CRUD/vehicleSingleMap'

const historyList = [
    {
        vehicleName: 'MITSUBISHI, CANTER',
        driverName: 'DRIVER A',
        licensePlate: 'B 7710 QWE',
        status: 'inactive',
        historyDate: '2022-04-01 09:00:00',
        fuel: 100,
        weight: 730,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, CANTER',
        driverName: 'DRIVER A',
        licensePlate: 'B 7921 IOP',
        historyDate: '2022-04-01 09:30:00',
        status: 'active',
        fuel: 90,
        weight: 770,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, CANTER',
        driverName: 'DRIVER A',
        licensePlate: 'B 7121 GHB',
        historyDate: '2022-04-01 10:00:00',
        status: 'active',
        fuel: 80,
        weight: 810,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, CANTER',
        driverName: 'DRIVER A',
        licensePlate: 'B 7001 GWO',
        historyDate: '2022-04-01 10:30:00',
        status: 'inactive',
        fuel: 75,
        weight: 790,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, CANTER',
        driverName: 'DRIVER A',
        licensePlate: 'B 7492 HJW',
        status: 'active',
        historyDate: '2022-04-01 11:00:00',
        fuel: 70,
        weight: 840,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, CANTER',
        driverName: 'DRIVER A',
        licensePlate: 'B 7887 IOP',
        status: 'active',
        historyDate: '2022-04-01 11:30:00',
        fuel: 60,
        weight: 812,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, CANTER',
        driverName: 'DRIVER A',
        licensePlate: 'B 7201 FGS',
        status: 'active',
        historyDate: '2022-04-01 12:00:00',
        fuel: 50,
        weight: 810,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, CANTER',
        driverName: 'DRIVER A',
        licensePlate: 'B 7769 UJI',
        status: 'active',
        historyDate: '2022-04-01 12:30:00',
        fuel: 40,
        weight: 833,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, CANTER',
        driverName: 'DRIVER A',
        licensePlate: 'B 7013 ULO',
        status: 'active',
        historyDate: '2022-04-01 13:00:00',
        fuel: 30,
        weight: 820,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, CANTER',
        driverName: 'DRIVER A',
        licensePlate: 'B 7291 GHW',
        status: 'active',
        historyDate: '2022-04-01 13:30:00',
        fuel: 30,
        weight: 810,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, CANTER',
        driverName: 'DRIVER K',
        licensePlate: 'B 7772 HUK',
        status: 'active',
        historyDate: '2022-04-01 14:00:00',
        fuel: 20,
        weight: 823,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, CANTER',
        driverName: 'DRIVER K',
        licensePlate: 'B 7772 HUK',
        status: 'active',
        historyDate: '2022-04-01 14:30:00',
        fuel: 10,
        weight: 823,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, CANTER',
        driverName: 'DRIVER K',
        licensePlate: 'B 7772 HUK',
        status: 'active',
        historyDate: '2022-04-01 15:00:00',
        fuel: 10,
        weight: 823,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, CANTER',
        driverName: 'DRIVER K',
        licensePlate: 'B 7772 HUK',
        status: 'active',
        historyDate: '2022-04-01 15:30:00',
        fuel: 10,
        weight: 823,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, CANTER',
        driverName: 'DRIVER K',
        licensePlate: 'B 7772 HUK',
        status: 'active',
        historyDate: '2022-04-01 16:00:00',
        fuel: 10,
        weight: 823,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
]

const HistoryTable = () => {
    const columns = [
        {
            name: 'vehicleName',
            label: 'Vehicle Name.',
            options: {
    
                filter: true,
            },
        },
        {
            name: 'driverName',
            label: 'Driver Name',
            options: {
                filter: true,
            },
        },

        {
            name: 'historyDate',
            label: 'History Date',
            options: {
                filter: true,
            },
        },
        {
            name: 'weight',
            label: 'Weight (kg)',
            options: {
                filter: true,
            },
        },
        {
            name: 'fuel',
            label: 'Fuel (ltr)',
            options: {
                filter: true,
            },
        },
        
        {
            name: 'action',
            label: 'Action',
            options: {
                filter: false,
                customBodyRenderLite: (dataIndex) => (
                    <div className="flex items-center">
                        {/* <div className="flex-grow"></div> */}
                        <Link to={`/dashboard/monitoring-vehicle`}>
                        <Tooltip title="Back">
                            <IconButton>
                                <Icon className="text-red" fontSize="medium" color = "error">
                                    arrow_back
                                </Icon>
                            </IconButton>
                        </Tooltip>
                        </Link>
                        
                    </div>
                ),
            },
        },
    ]

    return (
        <div className="m-sm-30">
            <div className="mb-sm-30">
                
                <Breadcrumb
                    routeSegments={[
                        { name: 'Pages', path: '/pages' },
                        { name: 'History Vehicle' },
                    ]}
                />
             
            </div>
            <div className="overflow-auto">
           
                <div className="min-w-750">
                {/* <HistoryVehicleChart height={200} /> */}
                <VehicleSingleMap height={200}  width={10}/>
                    <MUIDataTable
                        title={'Vehicle B 7710 QWE - 2022-04-01'}
                        
                        data={historyList}
                        columns={columns}
                        options={{
                            // filterType: 'textField',
                            responsive: 'standard',
                            elevation: 0,
                            selectableRows: "none", // set checkbox for each row
                            rowsPerPageOptions: [10, 20, 40, 80, 100],
                            // onRowsDelete: (data) => console.log(data),
                            customSearchRender: (
                                searchText,
                                handleSearch,
                                hideSearch,
                                options
                            ) => {
                                return (
                                    <Grow appear in={true} timeout={300}>
                                        <TextField
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            onChange={({ target: { value } }) =>
                                                handleSearch(value)
                                            }
                                            InputProps={{
                                                style: {
                                                    paddingRight: 0,
                                                },
                                                startAdornment: (
                                                    <Icon
                                                        className="mr-2"
                                                        fontSize="small"
                                                    >
                                                        search
                                                    </Icon>
                                                ),
                                                endAdornment: (
                                                    <IconButton
                                                        onClick={hideSearch}
                                                    >
                                                        <Icon fontSize="small">
                                                            clear
                                                        </Icon>
                                                    </IconButton>
                                                ),
                                            }}
                                        />
                                    </Grow>
                                )
                            },
                        }}
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default HistoryTable
