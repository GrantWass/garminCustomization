import React, { useState, useEffect } from 'react';
import MileageGraph from './MileageGraph';
import LastRun from './LastRun'


const MockData = [
    {
      "date": "2023-05-17",
      "day": "monday",  
      "distance_miles": 5.2,
      "duration_minutes": 45,
      "elevation_gain_feet": 150
    },
    {
      "date": "2023-05-18",
      "day": "tuesday",  
      "distance_miles": 6.5,
      "duration_minutes": 55,
      "elevation_gain_feet": 200
    },
    {
      "date": "2023-05-19",
      "day": "wednesday",  
      "distance_miles": 4.3,
      "duration_minutes": 40,
      "elevation_gain_feet": 120
    },
    {
      "date": "2023-05-20",
      "day": "thursday",  
      "distance_miles": 7.1,
      "duration_minutes": 65,
      "elevation_gain_feet": 250
    },
    {
      "date": "2023-05-21",
      "day": "friday",  
      "distance_miles": 3.8,
      "duration_minutes": 35,
      "elevation_gain_feet": 100
    },
    {
      "date": "2023-05-22",
      "day": "saturday",  
      "distance_miles": 5.9,
      "duration_minutes": 50,
      "elevation_gain_feet": 180
    },
    {
      "date": "2023-05-23",
      "day": "sunday",  
      "distance_miles": 6.2,
      "duration_minutes": 53,
      "elevation_gain_feet": 210
    }
  ]
  
  const Interface = () => {
    return (
    <div className="grid-container">
      <div className="grid_spot last-run">
        <LastRun/>
      </div>
      <div className="grid_spot item2">
        Weekly Mileage
      </div>
      <div className="grid_spot mileage-graph">
        <MileageGraph data={MockData} />
      </div>
      <div className="grid_spot item4">
        Stats
      </div>
      <div className="grid_spot item5">
        IDK
      </div>
    </div>
    );
  };
  
  export default Interface;
