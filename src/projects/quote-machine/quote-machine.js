import React from 'react'
import quotes from './quotes.json'

export default class QuoteMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuote: null,
            currentAuthor: null
        }
        this.getQuote = this.getQuote.bind(this);
        this.getColor = this.getColor.bind(this)
    }

    componentDidMount() {
        this.getQuote()
    }

    getColor = () => {
        return `hsl(${Math.ceil(Math.random() * 359)}, 100%, 90%)`
    }

    getQuote = () => {

        let randomNumber = Math.round(Math.random() * (quotes.quotes.length - 1));
        let randomColor = this.getColor()
        
        this.setState({
            currentQuote: quotes.quotes[randomNumber].quote,
            currentAuthor: quotes.quotes[randomNumber].author
        })

        document.getElementById('quote-box').style.backgroundColor = randomColor;
        document.getElementById('quote-box').style.boxShadow = `7px 7px ${randomColor}, 10px 10px black`
    }



    render() {
        return (
            <div id="quote-box" className="project">
                <h2>Random Quote Machine</h2>
                <div id="text-row">
                    <h3 id="text">{this.state.currentQuote}</h3>
                </div>

                <div id="author-row">
                    <h4 id="author">-{this.state.currentAuthor}</h4>
                </div>
       
                <div id="button-row">
                    <button onClick={this.getQuote} id="new-quote" className="btn btn-danger">New Quote</button>
                    <button className="btn btn-primary"><a href={`https://www.twitter.com/intent/tweet?text=${this.state.currentQuote}%0A-${this.state.currentAuthor}`} rel="noopener noreferrer" target="_blank">Tweet Quote</a></button>
                </div>
            </div>
        )   
    }

}