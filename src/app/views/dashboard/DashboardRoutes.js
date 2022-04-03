import React from 'react'
import { authRoles } from '../../auth/authRoles'

const dashboardRoutes = [
    {
        path: '/dashboard/alternative',
        component: React.lazy(() => import('./Analytics')),
        auth: authRoles.sa,
    },
    {
        path: '/dashboard/default',
        component: React.lazy(() => import('./Analytics2')),
        auth: authRoles.admin,
    },
    {
        path: '/dashboard/inventory-management',
        component: React.lazy(() => import('./InventoryManagement')),
        auth: authRoles.admin,
    },
    {
        path: '/dashboard/monitoring-vehicle',
        component: React.lazy(() => import('./MonitoringVehicle')),
        auth: authRoles.admin,
    },
    {
        path: '/dashboard/history-vehicle',
        component: React.lazy(() => import('./HistoryVehicle')),
        auth: authRoles.admin,
    },
    {
        path: '/dashboard/video-vehicle',
        component: React.lazy(() => import('./VideoVehicle')),
        auth: authRoles.admin,
    },
    {
        path: '/dashboard/dashboard-viewer',
        component: React.lazy(() => import('./DashboardViewer')),
        auth: authRoles.admin,
    },
]

export default dashboardRoutes
