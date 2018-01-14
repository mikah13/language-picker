import React from 'react';

class Cell extends React.Component {

    render() {
        return (<div onClick={this.props.clickEvent} id={this.props.id} className={"cell " + this.props.rowClass}>
            <div className={this.props.id + " cell-img"}><img onMouseOver={this.mouseOver} alt={`img${this.props.id}`} className={this.props.id} src={this.props.img}/></div>
            <p className={this.props.id}>{this.props.content}</p>
        </div>)
    }
}

export default Cell;
