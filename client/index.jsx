import React, {useState, useEffect} from "react";
import { createRoot } from "react-dom/client";
import {BrowserRouter, json, Link, Route, Routes} from "react-router-dom";
import LogHours from "./logHours";


const element = document.getElementById("app");
const root = createRoot(element);


function FrontPage() {
    const { loading, error, data } = useLoader(async () => {
    return fetchJSON("/api/activities");
});


    if(loading) {
        return <div> Still Loading... </div>
    }

    if(error) {
        return (
            <div>
                <h1> Error </h1>
                <div> {error.toString()} </div>
            </div>
        );
    }

    return(
        <div>
            <h1> Home page for Activities</h1>
            <p>Its currently available: {
                data.length
            }</p>
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

async function fetchJSON(url) {
    const res = await fetch(url)
    if (!res.ok){
        throw new Error (`fail to load${res.status}`)
    }
    return await res.json()

}

function useLoader(loadingFunction){
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [data, setData] = useState();

    async function load(){
        try{
            setLoading(true);
            setData(await loadingFunction());
        }
        catch (error){
            setError(error);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => load(), []);

    return { loading, error, data };
}



export function ShowActivities(ListActivities){
    const { loading, error, data } = useLoader(async () => {
        return fetchJSON("/api/activities");
    });


    if(loading) {
        return <div> Still Loading... </div>
    }

    if(error) {
        return (
            <div>
                <h1> Error </h1>
                <div> {error.toString()} </div>
            </div>
        );
    }

    return (
        <div>
            <h1> Available Activities: </h1>
            <div>
            <div>
                <Link to={"/"}> Go back to home </Link>
            </div>
            <div>
                <Link to={"/logHours"}> Log your hours </Link>
            </div>
        </div>
            {data.map((activity) => (
                <div key={activity.hours}>
                    <h1> {activity.activity} </h1>
                    <p> Hours: {activity.hours} </p>
                </div>
            ))}
        </div>
    );
}



    async function handleSumbit(e){
        e.preventDefault()

        await fetchJSON("/api/activities", {
            method: "post",
            json: {hours, activity}
        })

        setHours("")
        setActivity("")

}


function Application() {
   async function ListActivities(){
        return await fetchJSON("api/activities")

    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<FrontPage ListActivities={ListActivities} />} />
                <Route path={"/ShowActivities/*"} element={<ShowActivities ListActivities={ListActivities} />} />
                <Route path={"/logHours/*"} element={<LogHours />} />
            </Routes>
        </BrowserRouter>
    );
}

// root.render(<h1>Something Displayed!</h1>)


root.render(<Application />);





