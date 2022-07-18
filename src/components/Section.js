import "../styles/index.css"
import data from "../datas/data";

const content = data[1];


function Section({ secName, id, sec }) {

    const thisSect = content.filter(s => s.name === id)[0]

    const sect = id === sec && <section className={`section ${secName} active`} id={id} key={id}>{thisSect.cont}</section >
    return sect
}

export default Section