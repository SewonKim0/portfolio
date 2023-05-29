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
            <a href="https://www.youtube.com/channel/UCOkuvvVxC3kBF26IcPeJk9g">
                <img
                    src={publicUrl + "/Images/youtube.png"}
                    width="auto"
                    height="100%"
                    alt="Icon of youtube"
                    title="Youtube"
                />
            </a>

            {/* Linkedin */}
            <a href="https://www.linkedin.com/in/sewon-kim-b0285423b/">
                <img
                    src={publicUrl + "/Images/linkedin.png"}
                    width="auto"
                    height="100%"
                    alt="Icon of linkedin"
                    title="Linkedin"
                />
            </a>

            {/* Github */}
            <a href="https://github.com/SewonKim0">
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