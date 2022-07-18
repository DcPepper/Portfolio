import React from "react"

class Skill extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            extend: false,
            size: false,


        }

        this.handleExtend = this.handleExtend.bind(this)


    }


    handleExtend() {
        let bool = this.state.extend
        let toggle = this.props.toggle
        if (this.props.stoggle) {
            this.props.handleToggle()


        }

        else {

            let sizeVar = this.state.size

            this.setState({ extend: !bool })

            setTimeout(() => this.setState({ size: !sizeVar }), 100)
        }




    }

    render() {
        let bool = this.state.extend
        let sizeVar = this.state.size
        let toggle = this.props.toggle;
        let stoggle = this.props.stoggle;

        if (stoggle) {
            return (
                <div style={{ width: "100%", display: "flex", height: "100%", alignItems: "center" }}>
                    <div className={toggle ? "btn-skill extend changeSize" : "btn-skill"}>
                        <span style={{ color: "var(--color-secondary)", textDecoration: "underline", fontSize: ".9rem" }}>Technologies et outils utilisés:</span>
                        <ul>
                            {this.props.tools.map(function (o, i) {
                                return <li className={toggle ? "li-tool extend" : "li-tool"} key={`${o}-${2 * i}`}>{o}</li>
                            })}
                        </ul>
                    </div>
                    <div className={toggle ? "btn-arrow left" : "btn-arrow"}>
                        <div className="arrow" onClick={this.handleExtend}>
                        </div>
                    </div>
                </div>
            )
        }

        if (!toggle) {
            return (
                <div style={{ width: "100%", display: "flex", height: "100%", alignItems: "center" }}>
                    <div className={bool ? sizeVar ? "btn-skill extend changeSize" : "btn-skill extend" : "btn-skill"}>
                        <span style={{ color: "var(--color-secondary)", textDecoration: "underline", fontSize: ".9rem" }}>Technologies et outils utilisés:</span>
                        <ul>
                            {this.props.tools.map(function (o, i) {
                                return <li className={bool ? "li-tool extend" : "li-tool"} key={`${o}-${2 * i}`}>{o}</li>
                            })}
                        </ul>
                    </div>
                    <div className={bool ? "btn-arrow left" : "btn-arrow"}>
                        <div className="arrow" onClick={this.handleExtend}>
                        </div>
                    </div>
                </div>
            )
        }

        else {
            return (
                <div style={{ width: "100%", display: "flex", height: "100%", alignItems: "center" }}>
                    <div className={!bool ? !sizeVar ? "btn-skill extend changeSize" : "btn-skill extend" : "btn-skill"}>
                        <span style={{ color: "var(--color-secondary)", textDecoration: "underline", fontSize: ".9rem" }}>Technologies et outils utilisés:</span>
                        <ul>
                            {this.props.tools.map(function (o, i) {
                                return <li className={!bool ? "li-tool extend" : "li-tool"} key={`${o}-${2 * i}`}>{o}</li>
                            })}
                        </ul>
                    </div>
                    <div className={!bool ? "btn-arrow left" : "btn-arrow"}>
                        <div className="arrow" onClick={this.handleExtend}>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Skill