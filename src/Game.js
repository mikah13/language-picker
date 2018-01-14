import React from 'react';
import Option from './Option';
import Result from './Result';
import Database from './language';
let database = Database;

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: database
        }
    }
    clickEvent = e => {


         let id = e.target.getAttribute('id')?e.target.getAttribute('id'):e.target.getAttribute('class').split(' ')[0];

        database = database.options[id - 1].content;
        this.setState({display: database})

    }
    displayContent = _ => {
        return database.options.length === 1
            ? <Result display={database.options}/>
            : <Option display={database.options} clickEvent={this.clickEvent} />
    }
    render() {

        return (<div className="container-fluid">
            <h1 id="title">{database.title}</h1>
            <div className="display">{this.displayContent()}</div>
        </div>)
    }
}

export default Game;
