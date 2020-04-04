import './HangMan.css';
import step01 from './images/0.jpg'
import step02 from './images/1.jpg'
import step03 from './images/2.jpg'
import step04 from './images/3.jpg'
import step05 from './images/4.jpg'
import step06 from './images/5.jpg'
import step07 from './images/6.jpg'
import { PROGRAMING_LANG } from './randomWords'
import React, { Component } from 'react'
class HangMan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosen_words: "",
            img: "", 
            count: 0,
            _buttons: [],
             randomWord: PROGRAMING_LANG[Math.floor(Math.random() * PROGRAMING_LANG.length)],
            dashes: [], Decision:""

        }

    }
    componentDidMount(){
      var _dash=this.state.randomWord.split("").map((letter)=>{
          "-"
      })
       this.setState({
           dashes: _dash.fill("-")
       }, ()=>{
           console.log(this.state.dashes)
       })
    }
    handleit = (_count) => {
        this.setState({
            count: _count
        }, () => {
            if (this.state.count === 1) {
                this.setState({
                    img: step01
                })
            }
            else if (this.state.count === 2) {
                this.setState({
                    img: step02
                })
            }
            else if (this.state.count === 3) {
                this.setState({
                    img: step03
                })
            }
            else if (this.state.count === 4) {
                this.setState({
                    img: step04
                })
            }
            else if (this.state.count === 5) {
                this.setState({
                    img: step05
                })
            }
            else if (this.state.count === 6) {
                this.setState({
                    img: step06
                })
            }
            else if (this.state.count === 7) {
                this.setState({
                    img: step07
                })
            }
        })

    }
    handleGuess = (e) => {
        var _count = this.state.count + 1

        if (this.state.randomWord.includes(e.target.value) === false) {
           
            this.handleit(_count);
            e.target.disabled = true;
            e.target.style.color = "#d6dfdf";
            e.target.style.backgroundColor = "#f10";
            e.target.style.borderColor = "#f10";
            e.target.style.boxShadow = "0 0 40px #f10";
            if(this.state.img===step07){
                this.setState({
                    Decision:"You Lost"
                      
                })
            }
        }
        else {
            var _newArr=this.state.dashes;

            for(let i=0;i<this.state.randomWord.length;i++){

                if(this.state.randomWord[i]===e.target.value){
                    console.log("comes here");
                _newArr[i]=e.target.value
                }
            }
             this.setState({
                 dashes:_newArr
             })     
             if(this.state.dashes===this.state.randomWord){
                 this.setState({
                    Decision:"You Won"
                    })
                    
             }        
        }
    }

    render() {
        return (
            <div className="Hangman">


                <div className="d-flex align-items-center justify-content-center">
                    <img src={this.state.img} />
                </div>
                <div className="d-flex align-items-center justify-content-center" id="hangman_sec_2">
                    {
                        this.state.dashes.map((letter, index) => (
                            <p id={index} key={index} style={{
                                letterSpacing: "1em",
                                margin: ".4em -1em .2em 0",
                                fontSize: "1.5rem",
                                color: "#07ffc9"
                            }}>{letter}</p>
                        ))
                    }
                
                <p className="text-center text-warning mt-4">{this.state.Decision}</p>
                </div>
                <div className="flex-wrap-wrap">
                    {
                        "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (

                            <button
                                key={letter}
                                value={letter}
                                style={{
                                    background: "#" + Math.floor(Math.random() * 16777215).toString(16),
                                    borderRadius: "10px",
                                    margin: "18px 8px 10px 13px",
                                    fontSize: "2.5rem", width: "5rem"
                                }}
                                onClick={(e) => this.handleGuess(e)}
                            >
                                {letter}
                            </button>
                        ))}
                </div>
            </div>


        )


    }

}
export default HangMan;