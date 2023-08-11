import React, {useState, useEffect} from "react";
import { createRoot } from "react-dom/client";
import {BrowserRouter, json, Link, Route, Routes} from "react-router-dom";
import ListActivities from "./listActivities";
import LogHours from "./logHours";
import FrontPage from "./frontPage";



const element = document.getElementById("app");
const root = createRoot(element);

export async function fetchJSON(url) {
    const res = await fetch(url)
    if (!res.ok){
        throw new Error (`fail to load${res.status}`)
    }
    return await res.json()

}

export async function updateActivity(url, data){

   try {
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify({
                hours:data.hoursLogged,
            })
        })
        if (response.status === 200){
            console.log("Successful")
        } else if (response.status === 404)
            console.log("Failed")
    } catch (error) {console.log (error)}

}

export function useLoader(loadingFunction) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [data, setData] = useState();

    async function load() {
        try {
            console.log("Loading data...");
            setLoading(true);
            console.log(loadingFunction);
            setData(await loadingFunction());
            console.log("Data loaded successfully.");
        } catch (error) {
            console.error("Error loading data:", error);
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        console.log("useLoader effect triggered.");
        load();
    }, []);

    return { loading, error, data };
}

function Application() {
   return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<FrontPage />} />
                <Route path={"/ShowActivities/*"} element={<ListActivities />} />
                <Route path={"/logHours/*"} element={<LogHours />} />
            </Routes>
        </BrowserRouter>
    );
}


root.render(<Application />);





