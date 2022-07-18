import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { BiMessageAltDetail } from "react-icons/bi";
import { BiBriefcase } from "react-icons/bi";
import { BiCodeCurly } from "react-icons/bi";
import { BiUser } from "react-icons/bi"
import { BiCog } from "react-icons/bi"
import { GoMarkGithub } from "react-icons/go"
import { useState } from "react";
import { BiBeenHere } from "react-icons/bi"
import { BiPhone } from "react-icons/bi"
import { BiMailSend } from "react-icons/bi"
import { BsTwitter } from "react-icons/bs"
import { BsTwitch } from "react-icons/bs"
import { BsYoutube } from "react-icons/bs"
import { BiSend } from "react-icons/bi"

import Exp from "../components/Exp";

import Skill from "../components/Skill";






class NameForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            subject: "",
            body: "",
            send: "no-visible"
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        if (event.target.name === "name") {
            this.setState({ name: event.target.value });
        } else if (event.target.name === "email") {
            this.setState({ email: event.target.value });
        } else if (event.target.name === "subject") {
            this.setState({ subject: event.target.value });
        } else {
            this.setState({ body: event.target.value });
        }
    }

    handleSubmit(event) {

        this.setState({ send: "visible" })
        setTimeout(() => this.setState({ send: "no-visible" }), 3000)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="contact-form">
                <div className="input-control i-c-2">
                    <input type="text" required placeholder="Votre prénom" name="name" value={this.state.name} onChange={this.handleChange} />
                    <input type="email" placeholder="Email en copie" name="email" value={this.state.email} onChange={this.handleChange} />
                </div>
                <div className="input-control" >
                    <input type="text" required placeholder="Object" name="subject" value={this.state.subject} onChange={this.handleChange} />
                </div>
                <div className="input-control">
                    <textarea placeholder="Laissez votre message ici..." name="body" id="" cols={15} rows={8} value={this.state.body} onChange={this.handleChange}></textarea>
                </div>
                <div className="submit-btn">
                    <a href={`mailto:genest.thomas.ba@gmail.com?subject=${this.state.subject}&body=${this.state.body}&cc=${this.state.emial}`} className="main-btn" onClick={this.handleSubmit}>
                        <span className="btn-text">Envoyer</span>
                        <span className="btn-icon"><BiSend /></span>
                    </a>
                </div>
                <div className={`contact-alert ${this.state.send}`}>Merci {this.state.name} pour ton message !</div>


            </form >
        )
    }
}

Skill.defaultProps = {
    tools: []
}


const techno = [
    {
        name: "Flagle Python",
        duree: "6 ans",
        link: "https://github.com/DcPepper/Flagdle",
        id: "10"
    },
    {
        name: "Flagle Web",
        duree: "1 ans",
        link: "https://github.com/DcPepper/flagdle_web",
        id: "11"
    },
    {
        name: "Pentest",
        duree: "1 ans",
        link: "https://github.com/DcPepper/TryHackMe",
        id: "12"
    },
    {
        name: "PFE",
        duree: "2 ans",
        link: "https://www.synetis.com/",
        id: "13"
    }
]



const content = [{
    name: "about",
    cont:
        <React.Fragment>
            <div className="main-title">
                <h2>A propos de <span> moi</span><span className="bg-text">A propos de moi</span></h2>
            </div>
            <div className="about-container">
                <div className="left-about">
                    <h4>Mes projets personnels</h4>
                    <p>
                        En complément de ma formation en école d'ingénieur, j'ai décidé d'approfondir mes connaissances à travers différents projets personnels.</p>
                    <p> Mon plus gros projet à ce jour est la réalisation de mon site <a style={{ color: "var(--color-secondary)" }} href="https://dcpepper.fr/flagle">Flagle</a>. Ce jeu quotidien vous propose un drapeau en noir et blanc. Votre rôle est de retrouver toutes les couleurs qui composent ce drapeau.
                    </p>
                    <p>
                        J'ai également participé à plusieurs Capture The Flag. Des compétitions courtes durant laquelle des hackeurs essayent de résoudre le plus de problèmes possibles. <a style={{ color: "var(--color-secondary)" }} href="https://tryhackme.com/p/DcP3pper"> TryHackMe</a> est une plateforme sur laquelle j'ai beaucoup progressé.
                    </p>
                </div>
                <div className="right-about">

                    {techno.map(function (tech, i) {
                        return (
                            <React.Fragment>
                                <div className="about-item" key={`${tech.id}`}>
                                    <div className="abt-text" >
                                        <p className="large-text">{tech.name}</p>
                                        <p className="small-text">{tech.duree}</p>
                                    </div>
                                    <div className="about-link">
                                        <a href={tech.link} target="_blank" rel="noreferrer"><span><GoMarkGithub /></span></a>
                                    </div>
                                </div>

                            </React.Fragment>

                        )
                    })}


                </div>
            </div>
            {//<h4 className="stat-title">Expériences Professionnelles</h4>
            }
        </React.Fragment>
}, {
    name: "portfolio",
    cont:
        <Exp />
}, {
    name: "contact",
    cont:
        <div className="contact-container">
            <div className="main-title">
                <h2>Contactez <span>Moi</span><span className="bg-text">Contactez moi</span></h2>
            </div>
            <div className="contact-content-con">
                <div className="left-contact">
                    <h4>Information de contact</h4>
                    <p>
                        N'hésitez pas à me faire vos remarques concernant ce site.<br />
                        Toutes les occastions sont bonnes pour s'améliorer 🙂
                    </p>

                    <div className="contact-info">
                        <div className="contact-item">
                            <div className="icon">
                                <BiBeenHere />
                                Localisation:
                            </div>

                            <p>  Seine-et-Marne, France </p>
                        </div>


                        <div className="contact-item">
                            <div className="icon">
                                <BiMailSend />
                                Mail:
                            </div>
                            <p> genest.thomas.ba@gmail.com </p>
                        </div>



                        <div className="contact-item">
                            <div className="icon">
                                <BiPhone />
                                Téléphone:
                            </div>
                            <p> +336.20.51.73.66 </p>
                        </div>

                    </div>
                    <h4>Mes réseaux sociaux</h4>
                    <div className="contact-icons">

                        <div className="contact-icon">
                            <a href="https://www.twitter.com/dcp3pper" target="_blank">
                                <BsTwitter />
                            </a>
                        </div>
                        <div className="contact-icon">
                            <a href="https://www.twitch.com/dcp3pper" target="_blank">
                                <BsTwitch />
                            </a>
                        </div>
                        <div className="contact-icon">
                            <a href="https://github.com/DcPepper" target="_blank">
                                <GoMarkGithub />
                            </a>
                        </div>
                        <div className="contact-icon">
                            <a href="https://www.youtube.com/channel/UCmbAeOtqjMeonIySj1maIGQ/featured" target="_blank">
                                <BsYoutube />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="right-contact">
                    <NameForm />
                </div>
            </div>

        </div>
}]

const sec = [
    {
        cover: <BiHomeAlt />,
        id: "0",
        name: "home"
    }, {
        cover: <BiBriefcase />,
        id: "2",
        name: "portfolio"
    },
    {
        cover: <BiUser />,
        id: "1",
        name: "about"
    },

    {
        cover: <BiMessageAltDetail />,
        id: "4",
        name: "contact"
    }

]

const data = [sec, content]

export default data