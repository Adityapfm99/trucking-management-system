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
const SupplierList = [
    {
        supplierCode: 'AA01',
        supplierName: 'ASSA',
        supplierPIC: 'Assa Pic Name',
        supplierAddress: 'Jl. Jakarta Bogor km 29',
        supplierPhone: '081292131390',
  
    },
    {
        supplierCode: 'AA02',
        supplierName: 'MPM RENT',
        supplierPIC: 'MPM RENT Pic',
        supplierAddress: 'Jl Pahlawan seribu Serpong',
        supplierPhone: '081292131390',
    },
    {
        supplierCode: 'AA03',
        supplierName: 'INDOMOBIL',
        supplierPIC: 'INDOMOBIL PIC',
        supplierAddress: 'Jl Gatot Subroto',
        supplierPhone: '081293913303',
    },
    {
        supplierCode: 'FUSO',
        supplierName: 'MITSUBISHI',
        supplierPIC: '354928129366001',
        supplierAddress: 'KOORDINATOR A',
        supplierPhone: 'B 7710 QWE',
    },
    {
        supplierCode: 'FUSO',
        supplierName: 'MITSUBISHI',
        supplierPIC: '354928129366001',
        supplierAddress: 'KOORDINATOR A',
        supplierPhone: 'B 7710 QWE',
    },
    {
        supplierCode: 'FUSO',
        supplierName: 'MITSUBISHI',
        supplierPIC: '354928129366001',
        supplierAddress: 'KOORDINATOR A',
        supplierPhone: 'B 7710 QWE',
    },
    {
        supplierCode: 'FUSO',
        supplierName: 'MITSUBISHI',
        supplierPIC: '354928129366001',
        supplierAddress: 'KOORDINATOR A',
        supplierPhone: 'B 7710 QWE',
    },
    {
        supplierCode: 'FUSO',
        supplierName: 'MITSUBISHI',
        supplierPIC: '354928129366001',
        supplierAddress: 'KOORDINATOR A',
        supplierPhone: 'B 7710 QWE',
    },
    {
        supplierCode: 'FUSO',
        supplierName: 'MITSUBISHI',
        supplierPIC: '354928129366001',
        supplierAddress: 'KOORDINATOR A',
        supplierPhone: 'B 7710 QWE',
    },
    {
        supplierCode: 'FUSO',
        supplierName: 'MITSUBISHI',
        supplierPIC: '354928129366001',
        supplierAddress: 'KOORDINATOR A',
        supplierPhone: 'B 7710 QWE',
    },
    {
        supplierCode: 'FUSO',
        supplierName: 'MITSUBISHI',
        supplierPIC: '354928129366001',
        supplierAddress: 'KOORDINATOR A',
        supplierPhone: 'B 7710 QWE',
    },
]

const MasterSupplier = () => {
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
                <Breadcrumb routeSegments={[{ name: 'Master Supplier' }]} />
            </div>


            <Link to="/add-supplier">
                <Button
                    className="mb-4"
                    variant="contained"
                    color="primary"
                >
                    Add New Supplier
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
                            <TableCell>Supplier Code</TableCell>
                            <TableCell>Supplier Name</TableCell>
                            <TableCell>Supplier PIC</TableCell>
                            <TableCell>Supplier Address</TableCell>
                            <TableCell>Supplier Phone</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                   
                    <TableBody>
                        {SupplierList
                            ?.slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((supplier, index) => (
                                <TableRow hover key={shortid.generate()}>
                                    <TableCell className="px-0" align="left">
                                        {supplier.supplierCode}
                                    </TableCell>
                                    <TableCell className="px-0" align="left">
                                        {supplier.supplierName}
                                    </TableCell>
                                    <TableCell className="px-0" align="left">
                                        {supplier.supplierPIC}
                                    </TableCell>
                                    <TableCell className="px-0" align="left">
                                        {supplier.supplierAddress}
                                    </TableCell>
                                    <TableCell className="px-0" align="left">
                                        {supplier.supplierPhone}
                                    </TableCell>
                                    

                                    <TableCell className="px-0">
                                        {supplier.isActive ? (
                                            <small className="capitalize text-white bg-green border-radius-4 px-2 py-2px">
                                                active
                                            </small>
                                        ) : (
                                            <small className="capitalize text-white bg-secondary border-radius-4 px-2 py-2px">
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
                    count={SupplierList?.length}
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

export default MasterSupplier

