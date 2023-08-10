import React, {useState, useEffect} from "react";
import { createRoot } from "react-dom/client";
import {BrowserRouter, json, Link, Route, Routes} from "react-router-dom";
import LogHours from "./logHours";
import ShowActivities from "./showActivities";


const element = document.getElementById("app");
const root = createRoot(element);


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

async function fetchJSON(url, options = {}){
    const res = await fetch(url, {
        method: options.method || "get",
        headers: options.json ? {"content-type" : "application/json"} : {},
        body: options.json && JSON.stringify(options.json),
    });

    if(!res.ok) {
        throw new Error(`Loading error: ${res.status} -> ${res.statusText};`)
    }

    if(res.status === 200){
        return await res.json();
    }
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




export function showActivities(){
    const [hours, setHours] = useState("")
    const [activity, setActivity] = useState("")
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
            <h1> Activities to come back to: </h1>
            {data.map((activity) => (
                <div key={activity.hours}>
                    <h1> {activity.activity} </h1>
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
    console.log(ListActivities)
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


root.render(<Application />);





