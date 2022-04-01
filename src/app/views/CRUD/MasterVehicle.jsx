import React, { useState, useEffect } from 'react'
import {
    IconButton,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Icon,
    TablePagination,
    Button,
    Card,
} from '@material-ui/core'
import { Link, useParams } from 'react-router-dom'
import { getAllUser, deleteUser } from './TableService'
import AddDriver from './AddDriver'
import { Breadcrumb, ConfirmationDialog } from 'app/components'
import shortid from 'shortid'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    productTable: {
        '& thead': {
            '& th:first-child': {
                paddingLeft: 16,
            },
        },
        '& td': {
            borderBottom: 'none',
        },
        '& td:first-child': {
            paddingLeft: '16px !important',
        },
    },
}))
const VehicleList = [
    {
        vehicleName: 'FUSO',
        vehicleBrand: 'MITSUBISHI',
        nik: '354928129366001',
        pic: 'KOORDINATOR A',
        licensePlate: 'B 7710 QWE',
        year: '2015',
        status: 'Rent',
        isActive: 'active',
        sensorFuel:'SJ0312',
        sensorLoad: 'SL4032',
        sensorTank: 'ST322',
    },
    {
        vehicleName: 'FUSO',
        vehicleBrand: 'MITSUBISHI',
        nik: '354928129366001',
        pic: 'KOORDINATOR B',
        licensePlate: 'B 7921 IOP',
        year: '2013',
        status: 'Own',
        isActive: 'maintenance',
        sensorFuel:'SJ0312',
        sensorLoad: 'SL4032',
        sensorTank: 'ST322',
    },
    {
        vehicleName: 'FUSO',
        vehicleBrand: 'MITSUBISHI',
        licensePlate: 'B 7121 GHB',
        year: '2013',
        status: 'Own',
        isActive: 'active',
        sensorFuel:'SJ0312',
        sensorLoad: 'SL4032',
        sensorTank: 'ST322',
    },
    {
        vehicleName: 'FUSO',
        vehicleBrand: 'MITSUBISHI',
        licensePlate: 'B 7001 GWO',
        year: '2013',
        status: 'Own',
        isActive: 'active',
        sensorFuel:'SJ0312',
        sensorLoad: 'SL4032',
        sensorTank: 'ST322',
    },
    {
        vehicleName: 'CANTER',
        vehicleBrand: 'MITSUBISHI',
        nik: '354928129366001',
        pic: 'KOORDINATOR E',
        licensePlate: 'B 7492 HJW',
        year: '2010',
        status: 'Own',
        isActive: 'active',
        sensorFuel:'SJ0312',
        sensorLoad: 'SL4032',
        sensorTank: 'ST322',
    },
    {
        vehicleName: 'FUSO',
        vehicleBrand: 'MITSUBISHI',
        nik: '354928129366001',
        pic: 'KOORDINATOR F',
        licensePlate: 'B 7887 IOP',
        year: '2010',
        status: 'Own',
        active: 'active',
        isActive: 'active',
        sensorFuel:'SJ0312',
        sensorLoad: 'SL4032',
        sensorTank: 'ST322',
    },
    {
        vehicleName: 'FUSO',
        vehicleBrand: 'MITSUBISHI',
        nik: '354928129366001',
        pic: 'KOORDINATOR G',
        licensePlate: 'B 7201 FGS',
        year: '2010',
        status: 'Own',
        isActive: 'active',
        active: 'active',
        sensorFuel:'SJ0312',
        sensorLoad: 'SL4032',
        sensorTank: 'ST322',
    },
    {
        vehicleName: 'FUSO',
        vehicleBrand: 'MITSUBISHI',
        licensePlate: 'B 7769 UJI',
        year: '2002',
        status: 'Own',
        active: 'active',
        sensorFuel:'SJ0312',
        sensorLoad: 'SL4032',
        sensorTank: 'ST322',
    },
    {
        vehicleName: 'FUSO',
        vehicleBrand: 'MITSUBISHI',
        licensePlate: 'B 7013 ULO',
        year: '2010',
        isActive: 'active',
        status: 'Own',
        active: 'active',
        sensorFuel:'SJ0312',
        sensorLoad: 'SL4032',
        sensorTank: 'ST322',
    },
    {
        vehicleName: 'DYNA',
        vehicleBrand: 'TOYOTA',
        licensePlate: 'B 7291 GHW',
        year: '2010',
        status: 'Own',
        active: 'active',
        sensorFuel:'SJ0312',
        sensorLoad: 'SL4032',
        sensorTank: 'ST322',
    },
    {
        vehicleName: 'CANTER',
        vehicleBrand: 'MITSUBISHI',
        licensePlate: 'B 7772 HUK',
        year: '2010',
        isActive: 'maintenance',
        status: 'Rent',
        active: 'active',
        sensorFuel:'SJ0312',
        sensorLoad: 'SL4032',
        sensorTank: 'ST322',
    },
]

const MasterDriver = () => {
    const [uid, setUid] = useState(null)
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [page, setPage] = useState(0)
    const [driver, setUser] = useState(null)
    const [userList, setUserList] = useState([])
    const [shouldOpenEditorDialog, setShouldOpenEditorDialog] = useState(false)
    const [
        shouldOpenConfirmationDialog,
        setShouldOpenConfirmationDialog,
    ] = useState(false)

    const classes = useStyles()

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleDialogClose = () => {
        setShouldOpenEditorDialog(false)
        setShouldOpenConfirmationDialog(false)
        updatePageData()
    }

    const handleDeleteUser = (driver) => {
        setUser(driver)
        setShouldOpenConfirmationDialog(true)
    }

    const handleConfirmationResponse = () => {
        deleteUser(driver).then(() => {
            handleDialogClose()
        })
    }

    const updatePageData = () => {
        getAllUser().then(({ data }) => {
            setUserList(data)
        })
    }

    useEffect(() => {
        updatePageData()
    }, [])

    return (
        <div className="m-sm-30">
            <div className="mb-sm-30">
                <Breadcrumb routeSegments={[{ name: 'Master Vehicle' }]} />
            </div>


            <Link to="/add-vehicle">
                <Button
                    className="mb-4"
                    variant="contained"
                    color="primary"
                >
                    Add New Vehicle
                </Button>
            </Link>

            <Card className="w-full overflow-auto" elevation={6}>
                <Table
                    className={clsx(
                        'whitespace-pre min-w-750',
                        classes.productTable
                    )}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>Vehicle Brand</TableCell>
                            <TableCell>Vehicle Name</TableCell>
                            <TableCell>License Plate</TableCell>
                            <TableCell>Vehicle Status</TableCell>
                            <TableCell>Vehicle year</TableCell>
                            <TableCell>Sensor Tank</TableCell>
                            <TableCell>Sensor Fuel</TableCell>
                            <TableCell>Sensor Load</TableCell>
                            <TableCell>Status Vehicle</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                   
                    <TableBody>
                        {VehicleList
                            ?.slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((vehicle, index) => (
                                <TableRow hover key={shortid.generate()}>
                                    <TableCell className="px-0" align="left">
                                        {vehicle.vehicleBrand}
                                    </TableCell>
                                    <TableCell className="px-0" align="left">
                                        {vehicle.vehicleName}
                                    </TableCell>
                                    <TableCell className="px-0" align="left">
                                        {vehicle.licensePlate}
                                    </TableCell>
                                    <TableCell className="px-0" align="left">
                                        {vehicle.status}
                                    </TableCell>
                                    <TableCell className="px-0" align="left">
                                        {vehicle.year}
                                    </TableCell>
                                    <TableCell className="px-0" align="left">
                                        {vehicle.sensorTank}
                                    </TableCell>
                                    <TableCell className="px-0" align="left">
                                        {vehicle.sensorFuel}
                                    </TableCell>
                                    <TableCell className="px-0" align="left">
                                        {vehicle.sensorLoad}
                                    </TableCell>

                                    <TableCell className="px-0">
                                        {vehicle.isActive ? (
                                            <small className="capitalize text-white bg-green border-radius-4 px-2 py-2px">
                                                active
                                            </small>
                                        ) : (
                                            <small className="capitalize text-white bg-error border-radius-4 px-2 py-2px">
                                                maintenance
                                            </small>
                                        )}
                                    </TableCell>
                                    <TableCell className="px-0 border-none">
                                        <IconButton
                                            onClick={() => {
                                                setUid(driver.id)
                                                setShouldOpenEditorDialog(true)
                                            }}
                                        >
                                            <Icon color="primary">edit</Icon>
                                        </IconButton>
                                        <IconButton
                                            onClick={() =>
                                                handleDeleteUser(driver)
                                            }
                                        >
                                            <Icon color="error">delete</Icon>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>

                <TablePagination
                    className="px-4"
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={VehicleList?.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    backIconButtonProps={{
                        'aria-label': 'Previous Page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'Next Page',
                    }}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={({ target: { value } }) =>
                        setRowsPerPage(value)
                    }
                />

                {shouldOpenEditorDialog && (
                    <AddDriver
                        handleClose={handleDialogClose}
                        open={shouldOpenEditorDialog}
                        uid={uid}
                    />
                )}
                {shouldOpenConfirmationDialog && (
                    <ConfirmationDialog
                        open={shouldOpenConfirmationDialog}
                        onConfirmDialogClose={handleDialogClose}
                        onYesClick={handleConfirmationResponse}
                        text="Are you sure to delete?"
                    />
                )}
            </Card>
        </div>
    )
}

export default MasterDriver

