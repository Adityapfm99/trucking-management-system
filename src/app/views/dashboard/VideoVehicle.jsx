import React from 'react'
import {  Icon, IconButton, Tooltip } from '@material-ui/core'

import { Breadcrumb } from 'app/components'
import { Link } from 'react-router-dom'
import ReactPlayer from "react-player"
import VehicleSingleMap from '../CRUD/vehicleSingleMap'

const VideoCamVehicle = () => {

    return (
        <div className="m-sm-30">
            <div className="mb-sm-30">
                
                <Breadcrumb
                    routeSegments={[
                        { name: 'Pages', path: '/pages' },
                        { name: 'Video Cam Vehicle B 7710 QWE' },
                    ]}
                />
             
            </div>
            <div className="overflow-auto">
            <div className="flex items-center">
                        <div className="flex-grow"></div>
                        <Link to={`/dashboard/monitoring-vehicle`}>
                        <Tooltip title="Back">
                            <IconButton>
                                <Icon className="text-red" fontSize="medium" color = "error">
                                    arrow_back
                                </Icon>
                            </IconButton>
                        </Tooltip>
                        </Link>
                        
                </div>
                <div className="h-full">
                    {/* <HistoryVehicleChart height={200} /> */}
                    <ReactPlayer
                        height={300}  
                        width={1620}
                        controls
                        playing
                        url="https://www.youtube.com/watch?v=nmGVE-quATk"
                    />
                    
                    <br></br>
                    <VehicleSingleMap height={200}/>
     
                </div>
              
            </div>
        </div>
    )
}

export default VideoCamVehicle
