import {
    Badge,
    Card,
    Divider,
    Fab,
    Grid,
    Icon,
    IconButton,
} from '@material-ui/core'
import React, { Fragment } from 'react'
import DummyChart from './DummyChart'
import ProfileBarChart from './ProfileBarChart'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import clsx from 'clsx'

const usestyles = makeStyles(({ palette, ...theme }) => ({
    profileContent: {
        marginTop: -345,
        paddingTop: 74,
        paddingRight: 30,
        paddingLeft: 4,
        '& .menu-button': {
            display: 'none',
        },

        '@media only screen and (max-width: 959px)': {
            marginTop: -390,
            paddingTop: 24,
            paddingRight: 16,
            paddingLeft: 16,
        },

        '@media only screen and (max-width: 767px)': {
            marginTop: -410,
            paddingTop: 16,
            paddingRight: 16,
            paddingLeft: 16,
            '& .menu-button': {
                display: 'flex',
            },
        },
    },

    cardLeftVerticalLine: {
        '&:after': {
            content: '" "',
            position: 'absolute',
            height: 35,
            width: 5,
            top: -30,
            background: palette.primary.main,
        },
    },

    cardGrayBox: {
        height: 220,
        width: 'calc(100% - 16px)',
        borderRadius: 8,
        backgroundColor: 'rgba(var(--body), 0.1)',
    },
}))

const UserProfileContent = ({ toggleSidenav }) => {
    const classes = usestyles()
    const theme = useTheme()

    return (
        <Fragment>
            <div className={classes.profileContent}>
                <div className="flex justify-end menu-button">
                    <IconButton onClick={toggleSidenav}>
                        <Icon className="text-white">menu</Icon>
                    </IconButton>
                </div>
                <div className={classes.headerCardHolder}>
                    <Grid container spacing={3}>
                        {projectSummery.map((project) => (
                            <Grid
                                item
                                lg={4}
                                md={4}
                                sm={12}
                                xs={12}
                                key={project.title}
                            >
                                <Card className="h-96 bg-gray bg-default flex items-center justify-between p-4">
                                    <div>
                                        <span className="text-light-white uppercase">
                                            {project.title}
                                        </span>
                                        <h4 className="font-normal text-white m-0 pt-2">
                                            {project.amount}
                                        </h4>
                                    </div>
                                    <div className="w-56 h-36">
                                        <DummyChart height="40px" />
                                    </div>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div>
                <div className="py-8" />
                <Grid container spacing={3}>
                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        <Card className="pb-4">
                            <h4 className="font-medium text-muted px-4 pt-4 pb-0">
                                Data Use
                            </h4>
                            <ProfileBarChart
                                height="260px"
                                color={[theme.palette.warn]}
                            />
                            <div className="pt-4 flex items-center justify-around">
                                <div>
                                    <h1 className="font-normal m-0 mb-1">
                                        140
                                    </h1>
                                    <span className="font-normal text-muted uppercase">
                                        avg yearly
                                    </span>
                                </div>
                                <div>
                                    <h1 className="font-normal m-0 mb-1">12</h1>
                                    <span className="font-normal text-muted uppercase">
                                        avg monthly
                                    </span>
                                </div>
                                <div>
                                    <h1 className="font-normal m-0 mb-1">3</h1>
                                    <span className="font-normal text-muted uppercase">
                                        avg weekly
                                    </span>
                                </div>
                            </div>
                        </Card>
                    </Grid>

                   

                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        <div className="py-3"></div>
                        <Card className="overflow-unset flex py-4">
                            <div className="w-100 min-w-100 text-center">
                                <Fab
                                    className="relative mt--14"
                                    size="medium"
                                    color="primary"
                                >
                                    <Icon>trending_up</Icon>
                                </Fab>
                                <div className="py-3"></div>
                                <IconButton size="small">
                                    <Icon>favorite</Icon>
                                </IconButton>
                                <p className="pb-4 m-0">65</p>

                                <IconButton size="small">
                                    <Icon>chat</Icon>
                                </IconButton>
                                <p className="m-0">65</p>
                            </div>
                            
                            <div className="flex-grow">
                                <div className="flex items-center justify-between pr-4 pb-3">
                                    <h5 className="m-0 font-medium capitalize">
                                        Delivery Send
                                    </h5>
                                    <span className="text-muted">
                                        12/03/2019
                                    </span>
                                </div>
                                <Divider></Divider>
                                <p className="m-0 pt-3">
                                    Total Load 2.100 Kg
                                </p>
                            </div>
                        </Card>
                        <div className="py-7"></div>
                        <Card className="overflow-unset flex py-4">
                            <div className="w-100 min-w-100 text-center">
                                <Fab
                                    className={clsx(
                                        'relative mt--14',
                                        classes.cardLeftVerticalLine
                                    )}
                                    size="medium"
                                    color="primary"
                                >
                                    <Icon>date_range</Icon>
                                </Fab>
                            </div>
                            <div className="flex-grow">
                                <div className="flex items-center justify-between pr-4 pb-3">
                                    <h5 className="m-0 font-medium capitalize">
                                        Maintenance Vehicle
                                    </h5>
                                    <span className="text-muted">
                                        12/03/2019
                                    </span>
                                </div>
                                <Divider></Divider>
                                <p className="m-0 pt-3">
                                    Routine Maintenance vehicle
                                </p>
                            </div>
                        </Card>
                    </Grid>

           
                </Grid>
                <div className="py-2"></div>
            </div>
        </Fragment>
    )
}

const projectSummery = [
    {
        title: 'Total Load Delivery',
        amount: '15.000 KG',
    },
    {
        title: 'Total Cost Expense',
        amount: 'IDR 7.500.000',
    },
    {
        title: 'Driver Rank',
        amount: 2,
    },
]

const paymentList = [
    {
        img: '/assets/images/payment-methods/master-card.png',
        type: 'Master Card',
        product: 'Bundled product',
        amount: 909,
    },
    {
        img: '/assets/images/payment-methods/paypal.png',
        type: 'Master Card',
        product: 'Bundled product',
        amount: 303,
    },
    {
        img: '/assets/images/payment-methods/visa.png',
        type: 'Paypal',
        product: 'Bundled product',
        amount: 330,
    },
    {
        img: '/assets/images/payment-methods/maestro.png',
        type: 'Paypal',
        product: 'Bundled product',
        amount: 909,
    },
    {
        img: '/assets/images/payment-methods/maestro.png',
        type: 'Master Card',
        product: 'Bundled product',
        amount: 909,
    },
]

export default UserProfileContent
