import Header from "./components/Header"
import Section from "./components/Section";
import Control from "./components/Control";
import "./styles/index.css"
import React from "react";
import "./App.css"
import { WiMoonAltFirstQuarter } from "react-icons/wi"

class App extends React.Component {

  componentDidUpdate(prevProps, prevState) {

    if (this.state.light !== prevState.light) {
      document.body.classList.toggle("light")
    }

  }

  componentDidMount() {

  }

  constructor(props) {
    super(props)

    this.state = {
      activeSec: "home",
      light: false
    }

    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      light: !this.state.light
    })
  }

  handleUpdate(n) {
    this.setState({
      activeSec: n
    })
  }

  render() {

    return (
      <div className={"App"} key="App">

        <Header sec={this.state.activeSec} />
        <Section secName="sec2" id="portfolio" sec={this.state.activeSec} />
        <Section secName="sec3" id="about" sec={this.state.activeSec} />

        <Section secName="sec5" id="contact" sec={this.state.activeSec} />
        <Control changeSec={this.handleUpdate} />
        <div className="light-toggle" onClick={this.handleClick}><WiMoonAltFirstQuarter /></div>
      </div>
    )
  };
}




export default App;
