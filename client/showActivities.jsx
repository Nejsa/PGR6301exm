import React from "react";
import {Link} from "react-router-dom";

function ShowActivities() {
    return (
        <div>
            <div>
            <h1> Show Activities Available </h1>
                <Link to={"/logHours"}> Log your hours </Link>
            </div>
            <div>
                <Link to={"/"}> Go back to home </Link>
            </div>
        </div>
    );
}

export default ShowActivities;
