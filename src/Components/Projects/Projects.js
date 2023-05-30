import "./Projects.css"
import { useState, useEffect } from "react";

export default function Projects({iconMap}) {
    //process env
    let processEnv = process.env.PUBLIC_URL;

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

    return <div id="projects">
        {/* Header */}
        <h3> Projects: </h3>

        {/* Project List */}
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