import React from 'react'
import { Grow, Icon, IconButton, TextField, Tooltip } from '@material-ui/core'
import { format } from 'date-fns'
import { Breadcrumb } from 'app/components'
import MUIDataTable from 'mui-datatables'
import { Link } from 'react-router-dom'

const monitoringVehicleList = [
    {
        vehicleName: 'MITSUBISHI, CANTER',
        driverName: 'DRIVER A',
        licensePlate: 'B 7710 QWE',
        status: 'inactive',
        fuel: 100,
        weight: 730,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER B',
        licensePlate: 'B 7921 IOP',
        status: 'active',
        fuel: 90,
        weight: 770,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER C',
        licensePlate: 'B 7121 GHB',
        status: 'active',
        fuel: 110,
        weight: 810,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER D',
        licensePlate: 'B 7001 GWO',
        status: 'inactive',
        fuel: 101,
        weight: 790,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER E',
        licensePlate: 'B 7492 HJW',
        status: 'active',
        fuel: 110,
        weight: 840,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER F',
        licensePlate: 'B 7887 IOP',
        status: 'active',
        fuel: 100,
        weight: 812,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'ISUZU, GIGA 4X2',
        driverName: 'DRIVER G',
        licensePlate: 'B 7201 FGS',
        status: 'active',
        fuel: 100,
        weight: 810,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER H',
        licensePlate: 'B 7769 UJI',
        status: 'active',
        fuel: 80,
        weight: 833,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'ISUZU, GIGA 4X2',
        driverName: 'DRIVER I',
        licensePlate: 'B 7013 ULO',
        status: 'active',
        fuel: 120,
        weight: 820,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'TOYOTA, DYNA',
        driverName: 'DRIVER J',
        licensePlate: 'B 7291 GHW',
        status: 'active',
        fuel: 120,
        weight: 810,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, CANTER',
        driverName: 'DRIVER K',
        licensePlate: 'B 7772 HUK',
        status: 'active',
        fuel: 110,
        weight: 823,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
]

const MonitoringTable = () => {
    const columns = [
        {
            name: 'vehicleName',
            label: 'Vehicle Name.',
            options: {
                // customBodyRenderLite: (dataIndex) => (
                //     <span className="ellipsis">{monitoringVehicleList[dataIndex].vehicleName}</span>
                // ),
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
            name: 'licensePlate',
            label: 'License Plate',
            options: {
                filter: true,
            },
        },
        {
            name: 'lastPosition',
            label: 'Last Position',
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
            name: 'status',
            label: 'Sensor Status',
            options: {
                filter: true,
                customBodyRenderLite: (dataIndex) => {
                    let status = monitoringVehicleList[dataIndex].status

                    switch (status) {
                        case 'active':
                            return (
                                <small className="capitalize text-white bg-green border-radius-4 px-2 py-2px">
                                    {status}
                                </small>
                            )
                       
                        case 'inactive':
                            return (
                                <small className="capitalize text-white bg-error border-radius-4 px-2 py-2px">
                                    {status}
                                </small>
                            )

                        default:
                            break
                    }
                },
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
                       
                        <Link to={`/dashboard/video-vehicle`}>
                            <Tooltip title="Video cam">
                                <IconButton>
                                    <Icon fontSize="medium" color ="primary">
                                        videocam
                                    </Icon>
                                </IconButton>
                            </Tooltip>
                        </Link>
                      
                        
                        <Link to={`/dashboard/history-vehicle`}>
                            <Tooltip title="History">
                                <IconButton>
                                    <Icon fontSize="medium" color ="primary">
                                        visibility
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
            {/* <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Pages', path: '/pages' },
                        { name: 'Monitoring Vehicle' },
                    ]}
                />
            </div> */}
            <div className="overflow-auto">
                <div className="min-w-750">
                    <MUIDataTable
                        title={'Monitoring'}
                        data={monitoringVehicleList}
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

export default MonitoringTable
