import "./Projects.css"
import { useState, useEffect } from "react";
import { BiChevronsDown, BiChevronsUp } from "react-icons/bi";

export default function Projects({iconMap}) {
    //process env
    let processEnv = process.env.PUBLIC_URL;

    //state: show all projects
    const [showAll, setShowAll] = useState(false);

    //state: projects
    const [projects, setProjects] = useState(null);
    //fetch: projects
    useEffect(() => {
        fetch(processEnv + "/Api/projects.json")
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                setProjects(json);
            })
    }, [])
    //if projects is null: show loading msg
    if (projects === null) {
        return <p> Loading Projects... </p>;
    }
    
    //if there are 3 or less projects: display all projects
    if (projects.length <= 3) {
        return <div id="projects" className="nav-source">
            {/* Header */}
            <h3> Projects: </h3>

            {/* All Projects */}
            <div>
                {projects.map((project, index) => {
                    return <Project
                        project={project}
                        iconMap={iconMap}
                        key={index}
                    />
                })}
            </div>
        </div>
    }

    return <div id="projects" className="nav-source">
        {/* Header */}
        <h3> Projects: </h3>

        {!showAll ?
        //show first 3 projects
        <div>
            {projects.map((project, index) => {
                return index < 3 ?
                //if first 3 projects: use
                <Project
                    project={project}
                    iconMap={iconMap}
                    key={index}
                /> : 
                //else: dont use
                null;
            })}

            {/* See More Icon */}
            <div
                id="icon"
                onClick={() => {
                    //set show all
                    setShowAll(true);
                }}>
                <BiChevronsDown
                    size="3em"
                />
            </div>
        </div> :
        //show all projects
        <div>
            {projects.map((project, index) => {
                return <Project
                    project={project}
                    iconMap={iconMap}
                    key={index}
                />
            })}

            {/* See Less Icon */}
            <div 
                id="icon"
                onClick={() => {
                    //set showAll
                    setShowAll(false);
                }}>
                <BiChevronsUp
                    size="3em"
                />
            </div>
        </div>}
    </div>
}

function Project({project, iconMap}) {
    //process env
    let processEnv = process.env.PUBLIC_URL;

    //unpack project
    let {name, text, imgPath, icons, url} = project;

    return <div id="project">
        {/* Text */}
        <div id="text">
            {/* Name */}
            <a href={url}>
                <h3> {name} </h3>
            </a>

            {/* Description */}
            <p> {text} </p>

            {/* Icons */}
            <div>
                {icons.map((icon) => {
                    return <div>
                        <img
                            src={processEnv + iconMap[icon]}
                            width="auto"
                            height="100%"
                            alt={"Icon image of " + icon}
                            title={icon}
                        />
                    </div>
                })}
            </div>
        </div>

        {/* Image */}
        <div id="image">
            <img
                src={processEnv + imgPath}
                width="100%"
                height="100%"
                alt={"Image preview of project " + name}
            />
        </div>
    </div>
}