import "./Upcoming.css";
import { useState, useEffect } from "react";

export default function Upcoming() {
    //processEnv
    let processEnv = process.env.PUBLIC_URL;

    //state: upcomingList
    const [upcomingList, setUpcomingList] = useState(null);
    //fetch: upcomingList
    useEffect(() => {
        fetch(processEnv + "/Api/upcoming.json")
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                setUpcomingList(json);
            })
    }, [])
    //if upcomingList is null: show loading msg
    if (upcomingList === null) {
        return <p> Loading UpcomingList... </p>;
    }

    return <div id="upcoming" className="nav-source">
        {/* Title */}
        <h3> Upcoming </h3>

        {/* Upcoming List */}
        {upcomingList.map((upcomingEntry) => {
            //unpack upcomingEntry
            let {name, description, url, urlPath} = upcomingEntry;
            
            //return upcomingEntry
            return <div>
                {/* Title */}
                {url ?
                //if url exists: use url title
                <a href={urlPath}>
                    <h3> {name} </h3>
                </a> :
                //else: use normal title
                <h3> {name} </h3>}

                {/* Description */}
                <p> {description} </p>
            </div>
        })}
    </div>
}