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
import { Link } from 'react-router-dom'
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
        licensePlate: 'B 7710 QWE',
        serviceDate: '2022-04-02',
        cost: '3.300.000',
        item: 'Routine Service, Spark Plug Replacement',
        odometer:'SJ0312',
    },
    {
        vehicleName: 'FUSO',
        vehicleBrand: 'MITSUBISHI',
        licensePlate: 'B 7710 QWE',
        serviceDate: '2022-04-02',
        cost: '1.230.000',
        item: 'Routine Service, Spark Plug Replacement',
        odometer:'SJ0312',
    },
    {
        vehicleName: 'FUSO',
        vehicleBrand: 'MITSUBISHI',
        licensePlate: 'B 7710 QWE',
        serviceDate: '2022-04-02',
        cost: '500.000',
        item: 'Routine Service, Spark Plug Replacement',
        odometer:'SJ0312',
    },
    {
        vehicleName: 'FUSO',
        vehicleBrand: 'MITSUBISHI',
        licensePlate: 'B 7710 QWE',
        serviceDate: '2022-04-02',
        cost: '2.200.000',
        item: 'Routine Service, Engine Belt Replacement',
        odometer:'SJ0312',
    },
    {
        vehicleName: 'FUSO',
        vehicleBrand: 'MITSUBISHI',
        licensePlate: 'B 7710 QWE',
        serviceDate: '2022-04-02',
        cost: '900.000',
        item: 'Routine Service, Spark Plug Replacement',
        odometer:'SJ0312',
    },
    {
        vehicleName: 'FUSO',
        vehicleBrand: 'MITSUBISHI',
        licensePlate: 'B 7710 QWE',
        serviceDate: '2022-04-02',
        cost: '3.000.000',
        item: 'Routine Service, Spark Plug Replacement',
        odometer:'SJ0312',
    },
    {
        vehicleName: 'FUSO',
        vehicleBrand: 'MITSUBISHI',
        licensePlate: 'B 7710 QWE',
        serviceDate: '2022-04-02',
        cost: '540.000',
        item: 'Routine Service, Spark Plug Replacement',
        odometer:'SJ0312',
    },
    {
        vehicleName: 'FUSO',
        vehicleBrand: 'MITSUBISHI',
        licensePlate: 'B 7710 QWE',
        serviceDate: '2022-04-02',
        cost: '800.000',
        item: 'Routine Service, Spark Plug Replacement',
        odometer:'SJ0312',
    },
    {
        vehicleName: 'FUSO',
        vehicleBrand: 'MITSUBISHI',
        licensePlate: 'B 7710 QWE',
        serviceDate: '2022-04-02',
        cost: '1.200.000',
        item: 'Routine Service, Spark Plug Replacement',
        odometer:'SJ0312',
    },
    {
        vehicleName: 'FUSO',
        vehicleBrand: 'MITSUBISHI',
        licensePlate: 'B 7710 QWE',
        serviceDate: '2022-04-02',
        cost: '2.000.000',
        item: 'Routine Service, Battery Replacement',
        odometer:'SJ0312',
    },
    {
        vehicleName: 'FUSO',
        vehicleBrand: 'MITSUBISHI',
        licensePlate: 'B 7710 QWE',
        serviceDate: '2022-04-02',
        cost: '900.000',
        item: 'Routine Service, Tire Replacement',
        odometer:'SJ0312',
    },
]

const ServiceRecord = () => {
    const [uid, setUid] = useState(null)
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [page, setPage] = useState(0)
    const [driver, setUser] = useState(null)
    const [ setUserList] = useState([])
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
                <Breadcrumb routeSegments={[{ name: 'Service Record' }]} />
            </div>


            <Link to="/add-service-record">
                <Button
                    className="mb-4"
                    variant="contained"
                    color="primary"
                >
                    Add New Service Record
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
                            <TableCell>ServiceDate</TableCell>
                            <TableCell>Cost</TableCell>
                            
                            <TableCell>Odometer</TableCell>
                            <TableCell>Item</TableCell>
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
                                        {vehicle.serviceDate}
                                    </TableCell>
                                    <TableCell className="px-0" align="left">
                                        {vehicle.cost}
                                    </TableCell>
                                    <TableCell className="px-0" align="left">
                                        {vehicle.odometer}
                                    </TableCell>
                                    <TableCell className="px-0" align="left">
                                        {vehicle.item}
                                    </TableCell>
                                   

                                    {/* <TableCell className="px-0">
                                        {vehicle.isActive ? (
                                            <small className="capitalize text-white bg-green border-radius-4 px-2 py-2px">
                                                active
                                            </small>
                                        ) : (
                                            <small className="capitalize text-white bg-secondary border-radius-4 px-2 py-2px">
                                                maintenance
                                            </small>
                                        )}
                                    </TableCell> */}
                                    <TableCell className="px-0 border-none" align="center">
                                        <IconButton
                                            onClick={() => {
                                                setUid(driver.id)
                                                setShouldOpenEditorDialog(true)
                                            }}
                                        >
                                            <Icon color="primary">visibility</Icon>
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

export default ServiceRecord

