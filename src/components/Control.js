import React from "react";
import data from "../datas/data";

const sect = data[0]

class Control extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            active: "home"
        }

        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(e, k) {
        this.props.changeSec(k)
        this.setState(
            {
                active: k
            }
        )

    }
    render() {

        const sections = sect.map(function (s, i) {

            if (s.name === this.state.active) {

                return <div className={`control control-${i + 1} active-btn`} key={`${s.id}`} data-id={s.name} onClick={e => this.handleChange(e, s.name)} title={s.name}>{s.cover}</div>
            } else {
                return <div className={`control control-${i + 1}`} key={`${s.id}`} data-id={s.name} onClick={e => this.handleChange(e, s.name)} title={s.name}>{s.cover} </div>
            }
        }.bind(this))


        return (
            <div className="controlls">
                {sections}

            </div>
        )

    }
}

export default Control