import React from 'react'
import { Paragraph } from 'app/components/Typography'
import { Box, styled, useTheme } from '@mui/system'
import {
    Card,
    Icon,
    IconButton,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Avatar,
    MenuItem,
    Select,
} from '@mui/material'

const CardHeader = styled('div')(() => ({
    paddingLeft: '24px',
    paddingRight: '24px',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}))

const Title = styled('span')(() => ({
    fontSize: '1rem',
    fontWeight: '500',
    textTransform: 'capitalize',
}))

const ProductTable = styled(Table)(() => ({
    minWidth: 400,
    whiteSpace: 'pre',
    '& small': {
        height: 15,
        width: 50,
        borderRadius: 500,
        boxShadow:
            '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
    },
    '& td': {
        borderBottom: 'none',
    },
    '& td:first-of-type': {
        paddingLeft: '16px !important',
    },
}))

const Small = styled('small')(({ bgcolor }) => ({
    height: 15,
    width: 50,
    color: '#fff',
    padding: '2px 8px',
    borderRadius: '4px',
    overflow: 'hidden',
    background: bgcolor,
    boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
}))

const TopSellingTable = () => {
    const { palette } = useTheme()
    const bgError = palette.error.main
    const bgPrimary = palette.primary.main
    const bgSecondary = palette.secondary.main

    return (
        <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
            <CardHeader>
                <Title>top 5 Drivers</Title>
                <Select size="small" defaultValue="this_week">
                    <MenuItem value="this_week">This Week</MenuItem>
                    <MenuItem value="last_week">Last Week</MenuItem>
                </Select>
            </CardHeader>
            <Box overflow="auto">
                <ProductTable>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ px: 2 }} colSpan={2}>
                                Driver Name
                            </TableCell>
                            <TableCell sx={{ px: 0 }} colSpan={2}>
                                Vehicle Name
                            </TableCell>
                            <TableCell sx={{ px: 0 }} colSpan={2}>
                                Total Payload
                            </TableCell>
                            <TableCell sx={{ px: 0 }} colSpan={2}>
                                PIC
                            </TableCell>
                            {/* <TableCell sx={{ px: 0 }} colSpan={2}>
                                Stock Status
                            </TableCell>
                            <TableCell sx={{ px: 0 }} colSpan={1}>
                                Action
                            </TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {productList.map((product, index) => (
                            <TableRow key={index} hover>
                                <TableCell
                                    colSpan={2}
                                    align="left"
                                    sx={{ px: 0, textTransform: 'capitalize' }}
                                >
                                     {product.driverName}
                          
                                </TableCell>
                                <TableCell
                                    colSpan={2}
                                    align="left"
                                    sx={{ px: 0, textTransform: 'capitalize' }}
                                >
                                     {product.vehicleName}
                          
                                </TableCell>
                                <TableCell
                                    align="left"
                                    colSpan={2}
                                    sx={{ px: 0, textTransform: 'capitalize' }}
                                >
                                    
                                    {product.load} kg
                                </TableCell>
                                <TableCell
                                    align="left"
                                    colSpan={2}
                                    sx={{ px: 0, textTransform: 'capitalize' }}
                                >
                                    
                                    {product.pic}
                                </TableCell>

                                {/* <TableCell
                                    sx={{ px: 0 }}
                                    align="left"
                                    colSpan={2}
                                >
                                    {product.available ? (
                                        product.available < 20 ? (
                                            <Small bgcolor={bgSecondary}>
                                                {product.available} available
                                            </Small>
                                        ) : (
                                            <Small bgcolor={bgPrimary}>
                                                in stock
                                            </Small>
                                        )
                                    ) : (
                                        <Small bgcolor={bgError}>
                                            out of stock
                                        </Small>
                                    )}
                                </TableCell> */}
                                <TableCell sx={{ px: 0 }} colSpan={1}>
                                    <IconButton>
                                        <Icon color="primary">remove_red_eye</Icon>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </ProductTable>
            </Box>
        </Card>
    )
}

const productList = [
    {
        imgUrl: '/assets/images/products/headphone-2.jpg',
        driverName: 'Driver A',
        vehicleName :'MITSUBISHI, CANTER',
        pic: 'koordinator A',
        load: 8000,
        available: 15,
    },
    {
        imgUrl: '/assets/images/products/headphone-3.jpg',
        driverName: 'Driver B',
        vehicleName :'MITSUBISHI, CANTER',
        pic: 'koordinator B',
        load: 7100,
        available: 30,
    },
    {
        imgUrl: '/assets/images/products/iphone-2.jpg',
        driverName: 'Driver C',
        vehicleName :'MITSUBISHI, CANTER',
        pic: 'koordinator C',
        load: 5400,
        available: 35,
    },
    {
        imgUrl: '/assets/images/products/iphone-1.jpg',
        driverName: 'Driver D',
        vehicleName :'MITSUBISHI, CANTER',
        pic: 'koordinator D',
        load: 5300,
        available: 0,
    },
    {
        imgUrl: '/assets/images/products/headphone-3.jpg',
        driverName: 'Driver E',
        vehicleName :'MITSUBISHI, CANTER',
        pic: 'koordinator E',
        load: 5000,
        available: 5,
    },
]

export default TopSellingTable
