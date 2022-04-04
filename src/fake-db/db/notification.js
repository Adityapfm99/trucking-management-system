import Mock from '../mock'
import shortId from 'shortid'

const NotificationDB = {
    list: [
        {
            id: shortId.generate(),
            heading: 'Reminder',
            icon: {
                name: 'notifications',
                color: 'primary',
            },
            timestamp: 1648828544000,
            title: 'Vehicle B 7013 ULO will overdue in 5 days',
            subtitle: 'Service Reminder',
            // path: 'chat',
        },
        {
            id: shortId.generate(),
            heading: 'Reminder',
            icon: {
                name: 'notifications',
                color: 'primary',
            },
            timestamp: 1648569344000,
            title: 'Vehicle B 7291 GHW will overdue Tommorow',
            subtitle: 'Service Reminder',
            // path: 'page-layouts/user-profile',
        },
       
    ],
}

Mock.onGet('/api/notification').reply((config) => {
    const response = NotificationDB.list
    return [200, response]
})

Mock.onPost('/api/notification/add').reply((config) => {
    const response = NotificationDB.list
    return [200, response]
})

Mock.onPost('/api/notification/delete').reply((config) => {
    let { id } = JSON.parse(config.data)
    console.log(config.data)

    const response = NotificationDB.list.filter(
        (notification) => notification.id !== id
    )
    NotificationDB.list = [...response]
    return [200, response]
})

Mock.onPost('/api/notification/delete-all').reply((config) => {
    NotificationDB.list = []
    const response = NotificationDB.list
    return [200, response]
})
