import React from 'react';
class Result extends React.Component {
    render() {
        return (<div className="row">
            <div className=" col-lg-12">
                <div className="result">
                    <h1 id="result-language">{this.props.display[0].description}</h1>
                    <img alt={this.props.display[0].description} id="result-img" src={this.props.display[0].img}/>
                </div>
                <div id="result-content">
                    <p>{this.props.display[0].content}</p>
                    <div className="row button">
                        <div className=" col-lg-6">
                            <button id="restart" className="btn" onClick={this.props.restart}>Try again</button>
                        </div>
                        <div className="fb-share-button col-lg-6" data-href="https://mikah13.github.io/language-picker/" data-layout="button_count" data-size="large" data-mobile-iframe="true">
                            <button className="btn" id="facebook-share">
                                <a className="fb-xfbml-parse-ignore" rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmikah13.github.io%2Flanguage-picker%2F&amp;src=sdkpreparse">Share on Facebook</a>
                            </button>
                        </div>
                    </div>

                </div>

            </div>

        </div>)
    }
}

export default Result;
