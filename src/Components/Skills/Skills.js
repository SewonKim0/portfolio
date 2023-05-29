import "./Skills.css";
import { useState, useEffect } from "react";

export default function Skills({iconMap}) {
    //processEnv
    let processEnv = process.env.PUBLIC_URL;

    //state: categories
    const [categories, setCategories] = useState(null);
    //fetch: categories
    useEffect(() => {
        fetch(processEnv + "/Api/categories.json")
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                setCategories(json);
            })
    }, [])

    //if iconMap is null: display loading msg
    if (iconMap === null) {
        return <p> Loading IconMap... </p>;
    }
    //if categories is null: display loading msg
    if (categories === null) {
        return <p> Loading Categories... </p>;
    }

    return <div id="skills" className="nav-source">
        {categories.map((category) => {
            return <Category
                category={category}
                iconMap={iconMap}
            />
        })}
    </div>
}

function Category({category, iconMap}) {
    //processEnv
    let processEnv = process.env.PUBLIC_URL;

    //if category is null: return loading msg
    if (category === null) {
        return <p> Loading Category... </p>;
    }
    //if iconMap is null: return loading msg
    if (iconMap === null) {
        return <p> Loading IconMap... </p>;
    }

    //unpack category
    let {title, icons} = category;
    
    return <div id="category">
        {/* Title */}
        <p> {title} </p>

        {/* Icons */}
        <div>
            {icons.map((icon) => {
                return <div>
                    <img
                        src={processEnv + iconMap[icon]}
                        width="auto"
                        height="100%"
                        alt={"Icon of " + icon}
                        title={icon}
                    />
                </div>
            })}
        </div>
    </div>
}