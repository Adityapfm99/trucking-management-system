import React from 'react'
import AddDriver from './AddDriver'

import { Breadcrumb, SimpleCard } from 'app/components'

const AppForm = () => {
    return (
        <div className="m-sm-30">
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Material', path: '/material' },
                        { name: 'Form' },
                    ]}
                />
            </div>
            <SimpleCard title="Add Driver">
                <AddDriver />
            </SimpleCard>
         
        </div>
    )
}

export default AppForm
