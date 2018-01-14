import React from 'react';
import Cell from './Cell';
class Result extends React.Component {
    display = data => {
        let rowClass = "col-lg-12";
        let a = data[0];
        return <Cell rowClass={rowClass} content={a.content} img={a.img}/>
    }
    render() {

        return (<div className="row">
            <div className=" col-lg-12">
                <div className="result">
                    <h1 id="result-language">{this.props.display[0].description}</h1>
                    <img alt={this.props.display[0].description} id="result-img" src={this.props.display[0].img}/>
                </div>
                <div id="result-content">
                    <p>{this.props.display[0].content}</p>
                    <button className="btn btn-default" onClick={this.props.restart}>Try again</button>

                </div>

            </div>

        </div>)
    }
}

export default Result;
