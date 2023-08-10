import React from "react";
import { Link } from "react-router-dom";

function FrontPage() {
    return (
        <div>
            <h1>Home page for Activities</h1>
            <ul>
                <li>
                    <Link to="/logHours">Log your hours</Link>
                </li>
                <li>
                    <Link to="/ShowActivities">Show Available Activities</Link>
                </li>
            </ul>
        </div>
    );
}

export default FrontPage;