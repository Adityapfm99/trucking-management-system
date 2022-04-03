import React, { useState } from 'react'
import { Divider, Tab, Tabs } from '@material-ui/core'
import { Breadcrumb } from 'app/components'
import Analytics from './Analytics'
import Analytics2 from './Analytics2'

const DashboardViewer = () => {
    const [tabIndex, setTabIndex] = useState(0)

    const handleTabChange = (e, value) => {
        setTabIndex(value)
    }

    return (
        <div className="m-sm-30">
            {/* <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Pages', path: '/pages' },
                        { name: 'View Customer' },
                    ]}
                />
            </div> */}
            <Tabs
                className="mt-4"
                value={tabIndex}
                onChange={handleTabChange}
                indicatorColor="primary"
                textColor="primary"
            >
                {tabList.map((item, ind) => (
                    <Tab
                        className="capitalize"
                        value={ind}
                        label={item}
                        key={ind}
                    />
                ))}
            </Tabs>
            <Divider className="mb-6" />

            {tabIndex === 0 && <Analytics/>}
            {tabIndex === 1 && <Analytics2 />}
        </div>
    )
}

const tabList = ['Summary', 'Detail']

export default DashboardViewer
