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
const driverList = [
    {
        vehicleName: 'MITSUBISHI, CANTER',
        driverName: 'DRIVER A',
        nik: '354928129366001',
        pic: 'KOORDINATOR A',
        licensePlate: 'B 7710 QWE',
        status: 'active',
        fuel: 100,
        isActive: true,
        weight: 9200,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER B',
        nik: '354928129366001',
        pic: 'KOORDINATOR B',
        licensePlate: 'B 7921 IOP',
        status: 'inactive',
        fuel: 90,
        isActive: true,
        weight: 9770,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER C',
        licensePlate: 'B 7121 GHB',
        nik: '354928129366001',
        pic: 'KOORDINATOR C',
        status: 'active',
        fuel: 110,
        isActive: true,
        weight: 10810,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER D',
        nik: '354928129366001',
        pic: 'KOORDINATOR D',
        licensePlate: 'B 7001 GWO',
        status: 'active',
        fuel: 101,
        isActive: false,
        weight: 8390,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER E',
        nik: '354928129366001',
        pic: 'KOORDINATOR E',
        licensePlate: 'B 7492 HJW',
        status: 'active',
        fuel: 110,
        isActive: true,
        weight: 6840,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER F',
        nik: '354928129366001',
        pic: 'KOORDINATOR F',
        licensePlate: 'B 7887 IOP',
        status: 'active',
        fuel: 100,
        isActive: false,
        weight: 5812,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER G',
        nik: '354928129366001',
        pic: 'KOORDINATOR G',
        licensePlate: 'B 7201 FGS',
        status: 'active',
        fuel: 100,
        isActive: true,
        weight: 6693,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER H',
        nik: '354928129366001',
        pic: 'KOORDINATOR H',
        licensePlate: 'B 7769 UJI',
        status: 'active',
        fuel: 80,
        isActive: true,
        weight: 8300,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, FUSO',
        driverName: 'DRIVER I',
        nik: '354928129366001',
        pic: 'KOORDINATOR I',
        licensePlate: 'B 7013 ULO',
        status: 'active',
        fuel: 120,
        isActive: false,
        weight: 5820,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'TOYOTA, DYNA',
        driverName: 'DRIVER J',
        nik: '354928129366001',
        pic: 'KOORDINATOR J',
        licensePlate: 'B 7291 GHW',
        status: 'active',
        fuel: 120,
        isActive: false,
        weight: 6793,
        lastPosition: 'SPBU 3900 Kalimantan',
    },
    {
        vehicleName: 'MITSUBISHI, CANTER',
        driverName: 'DRIVER K',
        nik: '354928129366001',
        pic: 'KOORDINATOR K',
        licensePlate: 'B 7772 HUK',
        status: 'inactive',
        fuel: 110,
        isActive: true,
        weight: 7809,
        lastPosition: 'SPBU 3900 Kalimantan',
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
                <Breadcrumb routeSegments={[{ name: 'Master Driver' }]} />
            </div>

            <Button
                className="mb-4"
                variant="contained"
                color="primary"
                onClick={() => setShouldOpenEditorDialog(true)}
            >
                Add New Driver
            </Button>
            <Card className="w-full overflow-auto" elevation={6}>
                <Table
                    className={clsx(
                        'whitespace-pre min-w-750',
                        classes.productTable
                    )}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>Driver Name</TableCell>
                            <TableCell>Nik</TableCell>
                            <TableCell>Vehicle Name</TableCell>
                            <TableCell>PIC</TableCell>
                            <TableCell>Total Load</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {driverList
                            ?.slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((driver, index) => (
                                <TableRow hover key={shortid.generate()}>
                                    <TableCell className="px-0" align="left">
                                        {driver.driverName}
                                    </TableCell>
                                    <TableCell className="px-0" align="left">
                                        {driver.nik}
                                    </TableCell>
                                    <TableCell className="px-0" align="left">
                                        {driver.vehicleName}
                                    </TableCell>
                                    <TableCell className="px-0" align="left">
                                        {driver.pic}
                                    </TableCell>
                                    <TableCell className="px-0" align="left">
                                        {driver.weight}
                                    </TableCell>
                                   
                                    <TableCell className="px-0">
                                        {driver.isActive ? (
                                            <small className="capitalize text-white bg-green border-radius-4 px-2 py-2px">
                                                active
                                            </small>
                                        ) : (
                                            <small className="capitalize text-white bg-error border-radius-4 px-2 py-2px">
                                                inactive
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
                    count={driverList?.length}
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
