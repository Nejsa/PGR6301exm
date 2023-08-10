import React from "react";
import { createRoot } from "react-dom/client";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import LogHours from "./logHours";
import ShowActivities from "./showActivities";



function FrontPage() {
    return(
        <div>
            <h1> Home page for Activities</h1>
            <ul>
                <li>
                    <Link to={"/logHours"}> Log your hours </Link>
                </li>
                <li>
                    <Link to={"/ShowActivities"}> Show Available Activities </Link>
                </li>
            </ul>
        </div>
    );
}


function Application() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<FrontPage />} />
                <Route path={"/ShowActivities/*"} element={<ShowActivities />} />
                <Route path={"/logHours/*"} element={<LogHours />} />
            </Routes>
        </BrowserRouter>
    );
}

// root.render(<h1>Something Displayed!</h1>)

const element = document.getElementById("app");
const root = createRoot(element);

root.render(<Application />);





