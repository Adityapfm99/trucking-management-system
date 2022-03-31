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
]

export default crudRoute
