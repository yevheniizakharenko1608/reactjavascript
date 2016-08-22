import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Slider from '../Slider'
import Persons from '../Persons'
import Carousel from '../carousel'
var sizeof = require('object-sizeof');
import './style.scss'
import  './img/roobinHood.png'


export default class Home extends Component {
    constructor(){
        super();
        this.state = {
            meaning: '0',
            angle: 0,
            turn: <div className='img'></div>
        };
        this.update = this.update.bind(this);
        this.submit = this.submit.bind(this);
    }
    submit(){
        this.setState({
            angle: this.state.angle + 90
        })
    }
    update(){
        this.setState({
            meaning: ReactDOM.findDOMNode(this.refs.meaning.refs.inp).value
        })
    }

    render() {
        let arr = [];
        let div;
        arr[0] = 'im'; arr[1] = 'g/'; arr[2] = 'ro'; arr[3] = 'ob'; arr[4] = 'in'; arr[5] = 'Ho'; arr[6] = 'od'; arr [7] = '.p'; arr[8] = 'ng';
        if(arr.map((item) => sizeof(item) == 4)) {
            if(this.state.turn)
                div = <div className='turn img'></div>;
                else
            div = <div className='img'></div>;
        }
        return (
            <div>  
                <div>
                    <Carousel />
                    </div>
            <div className='row'>
                <div className='col-lg-1 col-md-1 col-sm-1 col-xs-1'></div>
                <Slider className='col-lg-10 col-md-10 col-sm-10 col-xs-10'
                        ref='meaning'
                min={0}
                max={100} 
                step={1}
                val={this.state.meaning}
                label='How old are you?'
                update={this.update}/>
                <div className='col-lg-1 col-md-1 col-sm-1 col-xs-1'></div>
            </div>
                <div>
                    <Persons/>
                </div>
                <div className='img' style={{transform: 'rotate('+ this.state.angle + 'deg)'}}></div>
                <button onClick={this.submit}>Turn image</button>
            </div>
        )
    }
}