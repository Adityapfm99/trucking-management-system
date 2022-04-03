import React from 'react'

const serviceReminderRoutes = [
    {
        path: '/service-reminder',
        exact: true,
        component: React.lazy(() => import('./ServiceReminderCalendar')),
    },
]

export default serviceReminderRoutes
