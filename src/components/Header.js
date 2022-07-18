import "../styles/index.css"
import { BiDownload } from "react-icons/bi"
import moi from "../images/moi.jpg"

function Header({ sec }) {

    const content = (
        <div className="header-content">
            <div className="left-header">
                <div className="h-shape"></div>
                <div className="image">
                    <img src={moi} alt="moi" />
                </div>
            </div>
            <div className="right-header">
                <h1 className="name">
                    Bonjour, je m'appelle <span> Thomas GENEST </span>
                    Consultant confirmé SecOps.
                </h1>
                <p>
                    Je suis un consultant confirmé en Sécurité Opérationnelle chez le cabinet de conseil Synetis.
                    J'adore apprendre et je me sers de ce site pour m'entrainer sur React.
                </p>
                <div className="btn-cont">
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&rel=0&autoplay=1" className="main-btn">
                        <span className="btn-text">Télécharger mon CV</span>
                        <span className="btn-icon"><BiDownload /></span>
                    </a>
                </div>
            </div>
        </div>
    )

    const head = sec === "home" ? <header className="section sec1 header active">{content}</header> : <header className="section sec1 header">{content}</header>
    return head
}

export default Header