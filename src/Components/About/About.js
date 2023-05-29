import "./About.css";

export default function About() {
    let processEnv = process.env.PUBLIC_URL;

    return <div id="about">
        {/* Text */}
        <div id="text">
            <h3> About: </h3>
            <p> I am an artist who appreciates the beauty of creativity. I would be fascinated to integrate my ideas into the field of computer science. </p>
        </div>

        {/* Image */}
        <div id="image">
            <img
                src={processEnv + "/Images/me.jpg"}
                width="100%"
                height="auto"
                alt="Image of me playing a piano"
            />
        </div>
    </div>
}