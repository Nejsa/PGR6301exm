import React, { useState } from "react";
import { Link } from "react-router-dom";
import {fetchJSON, updateActivity, useLoader} from "./index";

function LogHours() {
    const [selectedActivity, setSelectedActivity] = useState("");
    const [hoursLogged, setHoursLogged] = useState(0);

    const { loading, error, data } = useLoader(async () => {
        return fetchJSON("/api/activities");
    });

    const handleLogHours = () => {
        const activity = data?.find((act) => act.activity === selectedActivity.activity);
        if (activity) {
            if (hoursLogged + 1 <= activity.maxHours) {
                setHoursLogged(hoursLogged + 1);
            } else {
                alert("Maximum hours reached for this activity!");
            }
        }
    };

    const saveHoursToApi = async () => {
        try {
            await updateActivity(`/api/activities/${selectedActivity?._id}` ,{selectedActivity})
            } catch(error){
                console.log(error)
            }
        }

    if (loading) {
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
            <h1>Log Hours for Activities:</h1>
            <div>
                <Link to="/">Go back to home</Link>
            </div>
            {data?.map((activity, index) => (
                <div key={index}>
                    <h2>{activity.activity}</h2>
                    <p>
                        Hours: {activity.hours} / {activity.maxHours}
                    </p>
                    <button onClick={() => setSelectedActivity(activity)}>
                        Log Hour(s)
                    </button>
                </div>
            ))}

            {selectedActivity && (
                <div>
                    <h2>Log Hours for {selectedActivity.activity}</h2>
                    <p>Hours Logged: {hoursLogged}</p>
                    <button onClick={handleLogHours}>Log Hour(s)</button>
                    <button onClick={saveHoursToApi}>Save hour(s)</button>
                </div>

            )}
        </div>
    );
}

export default LogHours;

