import React from "react";
import { Link } from "react-router-dom";
import { fetchJSON, useLoader } from "./index";

function ListActivities() {
    // Dummy data no longer in use cause of MongoDB data
    const activities = [
        { activity: "Refactor Code", available: true },
        { activity: "Finish Frontend Code", available: true },
        { activity: "Finish Backend Code", available: true },
    ];

    const { loading, error, data } = useLoader(async () => {
        return fetchJSON("/api/activities")
    })

    const availableActivities = activities.filter((activity) => activity.available);
    console.log(data)
    if (loading) {``
        return <div> Still Loading... </div>;
    }

    if (error) {
        return (
            <div>
                <h1> Error </h1>
                <div> {error.toString()} </div>
            </div>
        );
    }

    return (
        <div>
            <h1>Available Activities:</h1>
            <div>
                <Link to="/">Go back to home</Link>
            </div>
            <p>Number of Available Activities: {data?.length}</p>
            <ul>
                {data?.map((activity) => (
                    <li key={activity.activity}>{activity.activity}</li>



                ))}
            </ul>
        </div>
    );
}




export default ListActivities;