import React from 'react'

const crudRoute = [
    {
        path: '/crud-table',
        exact: true,
        component: React.lazy(() => import('./CrudTable')),
    },
    {
        path: '/master-driver',
        exact: true,
        component: React.lazy(() => import('./MasterDriver')),
    },
    {
        path: '/add-driver',
        exact: true,
        component: React.lazy(() => import('./AddDriverForm')),
    },

    {
        path: '/master-vehicle',
        exact: true,
        component: React.lazy(() => import('./MasterVehicle')),
    },
    {
        path: '/add-vehicle',
        exact: true,
        component: React.lazy(() => import('./VehicleForm')),
    },

]


export default crudRoute
