import './HangMan.css';
import step01 from './images/0.jpg'
import step02 from './images/1.jpg'
import step03 from './images/2.jpg'
import step04 from './images/3.jpg'
import step05 from './images/4.jpg'
import step06 from './images/5.jpg'
import step07 from './images/6.jpg'

import React, { Component } from 'react'
class HangMan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosen_words: "",
            img: "", count: 0
        }

    }
    handleClick = () => {
        var _count = this.state.count + 1
        this.setState({
            count: _count
        },()=>{
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

    render() {
        return (
            <div className="Hangman">
                <div className="d-flex align-items-center justify-content-center">

                    <button onClick={this.handleClick}>Click this</button>
                </div>

                <div className="d-flex align-items-center justify-content-center">
                    <img src={this.state.img} />
                </div>
            </div>



        )


    }

}
export default HangMan;