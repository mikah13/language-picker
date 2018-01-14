import React from 'react';
import Cell from './Cell';
class Result extends React.Component {
    display = data => {
        let rowClass = "col-lg-12";
        let a = data[0];
        return <Cell rowClass={rowClass} content={a.content} img={a.img}/>
    }
    render() {

        return (<div className="row"><h1 id="result-language">{this.props.display[0].description}</h1>{this.display(this.props.display)}</div>)
    }
}

export default Result;
