import "./Header.css";

export default function Header() {
    let publicUrl = process.env.PUBLIC_URL;

    return <div id="header">
        {/* Title */}
        <div id="title">
            <h2> Sewon Kim </h2>
        </div>

        {/* Icons */}
        <div id="icons">
            {/* Youtube */}
            <a>
                <img
                    src={publicUrl + "/Images/youtube.png"}
                    width="auto"
                    height="100%"
                    alt="Icon of youtube"
                    title="Youtube"
                />
            </a>

            {/* Linkedin */}
            <a>
                <img
                    src={publicUrl + "/Images/linkedin.png"}
                    width="auto"
                    height="100%"
                    alt="Icon of linkedin"
                    title="Linkedin"
                />
            </a>

            {/* Github */}
            <a>
                <img
                    src={publicUrl + "/Images/github.png"}
                    width="auto"
                    height="100%"
                    alt="Icon of github"
                    title="Github"
                />
            </a>
        </div>
    </div>
}