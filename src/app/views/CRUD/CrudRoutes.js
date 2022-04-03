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
        component: React.lazy(() => import('./DriverForm')),
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
    {
        path: '/master-supplier',
        exact: true,
        component: React.lazy(() => import('./MasterSupplier')),
    },
    {
        path: '/add-supplier',
        exact: true,
        component: React.lazy(() => import('./AddSupplierForm')),
    },
    {
        path: '/master-item',
        exact: true,
        component: React.lazy(() => import('./MasterItemService')),
    },
    {
        path: '/add-item',
        exact: true,
        component: React.lazy(() => import('./AddItemServiceForm')),
    },
    {
        path: '/service-record',
        exact: true,
        component: React.lazy(() => import('./ServiceRecord')),
    },
    {
        path: '/add-service-record',
        exact: true,
        component: React.lazy(() => import('./AddServiceRecordForm')),
    },

]


export default crudRoute
