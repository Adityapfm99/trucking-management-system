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
const ItemServiceList = [
    {
        category: 'service',
        name: 'Routine Service',
      
    },
    {
        category: 'sparepart',
        name: 'Transmission Filter Replacementt',
    },
    {
        category: 'MITSUBISHI, CANTER',
        name: 'Water Pump Replacement',
    },
    {
        category: 'MITSUBISHI, CANTER',
        name: 'Spark Plug Replacement',
    },
    {
        category: 'MITSUBISHI, CANTER',
        name: 'Air Filter Replacement',
    },
    {
        category: 'MITSUBISHI, CANTER',
        name: 'Ball Joint Replacement',
    },
    {
        category: 'MITSUBISHI, CANTER',
        name: 'Battery Replacement',
    },
    {
        category: 'MITSUBISHI, CANTER',
        name: 'Brake Pad(s) Replacement',
    },
    {
        category: 'MITSUBISHI, CANTER',
        name: 'Engine Belt Inspection',
    },
    {
        category: 'MITSUBISHI, CANTER',
        name: 'Exhaust Manifold Replacement',
    },
    {
        category: 'MITSUBISHI, CANTER',
        name: 'Intake Manifold Gasket Replacement',
    },
]

const MasterItemService = () => {
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


            <Link to="/add-item">
                <Button
                    className="mb-4"
                    variant="contained"
                    color="primary"
                >
                    Add New Item
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
                            <TableCell>Item Name</TableCell>
                           
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {ItemServiceList
                            ?.slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((driver, index) => (
                                <TableRow hover key={shortid.generate()}>
                                    <TableCell className="px-0" align="left">
                                        {driver.name}
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
                    count={ItemServiceList?.length}
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

export default MasterItemService

