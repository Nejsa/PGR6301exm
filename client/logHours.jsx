import React from "react";
import {Link} from "react-router-dom";



function LogHours() {
    return (
        <div>
            <div>
                <h1> Log your Hours </h1>
                <Link to={"/"}> Go to Activities </Link>
            </div>
            <div>
                <Link to="/">Go back to home</Link>
            </div>
        </div>
    );
}

export default LogHours;
