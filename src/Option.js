import React from 'react';
import Cell from './Cell';
class Option extends React.Component {

    display = data => {
        let len = data.length;
        let rowClass = `col-lg-${ 12 / len} col-md-${ 12 / len} col-sm-6 col-xs-6`
        return this.props.display.map((a, b) => {
            return <Cell key={b} rowClass={rowClass} id={a.id} content={a.description} clickEvent={this.props.clickEvent} img={a.img}/>
        })
    }
    render() {

        return (<div className="row">{this.display(this.props.display)}</div>)
    }
}
export default Option;
