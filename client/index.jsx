import React from "react";
import { createRoot } from "react-dom/client";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {LogHours} from "./logHours";
import {ShowActivities} from "./showActivities";


function FrontPage() {
    return(
        <div>
            <h1> Home page for Activities</h1>
            <ul>
                <li>
                    <Link to={"/activities/logHours"}> Log your hours </Link>
                </li>
                <li>
                    <Link to={"/activities/showActivities"}> Show Available Activities </Link>
                </li>
            </ul>
        </div>
    );
}

function LogHours() {
    return (
        <div>
            <h1> Log your Hours </h1>
            {}
            <Link to={"/activities"}> Go back to home </Link> {}
        </div>
    );
}

function ShowActivities() {
    return (
        <div>
            <h1> Show Activities Available </h1>
            {}
            <Link to={"/activities"}> Go back to home </Link> {}
        </div>
    );
}


function Activities(){
    return(
        <Routes>
            <Route path={"/logHours"} element={<h1> Log your Hours </h1>} />
            <Route path={"/showActivities"} element={<h1> Show Activities Available </h1>} />
        </Routes>
    );
}


function Application() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<FrontPage />} />
                <Route path={"/activities/*"} element={<Activities />} />
            </Routes>
        </BrowserRouter>
    );
}

// root.render(<h1>Something Displayed!</h1>)

const element = document.getElementById("app");
const root = createRoot(element);

root.render(<Application />);





