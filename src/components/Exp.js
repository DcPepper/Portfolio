import ToggleSwitch from "./ToggleSwitch";
import { BiBriefcase } from "react-icons/bi";
import { useState } from "react";
import React from "react";
import Skill from "./Skill";

const expPro = [
    {
        entreprise: "GRTgaz",
        titre: "Responsable MCS / MCO",
        date: "Depuis Février 2021",
        id: "100",
        missions: [{
            name: "Leader opérationnel HSM",
            core: [
                "Nommage et adressage IP",
                "Ouverture des flux",
                "Opérateur de la cérémonie des clés",
                "Rédaction du document de cérémonie",
                "Importation des secrets"
            ],
            id: "1000"
        }, {
            name: "Gestion de la PKI",
            core: [
                "Responsable de l'autorité d'enregistrement de la PKI",
                "Raccoredement aux serveurs WSUS",
                "Publication des CRL sur le IIS",
                "Mise en place du séquestre des clés privées",
                "Conduite du changement",
                "Configuration de GPO"
            ],
            id: "1001"
        },

        ],
        outil: [
            "nShield HSM",
            "IDnomic PKI",
            "AWS CloudHSM",

            "Scripting Powershell / Bash",
            "Scripting Python / API",
            "Macro VBA",

            "Microsoft ADCS",
            "WSUS / AD",
            "Amazon WorkStations",

            "JIRA",
            "Agile",
            "Matrice des flux",
            "Cérémonie des clés"
        ]

    },
    {
        entreprise: "Synetis",
        id: "101",
        titre: "Consultant SecOps",
        date: "De septembre 2020 à Janvier 2021",
        missions: [{
            name: "Mise en place d'un bastion d'administration",
            core: [
                "Configuration DNS",
                "Configuration du serveur repository",
                "Gestion de l'Access Manager de la solution Wallix Bastion",
                "Configuration du Firewall Palo Alto"
            ],
            id: "1002"
        }],
        outil: [
            "Wallix Bastion",
            "Scripting Powershell / Bash",
            "Scripting Python",
            "WSUS / AD / Repository / DNS"
        ]

    },
    {
        entreprise: "Ramsey Santé",
        id: "102",
        titre: "Consultant SecOps",
        date: "De Octobre 2020 à Janvier 2021",
        missions: [{
            name: "POC modèle tiering Active Directory",
            core: [
                "Conception modèle tiering",
                "POC de la solution"
            ],
            id: "1003"
        }],
        outil: [
            "Microsoft Active Directory",
            "Priviledge Access Workstation",
            "GPO"
        ]

    },
    {
        entreprise: "Beijaflore",
        id: "103",
        titre: "Consultant Cyber Sécurité",
        date: "De Février 2020 à Aout 2020",
        missions: [{
            name: "Cyber Range",
            core: [
                "POC Cyber Range on-preimse et cloud",
                "Test de solution d'entrainement pour les blue et red team"
            ],
            id: "1004"
        }],
        outil: [
            "Snort",
            "Powershell / Excel",
            "Animation de réunion",

        ]

    },
    {
        entreprise: "Télécom SudParis",
        id: "104",
        titre: "Projet de fin d'étude",
        date: "De Septembre 2019 à Janvier 2020",
        missions: [{
            name: "Collecte de données concernant les CVE/CWE",
            core: [
                "Parsing de données web",
                "Maintien bases de données",
                "Mise en commun du code avec GitLab",
                "Analyse de données"
            ],
            id: "1005"
        }],
        outil: [
            "Scripting Python",
            "Gitlab",
            "MySQL"
        ]

    }
]

class Exp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isToggled: false,
            toggleChange: false
        }

        this.onToggle = this.onToggle.bind(this)
        this.switchToggle = this.switchToggle.bind(this)
    }

    onToggle() {
        this.setState({ toggleChange: true, isToggled: !this.state.isToggled })
    }



    switchToggle() {
        this.setState({ toggleChange: !this.state.toggleChange })


    }

    render() {
        const toggle = this.state.isToggled;
        const stoggle = this.state.toggleChange;
        const handleToggle = () => this.switchToggle;
        return (
            <React.Fragment>
                <div className="main-title">
                    <h2>Expériences <span> Professionnelles</span><span className="bg-text">Expériences Professionnelles</span></h2>
                    <ToggleSwitch toggle={this.state.isToggled} handleToggle={this.onToggle} sToggle={this.switchToggle} />
                </div>

                <div className="timeline">



                    {expPro.map(function (exp) {

                        return (
                            <React.Fragment key={`${exp.id}`}>
                                <div className="timeline-item" >
                                    <div style={{ width: "50%" }} >
                                        <div className="tl-icon">
                                            <BiBriefcase />
                                        </div>
                                        <h5>{exp.titre} <span> - {exp.entreprise}</span></h5>
                                        <p className="tl-duration"> {exp.date}</p>
                                        <div>

                                            <ul>
                                                {exp.missions.map(function (tache) {

                                                    return (
                                                        <React.Fragment key={tache.id + exp.id}>
                                                            <p className="tl-action-name">{tache.name ? tache.name + ":" : null}</p>
                                                            <p>{tache.core.map(function (c) {

                                                                return <li className="tl-skill" key={c + tache.id + exp.id}>{c}</li>
                                                            })}</p>
                                                        </React.Fragment>
                                                    )
                                                })}
                                            </ul>

                                        </div>

                                    </div>

                                    {exp.outil ? <Skill tools={exp.outil} toggle={toggle} stoggle={stoggle} handleToggle={handleToggle} /> : <Skill handleToggle={handleToggle} toggle={toggle} stoggle={stoggle} extend={toggle} size={toggle} />}
                                </div>

                            </React.Fragment>
                        )
                    })}
                </div>




            </React.Fragment >
        )
    }
}

export default Exp