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
        let id = e.target.getAttribute('id')
            ? e.target.getAttribute('id')
            : e.target.getAttribute('class').split(' ')[0];
        database = database.options[id - 1].content;
        this.setState({display: database})

    }

    restart = _ => {
        database = Database;
        this.setState({display: database})
    }
    displayContent = _ => {
        return database.options.length === 1
            ? <Result display={database.options} restart={this.restart}/>
            : <Option display={database.options} clickEvent={this.clickEvent}/>
    }
    render() {

        return (<div className="container-fluid">
            <h1 id="title">{database.title}</h1>
            <div className="display">{this.displayContent()}</div>
            <div className="footer" id="facebook">
                <div className="fb-like" data-href="https://mikah13.github.io/language-picker/" data-layout="standard" data-action="like" data-size="large" data-show-faces="true" data-share="true"></div>
            </div>
        </div>)
    }
}

export default Game;
