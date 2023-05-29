import "./Navbar.css";

export default function Navbar() {
    return <div id="navbar">
        {/* About */}
        <a href="#">
            <h3> About </h3>
        </a>

        <h3> | </h3>

        {/* Skills */}
        <a href="#">
            <h3> Skills </h3>
        </a>

        <h3> | </h3>

        {/* Albums */}
        <a href="#">
            <h3> Albums </h3>
        </a>

        <h3> | </h3>

        {/* Projects */}
        <a href="#">
            <h3> Projects </h3>
        </a>

        <h3> | </h3>

        {/* Upcoming */}
        <a href="#">
            <h3> Upcoming </h3>
        </a>
    </div>
}